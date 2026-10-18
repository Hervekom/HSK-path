import React, { useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  Headphones,
  FileText,
  PenTool,
  Award,
  TrendingUp,
  CheckCircle2,
  Sparkles,
  Layers,
  Volume2,
  Clock,
  ChevronRight,
  ShieldCheck,
  Zap,
  Star,
  BrainCircuit,
  RotateCw,
  Target,
  GraduationCap,
} from 'lucide-react';
import { useI18n } from '../locales';
import { HSK_LEVELS, FUTURE_HSK_LEVELS } from '../data/hskLevels';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import type { AppState } from '../types';

interface LandingViewProps {
  onNavigate: (view: AppState['currentView']) => void;
  onSelectLevel: (levelId: 'hsk1' | 'hsk2' | 'hsk3') => void;
}

export const LandingView: React.FC<LandingViewProps> = ({ onNavigate, onSelectLevel }) => {
  const { t, getLocalized } = useI18n();
  const [selectedCurriculumTab, setSelectedCurriculumTab] = useState<'hsk1' | 'hsk2' | 'hsk3'>('hsk2');
  const [audioPlaying, setAudioPlaying] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const playSampleAudio = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'zh-CN';
      utterance.rate = 0.9;
      utterance.onstart = () => setAudioPlaying(true);
      utterance.onend = () => setAudioPlaying(false);
      utterance.onerror = () => setAudioPlaying(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const activeLevelData = HSK_LEVELS.find((l) => l.id === selectedCurriculumTab) || HSK_LEVELS[1];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 selection:bg-[#C52828] selection:text-white">
      {/* Public Navbar */}
      <Navbar onNavigate={onNavigate} onScrollToSection={scrollToSection} />

      {/* ==================== HERO SECTION: EDITORIAL CENTERPIECE ==================== */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden border-b border-[#E8E2D8]">
        {/* Subtle background ambient mesh */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] luxury-light-mesh -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Editorial Typography & Value Proposition */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Editorial Kicker */}
              <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white border border-[#E0D7CB] shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#C52828]" />
                <span className="text-[11px] font-bold text-stone-800 uppercase tracking-widest">
                  Academic Standard • 2026 Hanban Alignment
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-stone-950 leading-[1.08]">
                Master Mandarin with <span className="text-[#C52828] font-serif italic">Cognitive Precision</span> & Exam Rigor.
              </h1>

              {/* Editorial Subtitle */}
              <p className="text-base sm:text-lg lg:text-xl text-stone-600 font-normal leading-relaxed max-w-2xl">
                The premier pedagogical SaaS designed for serious learners. Accelerate HSK 1–3 fluency through spaced repetition algorithms, authentic Tianzige stroke drills, and full-fidelity mock examination simulations.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Button
                  variant="luxury"
                  size="lg"
                  onClick={() => onNavigate('signup')}
                  iconRight={<ArrowRight className="w-4 h-4" />}
                  className="shadow-md cursor-pointer"
                >
                  Begin Cognitive Path
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection('hsk-levels')}
                  className="bg-white/80 hover:bg-white text-stone-900 border-[#DED6C9] cursor-pointer"
                >
                  Explore Curriculum (1–3)
                </Button>
              </div>

              {/* Trust & Academic Accreditations */}
              <div className="pt-6 border-t border-[#E8E2D8] grid grid-cols-3 gap-4 text-left">
                <div>
                  <div className="text-2xl font-black text-stone-950 tracking-tight">1,050+</div>
                  <div className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider mt-0.5">
                    Verified Words
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-black text-stone-950 tracking-tight">100%</div>
                  <div className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider mt-0.5">
                    Hanban Standard
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-black text-stone-950 tracking-tight">4.9 / 5.0</div>
                  <div className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider mt-0.5">
                    Passing Metric
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Live Interactive Application Sandbox Preview */}
            <div className="lg:col-span-5 relative">
              {/* Decorative luxury backdrop border */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#C52828]/15 via-amber-500/10 to-transparent rounded-3xl blur-xl -z-10" />

              <div className="p-5 sm:p-6 rounded-3xl bg-white border border-[#E2D8CB] shadow-xl space-y-5">
                {/* Header bar of interactive mockup */}
                <div className="flex items-center justify-between pb-3 border-b border-[#EDE6DC]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-[11px] font-mono text-stone-400 ml-2">HSK-Path-Engine v2.4</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-[#FAF5EB] border border-[#E6D4B0] text-[#8C6405] text-[10px] font-bold uppercase tracking-wider">
                    SRS Active
                  </span>
                </div>

                {/* Character Interactive Canvas Card */}
                <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E5DDCF] text-center relative overflow-hidden">
                  <div className="absolute top-3 left-3 text-[10px] font-bold text-stone-400 uppercase tracking-widest">
                    Spaced Repetition #42
                  </div>
                  <div className="absolute top-3 right-3">
                    <button
                      onClick={() => playSampleAudio('准备')}
                      className="p-1.5 rounded-lg bg-white border border-stone-200 text-stone-700 hover:text-[#C52828] hover:border-[#C52828] transition-colors cursor-pointer"
                      title="Listen with native TTS"
                    >
                      <Volume2 className={`w-4 h-4 ${audioPlaying ? 'animate-bounce text-[#C52828]' : ''}`} />
                    </button>
                  </div>

                  {/* Character in Tianzige style */}
                  <div className="my-3 py-4 inline-block px-8 rounded-2xl bg-white border border-[#E8DFD0] tianzige-bg shadow-2xs">
                    <div className="font-hanzi-serif text-5xl sm:text-6xl font-black text-stone-900 tracking-wider">
                      准备
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-base font-bold text-[#C52828] font-mono">zhǔnbèi</div>
                    <div className="text-sm font-semibold text-stone-800">to prepare / get ready</div>
                    <p className="text-xs text-stone-500 italic max-w-xs mx-auto mt-2">
                      “我正在准备明天的 HSK 考试。”
                    </p>
                  </div>

                  {/* SRS Interval Buttons */}
                  <div className="mt-5 grid grid-cols-3 gap-2 pt-4 border-t border-[#E8E0D4]">
                    <div className="p-2 rounded-xl bg-white border border-stone-200 text-center">
                      <div className="text-[10px] text-stone-400 font-bold uppercase">Again</div>
                      <div className="text-xs font-bold text-rose-600">10 min</div>
                    </div>
                    <div className="p-2 rounded-xl bg-white border border-stone-200 text-center">
                      <div className="text-[10px] text-stone-400 font-bold uppercase">Good</div>
                      <div className="text-xs font-bold text-emerald-600">1 day</div>
                    </div>
                    <div className="p-2 rounded-xl bg-[#1C1917] text-white border border-stone-800 text-center">
                      <div className="text-[10px] text-stone-400 font-bold uppercase">Easy</div>
                      <div className="text-xs font-bold text-[#FAF8F5]">4 days</div>
                    </div>
                  </div>
                </div>

                {/* Bottom interactive action */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-stone-600">
                    <BrainCircuit className="w-4 h-4 text-[#C52828]" />
                    <span>SM-2 Memory Decay Optimizer</span>
                  </div>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => onNavigate('vocabulary')}
                    className="text-xs"
                  >
                    Try Live SRS
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== STATS TICKER & METHODOLOGY ==================== */}
      <section className="bg-[#171412] text-[#FAF8F5] py-10 border-b border-stone-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-stone-800">
            <div className="pt-4 sm:pt-0 sm:px-4 text-center sm:text-left space-y-1">
              <div className="text-xs font-bold uppercase tracking-widest text-[#C52828]">Standardized</div>
              <div className="text-2xl lg:text-3xl font-black text-white">HSK 1, 2 & 3</div>
              <div className="text-xs text-stone-400">Complete multi-modal syllabus</div>
            </div>
            <div className="pt-4 sm:pt-0 sm:px-4 text-center sm:text-left space-y-1">
              <div className="text-xs font-bold uppercase tracking-widest text-amber-500">Retention</div>
              <div className="text-2xl lg:text-3xl font-black text-white">94.2%</div>
              <div className="text-xs text-stone-400">30-day recall with SRS</div>
            </div>
            <div className="pt-4 sm:pt-0 sm:px-4 text-center sm:text-left space-y-1">
              <div className="text-xs font-bold uppercase tracking-widest text-emerald-400">Simulations</div>
              <div className="text-2xl lg:text-3xl font-black text-white">45+ Pools</div>
              <div className="text-xs text-stone-400">Timed exams with mistake reviews</div>
            </div>
            <div className="pt-4 sm:pt-0 sm:px-4 text-center sm:text-left space-y-1">
              <div className="text-xs font-bold uppercase tracking-widest text-stone-400">Accessibility</div>
              <div className="text-2xl lg:text-3xl font-black text-white">EN • FR • ZH</div>
              <div className="text-xs text-stone-400">Multi-language localized UI</div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION: CHOOSE YOUR LEVEL (INTERACTIVE EXPLORER) ==================== */}
      <section id="hsk-levels" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E0D7CB] text-xs font-bold text-stone-800 uppercase tracking-widest shadow-2xs">
              Curriculum Architecture
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-950 tracking-tight">
              {t('landing.levelsTitle')}
            </h2>
            <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
              Every level is organized with precise vocabulary targets, grammar structures, listening dialogues, and complete exam simulations.
            </p>
          </div>

          {/* Interactive Level Switcher Tabs */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1.5 rounded-2xl bg-[#EFE8DE] border border-[#E0D7CB]">
              {(['hsk1', 'hsk2', 'hsk3'] as const).map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setSelectedCurriculumTab(lvl)}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    selectedCurriculumTab === lvl
                      ? 'bg-[#1C1917] text-[#FAF8F5] shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {lvl.toUpperCase()} (
                  {lvl === 'hsk1' ? '150 Words' : lvl === 'hsk2' ? '300 Words' : '600 Words'})
                </button>
              ))}
            </div>
          </div>

          {/* Active Level Deep-Dive Showcase Card */}
          <div className="max-w-5xl mx-auto rounded-3xl bg-white border border-[#E2D8CB] p-6 sm:p-10 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Col: Level description & key topics */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#1C1917] text-white flex items-center justify-center font-bold text-lg shadow-xs">
                  {activeLevelData.name}
                </div>
                <div>
                  <Badge variant={activeLevelData.id as any} size="md">
                    {getLocalized(activeLevelData.badge)}
                  </Badge>
                  <div className="text-xs font-bold text-[#C52828] uppercase tracking-wider mt-1">
                    {activeLevelData.wordCount} {t('levels.coreWords')}
                  </div>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-stone-950 tracking-tight">
                {getLocalized(activeLevelData.description)}
              </h3>

              <div className="space-y-2 pt-2 border-t border-[#EDE6DC]">
                <div className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                  Included Pedagogical Modules:
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-stone-700">
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-[#FAF8F5] border border-[#E8E0D4]">
                    <CheckCircle2 className="w-4 h-4 text-[#C52828] shrink-0" />
                    <span>SRS Vocabulary ({activeLevelData.wordCount})</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-[#FAF8F5] border border-[#E8E0D4]">
                    <CheckCircle2 className="w-4 h-4 text-[#C52828] shrink-0" />
                    <span>Multi-Speed Audio Listening</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-[#FAF8F5] border border-[#E8E0D4]">
                    <CheckCircle2 className="w-4 h-4 text-[#C52828] shrink-0" />
                    <span>Authentic Reading Passages</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-[#FAF8F5] border border-[#E8E0D4]">
                    <CheckCircle2 className="w-4 h-4 text-[#C52828] shrink-0" />
                    <span>Official Timed Mock Tests</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 [&>button]:w-full sm:[&>button]:w-auto">
                <Button
                  variant="luxury"
                  size="md"
                  onClick={() => {
                    onSelectLevel(activeLevelData.id as any);
                    onNavigate('hsk-detail');
                  }}
                  iconRight={<ChevronRight className="w-4 h-4" />}
                >
                  Enter {activeLevelData.name} Syllabus
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => onNavigate('mock-tests')}
                >
                  Take Practice Exam
                </Button>
              </div>
            </div>

            {/* Right Col: Character & Question Sample Preview */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#FAF8F5] border border-[#E2D8CB] space-y-4">
              <div className="text-xs font-bold uppercase tracking-widest text-stone-500">
                Syllabus Highlight
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E8DFD0] text-center space-y-2">
                <div className="font-hanzi-serif text-4xl font-bold text-stone-900">
                  {activeLevelData.id === 'hsk1' ? '谢谢' : activeLevelData.id === 'hsk2' ? '帮助' : '比较'}
                </div>
                <div className="text-xs font-mono text-[#C52828] font-bold">
                  {activeLevelData.id === 'hsk1' ? 'xièxie' : activeLevelData.id === 'hsk2' ? 'bāngzhù' : 'bǐjiào'}
                </div>
                <div className="text-xs font-medium text-stone-600">
                  {activeLevelData.id === 'hsk1'
                    ? 'to thank / thanks'
                    : activeLevelData.id === 'hsk2'
                    ? 'to assist / help'
                    : 'to compare / relatively'}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FFFDF9] border border-[#E6DFD3] text-xs space-y-1">
                <span className="font-bold text-stone-900">Grammar Pattern:</span>
                <p className="text-stone-600 text-[11px] leading-relaxed">
                  {activeLevelData.id === 'hsk1'
                    ? 'Subject + 是 + Noun (Basic identity & demonstratives)'
                    : activeLevelData.id === 'hsk2'
                    ? 'Subject + 从 + Point A + 到 + Point B (Spatial & temporal progression)'
                    : 'A + 比 + B + Adjective + (数量) (Comparative expressions)'}
                </p>
              </div>
            </div>
          </div>

          {/* Future HSK 4, 5, 6 Extensibility banner */}
          <div className="mt-12 max-w-5xl mx-auto p-6 rounded-2xl bg-white border border-[#E2D8CB] shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">
                Curriculum Roadmap
              </div>
              <h4 className="text-sm sm:text-base font-bold text-stone-900">
                HSK 4 (1,200 words), HSK 5 (2,500 words) & HSK 6 (5,000 words)
              </h4>
              <p className="text-xs text-stone-500">
                {t('levels.roadmapNote')} Database schemas and lesson architectures prepared for immediate expansion.
              </p>
            </div>
            <Badge variant="neutral" size="md">
              In Academic Validation
            </Badge>
          </div>
        </div>
      </section>

      {/* ==================== SECTION: THE 4 PILLARS OF COGNITIVE MASTERY ==================== */}
      <section id="features" className="py-20 lg:py-28 bg-[#F5EFEB] border-b border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E0D7CB] text-xs font-bold text-stone-800 uppercase tracking-widest shadow-2xs">
              Pedagogical Engine
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-950 tracking-tight">
              {t('landing.featuresTitle')}
            </h2>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
              {t('landing.featuresSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 1 */}
            <div className="p-7 rounded-3xl bg-white border border-[#E4DCCE] shadow-xs flex flex-col justify-between space-y-4 hover:border-stone-400 transition-colors">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#1C1917] text-white flex items-center justify-center shadow-2xs">
                  <BookOpen className="w-6 h-6 text-[#FAF8F5]" />
                </div>
                <div className="text-[10px] font-bold text-[#C52828] uppercase tracking-widest">
                  Pillar 01
                </div>
                <h3 className="text-lg font-bold text-stone-900">Spaced Repetition & Tianzige</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  SuperMemo SM-2 memory curves prevent forgetting. Practice character stroke structures inside authentic Chinese Tianzige guide grids.
                </p>
              </div>
              <div className="pt-2 text-xs font-bold text-stone-800 flex items-center gap-1">
                <span>Algorithmic recall</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#C52828]" />
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-7 rounded-3xl bg-white border border-[#E4DCCE] shadow-xs flex flex-col justify-between space-y-4 hover:border-stone-400 transition-colors">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#1C1917] text-white flex items-center justify-center shadow-2xs">
                  <Headphones className="w-6 h-6 text-[#FAF8F5]" />
                </div>
                <div className="text-[10px] font-bold text-[#C52828] uppercase tracking-widest">
                  Pillar 02
                </div>
                <h3 className="text-lg font-bold text-stone-900">Multi-Speed Audio Listening</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  High-fidelity audio dialogues with adjustable speed playback (0.8x slow, 1.0x standard, 1.2x challenge) for acoustic discrimination.
                </p>
              </div>
              <div className="pt-2 text-xs font-bold text-stone-800 flex items-center gap-1">
                <span>Native acoustic training</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#C52828]" />
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-7 rounded-3xl bg-white border border-[#E4DCCE] shadow-xs flex flex-col justify-between space-y-4 hover:border-stone-400 transition-colors">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#1C1917] text-white flex items-center justify-center shadow-2xs">
                  <FileText className="w-6 h-6 text-[#FAF8F5]" />
                </div>
                <div className="text-[10px] font-bold text-[#C52828] uppercase tracking-widest">
                  Pillar 03
                </div>
                <h3 className="text-lg font-bold text-stone-900">Contextual Reading & Pinyin Toggle</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Real dialogues, notices, and short stories. Toggle pinyin annotation on or off to test character recognition without crutches.
                </p>
              </div>
              <div className="pt-2 text-xs font-bold text-stone-800 flex items-center gap-1">
                <span>Authentic reading drill</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#C52828]" />
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="p-7 rounded-3xl bg-white border border-[#E4DCCE] shadow-xs flex flex-col justify-between space-y-4 hover:border-stone-400 transition-colors">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#1C1917] text-white flex items-center justify-center shadow-2xs">
                  <Award className="w-6 h-6 text-[#FAF8F5]" />
                </div>
                <div className="text-[10px] font-bold text-[#C52828] uppercase tracking-widest">
                  Pillar 04
                </div>
                <h3 className="text-lg font-bold text-stone-900">Full Exam Simulation & Diagnosis</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Strict official timers, section-by-section breakdown, instant score reporting, and deep mistake reviews with grammar explanations.
                </p>
              </div>
              <div className="pt-2 text-xs font-bold text-stone-800 flex items-center gap-1">
                <span>Official test alignment</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#C52828]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION: PRACTICE HUB & 6 SKILL TILES ==================== */}
      <section id="skills" className="py-20 bg-[#FAF8F5] border-b border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E0D7CB] text-xs font-bold text-stone-800 uppercase tracking-widest shadow-2xs">
              Dedicated Practice Units
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-950 tracking-tight">
              {t('landing.skillsTitle')}
            </h2>
            <p className="text-base sm:text-lg text-stone-600">
              {t('landing.skillsSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { id: 'vocabulary', title: 'Vocabulary', icon: BookOpen, count: '1050+ Words', desc: 'SRS Flashcards' },
              { id: 'grammar', title: 'Grammar', icon: Layers, count: '60+ Patterns', desc: 'Sentence Structures' },
              { id: 'listening', title: 'Listening', icon: Headphones, count: 'Audio Drills', desc: 'Acoustic Training' },
              { id: 'reading', title: 'Reading', icon: FileText, count: 'Passages', desc: 'Pinyin Toggle' },
              { id: 'characters', title: 'Characters', icon: Sparkles, count: 'Radicals', desc: 'Stroke Orders' },
              { id: 'writing', title: 'Writing', icon: PenTool, count: 'HSK 3+', desc: 'Sentence Ordering' },
            ].map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.id}
                  onClick={() => onNavigate('practice-hub')}
                  className="p-5 rounded-2xl bg-white border border-[#E2D8CB] hover:border-[#C52828] hover:bg-[#FFFDFB] transition-all cursor-pointer text-center space-y-3 group shadow-2xs"
                >
                  <div className="w-12 h-12 mx-auto rounded-2xl bg-[#FAF8F5] border border-[#E2D8CB] flex items-center justify-center group-hover:bg-[#1C1917] group-hover:text-white transition-all">
                    <Icon className="w-5 h-5 text-stone-800 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-stone-900">{skill.title}</h4>
                    <p className="text-[11px] font-bold text-[#C52828] mt-0.5">{skill.count}</p>
                    <p className="text-[10px] text-stone-400 mt-0.5">{skill.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== SECTION: EXAM SIMULATION SHOWCASE ==================== */}
      <section id="mock-tests" className="py-20 lg:py-28 bg-[#171412] text-[#FAF8F5] border-b border-stone-800 relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C52828]/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Col */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900 border border-stone-800 text-[11px] font-bold text-stone-300 uppercase tracking-widest">
                Official Examination Protocol
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {t('landing.mockTestTitle')}
              </h2>
              <p className="text-sm sm:text-base text-stone-400 leading-relaxed">
                {t('landing.mockTestSubtitle')} Experience identical conditions before sitting for your official test at a Confucius Institute or testing center.
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-300">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Strict countdown exam timers with automatic warning alerts</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Real listening audio dialogue sequences with authentic pauses</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Question status matrix: Answered, Skipped, and Flagged</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Instant scoring against the official 120/200 & 180/300 passing threshold</span>
                </li>
              </ul>
              <div className="pt-2 flex items-center gap-4">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => onNavigate('mock-tests')}
                  iconRight={<ArrowRight className="w-4 h-4" />}
                >
                  Enter Exam Hall
                </Button>
              </div>
            </div>

            {/* Right Col: Dark Luxury Mockup of Exam Screen */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-stone-900/90 border border-stone-800 shadow-2xl space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-stone-800">
                <div>
                  <div className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Official Simulation</div>
                  <div className="text-sm font-bold text-white">HSK 2 Exam Pool A • Section II</div>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#C52828]/20 text-[#FAF8F5] border border-[#C52828]/40 font-mono text-xs font-bold">
                  <Clock className="w-3.5 h-3.5 text-[#C52828]" />
                  <span>14:28 Remaining</span>
                </div>
              </div>

              {/* Sample question box */}
              <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 space-y-3">
                <div className="text-xs font-bold text-stone-400">Reading Comprehension • Question 18</div>
                <div className="font-hanzi text-lg sm:text-xl text-stone-100 leading-relaxed">
                  他每天早上都跑步，所以身体很好。
                </div>
                <div className="text-xs text-stone-400 italic">
                  “He runs every morning, so his health is very good.”
                </div>
              </div>

              {/* Answer options */}
              <div className="space-y-2">
                {[
                  { text: 'A. 他喜欢运动 (He likes exercise)', correct: true },
                  { text: 'B. 他在医院工作 (He works at a hospital)', correct: false },
                  { text: 'C. 他今天没有跑步 (He did not run today)', correct: false },
                ].map((opt, idx) => (
                  <div
                    key={opt.text}
                    className={`p-3 rounded-xl border text-xs font-semibold flex items-center justify-between transition-colors ${
                      opt.correct
                        ? 'bg-[#C52828]/20 border-[#C52828]/60 text-white'
                        : 'bg-stone-950 border-stone-800 text-stone-400'
                    }`}
                  >
                    <span>{opt.text}</span>
                    {opt.correct && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION: TESTIMONIALS & SCORECARDS ==================== */}
      <section className="py-20 bg-[#FAF8F5] border-b border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E0D7CB] text-xs font-bold text-stone-800 uppercase tracking-widest shadow-2xs">
              Learner Distinction
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-950 tracking-tight">
              Verified Exam Results from the Cohort
            </h2>
            <p className="text-base text-stone-600">
              Real students who transformed their Mandarin fluency with HSK Path.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl bg-white border border-[#E2D8CB] shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <Badge variant="success">Passed HSK 2: 194/200</Badge>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                “The spaced repetition drills paired with the Tianzige writing sheets made character retention effortless. I scored 98% in listening after 6 weeks.”
              </p>
              <div className="pt-2 border-t border-[#EDE6DC] flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-stone-900">Dr. Claire Moreau</div>
                  <div className="text-[10px] text-stone-400">Paris, France</div>
                </div>
                <div className="text-xs font-bold text-stone-400">HSK 2 Certified</div>
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-[#E2D8CB] shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <Badge variant="success">Passed HSK 3: 282/300</Badge>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                “The mock exam timer and listening dialogues reflect the real test identically. Going into the exam hall, I had zero surprises.”
              </p>
              <div className="pt-2 border-t border-[#EDE6DC] flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-stone-900">Marcus Vance</div>
                  <div className="text-[10px] text-stone-400">London, UK</div>
                </div>
                <div className="text-xs font-bold text-stone-400">HSK 3 Certified</div>
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-[#E2D8CB] shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <Badge variant="success">HSK 1: 100/100 Listening</Badge>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                “Being able to toggle pinyin on and off forced my brain to read characters naturally. Best Mandarin learning tool I have used.”
              </p>
              <div className="pt-2 border-t border-[#EDE6DC] flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-stone-900">Sofia Al-Mansoor</div>
                  <div className="text-[10px] text-stone-400">Dubai, UAE</div>
                </div>
                <div className="text-xs font-bold text-stone-400">HSK 1 Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION: PRICING ARCHITECTURE ==================== */}
      <section id="pricing" className="py-20 lg:py-28 bg-[#F5EFEB] border-b border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E0D7CB] text-xs font-bold text-stone-800 uppercase tracking-widest shadow-2xs">
              Membership & Access
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-950 tracking-tight">
              Transparent Academic Tiering
            </h2>
            <p className="text-base sm:text-lg text-stone-600">
              Start with foundational features completely free. Upgrade whenever you need unlimited full exam simulation pools.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Free Foundation */}
            <div className="p-8 rounded-3xl bg-white border border-[#E4DCCE] shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <Badge variant="success">Free Foundation</Badge>
                <div className="text-3xl sm:text-4xl font-black text-stone-950">
                  $0 <span className="text-xs font-normal text-stone-500 uppercase tracking-wider">/ Lifetime Free</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Full foundational access for beginners and preview for intermediate candidates.
                </p>
                <ul className="space-y-2.5 text-xs text-stone-700 pt-3 border-t border-[#EDE6DC]">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>100% Free HSK 1:</strong> All 150 vocabulary words & lessons</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>2 Free Simulation Exams</strong> for HSK 2 & HSK 3</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Spaced repetition algorithm & daily review scheduling</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Native speech synthesis audio for all vocabulary</span>
                  </li>
                </ul>
              </div>
              <Button
                variant="outline"
                size="md"
                onClick={() => onNavigate('signup')}
                className="w-full justify-center"
              >
                Create Free Account
              </Button>
            </div>

            {/* Pro Scholar */}
            <div className="p-8 rounded-3xl bg-[#1C1917] text-white border border-stone-800 shadow-xl space-y-6 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-full bg-[#C52828] text-white text-[10px] font-bold uppercase tracking-widest shadow-xs">
                  Recommended
                </span>
              </div>
              <div className="space-y-4">
                <Badge variant="accent">Pro HSK Scholar</Badge>
                <div className="text-3xl sm:text-4xl font-black text-[#FAF8F5]">
                  $9 <span className="text-xs font-normal text-stone-400 uppercase tracking-wider">/ month</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                  Comprehensive test preparation unlocking the complete intermediate & advanced curriculum.
                </p>
                <ul className="space-y-2.5 text-xs text-stone-300 pt-3 border-t border-stone-800">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C52828] shrink-0" />
                    <span><strong>All Lessons (1 to 12+)</strong> for HSK 2 and HSK 3</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C52828] shrink-0" />
                    <span><strong>Unlimited Mock Exams:</strong> All official test pools (A, B, C, D)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C52828] shrink-0" />
                    <span>Grammatical mistake analysis with detailed explanations</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C52828] shrink-0" />
                    <span>Audio playback speed controls (0.8x to 1.2x)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C52828] shrink-0" />
                    <span>Direct priority academic support & study roadmap</span>
                  </li>
                </ul>
              </div>
              <Button
                variant="primary"
                size="md"
                onClick={() => onNavigate('signup')}
                className="w-full justify-center shadow-sm"
              >
                Start 7-Day Free Trial
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== LUXURY FINAL CALLOUT ==================== */}
      <section className="py-24 bg-[#141210] text-white text-center border-t border-stone-800 relative overflow-hidden">
        {/* Chinese character watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-hanzi-serif text-[280px] font-black text-stone-900/40 select-none pointer-events-none">
          道
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900 border border-stone-800 text-[11px] font-bold text-stone-400 uppercase tracking-widest">
            Begin Your Exam Preparation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            {t('landing.ctaTitle')}
          </h2>
          <p className="text-base sm:text-lg text-stone-400 max-w-xl mx-auto leading-relaxed">
            {t('landing.ctaSubtitle')}
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => onNavigate('signup')}
              iconRight={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto shadow-md"
            >
              {t('landing.ctaButton')}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => onNavigate('login')}
              className="w-full sm:w-auto text-stone-900 bg-[#FAF8F5] hover:bg-white border-0"
            >
              {t('nav.signIn')}
            </Button>
          </div>
        </div>
      </section>

      {/* Public Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
};
