import React from 'react';
import { tr } from '../../locales/tr';
import { Modal } from './Modal';
import { Button } from './Button';
import { Badge } from './Badge';
import { CheckCircle2, Crown, Sparkles, Lock, ShieldCheck, Zap, SealCheck } from '../icons';
import { useI18n } from '../../locales';

interface ProUpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUnlockPro?: () => void;
  title?: string;
  sourceFeature?: string;
}

export const ProUpgradeModal: React.FC<ProUpgradeModalProps> = ({
  isOpen,
  onClose,
  onUnlockPro,
  title,
  sourceFeature,
}) => {
  const { t, language } = useI18n();

  const handleActivate = () => {
    if (onUnlockPro) {
      onUnlockPro();
    }
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="lg"
      id="pro-upgrade-modal"
    >
      <div className="p-6 sm:p-8 space-y-6">
        {/* Header Badge & Title */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C52828]/10 border border-[#C52828]/20 text-[#C52828] text-xs font-bold tracking-wide">
            <Crown className="w-4 h-4" />
            <span>{tr("HSK PATH PRO • PASS SCHOLAR")}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            {title || (language === 'fr' ? 'Débloquez tout le programme HSK 2 & 3' : language === 'zh' ? '升级 Pro 解锁完整 HSK 2 & 3 题库与进阶课程' : 'Unlock Full HSK 2 & HSK 3 Curriculum')}
          </h2>
          {sourceFeature && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-200/80 rounded-lg text-xs text-amber-900 font-medium">
              <Lock className="w-3.5 h-3.5 text-amber-700" />
              <span>
                {language === 'fr' 
                  ? `Contenu Pro : ${sourceFeature}` 
                  : language === 'zh' 
                  ? `Pro 专属内容：${sourceFeature}` 
                  : `Pro Content: ${sourceFeature}`}
              </span>
            </div>
          )}
          <p className="text-sm text-stone-600 max-w-lg mx-auto">
            {language === 'fr'
              ? 'HSK 1 reste 100% gratuit. Les 2 examens blancs et 2 premières leçons de HSK 2 & 3 sont offerts. Passez à Pro pour débloquer tout le reste.'
              : language === 'zh'
              ? 'HSK 1 级永久全免费。HSK 2 与 HSK 3 均包含 2 套全真模拟卷与前 2 节免费体验课。升级 Pro 畅学全部进阶内容。'
              : 'HSK 1 remains 100% free. HSK 2 & 3 include 2 full mock exams and first 2 lessons for free. Upgrade to Pro to unlock all remaining lessons & exams.'}
          </p>
        </div>

        {/* Free vs Pro Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* Free Tier Card */}
          <div className="p-5 rounded-2xl bg-[#F6F2EA] border border-[#E5DACD] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-600">
                {language === 'fr' ? 'Offre Gratuite' : language === 'zh' ? '免费体验' : 'Free Tier'}
              </span>
              <Badge variant="success" size="sm">
                {language === 'fr' ? '100% Gratuit' : language === 'zh' ? '永久免费' : 'Free Always'}
              </Badge>
            </div>
            <div className="text-lg font-bold text-stone-900">
              0€ <span className="text-xs text-stone-500 font-normal">/ {language === 'fr' ? 'pour toujours' : language === 'zh' ? '永久' : 'forever'}</span>
            </div>
            <ul className="space-y-2 text-xs text-stone-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>{tr("HSK 1 :")}</strong> {language === 'fr' ? '100% complet (toutes les leçons & examens)' : language === 'zh' ? '全部课程与模拟测试全免费' : '100% full access (all lessons & mock tests)'}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>{tr("HSK 2 & 3 :")}</strong> {language === 'fr' ? '2 examens blancs complets offerts par niveau' : language === 'zh' ? '每级别免费提供 2 套全真模拟试卷' : '2 full simulation mock tests free per level'}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>{tr("HSK 2 & 3 :")}</strong> {language === 'fr' ? 'Les 2 premières leçons complètes offertes' : language === 'zh' ? '前 2 课完整精讲与对话练习免费' : 'First 2 lessons free for HSK 2 & HSK 3'}</span>
              </li>
              <li className="flex items-start gap-2 text-stone-400">
                <Lock className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{language === 'fr' ? 'Leçons 3+ et examens avancés verrouillés' : language === 'zh' ? '第 3 课起与高阶考题需升级' : 'Lessons 3+ & advanced exam pool locked'}</span>
              </li>
            </ul>
          </div>

          {/* Pro Card */}
          <div className="p-5 rounded-2xl bg-stone-900 text-white border border-stone-800 space-y-3 relative overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 transform translate-x-3 -translate-y-3 w-24 h-24 bg-[#C52828]/20 rounded-full blur-xl pointer-events-none" />
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FFD180] flex items-center gap-1">
                <SealCheck className="w-3.5 h-3.5" />
                {language === 'fr' ? 'Pass Pro HSK' : language === 'zh' ? 'Pro 畅学通' : 'Pro All-Access'}
              </span>
              <Badge variant="danger" size="sm">
                {language === 'fr' ? 'Populaire' : language === 'zh' ? '推荐' : 'Recommended'}
              </Badge>
            </div>
            <div className="text-lg font-bold text-white">
              9,99€ <span className="text-xs text-stone-400 font-normal">/ {language === 'fr' ? 'mois ou 49€ à vie' : language === 'zh' ? '月或 49€ 终身' : 'month or 49€ lifetime'}</span>
            </div>
            <ul className="space-y-2 text-xs text-stone-200">
              <li className="flex items-start gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#FFD180] shrink-0 mt-0.5" />
                <span>{language === 'fr' ? 'Toutes les leçons (3 à 12+) HSK 2 & HSK 3' : language === 'zh' ? '解锁 HSK 2 & 3 全部第 3-12+ 进阶课程' : 'All lessons (3 to 12+) for HSK 2 & HSK 3'}</span>
              </li>
              <li className="flex items-start gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#FFD180] shrink-0 mt-0.5" />
                <span>{language === 'fr' ? 'Examens blancs illimités (C, D & pool officiel)' : language === 'zh' ? '无限次全真模拟考题库（含 C 卷与全真题库）' : 'Unlimited official simulation mock tests (C, D & pools)'}</span>
              </li>
              <li className="flex items-start gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#FFD180] shrink-0 mt-0.5" />
                <span>{language === 'fr' ? 'Analyse détaillée des fautes & grammaire' : language === 'zh' ? '独家语法易错点深度复盘与书写纠错' : 'In-depth grammatical mistake analysis'}</span>
              </li>
              <li className="flex items-start gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#FFD180] shrink-0 mt-0.5" />
                <span>{language === 'fr' ? 'Audio natif avec contrôle de vitesse (0.8x - 1.2x)' : language === 'zh' ? '母语者高清录音与倍速调节' : 'Native audio recordings with custom playback speed'}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <Button
            variant="primary"
            size="lg"
            onClick={handleActivate}
            className="w-full sm:w-2/3 justify-center shadow-md bg-[#C52828] hover:bg-[#A92323]"
            iconRight={<Zap className="w-4 h-4" />}
          >
            {language === 'fr' 
              ? 'Activer le Pass Pro (Accès Immédiat)' 
              : language === 'zh' 
              ? '立即激活 Pro 通行证' 
              : 'Activate Pro Pass (Instant Access)'}
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={onClose}
            className="w-full sm:w-1/3 justify-center text-stone-700"
          >
            {language === 'fr' ? 'Continuer en Gratuit' : language === 'zh' ? '稍后体验' : 'Keep Free Tier'}
          </Button>
        </div>

        <div className="text-center text-xs text-stone-500 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>
            {language === 'fr'
              ? 'HSK 1 & vos 2 examens blancs gratuits restent accessibles sans limite de temps.'
              : language === 'zh'
              ? 'HSK 1 级与各级别 2 套免费模拟考永久可用，无时间限制。'
              : 'HSK 1 & your 2 free mock exams remain accessible with no time limits.'}
          </span>
        </div>
      </div>
    </Modal>
  );
};
