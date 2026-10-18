import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'accent' | 'dark' | 'luxury';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconRight,
  isLoading,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200 active:scale-[0.98] disabled:opacity-40 disabled:pointer-events-none rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F5] whitespace-nowrap select-none cursor-pointer tracking-tight group';

  const sizeStyles = {
    xs: 'text-[11px] px-2.5 py-1 gap-1 rounded-lg',
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2 gap-2',
    lg: 'text-base px-6 py-3 gap-2.5 shadow-xs',
  };

  const variantStyles = {
    // Primary: Imperial Vermilion Red (Chinese Calligraphy / Seal Red)
    primary: 'bg-[#C52828] text-white hover:bg-[#A82020] hover:shadow-md focus-visible:ring-[#C52828] border border-[#A82020] shadow-xs',
    // Luxury Obsidian: High-end dark button
    dark: 'bg-[#1C1917] text-[#FAF8F5] hover:bg-[#292524] hover:shadow-md focus-visible:ring-stone-900 border border-stone-800 shadow-xs',
    // Luxury Gold Burnished
    luxury: 'bg-[#B8860B] text-white hover:bg-[#996D07] hover:shadow-md focus-visible:ring-[#B8860B] border border-[#996D07] shadow-xs',
    // Accent: Jade green for correct / mastery actions
    accent: 'bg-[#0F766E] text-white hover:bg-[#0D655E] focus-visible:ring-[#0F766E] shadow-xs border border-[#0D655E]',
    // Secondary: Warm bamboo parchment tone
    secondary: 'bg-[#F2ECE4] text-[#2C2420] hover:bg-[#E7DFC2] hover:text-[#1A1411] focus-visible:ring-amber-700 border border-[#E3D9CD]',
    // Outline: Clean rice paper white with warm subtle border
    outline: 'border border-[#DDD5C7] text-[#2B2520] bg-white hover:bg-[#FAF7F2] hover:text-[#141210] hover:border-[#C4B7A5] focus-visible:ring-[#C52828] shadow-2xs',
    // Ghost: Understated warm hover
    ghost: 'text-[#665E57] hover:text-[#1C1917] hover:bg-[#F2ECE4] focus-visible:ring-stone-400',
    // Danger: Soft crimson alert
    danger: 'bg-rose-50 text-rose-800 hover:bg-rose-100 border border-rose-200 focus-visible:ring-rose-500',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        icon
      )}
      <span>{children}</span>
      {!isLoading && iconRight}
    </button>
  );
};


