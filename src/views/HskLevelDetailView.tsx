import React, { useEffect, useState } from 'react';
import { tr } from '../locales/tr';
import { lessonWordCounts, levelWordTemplate, type CoreLevel } from '../data/hskWordCounts';
import {
  ArrowLeft,
  BookOpen,
  Layers,
  Headphones,
  FileText,
  PenTool,
  Award,
  Clock,
  CheckCircle2,
  ChevronRight,
  Play,
  Lock,
  Sparkles,
  ShieldCheck,
} from '../components/icons';
import { useI18n } from '../locales';
import { HSK_LEVELS } from '../data/hskLevels';
import { HSK_LESSONS_DATA } from '../data/lessons';
import { MOCK_TESTS_CATALOG } from '../data/mockTests';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ProgressBar } from '../components/ui/ProgressBar';
import { ProUpgradeModal } from '../components/ui/ProUpgradeModal';
import { LessonStudyModal } from '../components/ui/LessonStudyModal';
import type { AppState, SkillType, HskLesson, MockTest } from '../types';

interface HskLevelDetailViewProps {
  selectedLevel: 'hsk1' | 'hsk2' | 'hsk3';
  onNavigate: (view: AppState['currentView']) => void;
  onSelectLevel: (level: 'hsk1' | 'hsk2' | 'hsk3') => void;
  onStartPractice: (skill: SkillType | 'mixed') => void;
  onSelectTest?: (test: MockTest) => void;
  isProUser?: boolean;
}

export const HskLevelDetailView: React.FC<HskLevelDetailViewProps> = ({
  selectedLevel,
  onNavigate,
  onSelectLevel,
  onStartPractice,
  onSelectTest,
  isProUser = false,
}) => {
  const { t, getLocalized, language } = useI18n();
  const [activeLesson, setActiveLesson] = useState<HskLesson | null>(null);
  const [lessonTab, setLessonTab] = useState<'practice' | undefined>(undefined);

  // Coming back from a Laoshi mission: reopen that lesson on its Practice tab.
  useEffect(() => {
    let target: { lessonId?: string } | null = null;
    try {
      target = JSON.parse(sessionStorage.getItem('hskpath_open_lesson') || 'null');
      sessionStorage.removeItem('hskpath_open_lesson');
    } catch {
      /* storage unavailable */
    }
    const lesson = target?.lessonId ? HSK_LESSONS_DATA.find((l) => l.id === target!.lessonId) : undefined;
    if (!lesson) return;
    if (lesson.level !== selectedLevel) onSelectLevel(lesson.level);
    setLessonTab('practice');
    setActiveLesson(lesson);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [showProModal, setShowProModal] = useState(false);
  const [proModalFeature, setProModalFeature] = useState<string>('');

  const currentLevelMeta = HSK_LEVELS.find((l) => l.id === selectedLevel) || HSK_LEVELS[1];
  const progress = selectedLevel === 'hsk1' ? 100 : selectedLevel === 'hsk2' ? 68 : 24;

  const levelLessons = HSK_LESSONS_DATA.filter((l) => l.level === selectedLevel);
  const levelMockTests = MOCK_TESTS_CATALOG.filter((t) => t.level === selectedLevel);

  const getModuleIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return BookOpen;
      case 'Layers':
        return Layers;
      case 'Headphones':
        return Headphones;
      case 'FileText':
        return FileText;
      case 'PenTool':
        return PenTool;
      case 'Award':
        return Award;
      default:
        return BookOpen;
    }
  };

  const handleLessonAction = (lesson: HskLesson) => {
    if (!lesson.isFree && !isProUser) {
      setProModalFeature(getLocalized(lesson.title));
      setShowProModal(true);
    } else {
      setActiveLesson(lesson);
    }
  };

  const handleMockClick = (test: MockTest) => {
    if (test.isPro && !isProUser) {
      setProModalFeature(tr(test.title));
      setShowProModal(true);
    } else if (onSelectTest) {
      onSelectTest(test);
    } else {
      onNavigate('mock-tests');
    }
  };

  const handleModuleClick = (moduleId: string) => {
    if (moduleId === 'vocab') {
      onNavigate('vocabulary');
    } else if (moduleId === 'listening') {
      onNavigate('listening-practice');
    } else if (moduleId === 'reading') {
      onNavigate('reading-practice');
    } else if (moduleId === 'characters' || moduleId === 'writing') {
      onNavigate('writing-practice');
    } else if (moduleId === 'mock') {
      onNavigate('mock-tests');
    } else {
      onStartPractice(moduleId as any);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-150">
      {/* Back to levels button & level switcher */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => onNavigate('hsk-levels')}
          className="inline-flex items-center gap-2 text-xs font-bold text-stone-600 hover:text-stone-900 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{language === 'fr' ? 'Retour aux niveaux HSK' : language === 'zh' ? '返回所有级别' : 'Back to All HSK Levels'}</span>
        </button>

        {/* Level switcher pills */}
        <div className="inline-flex p-1 bg-[#ECE4D8] rounded-xl border border-[#DFD5C6]">
          {(['hsk1', 'hsk2', 'hsk3'] as const).map((lvl) => (
            <button
              key={lvl}
              onClick={() => onSelectLevel(lvl)}
              className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                selectedLevel === lvl
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {lvl.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Level Banner Card */}
      <div className="p-5 sm:p-8 rounded-3xl bg-white border border-[#E4DACD] shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#C52828] text-white flex flex-col items-center justify-center leading-none shadow-xs shrink-0">
              <span className="text-[10px] font-bold tracking-widest opacity-80">{tr("HSK")}</span>
              <span className="text-2xl font-extrabold">{currentLevelMeta.name.replace(/\D/g, '')}</span>
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                  {currentLevelMeta.name} {language === 'fr' ? 'Programme' : language === 'zh' ? '大纲课程' : 'Curriculum'}
                </h1>
                {selectedLevel === 'hsk1' ? (
                  <Badge variant="success" size="sm">
                    {language === 'fr' ? '100% Gratuit' : language === 'zh' ? '永久全免费' : '100% Free Access'}
                  </Badge>
                ) : (
                  <Badge variant="neutral" size="sm">
                    {language === 'fr' ? '2 Mocks + 2 Leçons Gratuits' : language === 'zh' ? '2 模考 + 前 2 课免费' : '2 Mocks + 2 Lessons Free'}
                  </Badge>
                )}
              </div>
              <p className="text-[11px] sm:text-xs font-semibold text-stone-500 uppercase tracking-wider mt-1">
                {(() => { const w = levelWordTemplate(currentLevelMeta.id as CoreLevel); return Object.entries(w.vars).reduce((t, [k, v]) => t.replace(`{${k}}`, v.toLocaleString(language === 'fr' ? 'fr-FR' : 'en-US')), tr(w.key)); })()}{" "}{tr("• Passing Score:")}{" "}{currentLevelMeta.passingScore} / {currentLevelMeta.totalScore}
              </p>
            </div>
          </div>

          <div className="text-left sm:text-right">
            <div className="text-xs font-bold text-stone-500 uppercase tracking-wider">
              {t('hskDetail.levelProgress')}
            </div>
            <div className="text-2xl font-extrabold text-stone-900">{progress}%</div>
          </div>
        </div>

        <p className="text-sm text-stone-600 leading-relaxed max-w-3xl">
          {getLocalized(currentLevelMeta.longDescription)}
        </p>

        <ProgressBar
          value={progress}
          color={progress === 100 ? 'emerald' : selectedLevel === 'hsk2' ? 'amber' : 'red'}
          size="md"
        />
      </div>

      {/* ========================================================================= */}
      {/* SECTION: LESSONS & UNIT TRACK (FREEMIUM POLICY) */}
      {/* ========================================================================= */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-xl font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span>{language === 'fr' ? 'Leçons structurées' : language === 'zh' ? '分课精讲与对话练习' : 'Structured Lessons'}</span>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#ECE4D8] text-stone-700">
                {levelLessons.length} {language === 'fr' ? 'Leçons' : language === 'zh' ? '节课' : 'Lessons'}
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              {selectedLevel === 'hsk1'
                ? (language === 'fr' ? 'Toutes les leçons HSK 1 sont incluses à 100% gratuitement.' : language === 'zh' ? 'HSK 1 级全部课程 100% 免费开放。' : 'All HSK 1 lessons are 100% free and unlocked.')
                : (language === 'fr' ? 'Les leçons 1 et 2 sont gratuites. Les leçons 3+ sont incluses avec le Pass Pro.' : language === 'zh' ? '第 1 课与第 2 课免费开放。第 3 课起需升级 Pro 通行证。' : 'Lessons 1 & 2 are free to study. Lessons 3+ unlock with Pro Pass.')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {levelLessons.map((lesson) => {
            const isLocked = !lesson.isFree && !isProUser;

            return (
              <div
                key={lesson.id}
                onClick={() => handleLessonAction(lesson)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-4 ${
                  isLocked
                    ? 'bg-[#FAF7F2] border-[#E8DEC9] hover:border-amber-400'
                    : 'bg-white border-[#E2D8CC] hover:border-[#C52828] shadow-xs'
                }`}
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#C52828] bg-[#C52828]/10 px-2 py-0.5 rounded-md">
                      {lesson.level.toUpperCase()} &bull; {language === 'fr' ? `Leçon ${lesson.lessonNumber}` : language === 'zh' ? `第 ${lesson.lessonNumber} 课` : `Lesson ${lesson.lessonNumber}`}
                    </span>
                    {lesson.isFree ? (
                      <Badge variant="success" size="sm">
                        {language === 'fr' ? 'Gratuit' : language === 'zh' ? '免费体验' : 'Free Access'}
                      </Badge>
                    ) : (
                      <Badge variant="danger" size="sm">
                        <Lock className="w-3 h-3 mr-1 inline" />
                        {language === 'fr' ? 'Pro Uniquement' : language === 'zh' ? 'Pro 专享' : 'Pro Only'}
                      </Badge>
                    )}
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-stone-900 flex items-center justify-between">
                      <span>{getLocalized(lesson.title)}</span>
                      {isLocked && <Lock className="w-4 h-4 text-amber-700 shrink-0" />}
                    </h3>
                    <p className="text-xs text-stone-500 font-medium mt-0.5">
                      {getLocalized(lesson.subtitle)}
                    </p>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed line-clamp-2">
                    {getLocalized(lesson.description)}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#ECE3D8] flex items-center justify-between text-xs text-stone-500 font-medium">
                  <span>
                    {lesson.estimatedMinutes}{" "}{tr("min •")}{" "}
                    {(() => {
                      const c = lessonWordCounts(lesson.vocabulary, lesson.level as CoreLevel);
                      return `${c.syllabus} ${language === 'fr' ? 'mots' : language === 'zh' ? '词汇' : 'words'}${c.extra ? ` ${tr('+ {n} bonus').replace('{n}', String(c.extra))}` : ''}`;
                    })()}
                  </span>
                  <span className={`font-bold flex items-center gap-1 ${isLocked ? 'text-amber-800' : 'text-[#C52828]'}`}>
                    {isLocked 
                      ? (language === 'fr' ? 'Débloquer Pro' : language === 'zh' ? '解锁课程' : 'Unlock Pro') 
                      : (language === 'fr' ? 'Commencer la leçon' : language === 'zh' ? '进入学习' : 'Start Lesson')}
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION: MOCK TESTS AVAILABLE FOR THIS LEVEL */}
      {/* ========================================================================= */}
      <div className="space-y-4 pt-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-stone-900 tracking-tight">
              {language === 'fr' ? 'Examens blancs pour ce niveau' : language === 'zh' ? '本级别全真模拟试卷' : `Mock Exams for ${currentLevelMeta.name}`}
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              {selectedLevel === 'hsk1'
                ? (language === 'fr' ? '2 examens complets gratuits.' : tr("2 full mock tests 100% free."))
                : (language === 'fr' ? '2 examens complets gratuits (Tests A & B), examens Pro additionnels.' : tr("2 full mock tests free (Tests A & B), plus advanced Pro tests."))}
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onNavigate('mock-tests')}
          >
            {language === 'fr' ? 'Tous les examens' : language === 'zh' ? '查看所有模考' : 'View All Tests'}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {levelMockTests.map((test) => {
            const isLocked = test.isPro && !isProUser;

            return (
              <Card
                key={test.id}
                variant="elevated"
                className="p-5 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge variant={test.level as any}>{test.level?.toUpperCase()}</Badge>
                    {test.isFree ? (
                      <Badge variant="success" size="sm">
                        {language === 'fr' ? 'Gratuit' : language === 'zh' ? '免费模拟' : 'Free Mock'}
                      </Badge>
                    ) : (
                      <Badge variant="danger" size="sm">
                        <Lock className="w-3 h-3 mr-1 inline" />
                        {tr("Pro")}
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-base font-bold text-stone-900">{tr(test.title)}</h3>
                  <p className="text-xs text-stone-600 line-clamp-2">{getLocalized(test.description)}</p>
                </div>

                <Button
                  variant={isLocked ? 'secondary' : 'primary'}
                  size="sm"
                  onClick={() => handleMockClick(test)}
                  className="w-full justify-center"
                  iconRight={isLocked ? <Lock className="w-3.5 h-3.5 text-amber-700" /> : <ChevronRight className="w-3.5 h-3.5" />}
                >
                  {isLocked 
                    ? (language === 'fr' ? 'Débloquer Pro' : language === 'zh' ? '解锁' : 'Unlock Pro') 
                    : (language === 'fr' ? 'Passer l\'examen' : language === 'zh' ? '开始测试' : 'Take Exam')}
                </Button>
              </Card>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION: SKILL TRAINING MODULES */}
      {/* ========================================================================= */}
      <div className="space-y-4 pt-4">
        <h2 className="text-xl font-bold text-stone-900 tracking-tight">
          {t('levels.modules')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentLevelMeta.modules.map((mod, index) => {
            const Icon = getModuleIcon(mod.icon);
            const modProgress = progress === 100 ? 100 : Math.min(100, Math.max(10, Math.round(progress * (1 - index * 0.12))));

            return (
              <Card
                key={mod.id}
                variant="elevated"
                className="p-6 space-y-4 flex flex-col justify-between hover:border-stone-400 transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#F6F1E8] text-[#C52828] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <Badge variant="neutral" size="sm">
                      {modProgress}%
                    </Badge>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-stone-900">
                      {t(mod.titleKey) || mod.id}
                    </h3>
                    <p className="text-xs text-stone-500 font-semibold uppercase tracking-wider mt-0.5">
                      {mod.estimatedMinutes} {language === 'fr' ? 'min d\'entraînement' : language === 'zh' ? '分钟练习' : 'min practice'} &bull; {mod.activityCount} {language === 'fr' ? 'activités' : language === 'zh' ? '个模块' : 'activities'}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {mod.id === 'vocab' ? (language === 'fr' ? 'Mémorisation des caractères clés avec audio natif et phrases d\'exemple.' : tr("Master core characters with native audio and pinyin.")) :
                     mod.id === 'listening' ? (language === 'fr' ? 'Entraînez votre oreille aux dialogues et vitesses d\'examen.' : tr("Train your ear to natural Mandarin dialogues and speeds.")) :
                     mod.id === 'reading' ? (language === 'fr' ? 'Perfectionnez votre vitesse de lecture et repérage de mots.' : tr("Enhance reading comprehension and character recognition.")) :
                     mod.id === 'writing' ? (language === 'fr' ? 'Structurez vos phrases et maîtrisez l\'ordre des traits.' : tr("Structure grammar and sentences accurately.")) :
                     (language === 'fr' ? 'Pratique interactive et validation des compétences.' : tr("Interactive drills to validate your skills."))}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <ProgressBar value={modProgress} size="sm" color={modProgress === 100 ? 'emerald' : 'amber'} />

                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => handleModuleClick(mod.id)}
                    className="w-full justify-center"
                    iconRight={<ChevronRight className="w-4 h-4" />}
                  >
                    {t('hskDetail.openModule')}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Lesson Study Modal */}
      <LessonStudyModal
        lesson={activeLesson}
        isOpen={!!activeLesson}
        initialTab={lessonTab}
        onClose={() => {
          setActiveLesson(null);
          setLessonTab(undefined);
        }}
        onPractice={(l) => {
          // Hand the lesson's speaking task to Laoshi, which picks it up on open.
          try {
            sessionStorage.setItem('laoshi_mission', JSON.stringify({ lessonId: l.id, level: l.level, ...l.practice }));
          } catch {
            /* storage unavailable: Laoshi simply opens without the task */
          }
          setActiveLesson(null);
          onNavigate('tutor');
        }}
      />

      {/* Pro Upgrade Modal */}
      <ProUpgradeModal
        isOpen={showProModal}
        onClose={() => setShowProModal(false)}
        sourceFeature={proModalFeature}
      />
    </div>
  );
};
