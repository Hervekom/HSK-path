import React, { useState, useEffect } from 'react';
import {
  Clock,
  Volume2,
  Headphones,
  CheckCircle2,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  Send,
  HelpCircle,
  FileText,
} from 'lucide-react';
import { useI18n } from '../locales';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Modal } from '../components/ui/Modal';
import { SpeechButton } from '../components/ui/SpeechButton';
import type { MockTest, MockTestQuestion, TestResult } from '../types';

interface MockTestExamViewProps {
  test: MockTest;
  onSubmitTest: (userAnswers: Record<string, string>, timeSpentSeconds: number) => void;
  onExit: () => void;
}

export const MockTestExamView: React.FC<MockTestExamViewProps> = ({
  test,
  onSubmitTest,
  onExit,
}) => {
  const { t, getLocalized } = useI18n();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [secondsRemaining, setSecondsRemaining] = useState(test.durationMinutes * 60);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [activeSection, setActiveSection] = useState<'listening' | 'reading' | 'writing'>('listening');

  const totalQuestions = test.questions.length;
  const currentQ = test.questions[currentQuestionIndex] || test.questions[0];

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleFinalSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTimer = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (optionId: string) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optionId,
    }));
  };

  const handleFinalSubmit = () => {
    setShowSubmitModal(false);
    const timeSpent = test.durationMinutes * 60 - secondsRemaining;
    onSubmitTest(userAnswers, timeSpent);
  };

  const answeredCount = Object.keys(userAnswers).length;
  const unansweredCount = totalQuestions - answeredCount;

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-12 animate-in fade-in duration-150">
      {/* Sticky Exam Top Bar */}
      <div className="sticky top-16 z-20 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            {test.level.toUpperCase()} Official Simulation
          </div>
          <h2 className="text-lg font-extrabold text-slate-950">{test.title}</h2>
        </div>

        <div className="flex items-center gap-4">
          {/* Timer Display */}
          <div className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl border font-mono font-bold text-sm shadow-2xs ${
            secondsRemaining < 300
              ? 'bg-rose-50 border-rose-300 text-rose-700 animate-pulse'
              : 'bg-slate-900 border-slate-900 text-white'
          }`}>
            <Clock className="w-4 h-4" />
            <span>{formatTimer(secondsRemaining)}</span>
          </div>

          <Button
            variant="primary"
            size="sm"
            onClick={() => setShowSubmitModal(true)}
            className="shadow-xs text-xs"
            icon={<Send className="w-3.5 h-3.5" />}
          >
            Submit Exam
          </Button>
        </div>
      </div>

      {/* Main Grid: Left Question Viewer + Right Navigator Palette */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Question Area */}
        <div className="lg:col-span-2 space-y-6">
          <Card variant="elevated" className="p-6 sm:p-8 space-y-6 min-h-[480px] flex flex-col justify-between">
            <div className="space-y-6">
              {/* Question Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Badge variant={currentQ.section === 'listening' ? 'hsk2' : currentQ.section === 'reading' ? 'hsk1' : 'hsk3'}>
                    Section: {currentQ.section.toUpperCase()}
                  </Badge>
                  <span className="text-xs text-slate-500 font-semibold">
                    Question {currentQuestionIndex + 1} of {totalQuestions}
                  </span>
                </div>
                <span className="text-xs font-bold text-slate-400">
                  {currentQ.points} Points
                </span>
              </div>

              {/* Listening Audio Station if audioText is present */}
              {currentQ.audioText && (
                <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                      <Headphones className="w-4 h-4" />
                      <span>Listening Audio Track</span>
                    </div>
                    <span className="text-xs text-slate-400 font-mono">Question #{currentQuestionIndex + 1}</span>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <SpeechButton
                      text={currentQ.audioText}
                      size="md"
                      showLabel
                      label="Play Audio Clip"
                      allowSpeedToggle
                      className="bg-white text-slate-900 font-bold text-xs"
                    />
                    <span className="text-xs text-slate-400">Pacing: 1.0x / 0.8x</span>
                  </div>
                </div>
              )}

              {/* Reading Passage if Passage exists */}
              {currentQ.passage && (
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      {currentQ.section === 'reading' ? 'Reading Passage' : 'Context Sentence'}
                    </div>
                    <SpeechButton text={currentQ.passage} size="sm" />
                  </div>
                  <p className="font-hanzi font-normal text-lg text-slate-900 leading-relaxed">
                    {currentQ.passage}
                  </p>
                  {currentQ.pinyin && (
                    <p className="text-xs text-slate-500 pt-1 border-t border-slate-200/50">
                      {currentQ.pinyin}
                    </p>
                  )}
                </div>
              )}

              {/* Question Text / Prompt Statement */}
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-950 leading-snug">
                  {currentQ.questionText ||
                    (currentQ.prompt ? getLocalized(currentQ.prompt) : '') ||
                    (currentQ as any).question ||
                    (currentQ.section === 'listening'
                      ? 'Listen to the recording and select the correct option:'
                      : 'Choose the correct answer:')}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-2.5">
                {currentQ.options.map((opt) => {
                  const isSelected = userAnswers[currentQ.id] === opt.id;

                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleSelectOption(opt.id)}
                      className={`w-full p-4 rounded-xl border text-left text-sm transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        isSelected
                          ? 'bg-slate-900 border-slate-900 text-white font-semibold shadow-xs'
                          : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                          isSelected ? 'bg-white text-slate-900' : 'bg-slate-100 text-slate-700'
                        }`}>
                          {opt.id.toUpperCase()}
                        </span>
                        <span>{opt.text}</span>
                      </div>
                      {isSelected && <CheckCircle2 className="w-5 h-5 text-rose-400 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Nav Prev / Next */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-100">
              <Button
                variant="outline"
                size="md"
                onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
                disabled={currentQuestionIndex === 0}
                icon={<ChevronLeft className="w-4 h-4" />}
              >
                Previous
              </Button>
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  if (currentQuestionIndex + 1 < totalQuestions) {
                    setCurrentQuestionIndex((prev) => prev + 1);
                  } else {
                    setShowSubmitModal(true);
                  }
                }}
                iconRight={<ChevronRight className="w-4 h-4" />}
              >
                {currentQuestionIndex + 1 < totalQuestions ? 'Next Question' : 'Finish & Review'}
              </Button>
            </div>
          </Card>
        </div>

        {/* Right 1 Col: Question Navigator Palette */}
        <div className="space-y-6">
          <Card variant="default" className="p-6 space-y-5 sticky top-36">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-slate-900">Question Navigator</h4>
              <span className="text-xs text-slate-500 font-semibold">
                {answeredCount} / {totalQuestions} answered
              </span>
            </div>

            {/* Palette legend */}
            <div className="flex items-center gap-4 text-[11px] font-semibold text-slate-600 pb-2 border-b border-slate-100">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-900" /> Current
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Answered
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-200" /> Empty
              </span>
            </div>

            {/* Numbers Grid */}
            <div className="grid grid-cols-5 gap-2">
              {test.questions.map((q, idx) => {
                const isCurrent = idx === currentQuestionIndex;
                const isAnswered = !!userAnswers[q.id];

                let btnStyle = 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200';
                if (isCurrent) {
                  btnStyle = 'bg-slate-900 text-white border-slate-900 ring-2 ring-slate-900/20 font-bold';
                } else if (isAnswered) {
                  btnStyle = 'bg-emerald-50 text-emerald-800 border-emerald-300 font-bold';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentQuestionIndex(idx)}
                    className={`h-10 rounded-xl border text-xs font-semibold transition-all cursor-pointer flex items-center justify-center ${btnStyle}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            {/* Quick summary button */}
            <div className="pt-2 border-t border-slate-100">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowSubmitModal(true)}
                className="w-full justify-center text-xs"
              >
                Ready to Finish?
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Submit Confirmation Modal */}
      <Modal isOpen={showSubmitModal} onClose={() => setShowSubmitModal(false)} size="sm">
        <div className="space-y-5 text-center">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-slate-100 text-slate-800 flex items-center justify-center">
            <Send className="w-6 h-6" />
          </div>

          <div className="space-y-1">
            <h3 className="text-xl font-bold text-slate-950">Submit Your Exam?</h3>
            <p className="text-xs text-slate-500">
              You still have <strong className="text-slate-800 font-mono">{formatTimer(secondsRemaining)}</strong> remaining.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5 text-left">
            <div className="flex justify-between">
              <span className="text-slate-600">Answered Questions:</span>
              <span className="font-bold text-emerald-600">{answeredCount}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Unanswered Questions:</span>
              <span className="font-bold text-amber-600">{unansweredCount}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <Button
              variant="outline"
              size="md"
              onClick={() => setShowSubmitModal(false)}
              className="w-full justify-center"
            >
              Continue Test
            </Button>
            <Button
              variant="primary"
              size="md"
              onClick={handleFinalSubmit}
              className="w-full justify-center"
            >
              Confirm Submit
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
