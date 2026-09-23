import { cn } from "@/lib/utils";
import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export interface BentoCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  colSpan?: number;
  children?: ReactNode;
  className?: string;
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function BentoCard({
  title,
  description,
  icon,
  colSpan = 1,
  children,
  className,
}: BentoCardProps) {
  const colSpanClasses: Record<number, string> = {
    1: "col-span-1",
    2: "col-span-1 md:col-span-2",
    3: "col-span-1 md:col-span-2 lg:col-span-3",
    4: "col-span-1 md:col-span-2 lg:col-span-4",
  };

  return (
    <motion.div
      variants={itemVariants}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300",
        colSpanClasses[colSpan] || "col-span-1",
        className,
      )}
    >
      <div className="flex flex-col gap-2 mb-4">
        {icon && (
          <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-apple-blue mb-1 shadow-2xs group-hover:scale-105 transition-transform duration-300">
            {icon}
          </div>
        )}
        <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
          {title}
        </h3>
        <p className="font-apple text-sm text-slate leading-relaxed">
          {description}
        </p>
      </div>

      {children && (
        <div className="relative mt-auto w-full overflow-hidden rounded-xl bg-slate-50/80 border border-slate-100 p-4">
          {children}
        </div>
      )}
    </motion.div>
  );
}

export default BentoCard;
