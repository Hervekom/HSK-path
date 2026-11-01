import { doneLessons } from './engine';
// Badges ("prix"): unlocked by streaks, progress and activities. Titles are English keys
// translated by tr() (see locales/gameStrings.ts).
import type { GameState } from './engine';

export interface BadgeContext {
  words: number; // words marked as learned
  phrases: number; // everyday phrases known
  friends: number;
}

export type BadgeTier = 'bronze' | 'silver' | 'gold';

export interface BadgeDef {
  id: string;
  icon: string; // Phosphor icon name (see BadgeIcon)
  tier: BadgeTier;
  title: string;
  desc: string;
  /** Current value and target, for the progress bar of a locked badge. */
  progress: (g: GameState, c: BadgeContext) => [number, number];
}

const stat = (k: string) => (g: GameState) => g.stats[k] || 0;
const lessonsDone = (g: GameState) => doneLessons(g).size;
const streakBest = (g: GameState) => Math.max(g.streak.best, g.streak.count);

const B = (id: string, icon: string, tier: BadgeTier, title: string, desc: string, value: (g: GameState, c: BadgeContext) => number, target: number): BadgeDef => ({
  id,
  icon,
  tier,
  title,
  desc,
  progress: (g, c) => [Math.min(target, value(g, c)), target],
});

export const BADGES: BadgeDef[] = [
  // series
  B('streak-3', 'Flame', 'bronze', 'On fire', 'Reach your daily goal 3 days in a row.', streakBest, 3),
  B('streak-7', 'Flame', 'silver', 'One full week', 'Reach your daily goal 7 days in a row.', streakBest, 7),
  B('streak-14', 'Flame', 'silver', 'Two weeks strong', 'Reach your daily goal 14 days in a row.', streakBest, 14),
  B('streak-30', 'Flame', 'gold', 'One month', 'Reach your daily goal 30 days in a row.', streakBest, 30),
  B('streak-100', 'Crown', 'gold', 'Unstoppable', 'Reach your daily goal 100 days in a row.', streakBest, 100),
  // vocabulary
  B('words-50', 'BookOpen', 'bronze', 'First 50 words', 'Learn 50 words.', (_, c) => c.words, 50),
  B('words-300', 'BookOpen', 'silver', 'HSK 1 vocabulary', 'Learn 300 words: the whole HSK 1 list.', (_, c) => c.words, 300),
  B('words-500', 'BookOpen', 'silver', 'HSK 2 vocabulary', 'Learn 500 words: the whole HSK 2 list.', (_, c) => c.words, 500),
  B('words-1000', 'GraduationCap', 'gold', 'HSK 3 vocabulary', 'Learn 1,000 words: the whole HSK 3 list.', (_, c) => c.words, 1000),
  B('srs-100', 'Brain', 'silver', 'Memory keeper', 'Review 100 flashcards.', stat('srs'), 100),
  // phrases & speaking
  B('phrases-20', 'ChatsCircle', 'bronze', 'Small talk', 'Know 20 everyday phrases.', (_, c) => c.phrases, 20),
  B('phrases-all', 'ChatsCircle', 'gold', 'Everyday speaker', 'Know all 168 everyday phrases.', (_, c) => c.phrases, 168),
  B('pron-1', 'Microphone', 'bronze', 'First words out loud', 'Record your voice for the first time.', stat('pron'), 1),
  B('pron-100', 'Microphone', 'silver', 'Clear voice', 'Record and check 100 words or sentences.', stat('pron'), 100),
  B('pron-great-10', 'Waveform', 'gold', 'Perfect tones', 'Score 90% or more 10 times.', stat('pronGreat'), 10),
  B('speaking-full', 'Medal', 'silver', 'Speaking test done', 'Finish the whole HSK 3 speaking test.', stat('speakingFull'), 1),
  B('laoshi-20', 'ChatCircleText', 'bronze', 'Talking with Laoshi', 'Send 20 messages to Laoshi.', stat('laoshi'), 20),
  // courses & exams
  B('lesson-1', 'Student', 'bronze', 'First lesson', 'Finish a lesson.', lessonsDone, 1),
  B('lesson-10', 'Student', 'silver', 'Dedicated student', 'Finish 10 lessons.', lessonsDone, 10),
  B('quiz-10', 'Lightning', 'silver', 'Quiz master', 'Finish 10 drills.', (g) => (g.stats.quiz || 0) + (g.stats.practice || 0), 10),
  B('exam-1', 'Exam', 'bronze', 'First mock exam', 'Finish a mock exam.', (g) => (g.stats.exam || 0) + (g.stats.hsk3 || 0), 1),
  B('hsk3-pass', 'Trophy', 'gold', 'HSK 3 ready', 'Pass a full HSK 3 exam (180 / 300 or more).', stat('hsk3Pass'), 1),
  // XP
  B('xp-1000', 'Star', 'silver', '1,000 XP', 'Earn 1,000 XP.', (g) => g.total, 1000),
  B('xp-5000', 'Star', 'gold', '5,000 XP', 'Earn 5,000 XP.', (g) => g.total, 5000),
  // friends
  B('friend-1', 'UsersThree', 'bronze', 'Study buddy', 'Add your first friend.', (_, c) => c.friends, 1),
  B('cheer-10', 'HandsClapping', 'silver', 'Team spirit', 'Encourage your friends 10 times.', stat('cheer'), 10),
  B('challenge-win', 'Sword', 'gold', 'Challenge winner', 'Win a challenge against a friend.', stat('challengeWon'), 1),
];

/** Badges newly reached (not yet in g.badges). */
export function newBadges(g: GameState, c: BadgeContext): BadgeDef[] {
  return BADGES.filter((b) => !g.badges[b.id] && (([v, t]) => v >= t)(b.progress(g, c)));
}
