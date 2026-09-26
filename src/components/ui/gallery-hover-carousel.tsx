"use client";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";

export interface GalleryHoverCarouselItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
}

export default function GalleryHoverCarousel({
  heading = "Featured Growth & Acquisition Systems",
  subheading = "Explore our portfolio of performance marketing engines, viral content architectures, and multi-channel acquisition funnels.",
  items = [
    {
      id: "item-1",
      title: "Conversion-Rate Architecture",
      summary:
        "Sub-second landing funnels engineered for maximum conversion velocity across search and social channels.",
      url: "#",
      image:
        "https://cdn.21st.dev/assets/mirror/60/60f1fc317cc965fa57d1bb420b79a441aaebc281f64fceda8b7bff238686177d.png",
    },
    {
      id: "item-2",
      title: "Cross-Channel Paid Media Scaling",
      summary:
        "Algorithmic ad spend allocation across Meta, Google Ads, TikTok, and programmatic networks.",
      url: "#",
      image:
        "https://cdn.21st.dev/assets/mirror/5b/5be809c811b5c484f4f36c477a13b0af7da32fdd20512c7f6c2c38e681e32afa.png",
    },
    {
      id: "item-3",
      title: "Organic Search & Technical SEO",
      summary:
        "High-authority editorial backlink networks and technical schema markup driving qualified regional traffic.",
      url: "#",
      image:
        "https://cdn.21st.dev/assets/mirror/6c/6c1a829d1b4c7e47d0916ff1ab901e414b6943ca338094e2bbbdba35da4e5446.png",
    },
    {
      id: "item-4",
      title: "Predictive Lead Scoring & Routing",
      summary:
        "Automated qualification pipelines that analyze user intent signals and route hot leads to sales teams.",
      url: "#",
      image:
        "https://cdn.21st.dev/assets/mirror/ff/ff0d274d6f15232322c8938fc0c067cb4a70ef4e568b8b61256f8254749f9374.png",
    },
    {
      id: "item-5",
      title: "Brand Storytelling & Viral Video",
      summary:
        "Cinema-grade video production and micro-content tailored for engagement across Qatar, the UAE, and India.",
      url: "#",
      image:
        "https://cdn.21st.dev/assets/mirror/58/58274556122ef7e984b226b075e8ab2c153e238896e21ad4b56d0ce447455c31.png",
    }
  ],
}: {
  heading?: string;
  subheading?: string;
  demoUrl?: string;
  items?: GalleryHoverCarouselItem[];
}) {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  // Horizontal wheel/trackpad & mouse wheel scrolling support
  useEffect(() => {
    if (!carouselApi) return;

    const rootNode = carouselApi.rootNode();
    let isWheeling = false;
    let wheelTimeout: ReturnType<typeof setTimeout>;

    const handleWheel = (e: WheelEvent) => {
      // Prioritize horizontal trackpad swipe; if purely vertical over the carousel, map to horizontal
      const isHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      const delta = isHorizontal ? e.deltaX : (e.shiftKey ? e.deltaY : e.deltaY * 0.8);

      if (Math.abs(delta) > 4) {
        if (!isWheeling) {
          isWheeling = true;
          if (delta > 0) {
            carouselApi.scrollNext();
          } else {
            carouselApi.scrollPrev();
          }
          clearTimeout(wheelTimeout);
          wheelTimeout = setTimeout(() => {
            isWheeling = false;
          }, 90);
        }
      }
    };

    rootNode.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      rootNode.removeEventListener("wheel", handleWheel);
      clearTimeout(wheelTimeout);
    };
  }, [carouselApi]);

  // Ensure plenty of items (at least 15 items) so Embla infinite loop operates symmetrically in both directions
  const displayItems = items.length > 0
    ? [...items, ...items, ...items].map((it, i) => ({ ...it, id: `${it.id}-loop-${i}` }))
    : items;

  return (
    <section className="py-14 sm:py-24 bg-white border-t border-slate-200/80 font-apple overflow-hidden w-full max-w-full">
      <div className="container mx-auto px-4 sm:px-6 max-w-[1240px] overflow-hidden w-full">
        <div className="mb-6 flex flex-col justify-between sm:mb-12 md:flex-row md:items-end lg:mb-14">
          <div className="max-w-2xl space-y-1.5 sm:space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-ink tracking-tight">
              {heading}
            </h2>
            <p className="text-slate text-sm sm:text-base leading-relaxed">
              {subheading}
            </p>
          </div>
          <div className="flex gap-2.5 mt-4 sm:mt-6 md:mt-0 shrink-0">
            <Button
              variant="outline"
              size="icon"
              onClick={() => carouselApi?.scrollPrev()}
              className="h-9 w-9 sm:h-10 sm:w-10 rounded-full border-slate-200 bg-white hover:bg-slate-50 text-ink shadow-2xs cursor-pointer active:scale-95 transition-transform"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => carouselApi?.scrollNext()}
              className="h-9 w-9 sm:h-10 sm:w-10 rounded-full border-slate-200 bg-white hover:bg-slate-50 text-ink shadow-2xs cursor-pointer active:scale-95 transition-transform"
              aria-label="Next slide"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="w-full max-w-full">
          <Carousel
            setApi={setCarouselApi}
            opts={{ 
              align: "start",
              loop: true,
              dragFree: true,
            }}
            className="relative w-full max-w-full cursor-grab active:cursor-grabbing select-none"
          >
            <CarouselContent className="hide-scrollbar w-full max-w-full -ml-3 sm:-ml-4">
              {displayItems.map((item) => (
                <CarouselItem key={item.id} className="pl-3 sm:pl-4 basis-[84%] sm:basis-1/2 lg:basis-1/3 xl:basis-[360px]">
                  <Link 
                    to={item.url.startsWith("http") ? item.url : "#"} 
                    draggable={false}
                    onDragStart={(e) => e.preventDefault()}
                    className="group block relative w-full h-[290px] sm:h-[350px] md:h-[370px] select-none"
                  >
                    <Card className="overflow-hidden rounded-2xl sm:rounded-3xl h-full w-full border border-slate-200/90 shadow-sm group-hover:shadow-md transition-all duration-300 relative bg-slate-900 select-none">
                      {/* Image */}
                      <div className="relative h-full w-full transition-all duration-500 sm:group-hover:h-1/2">
                        <img
                          src={item.image}
                          alt={item.title}
                          draggable={false}
                          className="h-full w-full object-cover object-center pointer-events-none select-none"
                          loading="lazy"
                        />
                        {/* Visible bottom info overlay on mobile touch screens */}
                        <div className="sm:hidden absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex flex-col justify-end p-4 text-white">
                          <h3 className="text-[16px] font-semibold font-apple tracking-tight">
                            {item.title}
                          </h3>
                          <p className="text-white/80 text-[12px] line-clamp-2 mt-1 font-apple leading-relaxed">
                            {item.summary}
                          </p>
                        </div>

                        {/* Fade overlay at bottom for desktop hover */}
                        <div className="hidden sm:block absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>

                      {/* Text Section (Reveals on hover on desktop) */}
                      <div className="hidden sm:flex absolute bottom-0 left-0 w-full p-6 transition-all duration-500 group-hover:h-1/2 flex-col justify-center bg-white/98 backdrop-blur-md opacity-0 group-hover:opacity-100 border-t border-slate-100">
                        <h3 className="text-lg font-semibold md:text-xl text-ink font-apple tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-slate text-sm line-clamp-2 mt-1.5 font-apple leading-relaxed">
                          {item.summary}
                        </p>
                        <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-ink group-hover:bg-apple-blue group-hover:text-white group-hover:border-apple-blue transition-all duration-300 shadow-2xs">
                          <ArrowRight className="size-4 group-hover:-rotate-45 transition-transform duration-300" />
                        </div>
                      </div>
                    </Card>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
