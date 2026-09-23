"use client";

import Timeline, { type JourneyItem } from "./ui/timeline";

export default function Process() {
  const topJourneyData: JourneyItem[] = [
    {
      id: "phase-01",
      year: "Phase 01",
      month: "Discovery",
      content: "Database schemas, user flows, and a fixed-price roadmap before any code is written.",
    },
    {
      id: "phase-02",
      year: "Phase 02",
      month: "Build",
      content: "A private staging URL goes live in 14 days. You test real modules with real data.",
    },
    {
      id: "phase-03",
      year: "Phase 03",
      month: "Audit",
      content: "Load testing and security audits — stable under 10,000+ peak concurrent users.",
    },
    {
      id: "phase-04",
      year: "Phase 04",
      month: "Launch",
      content: "Zero-downtime cutover, automated backups, and 24/7 enterprise SLA monitoring.",
    },
  ];

  const bottomJourneyData: JourneyItem[] = [
    {
      id: "phase-01b",
      year: "Kickoff",
      month: "Week 1",
      content: "A dedicated architect and PM — no account managers relaying messages.",
    },
    {
      id: "phase-02b",
      year: "Mid-Sprint",
      month: "Week 3",
      content: "Live demo on staging. Feedback ships in the next sprint, not a backlog.",
    },
    {
      id: "phase-03b",
      year: "Handover",
      month: "Post-Launch",
      content: "Full source access and a 30-day hypercare window before standard SLA.",
    },
  ];

  return (
    <main className="bg-gallery-white text-ink">
      {/* Lead-in header with responsive breathing room */}
      <section className="flex flex-col items-center justify-center gap-3.5 px-6 pt-14 pb-8 sm:pt-32 sm:pb-28 text-center">
        <h2 className="text-display font-medium text-ink tracking-tight leading-[1.04] max-w-[980px]">
          How we take projects from <br className="hidden sm:inline" />
          <span className="text-apple-blue font-serif-accent font-normal italic">
            concept to production
          </span>
        </h2>
        <p className="text-base sm:text-lg font-normal max-w-2xl text-slate leading-relaxed">
          Predictable milestones with zero surprises. You always know what is being built, who is building it, and when it will ship.
        </p>
        <span className="mt-3 animate-bounce text-slate text-xl select-none">&darr;</span>
      </section>

      <Timeline
        title="Production Storyline"
        periodLabel="Concept → Scale"
        backgroundColor="#f8fafc"
        textColor="#0f172a"
        mutedTextColor="#64748b"
        activeColor="#0284c7"
        imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Qadmas engineering sprint and deployment review"
        topData={topJourneyData}
        bottomData={bottomJourneyData}
        duration={1.4}
      />
    </main>
  );
}
