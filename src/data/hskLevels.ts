import type { HskLevelId, MultiLingualText } from '../types';
import { NEW_WORDS, TOTAL_WORDS, FUTURE_TOTAL_WORDS } from './hskWordCounts';

export interface HskLevelMeta {
  id: 'hsk1' | 'hsk2' | 'hsk3';
  levelNumber: number;
  name: string;
  badge: MultiLingualText;
  description: MultiLingualText;
  longDescription: MultiLingualText;
  /** Words required for this level (cumulative, official HSK 3.0 list). */
  wordCount: number;
  /** Words introduced at this level. */
  newWordCount: number;
  estimatedHours: number;
  passingScore: number;
  totalScore: number;
  color: {
    primary: string;
    bg: string;
    border: string;
    badgeBg: string;
    text: string;
  };
  modules: Array<{
    id: string;
    titleKey: string;
    activityCount: number;
    estimatedMinutes: number;
    icon: string;
  }>;
}

export const HSK_LEVELS: HskLevelMeta[] = [
  {
    id: 'hsk1',
    levelNumber: 1,
    name: 'HSK 1',
    badge: {
      en: 'Beginner',
      fr: 'Débutant',
      zh: '初级入门',
    },
    description: {
      en: 'Understand and use very simple Chinese phrases, meeting basic communication needs.',
      fr: 'Comprendre et utiliser des expressions simples répondant aux besoins de base.',
      zh: '理解并使用最简单的汉语词语和句子，满足基本的交际需求。',
    },
    longDescription: {
      en: 'Build your foundation in Chinese: pinyin, everyday phrases, introductions, numbers and time, with the 300 words of the official HSK 3.0 syllabus for level 1.',
      fr: 'Posez les bases du chinois : pinyin, expressions du quotidien, présentations, nombres et heure, avec les 300 mots du programme officiel HSK 3.0 pour le niveau 1.',
      zh: '夯实中文基础：拼音、日常用语、自我介绍、数字与时间，掌握 HSK 3.0 新大纲一级的 300 个词。',
    },
    wordCount: TOTAL_WORDS.hsk1,
    newWordCount: NEW_WORDS.hsk1,
    estimatedHours: 40,
    passingScore: 120,
    totalScore: 200,
    color: {
      primary: 'emerald-600',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      badgeBg: 'bg-emerald-100 text-emerald-800',
      text: 'text-emerald-700',
    },
    modules: [
      { id: 'vocab', titleKey: 'hskDetail.vocabModule', activityCount: 15, estimatedMinutes: 90, icon: 'BookOpen' },
      { id: 'grammar', titleKey: 'hskDetail.grammarModule', activityCount: 12, estimatedMinutes: 60, icon: 'Layers' },
      { id: 'listening', titleKey: 'hskDetail.listeningModule', activityCount: 18, estimatedMinutes: 75, icon: 'Headphones' },
      { id: 'reading', titleKey: 'hskDetail.readingModule', activityCount: 14, estimatedMinutes: 60, icon: 'FileText' },
      { id: 'characters', titleKey: 'hskDetail.charactersModule', activityCount: 10, estimatedMinutes: 45, icon: 'PenTool' },
      { id: 'mock', titleKey: 'hskDetail.testsModule', activityCount: 3, estimatedMinutes: 120, icon: 'Award' },
    ],
  },
  {
    id: 'hsk2',
    levelNumber: 2,
    name: 'HSK 2',
    badge: {
      en: 'Elementary',
      fr: 'Élémentaire',
      zh: '基础进阶',
    },
    description: {
      en: 'Conduct simple and direct exchanges on familiar daily topics in Chinese.',
      fr: 'Mener des échanges simples et directs sur des sujets familiers du quotidien.',
      zh: '用汉语就熟悉的日常话题进行简单直接的交流。',
    },
    longDescription: {
      en: 'Expand everyday communication: feelings, directions, plans and shopping. 200 new words, 500 in total (official HSK 3.0 syllabus).',
      fr: 'Enrichissez votre communication quotidienne : émotions, directions, projets, achats. 200 nouveaux mots, 500 au total (programme officiel HSK 3.0).',
      zh: '拓展日常交际：表达情感、问路、计划、购物。新增 200 词，累计 500 词（HSK 3.0 新大纲）。',
    },
    wordCount: TOTAL_WORDS.hsk2,
    newWordCount: NEW_WORDS.hsk2,
    estimatedHours: 60,
    passingScore: 120,
    totalScore: 200,
    color: {
      primary: 'blue-600',
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      badgeBg: 'bg-blue-100 text-blue-800',
      text: 'text-blue-700',
    },
    modules: [
      { id: 'vocab', titleKey: 'hskDetail.vocabModule', activityCount: 22, estimatedMinutes: 130, icon: 'BookOpen' },
      { id: 'grammar', titleKey: 'hskDetail.grammarModule', activityCount: 18, estimatedMinutes: 90, icon: 'Layers' },
      { id: 'listening', titleKey: 'hskDetail.listeningModule', activityCount: 24, estimatedMinutes: 100, icon: 'Headphones' },
      { id: 'reading', titleKey: 'hskDetail.readingModule', activityCount: 20, estimatedMinutes: 85, icon: 'FileText' },
      { id: 'characters', titleKey: 'hskDetail.charactersModule', activityCount: 14, estimatedMinutes: 60, icon: 'PenTool' },
      { id: 'mock', titleKey: 'hskDetail.testsModule', activityCount: 3, estimatedMinutes: 140, icon: 'Award' },
    ],
  },
  {
    id: 'hsk3',
    levelNumber: 3,
    name: 'HSK 3',
    badge: {
      en: 'Intermediate',
      fr: 'Intermédiaire',
      zh: '中级提高',
    },
    description: {
      en: 'Communicate in Chinese for daily life, studies, and work, and handle most travel tasks in China.',
      fr: 'Communiquer en chinois dans la vie quotidienne, les études et le travail en Chine.',
      zh: '用汉语完成生活、学习、工作等方面的基本交际任务，在中国旅游时能应对绝大部分交际。',
    },
    longDescription: {
      en: 'Master longer sentences, short texts and reading fluency. 500 new words, 1,000 in total (official HSK 3.0 syllabus). HSK 3.0 now includes a speaking test.',
      fr: 'Maîtrisez les phrases complexes, les textes courts et la lecture fluide. 500 nouveaux mots, 1 000 au total (programme officiel HSK 3.0). Le HSK 3.0 comprend désormais une épreuve orale.',
      zh: '掌握复句表达，提升短文阅读与书写能力。新增 500 词，累计 1000 词（HSK 3.0 新大纲）。HSK 3.0 三级起含口语考试。',
    },
    wordCount: TOTAL_WORDS.hsk3,
    newWordCount: NEW_WORDS.hsk3,
    estimatedHours: 90,
    passingScore: 180,
    totalScore: 300,
    color: {
      primary: 'amber-600',
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      badgeBg: 'bg-amber-100 text-amber-800',
      text: 'text-amber-700',
    },
    modules: [
      { id: 'vocab', titleKey: 'hskDetail.vocabModule', activityCount: 35, estimatedMinutes: 200, icon: 'BookOpen' },
      { id: 'grammar', titleKey: 'hskDetail.grammarModule', activityCount: 28, estimatedMinutes: 140, icon: 'Layers' },
      { id: 'listening', titleKey: 'hskDetail.listeningModule', activityCount: 32, estimatedMinutes: 130, icon: 'Headphones' },
      { id: 'reading', titleKey: 'hskDetail.readingModule', activityCount: 30, estimatedMinutes: 120, icon: 'FileText' },
      { id: 'characters', titleKey: 'hskDetail.charactersModule', activityCount: 20, estimatedMinutes: 80, icon: 'PenTool' },
      { id: 'mock', titleKey: 'hskDetail.testsModule', activityCount: 4, estimatedMinutes: 180, icon: 'Award' },
    ],
  },
];

export const FUTURE_HSK_LEVELS = [
  { level: 'HSK 4', words: FUTURE_TOTAL_WORDS.hsk4, status: 'Planned' },
  { level: 'HSK 5', words: FUTURE_TOTAL_WORDS.hsk5, status: 'Planned' },
  { level: 'HSK 6', words: FUTURE_TOTAL_WORDS.hsk6, status: 'Planned' },
];
