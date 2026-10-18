import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outline' | 'interactive' | 'dark' | 'glass';
  className?: string;
  id?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className = '',
  id,
  ...props
}) => {
  const variantStyles = {
    default: 'bg-white border border-[#E8E2D8] shadow-2xs rounded-2xl text-[#1C1917]',
    elevated: 'bg-white border border-[#E0D7CB] shadow-sm rounded-2xl text-[#1C1917]',
    outline: 'bg-transparent border border-[#E2D8CA] rounded-2xl text-[#1C1917]',
    interactive: 'bg-white border border-[#E8E2D8] shadow-2xs hover:shadow-sm hover:border-[#C52828]/40 hover:bg-[#FFFEFC] transition-all duration-200 cursor-pointer rounded-2xl active:scale-[0.99] text-[#1C1917]',
    dark: 'bg-[#1C1917] border border-stone-800 text-[#FAF8F5] shadow-sm rounded-2xl',
    glass: 'bg-white/80 backdrop-blur-md border border-white/60 shadow-2xs rounded-2xl text-[#1C1917]',
  };

  return (
    <div
      id={id}
      className={`p-5 sm:p-6 transition-colors ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};


