import React from 'react';
import { tr, trPos } from '../locales/tr';
import {
  Volume2,
  Star,
  CheckCircle2,
  BookOpen,
  Sparkles,
  Layers,
  X,
} from '../components/icons';
import { useI18n } from '../locales';
import { Modal } from '../components/ui/Modal';
import { Badge } from '../components/ui/Badge';
import { SpeechButton } from '../components/ui/SpeechButton';
import { Button } from '../components/ui/Button';
import type { VocabularyWord } from '../types';

interface VocabularyDetailModalProps {
  word: VocabularyWord | null;
  isOpen: boolean;
  onClose: () => void;
  onToggleLearned: (id: string) => void;
  onToggleFavorite: (id: string) => void;
}

export const VocabularyDetailModal: React.FC<VocabularyDetailModalProps> = ({
  word,
  isOpen,
  onClose,
  onToggleLearned,
  onToggleFavorite,
}) => {
  const { t, getLocalized } = useI18n();

  if (!word) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <div className="space-y-6">
        {/* Header Badges & Actions */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Badge variant={word.level as any}>{word.level.toUpperCase()}</Badge>
            <Badge variant="neutral">{trPos(word.partOfSpeech)}</Badge>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleFavorite(word.id)}
              className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                word.isFavorite
                  ? 'bg-amber-50 border-amber-300 text-amber-500'
                  : 'bg-white border-slate-200 text-slate-400 hover:text-slate-600'
              }`}
              title={tr("Add to favorites")}
            >
              <Star className={`w-4 h-4 ${word.isFavorite ? 'fill-amber-400' : ''}`} />
            </button>
            <button
              onClick={() => onToggleLearned(word.id)}
              className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                word.isLearned
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-600'
                  : 'bg-white border-slate-200 text-slate-400 hover:text-slate-600'
              }`}
              title={tr("Mark as learned")}
            >
              <CheckCircle2 className={`w-4 h-4 ${word.isLearned ? 'fill-emerald-500 text-white' : ''}`} />
            </button>
          </div>
        </div>

        {/* Hero Character Card */}
        <div className="text-center py-6 bg-slate-50/80 rounded-2xl border border-slate-100 space-y-3">
          <div className="font-hanzi font-bold text-5xl sm:text-6xl text-slate-950 tracking-wider">
            {word.hanzi}
          </div>
          <div className="text-lg font-bold text-slate-700">
            {word.pinyin}
          </div>
          <div className="text-base font-semibold text-rose-800">
            {getLocalized(word.meaning)}
          </div>
          <div className="pt-2 flex justify-center">
            <SpeechButton
              text={word.hanzi}
              size="md"
              showLabel
              label={tr("Listen Pronunciation")}
              allowSpeedToggle
            />
          </div>
        </div>

        {/* Character Properties (Strokes & Radical) */}
        {(word.radical || word.strokeCount) && (
          <div className="grid grid-cols-2 gap-3 text-xs">
            {word.radical && (
              <div className="p-3 rounded-xl bg-neutral-50 border border-slate-200/80 flex items-center justify-between">
                <span className="text-slate-500 font-semibold">{t('vocab.radical')}</span>
                <span className="font-hanzi font-bold text-slate-900 text-sm">{word.radical}</span>
              </div>
            )}
            {word.strokeCount && (
              <div className="p-3 rounded-xl bg-neutral-50 border border-slate-200/80 flex items-center justify-between">
                <span className="text-slate-500 font-semibold">{t('vocab.strokeCount')}</span>
                <span className="font-bold text-slate-900 text-sm">{word.strokeCount}</span>
              </div>
            )}
          </div>
        )}

        {/* Example Sentences */}
        {word.examples && word.examples.length > 0 && (
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
              {t('vocab.examples')}
            </div>
            <div className="space-y-3">
              {word.examples.map((ex, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-slate-200 space-y-2"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="font-hanzi font-bold text-base text-slate-900">
                        {ex.hanzi}
                      </div>
                      <div className="text-xs font-semibold text-slate-500">
                        {ex.pinyin}
                      </div>
                      <div className="text-xs text-slate-700">
                        {getLocalized(ex.translation)}
                      </div>
                    </div>
                    <SpeechButton text={ex.hanzi} size="sm" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="pt-2 flex items-center justify-between">
          <Button
            variant={word.isLearned ? 'outline' : 'primary'}
            size="md"
            onClick={() => onToggleLearned(word.id)}
            className="w-full justify-center"
            icon={<CheckCircle2 className="w-4 h-4" />}
          >
            {word.isLearned ? t('vocab.markedLearned') : t('vocab.markAsLearned')}
          </Button>
        </div>
      </div>
    </Modal>
  );
};
