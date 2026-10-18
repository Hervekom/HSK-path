import React, { useState } from 'react';
import { tr } from '../locales/tr';
import {
  User,
  Mail,
  Target,
  Clock,
  Globe,
  Volume2,
  Save,
  CheckCircle2,
  RotateCcw,
  Sparkles,
} from '../components/icons';
import { useI18n, SUPPORTED_LANGUAGES } from '../locales';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { LanguageSelector } from '../components/ui/LanguageSelector';
import type { UserProfile, Language } from '../types';

interface ProfileSettingsViewProps {
  user: UserProfile;
  onUpdateProfile: (updated: Partial<UserProfile>) => void;
  onResetProgress: () => void;
}

export const ProfileSettingsView: React.FC<ProfileSettingsViewProps> = ({
  user,
  onUpdateProfile,
  onResetProgress,
}) => {
  const { t, language, setLanguage } = useI18n();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [currentHsk, setCurrentHsk] = useState<'hsk1' | 'hsk2' | 'hsk3'>(user.currentHsk);
  const [dailyGoal, setDailyGoal] = useState<number>(user.dailyGoalMinutes);
  const [audioSpeed, setAudioSpeed] = useState<number>(1.0);
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateProfile({
      name,
      email,
      currentHsk,
      dailyGoalMinutes: dailyGoal,
    });
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-150 pb-12">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
          {t('settings.title')}
        </h1>
        <p className="text-sm sm:text-base text-slate-500 font-medium mt-1">
          {tr("Manage your personal study roadmap, target HSK exam, and interface preferences.")}
        </p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* User Info Card */}
        <Card variant="default" className="p-6 sm:p-8 space-y-5">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100 font-bold text-sm text-slate-900">
            <User className="w-4 h-4 text-slate-500" />
            <span>{tr("Learner Profile")}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                {tr("Full Name")}
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium bg-white outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                {tr("Email Address")}
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium bg-white outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900"
              />
            </div>
          </div>
        </Card>

        {/* Academic Targets Card */}
        <Card variant="default" className="p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100 font-bold text-sm text-slate-900">
            <Target className="w-4 h-4 text-slate-500" />
            <span>{t('settings.targetHsk')}</span>
          </div>

          {/* HSK Level Switcher */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              {tr("Select Primary Target Syllabus")}
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'hsk1', label: tr("HSK 1"), sub: tr("Beginner (150 words)") },
                { id: 'hsk2', label: tr("HSK 2"), sub: tr("Elementary (300 words)") },
                { id: 'hsk3', label: tr("HSK 3"), sub: tr("Intermediate (600 words)") },
              ].map((lvl) => (
                <button
                  key={lvl.id}
                  type="button"
                  onClick={() => setCurrentHsk(lvl.id as any)}
                  className={`p-4 rounded-2xl border text-center transition-all cursor-pointer ${
                    currentHsk === lvl.id
                      ? 'border-slate-900 bg-slate-900 text-white shadow-xs'
                      : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100 text-slate-800'
                  }`}
                >
                  <div className="font-bold text-base">{lvl.label}</div>
                  <div className={`text-[11px] mt-0.5 ${currentHsk === lvl.id ? 'text-slate-300' : 'text-slate-500'}`}>
                    {lvl.sub}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Daily Goal Slider */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                {t('settings.dailyGoal')}
              </label>
              <span className="text-xs font-bold text-rose-800">
                {dailyGoal} {t('common.minutes')}{" "}{tr("/ day")}
              </span>
            </div>
            <input
              type="range"
              min={10}
              max={60}
              step={5}
              value={dailyGoal}
              onChange={(e) => setDailyGoal(Number(e.target.value))}
              className="w-full accent-slate-900 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-medium">
              <span>{tr("10 min (Casual)")}</span>
              <span>{tr("20 min (Recommended)")}</span>
              <span>{tr("60 min (Intensive)")}</span>
            </div>
          </div>
        </Card>

        {/* Interface & Audio Preferences Card */}
        <Card variant="default" className="p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100 font-bold text-sm text-slate-900">
            <Globe className="w-4 h-4 text-slate-500" />
            <span>{tr("Interface Language & Audio Preferences")}</span>
          </div>

          {/* Language Selection Radios */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              {t('settings.interfaceLanguage')}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {SUPPORTED_LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => setLanguage(lang.code)}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                    language === lang.code
                      ? 'border-slate-900 bg-slate-50 text-slate-950 font-bold ring-1 ring-slate-900'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div>
                    <div className="text-sm font-bold">{lang.nativeName}</div>
                    <div className="text-xs text-slate-400 font-normal">{tr(lang.name)}</div>
                  </div>
                  {language === lang.code && (
                    <CheckCircle2 className="w-4 h-4 text-slate-900" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Audio Default Speed */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              {tr("Default Speech Engine Pacing")}
            </label>
            <div className="flex gap-3">
              {[
                { val: 1.0, label: tr("1.0x Normal Native Pacing") },
                { val: 0.8, label: tr("0.8x Slower Practice Pacing") },
              ].map((sp) => (
                <button
                  key={sp.val}
                  type="button"
                  onClick={() => setAudioSpeed(sp.val)}
                  className={`px-4 py-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    audioSpeed === sp.val
                      ? 'border-slate-900 bg-slate-900 text-white shadow-xs'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {sp.label}
                </button>
              ))}
            </div>
          </div>
        </Card>

        {/* Save Bar */}
        <div className="flex items-center justify-between pt-2">
          {isSaved ? (
            <div className="text-xs font-bold text-emerald-600 flex items-center gap-1.5 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4" />
              <span>{tr("Settings saved successfully!")}</span>
            </div>
          ) : (
            <div />
          )}

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="shadow-sm w-full sm:w-auto"
            icon={<Save className="w-4 h-4" />}
          >
            {t('settings.savePreferences')}
          </Button>
        </div>
      </form>
    </div>
  );
};
