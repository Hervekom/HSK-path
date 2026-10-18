import React, { useState } from 'react';
import { User, Mail, Lock, ArrowRight, Target, Clock, CheckCircle2 } from 'lucide-react';
import { useI18n } from '../locales';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { LanguageSelector } from '../components/ui/LanguageSelector';
import { supabase } from '../lib/supabase';
import type { AppState, UserProfile } from '../types';

interface SignUpViewProps {
  onNavigate: (view: AppState['currentView']) => void;
  onSignUpSuccess: (profileData: Partial<UserProfile>) => void;
}

export const SignUpView: React.FC<SignUpViewProps> = ({ onNavigate, onSignUpSuccess }) => {
  const { t } = useI18n();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentHsk, setCurrentHsk] = useState<'hsk1' | 'hsk2' | 'hsk3'>('hsk2');
  const [dailyGoal, setDailyGoal] = useState<number>(20);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setInfo(null);
    const profileData = {
      name: name.trim() || email.split('@')[0] || 'Student',
      email: email.trim(),
      currentHsk,
      dailyGoalMinutes: dailyGoal,
    };
    if (!supabase) {
      onSignUpSuccess(profileData);
      return;
    }
    if (password.length < 6) {
      setError(t('auth.errorPasswordShort'));
      return;
    }
    setLoading(true);
    const { data, error: err } = await supabase.auth.signUp({
      email: profileData.email,
      password,
      options: {
        data: { name: profileData.name, currentHsk, dailyGoalMinutes: dailyGoal },
        emailRedirectTo: window.location.origin,
      },
    });
    setLoading(false);
    if (err) {
      setError(err.message);
      return;
    }
    if (!data.session) {
      // Email confirmation is enabled on the project
      setInfo(t('auth.confirmEmailSent'));
      return;
    }
    onSignUpSuccess(profileData);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-neutral-50/70 text-slate-900 px-4 py-8">
      {/* Top Header */}
      <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
        <div
          onClick={() => onNavigate('landing')}
          className="flex items-center gap-2.5 cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center text-white shadow-xs">
            <span className="font-hanzi font-bold text-base text-rose-400">道</span>
          </div>
          <span className="font-bold text-xl text-slate-900 tracking-tight">HSK Path</span>
        </div>
        <LanguageSelector />
      </div>

      {/* Main Sign Up Form */}
      <div className="max-w-lg w-full mx-auto my-8">
        <Card variant="elevated" className="p-8 sm:p-10 space-y-6">
          <div className="text-center space-y-1.5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              {t('auth.createAccount')}
            </h2>
            <p className="text-sm text-slate-500">
              {t('auth.signUpSubtitle')}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                {t('auth.fullName')}
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="e.g. Marie Laurent / David Wang"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 text-sm font-medium bg-white outline-none"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                {t('auth.email')}
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="name@university.edu"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 text-sm font-medium bg-white outline-none"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                {t('auth.password')}
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Create a secure password"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 text-sm font-medium bg-white outline-none"
                />
              </div>
            </div>

            {/* Target HSK Level selection */}
            <div className="space-y-1.5 pt-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                {t('auth.currentLevel')}
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'hsk1', label: 'HSK 1', sub: '150 words' },
                  { id: 'hsk2', label: 'HSK 2', sub: '300 words' },
                  { id: 'hsk3', label: 'HSK 3', sub: '600 words' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCurrentHsk(item.id as any)}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                      currentHsk === item.id
                        ? 'border-slate-900 bg-slate-900 text-white shadow-xs'
                        : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    <div className="font-bold text-sm">{item.label}</div>
                    <div className={`text-[10px] mt-0.5 ${currentHsk === item.id ? 'text-slate-300' : 'text-slate-500'}`}>
                      {item.sub}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Daily Study Goal */}
            <div className="space-y-1.5 pt-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  {t('auth.dailyGoal')}
                </label>
                <span className="text-xs font-bold text-rose-800">
                  {dailyGoal} {t('auth.minutesPerDay')}
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
              <div className="flex justify-between text-[11px] text-slate-400 font-medium px-0.5">
                <span>10 min (Casual)</span>
                <span>20 min (Standard)</span>
                <span>45+ min (Intensive)</span>
              </div>
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-medium">{error}</div>
            )}
            {info && (
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium">{info}</div>
            )}

            {/* Submit */}
            <div className="pt-3">
              <Button
                type="submit"
                disabled={loading}
                variant="primary"
                size="lg"
                className="w-full justify-center shadow-sm"
                iconRight={<ArrowRight className="w-4 h-4" />}
              >
                {loading ? t('auth.loading') : t('auth.createAccount')}
              </Button>
            </div>
          </form>

          {/* Switch to Login */}
          <div className="text-center text-xs text-slate-600 pt-2 border-t border-slate-100">
            <span>{t('auth.haveAccount')} </span>
            <button
              onClick={() => onNavigate('login')}
              className="font-bold text-slate-900 hover:underline cursor-pointer"
            >
              {t('nav.signIn')}
            </button>
          </div>
        </Card>
      </div>

      <div className="text-center text-xs text-slate-400">
        © 2026 HSK Path. Secure Academic Preparation SaaS.
      </div>
    </div>
  );
};
