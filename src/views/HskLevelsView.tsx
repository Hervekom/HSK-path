import React from 'react';
import { tr } from '../locales/tr';
import { Hsk30Notice } from '../components/ui/Hsk30Notice';
import { Layers, ChevronRight, CheckCircle2, BookOpen, Headphones, FileText, Sparkles, Award, ShieldCheck } from '../components/icons';
import { useI18n } from '../locales';
import { HSK_LEVELS, FUTURE_HSK_LEVELS } from '../data/hskLevels';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ProgressBar } from '../components/ui/ProgressBar';
import type { AppState, UserProfile } from '../types';

interface HskLevelsViewProps {
  user: UserProfile;
  onNavigate: (view: AppState['currentView']) => void;
  onSelectLevel: (level: 'hsk1' | 'hsk2' | 'hsk3') => void;
}

export const HskLevelsView: React.FC<HskLevelsViewProps> = ({
  user,
  onNavigate,
  onSelectLevel,
}) => {
  const { t, getLocalized, language } = useI18n();

  const getProgressForLevel = (levelId: 'hsk1' | 'hsk2' | 'hsk3') => {
    if (levelId === 'hsk1') return 100;
    if (levelId === 'hsk2') return 68;
    return 24;
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-150">

      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            {t('levels.title')}
          </h1>
          <p className="text-sm sm:text-base text-stone-600 font-medium mt-1">
            {t('levels.subtitle')}
          </p>
        </div>

        <div className="p-3 bg-[#F6F1E8] border border-[#E5DACD] rounded-2xl flex items-center gap-2 text-xs text-stone-700 font-medium self-start sm:self-center">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>
            {language === 'fr' 
              ? 'HSK 1 complet 100% gratuit • HSK 2 & 3 : 2 examens + 2 leçons offerts'
              : language === 'zh'
              ? 'HSK 1 永久全免费 • HSK 2 与 3 各含 2 套模考与 2 课免费体验'
              : 'HSK 1 is 100% Free • HSK 2 & 3: 2 Mock Tests + 2 Lessons Free'}
          </span>
        </div>
      </div>

      {/* Levels Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {HSK_LEVELS.map((lvl) => {
          const progress = getProgressForLevel(lvl.id);
          const isCurrent = user.currentHsk === lvl.id;
          const isHsk1 = lvl.id === 'hsk1';

          return (
            <Card
              key={lvl.id}
              variant="elevated"
              className={`p-6 sm:p-7 space-y-6 flex flex-col justify-between border ${
                isCurrent ? 'border-[#C52828] ring-2 ring-[#C52828]/10' : 'border-[#E4DACD]'
              }`}
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#C52828] text-white flex flex-col items-center justify-center leading-none shadow-xs shrink-0">
                    <span className="text-[9px] font-bold tracking-widest opacity-80">{tr("HSK")}</span>
                    <span className="text-xl font-extrabold">{lvl.name.replace(/\D/g, '')}</span>
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap justify-end">
                    {isHsk1 ? (
                      <Badge variant="success">
                        {language === 'fr' ? '100% Gratuit' : language === 'zh' ? '全免费' : '100% Free'}
                      </Badge>
                    ) : (
                      <Badge variant="neutral">
                        {language === 'fr' ? '2 Mocks + 2 Leçons' : language === 'zh' ? '2 模考 + 2 课' : '2 Mocks + 2 Lessons'}
                      </Badge>
                    )}
                    <Badge variant={lvl.id as any}>
                      {getLocalized(lvl.badge)}
                    </Badge>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-stone-900">{lvl.name}</h3>
                  <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mt-0.5">
                    {lvl.wordCount} {t('levels.coreWords')} &bull; ~{lvl.estimatedHours}h {language === 'fr' ? 'd\'étude' : tr("Study")}
                  </p>
                </div>

                <p className="text-sm text-stone-600 leading-relaxed">
                  {getLocalized(lvl.description)}
                </p>

                {/* Free vs Pro entitlement highlights */}
                <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#ECE3D8] text-xs space-y-1.5">
                  <div className="font-bold text-stone-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>
                      {isHsk1
                        ? (language === 'fr' ? 'Toutes les leçons & examens 100% gratuits' : language === 'zh' ? '全套课程与所有模拟测试永久免费' : 'All lessons & mock tests 100% free')
                        : (language === 'fr' ? '2 examens blancs complets + 2 premières leçons offerts' : language === 'zh' ? '免费包含 2 套全真模拟卷与前 2 节精讲课' : '2 full mock tests + 2 full lessons included free')}
                    </span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="space-y-1.5 pt-2 border-t border-[#EAE2D5]">
                  <div className="flex justify-between text-xs font-medium text-stone-600">
                    <span>{t('hskDetail.levelProgress')}</span>
                    <span className="font-bold text-stone-900">{progress}%</span>
                  </div>
                  <ProgressBar
                    value={progress}
                    color={progress === 100 ? 'emerald' : lvl.id === 'hsk2' ? 'amber' : 'red'}
                    size="md"
                  />
                </div>

                {/* Modules breakdown pills */}
                <div className="grid grid-cols-2 gap-2 text-[11px] font-semibold text-stone-700">
                  <div className="p-2 rounded-lg bg-[#FAF8F5] border border-[#ECE3D8] flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-stone-500" />
                    <span>{lvl.wordCount} {language === 'fr' ? 'Mots' : tr("Words")}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#FAF8F5] border border-[#ECE3D8] flex items-center gap-1.5">
                    <Headphones className="w-3.5 h-3.5 text-stone-500" />
                    <span>{language === 'fr' ? 'Écoute audio' : tr("Listening")}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#FAF8F5] border border-[#ECE3D8] flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-stone-500" />
                    <span>{language === 'fr' ? 'Lecture textes' : tr("Reading")}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#FAF8F5] border border-[#ECE3D8] flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-stone-500" />
                    <span>{language === 'fr' ? 'Examens blancs' : tr("Mock Exams")}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t border-[#EAE2D5]">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => {
                    onSelectLevel(lvl.id);
                    onNavigate('hsk-detail');
                  }}
                  className="w-full justify-center shadow-xs"
                  iconRight={<ChevronRight className="w-4 h-4" />}
                >
                  {progress > 0 ? t('levels.continueLevel') : t('levels.startLevel')}
                </Button>
              </div>
            </Card>
          );
        })}
      </div>

      <Hsk30Notice />

      {/* Future Roadmap Section */}
      <div className="p-6 sm:p-7 rounded-3xl bg-stone-900 text-white space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#FFD180]">
              {language === 'fr' ? 'Évolution future de la plateforme' : language === 'zh' ? '高阶规划与演进路径' : 'Future Roadmap (HSK 3.0 Ready)'}
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-white mt-1">
              {tr("HSK 4, 5 & 6 Curriculum Expansion")}
            </h3>
          </div>
          <Badge variant="neutral" size="sm">
            {language === 'fr' ? 'Bientôt disponible' : language === 'zh' ? '敬请期待' : 'Coming Soon'}
          </Badge>
        </div>
        <p className="text-xs sm:text-sm text-stone-300 max-w-3xl leading-relaxed">
          {language === 'fr'
            ? 'Prochaines étapes, selon le programme HSK 3.0 : HSK 4 (2 000 mots), HSK 5 (3 600 mots) et HSK 6 (5 400 mots).'
            : language === 'zh'
            ? '下一步将按 HSK 3.0 新大纲推出：HSK 4（2000 词）、HSK 5（3600 词）、HSK 6（5400 词）。'
            : 'Next, following the HSK 3.0 syllabus: HSK 4 (2,000 words), HSK 5 (3,600 words) and HSK 6 (5,400 words).'}
        </p>
      </div>
    </div>
  );
};
