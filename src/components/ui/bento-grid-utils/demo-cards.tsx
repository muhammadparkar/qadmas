import {
  Play,
  SkipForward,
  CheckCircle2,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export function AiAssistantDemo() {
  return (
    <div className="space-y-3 font-apple">
      <div className="flex items-center gap-2 text-xs font-medium text-slate">
        <Sparkles className="size-3.5 text-apple-blue" />
        <span>Prompt: Optimize PostgreSQL index</span>
      </div>
      <div className="rounded-lg bg-white p-3 border border-slate-200/80 font-apple text-xs text-ink space-y-1">
        <div className="text-slate-400">// Query executed in 1.4ms</div>
        <div className="text-apple-blue font-semibold">
          CREATE INDEX CONCURRENTLY idx_orders_created
        </div>
        <div className="text-slate-600">ON orders (created_at DESC);</div>
      </div>
    </div>
  );
}

export function AnalyticsDemo() {
  const bars = [40, 65, 45, 80, 60, 95, 85];
  return (
    <div className="space-y-3 font-apple">
      <div className="flex items-baseline justify-between">
        <span className="text-2xl font-bold font-display text-ink">+48.2%</span>
        <span className="inline-flex items-center text-xs font-semibold text-emerald-600 gap-0.5">
          <TrendingUp className="size-3" /> +12%
        </span>
      </div>
      <div className="flex items-end gap-1.5 h-14 pt-2">
        {bars.map((height, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm bg-apple-blue/20 hover:bg-apple-blue transition-colors duration-200"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </div>
  );
}

export function MusicPlayerDemo() {
  return (
    <div className="flex items-center justify-between gap-3 font-apple">
      <div className="size-11 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs shadow-xs">
        ♫
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-semibold text-ink truncate">Deep Focus Flow</p>
        <p className="text-[11px] text-slate truncate">Ambient Electronic</p>
      </div>
      <div className="flex items-center gap-1.5 text-ink">
        <button className="size-7 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition-colors">
          <Play className="size-3 fill-current ml-0.5" />
        </button>
        <button className="size-7 rounded-full hover:bg-slate-200/50 flex items-center justify-center text-slate transition-colors">
          <SkipForward className="size-3.5" />
        </button>
      </div>
    </div>
  );
}

export function NotificationsDemo() {
  return (
    <div className="space-y-2 font-apple">
      <div className="flex items-center gap-2.5 p-2 rounded-lg bg-white border border-slate-200/70 shadow-2xs">
        <span className="size-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium text-ink truncate">Production build passed</p>
          <p className="text-[10px] text-slate">2 minutes ago</p>
        </div>
      </div>
      <div className="flex items-center gap-2.5 p-2 rounded-lg bg-white border border-slate-200/70 shadow-2xs">
        <span className="size-2 rounded-full bg-sky-500"></span>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium text-ink truncate">New pull request merged</p>
          <p className="text-[10px] text-slate">14 minutes ago</p>
        </div>
      </div>
    </div>
  );
}

export function TerminalDemo() {
  return (
    <div className="rounded-lg bg-slate-900 p-3 text-slate-100 font-apple text-xs space-y-1.5">
      <div className="flex items-center gap-1.5 pb-1 border-b border-slate-800">
        <span className="size-2 rounded-full bg-red-500"></span>
        <span className="size-2 rounded-full bg-amber-500"></span>
        <span className="size-2 rounded-full bg-emerald-500"></span>
        <span className="text-[10px] text-slate-400 ml-1">bash - prod-deploy</span>
      </div>
      <div className="text-slate-400">$ git push origin main --tags</div>
      <div className="flex items-center gap-1 text-emerald-400">
        <CheckCircle2 className="size-3" />
        <span>Deploy v2.4.0 live across Qatar, the UAE &amp; India</span>
      </div>
    </div>
  );
}

export function TeamMembersDemo() {
  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
  ];

  return (
    <div className="flex items-center justify-between font-apple">
      <div className="flex -space-x-2">
        {avatars.map((url, i) => (
          <img
            key={i}
            src={url}
            alt="Team member"
            className="size-8 rounded-full border-2 border-white object-cover"
          />
        ))}
      </div>
      <span className="text-xs font-medium text-slate">8 active engineers</span>
    </div>
  );
}

export function StorageDemo() {
  return (
    <div className="space-y-2 font-apple">
      <div className="flex justify-between text-xs">
        <span className="font-medium text-ink">Encrypted S3</span>
        <span className="text-slate">64.2 / 100 GB</span>
      </div>
      <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
        <div className="h-full bg-apple-blue rounded-full w-[64%]"></div>
      </div>
    </div>
  );
}

export function ProgressDemo() {
  return (
    <div className="space-y-2 font-apple">
      <div className="flex items-center justify-between text-xs">
        <span className="font-medium text-ink">Edge Latency</span>
        <span className="font-semibold text-emerald-600">8ms</span>
      </div>
      <div className="grid grid-cols-3 gap-1 text-center font-apple font-medium text-[10px]">
        <div className="p-1 rounded bg-white border border-slate-200 text-slate">QAT: 6ms</div>
        <div className="p-1 rounded bg-white border border-slate-200 text-slate">UAE: 8ms</div>
        <div className="p-1 rounded bg-white border border-slate-200 text-slate">IND: 14ms</div>
      </div>
    </div>
  );
}

export function CalendarDemo() {
  const days = [
    { day: "Mon", date: "21", active: false },
    { day: "Tue", date: "22", active: false },
    { day: "Wed", date: "23", active: true },
    { day: "Thu", date: "24", active: false },
    { day: "Fri", date: "25", active: false },
  ];

  return (
    <div className="flex items-center justify-between gap-2 font-apple">
      {days.map((item, i) => (
        <div
          key={i}
          className={`flex-1 py-2 rounded-lg text-center transition-colors ${
            item.active
              ? "bg-apple-blue text-white shadow-xs font-semibold"
              : "bg-white border border-slate-200/80 text-slate hover:border-slate-300"
          }`}
        >
          <div className="text-[10px] uppercase tracking-wider opacity-80">{item.day}</div>
          <div className="text-sm font-bold font-display mt-0.5">{item.date}</div>
        </div>
      ))}
    </div>
  );
}
