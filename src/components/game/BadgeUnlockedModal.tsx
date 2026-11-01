import React from 'react';
import { tr } from '../../locales/tr';
import type { BadgeDef } from '../../game/badges';
import { BadgeIcon } from './BadgeIcon';

/** Celebration when one or more badges are unlocked. */
export const BadgeUnlockedModal: React.FC<{ badges: BadgeDef[]; onClose: () => void; onSeeAll: () => void }> = ({ badges, onClose, onSeeAll }) => {
  const main = badges[badges.length - 1];
  const others = badges.slice(0, -1);
  return (
    <div className="fixed inset-0 z-[70] bg-stone-950/60 flex items-center justify-center p-4" onClick={onClose}>
      <div role="dialog" aria-modal="true" className="w-full max-w-sm bg-white rounded-3xl shadow-xl p-6 text-center space-y-4 animate-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
        <p className="text-xs font-bold uppercase tracking-wider text-[#C52828]">{tr(badges.length > 1 ? 'New badges!' : 'New badge!')}</p>
        <div className="flex justify-center">
          <BadgeIcon icon={main.icon} tier={main.tier} earned size="lg" />
        </div>
        <div>
          <h2 className="text-xl font-extrabold text-stone-950">{tr(main.title)}</h2>
          <p className="text-sm text-stone-600 mt-1">{tr(main.desc)}</p>
        </div>
        {others.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2">
            {others.map((b) => (
              <span key={b.id} className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-[#FAF8F5] border border-[#EFE8DE] text-xs font-semibold text-stone-700">
                <BadgeIcon icon={b.icon} tier={b.tier} earned size="sm" /> {tr(b.title)}
              </span>
            ))}
          </div>
        )}
        <div className="flex gap-2">
          <button type="button" onClick={onSeeAll} className="flex-1 px-4 py-2.5 rounded-2xl border border-[#E2D9CC] text-sm font-semibold text-stone-700 cursor-pointer">
            {tr('My badges')}
          </button>
          <button type="button" onClick={onClose} className="flex-1 px-4 py-2.5 rounded-2xl bg-[#C52828] text-white text-sm font-bold cursor-pointer">
            {tr('Great!')}
          </button>
        </div>
      </div>
    </div>
  );
};
