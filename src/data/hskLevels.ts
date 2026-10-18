import type { HskLevelId, MultiLingualText } from '../types';

export interface HskLevelMeta {
  id: 'hsk1' | 'hsk2' | 'hsk3';
  levelNumber: number;
  name: string;
  badge: MultiLingualText;
  description: MultiLingualText;
  longDescription: MultiLingualText;
  wordCount: number;
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
      en: 'Build your foundation in Chinese. Master pinyin, high-frequency daily phrases, self-introductions, numbers, time, and 150 essential vocabulary words.',
      fr: 'Construisez vos bases solides en chinois. Maîtrisez le pinyin, les salutations quotidiennes et 150 mots fondamentaux.',
      zh: '夯实中文发音与基础词汇基石。掌握拼音、日常交际短语和 150 个核心大纲词汇。',
    },
    wordCount: 150,
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
      en: 'Expand everyday communication and grammar patterns. Express feelings, directions, plans, shopping scenarios, and master 300 core vocabulary words.',
      fr: 'Enrichissez votre communication quotidienne et vos structures grammaticales avec 300 mots clés.',
      zh: '拓展日常高频交际用语与核心语法结构。掌握情感表达、问路、购物等 300 个核心词汇。',
    },
    wordCount: 300,
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
      en: 'Master complex sentence structures, paragraphs, and reading fluency. Acquire 600 vocabulary words and prepare for full writing & mock tests.',
      fr: 'Maîtrisez les structures de phrases complexes, la lecture fluide et l’écriture de base avec 600 mots.',
      zh: '掌握复合句式表达，提升篇章阅读与书写流利度。掌握 600 个大纲核心词汇，为全真模考冲刺。',
    },
    wordCount: 600,
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
  { level: 'HSK 4', words: 1200, status: 'In Development' },
  { level: 'HSK 5', words: 2500, status: 'Planned' },
  { level: 'HSK 6', words: 5000, status: 'Planned' },
];
