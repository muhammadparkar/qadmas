import React from 'react';

type BlockColor = 'lime' | 'lilac' | 'cream' | 'mint' | 'pink' | 'coral' | 'navy' | 'white';

interface ColorBlockProps {
  color?: BlockColor;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function ColorBlock({ color = 'white', children, className = '', id }: ColorBlockProps) {
  const isWhite = color === 'white';
  
  const bgClass = {
    lime: 'bg-block-lime',
    lilac: 'bg-block-lilac',
    cream: 'bg-block-cream',
    mint: 'bg-block-mint',
    pink: 'bg-block-pink',
    coral: 'bg-block-coral',
    navy: 'bg-block-navy text-inverse-ink',
    white: 'bg-canvas text-ink'
  }[color];

  return (
    <section id={id} className={`w-full ${isWhite ? 'py-section' : 'py-section'}`}>
      <div className={`mx-auto max-w-[1280px] px-lg xl:px-xxl`}>
        <div className={`
          ${bgClass}
          ${!isWhite ? 'rounded-none md:rounded-lg p-lg md:p-xxl' : ''}
          ${className}
        `}>
          {children}
        </div>
      </div>
    </section>
  );
}
