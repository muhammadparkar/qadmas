import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'magenta' | 'tertiary-text' | 'icon-circular' | 'icon-circular-inverse';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
  className?: string;
}

export function Button({ variant = 'primary', href, className = '', children, ...props }: ButtonProps) {
  const isPill = variant === 'primary' || variant === 'secondary' || variant === 'magenta';
  
  const baseClasses = isPill 
    ? 'inline-flex items-center justify-center rounded-pill figma-button transition-transform active:scale-95' 
    : '';

  const variantClasses = {
    primary: 'bg-primary text-on-primary px-[20px] py-[10px]',
    secondary: 'bg-canvas text-ink px-[18px] pb-[10px] pt-[8px]',
    magenta: 'bg-accent-magenta text-on-primary px-[18px] py-[10px]',
    'tertiary-text': 'bg-canvas text-ink figma-link rounded-full px-sm py-xs hover:opacity-70',
    'icon-circular': 'bg-surface-soft text-ink rounded-full w-[40px] h-[40px] flex items-center justify-center flex-shrink-0',
    'icon-circular-inverse': 'bg-[rgba(255,255,255,0.16)] text-inverse-ink rounded-full w-[40px] h-[40px] flex items-center justify-center flex-shrink-0',
  };

  const finalClasses = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={finalClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={finalClasses} {...props}>
      {children}
    </button>
  );
}
