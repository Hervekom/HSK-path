import type { TestResult, UserProfile, SkillType } from '../types';

export const INITIAL_USER_PROFILE: UserProfile = {
  name: 'Alex Chen',
  email: 'alex.chen@university.edu',
  currentHsk: 'hsk2',
  dailyGoalMinutes: 20,
  interfaceLanguage: 'en',
  theme: 'light',
  studyGoal: 'Pass HSK 3 certification this semester with 240+ score',
  notifications: {
    studyReminders: true,
    testReminders: true,
  },
};

export const INITIAL_LEARNED_WORD_IDS = [
  'v-hsk1-01',
  'v-hsk1-02',
  'v-hsk1-03',
  'v-hsk1-04',
  'v-hsk1-05',
  'v-hsk1-06',
  'v-hsk2-01',
  'v-hsk2-02',
];

export const INITIAL_FAVORITE_WORD_IDS = [
  'v-hsk1-01',
  'v-hsk2-03',
  'v-hsk3-02',
];

export interface DailyPerformance {
  day: string;
  accuracy: number;
  minutes: number;
  studyMinutes?: number;
  questionsCount: number;
}

export const WEEKLY_PERFORMANCE_HISTORY: DailyPerformance[] = [
  { day: 'Mon', accuracy: 72, minutes: 25, studyMinutes: 25, questionsCount: 30 },
  { day: 'Tue', accuracy: 80, minutes: 35, studyMinutes: 35, questionsCount: 45 },
  { day: 'Wed', accuracy: 68, minutes: 20, studyMinutes: 20, questionsCount: 25 },
  { day: 'Thu', accuracy: 85, minutes: 40, studyMinutes: 40, questionsCount: 50 },
  { day: 'Fri', accuracy: 78, minutes: 30, studyMinutes: 30, questionsCount: 40 },
  { day: 'Sat', accuracy: 90, minutes: 45, studyMinutes: 45, questionsCount: 60 },
  { day: 'Sun', accuracy: 84, minutes: 32, studyMinutes: 32, questionsCount: 40 },
];

export interface SkillStatItem {
  skill: SkillType;
  name: string;
  accuracy: number;
  score: number;
  totalQuestions: number;
  masteryLevel: string;
  color: string;
}

export const INITIAL_SKILL_STATS: SkillStatItem[] = [
  { skill: 'listening', name: 'Listening (听力)', accuracy: 82, score: 82, totalQuestions: 140, masteryLevel: 'Proficient', color: 'emerald' },
  { skill: 'reading', name: 'Reading (阅读)', accuracy: 76, score: 76, totalQuestions: 120, masteryLevel: 'Solid', color: 'blue' },
  { skill: 'vocabulary', name: 'Vocabulary (词汇)', accuracy: 88, score: 88, totalQuestions: 210, masteryLevel: 'Advanced', color: 'indigo' },
  { skill: 'grammar', name: 'Grammar (语法)', accuracy: 64, score: 64, totalQuestions: 95, masteryLevel: 'Review Needed', color: 'amber' },
  { skill: 'characters', name: 'Characters (汉字)', accuracy: 70, score: 70, totalQuestions: 85, masteryLevel: 'Developing', color: 'purple' },
  { skill: 'writing', name: 'Writing (书写)', accuracy: 58, score: 58, totalQuestions: 60, masteryLevel: 'Practice Focus', color: 'rose' },
];

export const SKILL_PROFICIENCY_STATS: Record<SkillType, { name: string; score: number; color: string }> = {
  listening: { name: 'Listening', score: 82, color: 'emerald' },
  reading: { name: 'Reading', score: 76, color: 'blue' },
  vocabulary: { name: 'Vocabulary', score: 88, color: 'indigo' },
  grammar: { name: 'Grammar', score: 64, color: 'amber' },
  characters: { name: 'Characters', score: 70, color: 'purple' },
  writing: { name: 'Writing', score: 58, color: 'rose' },
};


export const INITIAL_TEST_HISTORY: TestResult[] = [
  {
    id: 'res-seed-01',
    testId: 'test-hsk2-sample-01',
    testTitle: 'HSK 2 Standard Simulation Test A',
    level: 'hsk2',
    hskLevel: 'hsk2',
    totalQuestions: 10,
    correctCount: 8,
    score: 160,
    totalScore: 200,
    maxScore: 200,
    passingScore: 120,
    isPassed: true,
    passed: true,
    date: '2026-08-14 15:30',
    completedAt: '2026-08-14 15:30',
    timeSpentSeconds: 1420,
    sectionScores: [
      { section: 'listening', score: 80, maxScore: 100 },
      { section: 'reading', score: 80, maxScore: 100 },
    ],
    userAnswers: {
      'h2-q1': 'A',
      'h2-q2': 'B',
      'h2-q3': 'A',
      'h2-q4': 'A',
      'h2-q5': 'A',
      'h2-q6': 'A',
      'h2-q7': 'A',
      'h2-q8': 'C',
      'h2-q9': 'A',
      'h2-q10': 'A',
    },
    answers: {},
    incorrectQuestionIds: ['h2-q2', 'h2-q8'],
    strongestSkill: 'listening',
    weakestSkill: 'grammar',
  },
];

export const INITIAL_TEST_RESULTS = INITIAL_TEST_HISTORY;

