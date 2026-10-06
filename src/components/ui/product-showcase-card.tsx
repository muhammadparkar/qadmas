import React from 'react';
import { ArrowRight, Check, type LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface ProductShowcaseCardProps {
  badge?: string;
  badgeIcon?: LucideIcon;
  title: string;
  subtitle: string;
  features: string[];
  statValue: string;
  statLabel: string;
  avatars?: string[];
  ctaText: string;
  ctaLink?: string;
  ctaExternal?: boolean;
  onCtaClick?: () => void;
  // Media card props
  rightContent?: React.ReactNode;
  rightImageSrc?: string;
  rightImageAlt?: string;
  rightCaption?: string;
  rightCaptionIcon?: LucideIcon;
  rightStatus?: string;
  reversed?: boolean;
}

const defaultAvatars = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
];

export default function ProductShowcaseCard({
  badge,
  badgeIcon: BadgeIcon,
  title,
  subtitle,
  features,
  statValue,
  statLabel,
  avatars = defaultAvatars,
  ctaText,
  ctaLink,
  ctaExternal = false,
  onCtaClick,
  rightContent,
  rightImageSrc,
  rightImageAlt,
  rightCaption = 'Platform Preview',
  rightCaptionIcon: CaptionIcon,
  rightStatus = 'Live System',
  reversed = false,
}: ProductShowcaseCardProps) {
  const ctaButtonClasses =
    'inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-ink text-[13px] font-medium transition-colors shadow-2xs group cursor-pointer';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 items-center font-apple">
      {/* Content Column — Always left-aligned text, placed in order-1 (left) or order-2 (right) */}
      <div className={`space-y-6 ${reversed ? 'order-1 lg:order-2' : 'order-1 lg:order-1'}`}>
        {badge && (
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-[11px] font-semibold tracking-wider uppercase font-apple">
            {BadgeIcon && <BadgeIcon size={13} className="text-slate-500" />}
            <span>{badge}</span>
          </div>
        )}

        <div>
          <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[36px] font-semibold text-ink tracking-tight leading-[1.16]">
            {title}
          </h2>
          <p className="text-[15px] sm:text-[16px] text-slate leading-relaxed mt-3.5">
            {subtitle}
          </p>
        </div>

        {/* Bullet checklist with solid checkmarks */}
        <ul className="space-y-3 pt-1">
          {features.map((feat, idx) => (
            <li key={idx} className="flex items-center gap-3 text-slate-700 text-[14px]">
              <div className="w-4.5 h-4.5 rounded-full bg-slate-900 flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 text-white stroke-[3]" />
              </div>
              <span>{feat}</span>
            </li>
          ))}
        </ul>

        {/* Subtle horizontal divider */}
        <div className="border-t border-slate-200/80 my-4" />

        {/* Social proof stat highlight */}
        <div className="flex items-center gap-3 pt-0.5">
          <div className="flex -space-x-2 overflow-hidden">
            {avatars.map((url, i) => (
              <img
                key={i}
                src={url}
                alt="Avatar"
                className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover"
              />
            ))}
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-ink font-bold text-[16px] tracking-tight">
              {statValue}
            </span>
            <span className="text-slate text-[13px] font-normal">
              {statLabel}
            </span>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          {ctaExternal && ctaLink ? (
            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className={ctaButtonClasses}
            >
              <span>{ctaText}</span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          ) : ctaLink ? (
            <Link to={ctaLink} className={ctaButtonClasses}>
              <span>{ctaText}</span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          ) : (
            <button onClick={onCtaClick} className={ctaButtonClasses}>
              <span>{ctaText}</span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </button>
          )}
        </div>
      </div>

      {/* Media / Showcase Column */}
      <div className={`${reversed ? 'order-2 lg:order-1' : 'order-2 lg:order-2'}`}>
        <div className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-sm flex flex-col group/preview">
          {/* Custom Content Slot OR Default Image Slot */}
          <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden bg-slate-100 flex items-center justify-center">
            {rightContent ? (
              rightContent
            ) : rightImageSrc ? (
              <img
                src={rightImageSrc}
                alt={rightImageAlt || rightCaption}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover/preview:scale-[1.02]"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-slate-400 text-sm p-8 text-center">
                <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center mb-3 text-slate-500">
                  {CaptionIcon ? <CaptionIcon size={22} /> : null}
                </div>
                <span className="text-slate-600 font-medium">{rightCaption}</span>
                <span className="text-xs text-slate-400 mt-1">Ready for custom preview component</span>
              </div>
            )}
          </div>

          {/* Bottom Caption Bar */}
          <div className="px-4 py-2.5 bg-slate-50/80 border-t border-slate-200/80 flex items-center justify-between text-[12px] text-slate-600">
            <div className="flex items-center gap-2 font-medium text-slate-700">
              {CaptionIcon ? <CaptionIcon className="w-4 h-4 text-slate-500" /> : null}
              <span>{rightCaption}</span>
            </div>
            {rightStatus && (
              <span className="text-[11px] text-emerald-600 flex items-center gap-1.5 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {rightStatus}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
