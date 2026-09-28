"use client";

import React from "react";
import Timeline, { type TimelineItemProps } from "@/components/ui/timeline-01-utils/timeline";

const campaignExecutionTimelineData: TimelineItemProps[] = [
  {
    title: "Research & Discover",
    description:
      "We analyze your audience, competitors, market, and business goals to identify the right opportunities.",
    date: "01",
    image:
      "https://cdn.21st.dev/assets/localized/0ea25e6c9f3a254d713265295d48f2f515a3ce40d9cf2adcfd9454a3a96df996.webp",
  },
  {
    title: "Strategy & Creative",
    description:
      "We build the campaign strategy, content direction, messaging, targeting, and creative assets tailored to your audience.",
    date: "02",
    image:
      "https://cdn.21st.dev/assets/localized/8fcabd896d283359f9f601b92bce74fc06aa48f368e56afbd21dca69a9742809.webp",
  },
  {
    title: "Launch & Amplify",
    description:
      "We launch across the right digital channels, from paid social and search to content and performance marketing.",
    date: "03",
    image:
      "https://cdn.21st.dev/assets/localized/f8596260a4e342a4a2d85e821ff477a8e71182f373aea763dfd4f13fe657f5fa.webp",
  },
  {
    title: "Track & Optimize",
    description:
      "We monitor key metrics, test what works, and continuously optimize campaigns to improve reach, engagement, and conversions.",
    date: "04",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
];

export interface TimelineBlock01Props {
  title?: React.ReactNode;
  description?: string;
  items?: TimelineItemProps[];
}

export const TimelineBlock01: React.FC<TimelineBlock01Props> = ({
  title = (
    <>
      How we execute{" "}
      <span className="text-apple-blue font-serif-accent font-normal italic">
        campaigns.
      </span>
    </>
  ),
  description = "A structured 4-stage sprint ensuring predictable brand expansion and qualified lead generation across Qatar, the UAE, and India.",
  items = campaignExecutionTimelineData,
}) => {
  return (
    <section className="w-full bg-gallery-white overflow-hidden font-apple">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pb-10 md:pb-16 pt-2">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-ink leading-[1.12]">
              {title}
            </h2>
            <p className="md:text-lg text-base text-slate leading-relaxed">
              {description}
            </p>
          </div>
        </div>
        <div className="relative">
          <Timeline items={items} />
        </div>
      </div>
    </section>
  );
};

export default TimelineBlock01;
