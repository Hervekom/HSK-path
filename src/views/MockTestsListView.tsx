import React, { useState } from 'react';
import { tr } from '../locales/tr';
import { Hsk30Notice } from '../components/ui/Hsk30Notice';
import { Clock, Award, Lock, Sparkles, ChevronRight, ShieldCheck, CheckCircle2, ArrowUpRight } from '../components/icons';
import { useI18n } from '../locales';
import { MOCK_TESTS_CATALOG } from '../data/mockTests';
import { HSK3_EXAMS } from '../data/hsk3';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ProUpgradeModal } from '../components/ui/ProUpgradeModal';
import type { MockTest, TestResult, AppState } from '../types';

interface MockTestsListViewProps {
  onSelectTest: (test: MockTest) => void;
  onNavigate: (view: AppState['currentView']) => void;
  testHistory: TestResult[];
  isProUser?: boolean;
  onOpenHsk3?: (id: string) => void;
}

export const MockTestsListView: React.FC<MockTestsListViewProps> = ({
  onSelectTest,
  testHistory,
  isProUser = false,
  onOpenHsk3,
}) => {
  const { t, getLocalized, language } = useI18n();
  const [selectedLevel, setSelectedLevel] = useState<'all' | 'hsk1' | 'hsk2' | 'hsk3'>('all');
  const [showProModal, setShowProModal] = useState(false);
  const [proModalFeature, setProModalFeature] = useState<string>('');

  const filteredTests = MOCK_TESTS_CATALOG.filter((test) => {
    if (selectedLevel !== 'all' && test.level !== selectedLevel) return false;
    return true;
  });

  const getLatestResult = (testId: string) => {
    return testHistory.find((r) => r.testId === testId);
  };

  const handleTestClick = (test: MockTest) => {
    if (test.isPro && !isProUser) {
      setProModalFeature(tr(test.title));
      setShowProModal(true);
    } else {
      onSelectTest(test);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-150">
      {/* Header & Filter Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            {t('mockTests.title')}
          </h1>
          <p className="text-sm sm:text-base text-stone-600 font-medium mt-1">
            {t('mockTests.subtitle')}
          </p>
        </div>

        {/* Level Filter Tabs */}
        <div className="inline-flex p-1 bg-[#ECE4D8] rounded-xl border border-[#DFD5C6] shrink-0">
          {(['all', 'hsk1', 'hsk2', 'hsk3'] as const).map((lvl) => (
            <button
              key={lvl}
              onClick={() => setSelectedLevel(lvl)}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                selectedLevel === lvl
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {lvl === 'all' ? (language === 'fr' ? 'Tous les tests' : language === 'zh' ? '全部试卷' : 'All Tests') : lvl.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Top Banner explaining Free & Pro Rules */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#F6F1E8] border border-[#E5DACD] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-[#C52828] text-white flex items-center justify-center shrink-0 shadow-xs">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="space-y-0.5">
            <h2 className="text-sm font-bold text-stone-900 flex items-center gap-2">
              <span>{language === 'fr' ? 'Règles d\'accès aux examens blancs HSK' : language === 'zh' ? '全真模拟试卷开放规则' : 'HSK Mock Exam Access Policy'}</span>
              <Badge variant="success" size="sm">
                {language === 'fr' ? 'HSK 1 Gratuit' : language === 'zh' ? 'HSK 1 全免' : 'HSK 1 Free'}
              </Badge>
            </h2>
            <p className="text-xs text-stone-600">
              {language === 'fr'
                ? 'HSK 1 est 100% gratuit. HSK 2 et HSK 3 incluent 2 examens blancs complets gratuits chacun (Tests A et B). Les examens Pro (Test C) débloquent les pools avancés.'
                : language === 'zh'
                ? 'HSK 1 级全部试卷 100% 永久免费。HSK 2 和 HSK 3 各包含 2 套全真免费模拟卷（A 卷与 B 卷）。Pro 卷包含进阶精选题库。'
                : 'HSK 1 is 100% free. HSK 2 and HSK 3 include 2 full simulation mock exams free each (Tests A & B). Pro tests unlock advanced official pools.'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start md:self-center shrink-0">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setProModalFeature(language === 'fr' ? 'Pass Pro HSK' : tr("HSK Pro Pass"));
              setShowProModal(true);
            }}
            className="text-xs text-[#C52828] border-[#C52828]/30 hover:bg-[#C52828]/10"
            iconRight={<ArrowUpRight className="w-3.5 h-3.5 text-[#C52828]" />}
          >
            {language === 'fr' ? 'Voir l\'offre Pro' : language === 'zh' ? '查看 Pro 特权' : 'View Pro Benefits'}
          </Button>
        </div>
      </div>

      {onOpenHsk3 && (selectedLevel === 'all' || selectedLevel === 'hsk3') && (
        <section className="space-y-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#C52828]">{tr('New')}</div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-stone-950 tracking-tight">{tr('HSK 3 · complete exams in the official format')}</h2>
            <p className="text-sm text-stone-600 mt-1 max-w-2xl">
              {tr('80 questions in 90 minutes, as on exam day: listening (40), reading (30), writing (10). Score out of 300, 180 to pass, with a full correction.')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {HSK3_EXAMS.map((e) => {
              const best = testHistory.filter((r) => r.testId === e.id).reduce((m, r) => Math.max(m, r.score), -1);
              const locked = e.isPro && !isProUser;
              const official = e.source === 'official';
              return (
                <button
                  key={e.id}
                  onClick={() => (locked ? (setProModalFeature(e.title), setShowProModal(true)) : onOpenHsk3(e.id))}
                  className={`text-left p-4 rounded-2xl border bg-white hover:border-stone-900 transition-colors cursor-pointer space-y-3 ${locked ? 'border-[#E8DFC8] bg-[#FAF7F2]' : 'border-[#E4DCCE]'}`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${official ? 'bg-stone-900 text-white border-stone-900' : 'bg-amber-50 text-amber-800 border-amber-200'}`}>
                      {official ? tr('Official paper') : tr('HSK Path original')}
                    </span>
                    {locked ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-800"><Lock className="w-3 h-3" /> Pro</span>
                    ) : (
                      <span className="text-[10px] font-bold text-emerald-700">{tr('Free')}</span>
                    )}
                  </div>
                  <div>
                    <div className="text-lg font-extrabold text-stone-950">{e.code}</div>
                    <div className="text-xs text-stone-500 flex items-center gap-3 mt-0.5">
                      <span className="inline-flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 90 min</span>
                      <span>80 {tr('questions')}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className={best >= 0 ? (best >= 180 ? 'font-bold text-emerald-700' : 'font-bold text-stone-700') : 'text-stone-400'}>
                      {best >= 0 ? `${tr('Best score')}: ${best}/300` : tr('Not taken yet')}
                    </span>
                    <ChevronRight className="w-4 h-4 text-stone-400" />
                  </div>
                </button>
              );
            })}
          </div>
          <p className="text-[11px] text-stone-500">
            {tr('Official papers H31001–H31005: practice papers published by Hanban / Chinese Testing International. They follow the HSK 2.0 format; almost all of their vocabulary is part of the HSK 3.0 syllabus.')}
          </p>
        </section>
      )}

      <div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-stone-950 tracking-tight">{tr('Short mock exams by level')}</h2>
        <p className="text-sm text-stone-600 mt-1 max-w-2xl">{tr('Shorter timed exams for HSK 1, 2 and 3, with a score and a review of your mistakes.')}</p>
      </div>

      {/* Tests Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTests.map((test) => {
          const result = getLatestResult(test.id);
          const isLocked = test.isPro && !isProUser;

          return (
            <Card
              key={test.id}
              variant="elevated"
              className={`p-6 sm:p-7 space-y-6 flex flex-col justify-between transition-all relative ${
                isLocked
                  ? 'bg-[#FAF7F2] border-[#E8DFC8]'
                  : 'hover:border-stone-400'
              }`}
            >
              <div className="space-y-4">
                {/* Badges Bar */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Badge variant={test.level as any}>{test.level?.toUpperCase()}</Badge>
                    {test.isFree ? (
                      <Badge variant="success" size="sm">
                        {test.level === 'hsk1' 
                          ? (language === 'fr' ? '100% Gratuit' : language === 'zh' ? '全免费' : '100% Free') 
                          : (language === 'fr' ? 'Examen Gratuit' : language === 'zh' ? '免费模拟' : 'Free Mock')}
                      </Badge>
                    ) : (
                      <Badge variant="danger" size="sm">
                        <Lock className="w-3 h-3 mr-1 inline" />
                        {language === 'fr' ? 'Pro Examen' : language === 'zh' ? 'Pro 专享' : 'Pro Exam'}
                      </Badge>
                    )}
                  </div>

                  {result ? (
                    <Badge variant={result.isPassed ? 'success' : 'danger'}>
                      {result.isPassed ? tr("Passed") : tr("Needs Review")} ({result.score}/{result.totalScore})
                    </Badge>
                  ) : (
                    <Badge variant="neutral">{tr("New Exam")}</Badge>
                  )}
                </div>

                {/* Title & Passing Score */}
                <div>
                  <h3 className="text-xl font-bold text-stone-900 flex items-center justify-between">
                    <span>{tr(test.title)}</span>
                    {isLocked && <Lock className="w-4 h-4 text-amber-700 shrink-0" />}
                  </h3>
                  <p className="text-xs text-stone-500 font-semibold uppercase tracking-wider mt-0.5">
                    {language === 'fr' ? 'Score de passage :' : language === 'zh' ? '及格标准：' : 'Passing Score:'} {test.passingScore} / {test.totalScore}
                  </p>
                </div>

                <p className="text-sm text-stone-600 leading-relaxed">
                  {getLocalized(test.description)}
                </p>

                {/* Exam Metadata pills */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#EAE2D5] text-xs font-semibold text-stone-700">
                  <div className="p-2 rounded-lg bg-[#FAF8F5] border border-[#ECE3D8] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-stone-500" />
                    <span>{test.durationMinutes} {language === 'fr' ? 'Minutes' : language === 'zh' ? '分钟' : 'Minutes'}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#FAF8F5] border border-[#ECE3D8] flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-stone-500" />
                    <span>{test.questionsCount || test.totalQuestions || test.questions?.length || 10} {language === 'fr' ? 'Questions' : language === 'zh' ? '道题目' : 'Questions'}</span>
                  </div>
                </div>

                {/* Section breakdown */}
                <div className="space-y-1 text-xs text-stone-500">
                  <div className="font-semibold text-stone-700">
                    {language === 'fr' ? 'Épreuves incluses :' : language === 'zh' ? '包含板块：' : 'Sections Included:'}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {test.sections.map((sec) => (
                      <span
                        key={sec.id || sec.type}
                        className="px-2 py-0.5 rounded-md bg-[#ECE4D8] text-stone-700 font-medium text-[11px]"
                      >
                        {tr(sec.name || sec.title.split(':')[0] || sec.type)} ({sec.questionsCount || sec.questions?.length || 5}{" "}{tr("Qs)")}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[#EAE2D5]">
                <Button
                  variant={isLocked ? 'secondary' : 'primary'}
                  size="md"
                  onClick={() => handleTestClick(test)}
                  className="w-full justify-center shadow-xs"
                  iconRight={
                    isLocked ? <Lock className="w-4 h-4 text-amber-700" /> : <ChevronRight className="w-4 h-4" />
                  }
                >
                  {isLocked
                    ? (language === 'fr' ? 'Débloquer avec Pro' : language === 'zh' ? '升级 Pro 解锁试卷' : 'Unlock with Pro')
                    : (language === 'fr' ? 'Commencer la simulation' : language === 'zh' ? '开始全真模考' : 'Start Simulation')}
                </Button>
              </div>
            </Card>
          );
        })}
      </div>

      <Hsk30Notice variant="mock" />

      {/* Pro Upgrade Modal */}
      <ProUpgradeModal
        isOpen={showProModal}
        onClose={() => setShowProModal(false)}
        sourceFeature={proModalFeature}
      />
    </div>
  );
};
