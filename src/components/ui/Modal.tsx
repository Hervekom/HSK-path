import React, { useEffect } from 'react';
import { X } from '../icons';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
  id?: string;
  /** No inner padding: the content lays out its own header, body and footer (lesson…). */
  flush?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = 'md',
  id,
  flush = false,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const maxWidthStyles = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
  };

  return (
    <div
      id={id}
      className={`fixed inset-0 z-50 flex items-center justify-center ${flush ? 'p-2 sm:p-4' : 'p-4'} bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-200`}
      onClick={onClose}
    >
      <div
        className={`w-full ${maxWidthStyles[maxWidth]} bg-white text-[#241F1C] rounded-3xl shadow-2xl border border-[#E3D8CA] overflow-hidden transform transition-all duration-200 scale-100 ${flush ? 'max-h-[94vh] sm:max-h-[90vh]' : 'max-h-[90vh]'} flex flex-col`}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#EAE2D5] bg-[#FAF8F5]">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight">{title}</h3>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-stone-500 hover:text-stone-900 hover:bg-[#EDE5DA] transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}
        <div className={flush ? 'flex-1 min-h-0 flex flex-col' : 'p-6 overflow-y-auto'}>{children}</div>
      </div>
    </div>
  );
};

