export type Language = 'en' | 'fr' | 'zh';

export type HskLevelId = 'hsk1' | 'hsk2' | 'hsk3' | 'hsk4' | 'hsk5' | 'hsk6';

export type SkillType = 'vocabulary' | 'grammar' | 'listening' | 'reading' | 'characters' | 'writing';

export interface MultiLingualText {
  en: string;
  fr: string;
  zh: string;
}

export type SRSGrade = 'again' | 'hard' | 'good' | 'easy';

export interface WordSRSData {
  repetitions: number;
  intervalDays: number;
  easeFactor: number;
  lastReviewedAt: string | null;
  nextReviewAt: string;
  consecutiveCorrect: number;
  totalReviews: number;
  lastGrade?: SRSGrade;
  stabilityScore?: number;
}

export interface VocabularyWord {
  id: string;
  level: 'hsk1' | 'hsk2' | 'hsk3';
  hanzi: string;
  pinyin: string;
  meaning: MultiLingualText;
  partOfSpeech: string;
  exampleSentence?: {
    hanzi: string;
    pinyin: string;
    translation: MultiLingualText;
  };
  examples?: Array<{
    hanzi: string;
    pinyin: string;
    translation: MultiLingualText;
  }>;
  relatedWords?: Array<{
    hanzi: string;
    pinyin: string;
    meaning: MultiLingualText;
  }>;
  radical?: string;
  strokeCount?: number;
  tags?: string[];
  isLearned?: boolean;
  isFavorite?: boolean;
  srs?: WordSRSData;
}

export interface QuizQuestion {
  id: string;
  level: 'hsk1' | 'hsk2' | 'hsk3';
  skill: SkillType;
  prompt?: MultiLingualText;
  questionText?: string;
  question?: string;
  hanzi?: string;
  pinyin?: string;
  audioText?: string;
  passage?: string;
  passagePinyin?: string;
  options: Array<{
    id: string;
    text: string;
    pinyin?: string;
    hanzi?: string;
  }>;
  correctAnswerId: string;
  explanation: MultiLingualText;
  points: number;
}

export type MockQuestionType = 
  | 'multiple_choice'
  | 'listening_mc'
  | 'reading_passage'
  | 'fill_in_blank'
  | 'sentence_order'
  | 'writing_prompt';

export interface MockTestQuestion {
  id: string;
  section?: 'listening' | 'reading' | 'writing';
  sectionId?: string;
  number: number;
  type?: MockQuestionType;
  questionText: string;
  prompt?: MultiLingualText;
  pinyin?: string;
  audioText?: string;
  audioRepeat?: number;
  passage?: string;
  passagePinyin?: string;
  options: Array<{
    id: string;
    label?: string;
    text: string;
    pinyin?: string;
    hanzi?: string;
  }>;
  correctAnswerId?: string;
  correctAnswer?: string;
  explanation: MultiLingualText;
  points: number;
  skill?: SkillType;
}


export type TestQuestion = MockTestQuestion;

export interface TestSection {
  id: string;
  testId?: string;
  name?: string;
  type: 'listening' | 'reading' | 'writing';
  title: string;
  instructions: MultiLingualText;
  questions?: MockTestQuestion[];
  questionsCount?: number;
  durationMinutes: number;
  maxScore?: number;
}

export interface MockTest {
  id: string;
  level?: 'hsk1' | 'hsk2' | 'hsk3';
  hskLevel?: 'hsk1' | 'hsk2' | 'hsk3';
  code: string;
  title: string;
  description: MultiLingualText;
  durationMinutes: number;
  totalQuestions: number;
  questionsCount?: number;
  totalScore?: number;
  passingScore: number;
  maxScore: number;
  questions?: MockTestQuestion[];
  sections: TestSection[];
  isDemoContent?: boolean;
  isFree?: boolean;
  isPro?: boolean;
  attemptsCount?: number;
  bestScore?: number;
}

export interface LessonDialogueLine {
  speaker: string;
  hanzi: string;
  pinyin: string;
  meaning: MultiLingualText;
  audioText: string;
}

export interface HskLesson {
  id: string;
  level: 'hsk1' | 'hsk2' | 'hsk3';
  lessonNumber: number;
  title: MultiLingualText;
  subtitle: MultiLingualText;
  description: MultiLingualText;
  isFree: boolean;
  estimatedMinutes: number;
  /** Words of the official HSK 3.0 list taught in the lesson (bonus words not counted). */
  wordCount: number;
  vocabulary: Array<{
    hanzi: string;
    pinyin: string;
    meaning: MultiLingualText;
  }>;
  grammarPoints: Array<{
    title: MultiLingualText;
    structure: string;
    explanation: MultiLingualText;
    example: {
      hanzi: string;
      pinyin: string;
      translation: MultiLingualText;
    };
  }>;
  dialogue: LessonDialogueLine[];
  quickQuiz: QuizQuestion[];
  /** Course sections modelled on classic beginner textbooks (optional). */
  pronunciation?: HskLessonExtras['pronunciation'];
  characters?: HskLessonExtras['characters'];
  culture?: HskLessonExtras['culture'];
  practice?: HskLessonExtras['practice'];
  saying?: HskLessonExtras['saying'];
}

export interface HskLessonExtras {
  pronunciation?: { title: MultiLingualText; explanation: MultiLingualText; examples: Array<{ hanzi: string; pinyin: string }> };
  characters: {
    title: MultiLingualText;
    explanation: MultiLingualText;
    components: Array<{ component: string; meaning: { en: string; fr: string }; examples: string[] }>;
  };
  culture?: { title: MultiLingualText; body: MultiLingualText };
  /** Speaking task done with Laoshi; `starter` is a first message the learner can send. */
  practice: { task: MultiLingualText; starter: string };
  /** A common saying (俗语) linked to the lesson theme. */
  saying?: { hanzi: string; pinyin: string; meaning: MultiLingualText };
}


export interface TestAnswerRecord {
  questionId: string;
  selectedOption: string;
  isCorrect: boolean;
  timeSpentSeconds?: number;
}

export interface TestResult {
  id: string;
  testId: string;
  testTitle: string;
  level: 'hsk1' | 'hsk2' | 'hsk3';
  hskLevel?: 'hsk1' | 'hsk2' | 'hsk3';
  totalQuestions?: number;
  correctCount?: number;
  score: number;
  totalScore: number;
  maxScore?: number;
  passingScore: number;
  isPassed: boolean;
  passed?: boolean;
  date: string;
  completedAt?: string;
  timeSpentSeconds: number;
  sectionScores: Array<{
    section: 'listening' | 'reading' | 'writing';
    score: number;
    maxScore: number;
  }>;
  userAnswers: Record<string, string>;
  answers?: Record<string, TestAnswerRecord>;
  incorrectQuestionIds?: string[];
  strongestSkill?: SkillType;
  weakestSkill?: SkillType;
}

export interface UserProfile {
  name: string;
  email: string;
  currentHsk: 'hsk1' | 'hsk2' | 'hsk3';
  dailyGoalMinutes: number;
  interfaceLanguage: Language;
  theme: 'light' | 'dark' | 'system';
  studyGoal: string;
  isProUser?: boolean;
  notifications: {
    studyReminders: boolean;
    testReminders: boolean;
  };
}

export interface DailyVocabItem {
  hanzi: string;
  pinyin: string;
  meaning: MultiLingualText;
  partOfSpeech?: string;
}

export interface DailyChineseItem {
  id: string;
  date: string;
  level: 'hsk1' | 'hsk2' | 'hsk3';
  category: 'culture' | 'news' | 'lifestyle' | 'tradition' | 'trivia';
  title: {
    hanzi: string;
    pinyin: string;
    translation: MultiLingualText;
  };
  content: {
    hanzi: string;
    pinyin: string;
    translation: MultiLingualText;
  };
  vocabulary: DailyVocabItem[];
  culturalInsight: MultiLingualText;
  sourceQuery?: string;
  sourceUrl?: string;
  sourceTitle?: string;
}

export interface AppState {
  currentView: 
    | 'landing' 
    | 'login' 
    | 'signup' 
    | 'dashboard' 
    | 'hsk-levels' 
    | 'hsk-detail' 
    | 'learn' 
    | 'vocabulary' 
    | 'phrases'
    | 'hsk3-exam'
    | 'practice-hub' 
    | 'tutor' 
    | 'quiz' 
    | 'listening-practice' 
    | 'reading-practice' 
    | 'writing-practice' 
    | 'mock-tests' 
    | 'mock-test-intro' 
    | 'mock-test-exam' 
    | 'test-results' 
    | 'review-mistakes' 
    | 'progress' 
    | 'profile'
    | 'admin';
  selectedLevel: 'hsk1' | 'hsk2' | 'hsk3';
  selectedWordId: string | null;
  selectedPracticeSkill: SkillType | 'mixed';
  activeMockTestId: string | null;
  latestTestResult: TestResult | null;
  learnedWordIds: string[];
  favoriteWordIds: string[];
  completedQuizzesCount: number;
  studyStreakDays: number;
  weeklyStudyMinutes: number;
  testHistory: TestResult[];
}

