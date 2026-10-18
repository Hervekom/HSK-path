import type { VocabularyWord, WordSRSData, SRSGrade } from '../types';

export const SRS_STORAGE_KEY = 'hsk_path_srs_vocabulary_v1';

// Default initial SM-2 ease factor
export const DEFAULT_EASE_FACTOR = 2.5;

/**
 * Creates default SRS state for a new or unreviewed word
 */
export function createInitialSRSData(isDueNow: boolean = true, daysAgo: number = 0): WordSRSData {
  const now = new Date();
  const lastReviewed = daysAgo > 0 ? new Date(now.getTime() - daysAgo * 86400000).toISOString() : null;
  const nextReview = isDueNow
    ? new Date(now.getTime() - 3600000).toISOString() // 1 hour in the past = immediately due
    : new Date(now.getTime() + 86400000).toISOString(); // due tomorrow

  return {
    repetitions: 0,
    intervalDays: 1,
    easeFactor: DEFAULT_EASE_FACTOR,
    lastReviewedAt: lastReviewed,
    nextReviewAt: nextReview,
    consecutiveCorrect: 0,
    totalReviews: 0,
    stabilityScore: 20,
  };
}

/**
 * SuperMemo SM-2 & Leitner hybrid algorithm for vocabulary spaced repetition
 */
export function calculateNextSRSState(
  current: WordSRSData | undefined,
  grade: SRSGrade,
  now: Date = new Date()
): WordSRSData {
  const existing = current || createInitialSRSData(true);
  let { repetitions, intervalDays, easeFactor, consecutiveCorrect, totalReviews } = existing;

  totalReviews += 1;

  switch (grade) {
    case 'again': {
      // Failed / Forgot: Reset streak, schedule for immediate re-learning
      repetitions = 0;
      intervalDays = 1;
      consecutiveCorrect = 0;
      easeFactor = Math.max(1.3, easeFactor - 0.2);
      break;
    }
    case 'hard': {
      // Recalled with significant difficulty: Small interval progression, decrease ease factor
      repetitions = Math.max(1, repetitions);
      intervalDays = Math.max(1, Math.round(intervalDays * 1.2));
      consecutiveCorrect += 1;
      easeFactor = Math.max(1.3, easeFactor - 0.15);
      break;
    }
    case 'good': {
      // Standard successful recall: SM-2 interval progression
      if (repetitions === 0) {
        intervalDays = 1;
      } else if (repetitions === 1) {
        intervalDays = 3;
      } else {
        intervalDays = Math.max(1, Math.round(intervalDays * easeFactor));
      }
      repetitions += 1;
      consecutiveCorrect += 1;
      break;
    }
    case 'easy': {
      // Instant effortless recall: Generous interval leap, boost ease factor
      if (repetitions === 0) {
        intervalDays = 3;
      } else if (repetitions === 1) {
        intervalDays = 6;
      } else {
        intervalDays = Math.max(2, Math.round(intervalDays * easeFactor * 1.35));
      }
      repetitions += 1;
      consecutiveCorrect += 1;
      easeFactor = Math.min(3.0, easeFactor + 0.15);
      break;
    }
  }

  // Calculate Memory Stability / Retention Score (0 - 100%)
  let stabilityScore = 20;
  if (repetitions === 1) stabilityScore = 45;
  else if (repetitions === 2) stabilityScore = 68;
  else if (repetitions === 3) stabilityScore = 84;
  else if (repetitions >= 4) stabilityScore = Math.min(100, 90 + repetitions * 2);

  if (grade === 'again') stabilityScore = 15;

  const nextReviewDate = new Date(now.getTime() + intervalDays * 86400000);

  return {
    repetitions,
    intervalDays,
    easeFactor: Math.round(easeFactor * 100) / 100,
    lastReviewedAt: now.toISOString(),
    nextReviewAt: nextReviewDate.toISOString(),
    consecutiveCorrect,
    totalReviews,
    lastGrade: grade,
    stabilityScore,
  };
}

/**
 * Checks if a word is due for review today
 */
export function isWordDueForReview(
  word: VocabularyWord,
  srsData?: WordSRSData,
  now: Date = new Date()
): boolean {
  // If explicitly marked as learned or enrolled in SRS
  if (srsData) {
    return new Date(srsData.nextReviewAt).getTime() <= now.getTime();
  }
  // If marked as learned by user but not yet in SRS map, it's due for initial calibration
  return Boolean(word.isLearned);
}

/**
 * Priority scoring function for ranking review queue:
 * Higher score = higher urgency to review first
 */
export function getWordPriorityScore(
  word: VocabularyWord,
  srsData?: WordSRSData,
  now: Date = new Date()
): number {
  if (!srsData) {
    // Un-reviewed learned word: highest urgency to establish initial memory trace
    return word.isFavorite ? 120 : 100;
  }

  const nextTime = new Date(srsData.nextReviewAt).getTime();
  const nowTime = now.getTime();
  const overdueMs = nowTime - nextTime;
  const overdueDays = overdueMs / 86400000;

  // Overdue ratio (how many times past its designated interval)
  const overdueRatio = overdueDays / Math.max(1, srsData.intervalDays);

  let priority = overdueRatio * 50;

  // Words user struggled with (low repetitions or low ease) are prioritized
  if (srsData.repetitions === 0) priority += 40;
  else if (srsData.repetitions === 1) priority += 25;
  else if (srsData.repetitions === 2) priority += 10;

  if (srsData.easeFactor < 2.0) priority += 20;

  if (srsData.lastGrade === 'again') priority += 35;
  if (srsData.lastGrade === 'hard') priority += 15;

  if (word.isFavorite) priority += 10;

  return Math.round(priority);
}

/**
 * Categorize a word's current SRS mastery stage
 */
export function getSRSStage(
  srsData?: WordSRSData
): 'due' | 'learning' | 'review' | 'mastered' | 'new' {
  if (!srsData || srsData.totalReviews === 0) return 'new';
  const now = new Date();
  if (new Date(srsData.nextReviewAt).getTime() <= now.getTime()) return 'due';
  if (srsData.repetitions >= 4 && srsData.intervalDays >= 14) return 'mastered';
  if (srsData.repetitions >= 2) return 'review';
  return 'learning';
}

/**
 * Get human-readable interval estimation for grading buttons
 */
export function getNextIntervalText(
  current: WordSRSData | undefined,
  grade: SRSGrade
): string {
  const simulated = calculateNextSRSState(current, grade);
  if (simulated.intervalDays === 1) return '1 day';
  if (simulated.intervalDays < 7) return `${simulated.intervalDays} days`;
  if (simulated.intervalDays < 30) return `${Math.round(simulated.intervalDays / 7)} wk`;
  return `${Math.round(simulated.intervalDays / 30)} mo`;
}

/**
 * Generates initial demo SRS records so user immediately sees a realistic review schedule
 */
export function generateInitialSRSSeed(words: VocabularyWord[]): Record<string, WordSRSData> {
  const seed: Record<string, WordSRSData> = {};
  const now = new Date();

  words.forEach((w, index) => {
    // Distribute words across various stages for authentic experience
    if (index % 5 === 0 || w.id === 'v-hsk1-01' || w.id === 'v-hsk1-03' || w.id === 'v-hsk2-02') {
      // Due today (Overdue by 1-2 days or due right now)
      seed[w.id] = {
        repetitions: 1,
        intervalDays: 2,
        easeFactor: 2.35,
        lastReviewedAt: new Date(now.getTime() - 2.5 * 86400000).toISOString(),
        nextReviewAt: new Date(now.getTime() - 0.5 * 86400000).toISOString(),
        consecutiveCorrect: 1,
        totalReviews: 2,
        lastGrade: 'hard',
        stabilityScore: 48,
      };
    } else if (index % 5 === 1 || w.id === 'v-hsk1-02') {
      // Learning stage (Due tomorrow)
      seed[w.id] = {
        repetitions: 2,
        intervalDays: 4,
        easeFactor: 2.5,
        lastReviewedAt: new Date(now.getTime() - 1 * 86400000).toISOString(),
        nextReviewAt: new Date(now.getTime() + 3 * 86400000).toISOString(),
        consecutiveCorrect: 2,
        totalReviews: 3,
        lastGrade: 'good',
        stabilityScore: 72,
      };
    } else if (index % 5 === 2 || w.id === 'v-hsk1-04') {
      // Mastered stage (Due in 14+ days)
      seed[w.id] = {
        repetitions: 5,
        intervalDays: 21,
        easeFactor: 2.7,
        lastReviewedAt: new Date(now.getTime() - 3 * 86400000).toISOString(),
        nextReviewAt: new Date(now.getTime() + 18 * 86400000).toISOString(),
        consecutiveCorrect: 5,
        totalReviews: 6,
        lastGrade: 'easy',
        stabilityScore: 96,
      };
    }
  });

  return seed;
}

/**
 * Loads SRS state from localStorage or initializes with seed
 */
export function loadSRSState(words: VocabularyWord[]): Record<string, WordSRSData> {
  try {
    const saved = localStorage.getItem(SRS_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && typeof parsed === 'object' && Object.keys(parsed).length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.warn('Failed to parse saved SRS state from localStorage:', err);
  }

  // Real learners start with an empty review queue; the demo gets a few sample review states.
  let isDemo = false;
  try {
    isDemo = sessionStorage.getItem('hsk_demo') === '1';
  } catch {
    isDemo = false;
  }
  const initialSeed = isDemo ? generateInitialSRSSeed(words.filter((w) => w.id.startsWith('v-'))) : {};
  try {
    localStorage.setItem(SRS_STORAGE_KEY, JSON.stringify(initialSeed));
  } catch (e) {
    // ignore
  }
  return initialSeed;
}

/**
 * Saves SRS state to localStorage
 */
export function saveSRSState(srsMap: Record<string, WordSRSData>): void {
  try {
    localStorage.setItem(SRS_STORAGE_KEY, JSON.stringify(srsMap));
    window.dispatchEvent(new Event('hsk-srs-changed'));
  } catch (err) {
    console.warn('Failed to save SRS state to localStorage:', err);
  }
}
