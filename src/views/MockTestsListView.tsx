import React, { useState } from 'react';
import {
  Clock,
  Award,
  Lock,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { useI18n } from '../locales';
import { MOCK_TESTS_CATALOG } from '../data/mockTests';
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
}

export const MockTestsListView: React.FC<MockTestsListViewProps> = ({
  onSelectTest,
  testHistory,
  isProUser = false,
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
      setProModalFeature(test.title);
      setShowProModal(true);
    } else {
      onSelectTest(test);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-150">
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
              setProModalFeature(language === 'fr' ? 'Pass Pro HSK' : 'HSK Pro Pass');
              setShowProModal(true);
            }}
            className="text-xs text-[#C52828] border-[#C52828]/30 hover:bg-[#C52828]/10"
            iconRight={<Sparkles className="w-3.5 h-3.5 text-[#C52828]" />}
          >
            {language === 'fr' ? 'Voir l\'offre Pro' : language === 'zh' ? '查看 Pro 特权' : 'View Pro Benefits'}
          </Button>
        </div>
      </div>

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
                      {result.isPassed ? 'Passed' : 'Needs Review'} ({result.score}/{result.totalScore})
                    </Badge>
                  ) : (
                    <Badge variant="neutral">New Exam</Badge>
                  )}
                </div>

                {/* Title & Passing Score */}
                <div>
                  <h3 className="text-xl font-bold text-stone-900 flex items-center justify-between">
                    <span>{test.title}</span>
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
                        {sec.name || sec.title.split(':')[0] || sec.type} ({sec.questionsCount || sec.questions?.length || 5} Qs)
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

      {/* Pro Upgrade Modal */}
      <ProUpgradeModal
        isOpen={showProModal}
        onClose={() => setShowProModal(false)}
        sourceFeature={proModalFeature}
      />
    </div>
  );
};
