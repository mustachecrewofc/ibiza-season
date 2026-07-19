import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export interface ChartCarouselItem {
  id: string;
  image: string;
  alt: string;
  /** Chart position, e.g. "#1" */
  badge: string;
  /** Genre / chart name, e.g. "House Releases" */
  label: string;
  /** Highlight the card (gold ring) — used for the crown result */
  featured?: boolean;
}

export interface ChartCarouselProps {
  items: ChartCarouselItem[];
}

export function ChartCarousel({ items }: ChartCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    dragFree: true,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const updateSelection = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setCurrentSlide(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    updateSelection();
    emblaApi.on('select', updateSelection);
    emblaApi.on('reInit', updateSelection);
    return () => {
      emblaApi.off('select', updateSelection);
      emblaApi.off('reInit', updateSelection);
    };
  }, [emblaApi, updateSelection]);

  return (
    <div className="relative">
      {/* Arrows */}
      <div className="hidden md:flex absolute -top-12 right-0 gap-2">
        <button
          type="button"
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canScrollPrev}
          aria-label="Previous results"
          className="w-9 h-9 rounded-full border border-[#1E3A5F] flex items-center justify-center text-[#9DB2C7] hover:text-[#F7F3EB] hover:border-[#49B7C9] transition-colors disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
        >
          <ArrowLeft size={16} />
        </button>
        <button
          type="button"
          onClick={() => emblaApi?.scrollNext()}
          disabled={!canScrollNext}
          aria-label="Next results"
          className="w-9 h-9 rounded-full border border-[#1E3A5F] flex items-center justify-center text-[#9DB2C7] hover:text-[#F7F3EB] hover:border-[#49B7C9] transition-colors disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
        >
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Track */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[240px] md:w-[280px] group"
            >
              <div
                className={`relative rounded-2xl overflow-hidden border transition-colors ${
                  item.featured
                    ? 'border-[#D9B45B] shadow-[0_0_40px_rgba(217,180,91,0.20)]'
                    : 'border-[#1E3A5F] group-hover:border-[#49B7C9]/60'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                {/* Position badge */}
                <span
                  className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-black tracking-tight ${
                    item.featured
                      ? 'bg-[#D9B45B] text-[#0E223D]'
                      : 'bg-[#0E223D]/85 text-[#49B7C9] border border-[#49B7C9]/40'
                  }`}
                >
                  {item.featured ? `👑 ${item.badge}` : item.badge}
                </span>
              </div>
              <div className="mt-2.5 px-1 flex items-center gap-2">
                <span
                  className={`text-sm font-black tabular-nums ${
                    item.featured ? 'text-[#D9B45B]' : 'text-[#49B7C9]'
                  }`}
                >
                  {item.badge}
                </span>
                <span className="text-xs text-[#9DB2C7] font-medium truncate">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="mt-5 flex justify-center gap-1.5">
        {items.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Go to result ${index + 1}`}
            className={`h-1.5 rounded-full transition-all cursor-pointer ${
              currentSlide === index
                ? 'w-5 bg-[#D9B45B]'
                : 'w-1.5 bg-[#1E3A5F] hover:bg-[#49B7C9]/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
