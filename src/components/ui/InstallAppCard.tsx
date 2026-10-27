import React, { useState } from 'react';
import { tr } from '../../locales/tr';
import { Card } from './Card';
import { DeviceMobile, DownloadSimple, ShareIos, X, CheckCircle2 } from '../icons';
import { useInstallPrompt } from '../../utils/pwa';

const DISMISS_KEY = 'hsk_install_dismissed';

interface InstallAppCardProps {
  /** "banner": dashboard, phones only, can be dismissed. "settings": profile page, always shown. */
  variant?: 'banner' | 'settings';
}

export const InstallAppCard: React.FC<InstallAppCardProps> = ({ variant = 'settings' }) => {
  const { installed, canPrompt, ios, install } = useInstallPrompt();
  const [dismissed, setDismissed] = useState(() => {
    try {
      return localStorage.getItem(DISMISS_KEY) === '1';
    } catch {
      return false;
    }
  });

  if (variant === 'banner' && (installed || dismissed || (!canPrompt && !ios))) return null;

  const dismiss = () => {
    setDismissed(true);
    try {
      localStorage.setItem(DISMISS_KEY, '1');
    } catch {
      /* ignore */
    }
  };

  const hint = ios
    ? tr('On iPhone: tap Share, then “Add to Home Screen”.')
    : tr('In your browser menu, choose “Install app” or “Add to Home screen”.');

  return (
    <Card
      variant="default"
      className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${variant === 'banner' ? 'lg:hidden relative' : ''}`}
    >
      <div className="flex items-start gap-3 min-w-0">
        <div className="w-10 h-10 shrink-0 rounded-xl bg-[#1C1917] text-[#FAF8F5] flex items-center justify-center">
          <DeviceMobile className="w-5 h-5" />
        </div>
        <div className="min-w-0 pr-6 sm:pr-0">
          <div className="text-sm font-extrabold text-stone-950">{tr('Install the app')}</div>
          {installed ? (
            <p className="text-xs text-emerald-700 font-semibold mt-0.5 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {tr('The app is installed on this device.')}
            </p>
          ) : (
            <>
              <p className="text-xs text-stone-600 leading-relaxed mt-0.5">
                {tr('HSK Path on your home screen: full screen, faster, and recordings available offline once played.')}
              </p>
              {!canPrompt && (
                <p className="text-xs text-stone-800 font-semibold mt-1.5 flex items-center gap-1.5">
                  {ios && <ShareIos className="w-4 h-4 shrink-0" />}
                  {hint}
                </p>
              )}
            </>
          )}
        </div>
      </div>

      {!installed && canPrompt && (
        <div className="flex items-center gap-2 shrink-0">
          {variant === 'banner' && (
            <button type="button" onClick={dismiss} className="px-3 py-2 text-xs font-bold text-stone-500 hover:text-stone-800">
              {tr('Not now')}
            </button>
          )}
          <button
            type="button"
            onClick={() => install()}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#1C1917] text-white text-sm font-bold hover:bg-[#C52828] transition-colors"
          >
            <DownloadSimple className="w-4 h-4" />
            {tr('Install')}
          </button>
        </div>
      )}

      {variant === 'banner' && !canPrompt && (
        <button
          type="button"
          onClick={dismiss}
          aria-label={tr('Not now')}
          className="absolute top-3 right-3 p-1 text-stone-400 hover:text-stone-700"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </Card>
  );
};
