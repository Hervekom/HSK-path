import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, Sparkles, CheckCircle2, Shield, PlayCircle } from '../components/icons';
import { useI18n } from '../locales';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { LanguageSelector } from '../components/ui/LanguageSelector';
import type { AppState } from '../types';
import { supabase } from '../lib/supabase';

interface LoginViewProps {
  onNavigate: (view: AppState['currentView']) => void;
  onLoginSuccess: (email?: string) => void;
  onDemoLogin: () => void;
}

export const LoginView: React.FC<LoginViewProps> = ({ onNavigate, onLoginSuccess, onDemoLogin }) => {
  const { t } = useI18n();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setInfo(null);
    if (!supabase) {
      onDemoLogin();
      return;
    }
    setLoading(true);
    const { data, error: err } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
    setLoading(false);
    if (err) {
      setError(err.message === 'Invalid login credentials' ? t('auth.errorInvalid') : err.message);
      return;
    }
    onLoginSuccess(data.user?.email ?? email);
  };

  const handleForgotPassword = async () => {
    setError(null);
    setInfo(null);
    if (!supabase) return;
    if (!email.trim()) {
      setError(t('auth.errorEnterEmail'));
      return;
    }
    const { error: err } = await supabase.auth.resetPasswordForEmail(email.trim(), {
      redirectTo: window.location.origin,
    });
    if (err) setError(err.message);
    else setInfo(t('auth.resetSent'));
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

      {/* Main Login Form Card */}
      <div className="max-w-md w-full mx-auto my-8">
        <Card variant="elevated" className="p-8 sm:p-10 space-y-6">
          <div className="text-center space-y-1.5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              {t('auth.welcomeBack')}
            </h2>
            <p className="text-sm text-slate-500">
              {t('auth.signInSubtitle')}
            </p>
          </div>

          {/* Demo Mode Notice Box */}
          <div 
            onClick={() => onDemoLogin()}
            className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-center gap-2.5 cursor-pointer hover:bg-emerald-100/80 transition-colors"
          >
            <PlayCircle className="w-4 h-4 text-emerald-600 shrink-0" />
            <div className="flex-1">
              <span className="font-bold">{t('auth.demoTitle')}</span> {t('auth.demoText')}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
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
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 text-sm font-medium bg-white outline-none transition-all"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  {t('auth.password')}
                </label>
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-xs text-slate-500 hover:text-slate-900 cursor-pointer"
                >
                  {t('auth.forgotPassword')}
                </button>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 text-sm font-medium bg-white outline-none transition-all"
                />
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 text-xs font-medium text-slate-600 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded border-slate-300 text-slate-900 focus:ring-slate-900"
                />
                <span>{t('auth.rememberMe')}</span>
              </label>
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-medium">{error}</div>
            )}
            {info && (
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium">{info}</div>
            )}

            {/* Sign In Button */}
            <Button
              type="submit"
              disabled={loading}
              variant="primary"
              size="lg"
              className="w-full justify-center shadow-sm"
              iconRight={<ArrowRight className="w-4 h-4" />}
            >
              {loading ? t('auth.loading') : t('nav.signIn')}
            </Button>
          </form>

          {/* Switch to Sign Up */}
          <div className="text-center text-xs text-slate-600 pt-2">
            <span>{t('auth.noAccount')} </span>
            <button
              onClick={() => onNavigate('signup')}
              className="font-bold text-slate-900 hover:underline cursor-pointer"
            >
              {t('auth.createAccount')}
            </button>
          </div>
        </Card>
      </div>

      {/* Bottom info */}
      <div className="text-center text-xs text-slate-400">
        © 2026 HSK Path
      </div>
    </div>
  );
};
