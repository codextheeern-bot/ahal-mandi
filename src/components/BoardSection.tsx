import { useCallback, useRef, useState } from "react";
import { board } from "@/data/site";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function BoardSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => {
      const container = scrollRef.current;
      if (!container) return;
      const clamped = Math.max(0, Math.min(index, board.length - 1));
      // +1 to skip the left spacer div that sits before the cards
      const card = container.children[clamped + 1] as HTMLElement | undefined;
      if (card) {
        const scrollTarget =
          card.offsetLeft - container.offsetWidth / 2 + card.offsetWidth / 2;
        container.scrollTo({ left: scrollTarget, behavior: "smooth" });
        setActiveIndex(clamped);
      }
    },
    [],
  );

  const prev = () => scrollTo(activeIndex - 1);
  const next = () => scrollTo(activeIndex + 1);

  return (
    <section className="relative overflow-hidden bg-[#050505] py-20 md:py-24">
      <div className="mx-auto max-w-[1150px] px-6">
        <Reveal className="text-center">
          <h2 className="font-display text-4xl font-bold text-cream sm:text-5xl md:text-6xl">
            Meet The Board
          </h2>
          <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </Reveal>
      </div>

      <Reveal delay={120} className="mt-14">
        {/* Arrow navigation — pinned to the section edges so they never overlap cards */}
        <button
          type="button"
          onClick={prev}
          disabled={activeIndex === 0}
          aria-label="Previous director"
          className={cn(
            "absolute left-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold/30 bg-[#101010]/90 text-gold backdrop-blur-sm transition-all duration-300 hover:border-gold/60 hover:bg-[#1a1a1a]",
            activeIndex === 0 && "pointer-events-none opacity-30",
          )}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          type="button"
          onClick={next}
          disabled={activeIndex === board.length - 1}
          aria-label="Next director"
          className={cn(
            "absolute right-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold/30 bg-[#101010]/90 text-gold backdrop-blur-sm transition-all duration-300 hover:border-gold/60 hover:bg-[#1a1a1a]",
            activeIndex === board.length - 1 && "pointer-events-none opacity-30",
          )}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Scrollable track */}
        <div
          ref={scrollRef}
          onScroll={() => {
            const container = scrollRef.current;
            if (!container) return;
            // Skip the two spacer divs (first and last children)
            const children = Array.from(container.children).slice(1, -1) as HTMLElement[];
            const containerCenter = container.scrollLeft + container.clientWidth / 2;
            let closest = 0;
            let minDist = Infinity;
            children.forEach((child, i) => {
              const childCenter = child.offsetLeft + child.offsetWidth / 2;
              const dist = Math.abs(containerCenter - childCenter);
              if (dist < minDist) {
                minDist = dist;
                closest = i;
              }
            });
            setActiveIndex(closest);
          }}
          className="board-scroll-track mt-6 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-10 md:px-[calc(50%-25rem)] pb-4 pt-2"
        >
          {/* Left spacer */}
          <div className="shrink-0 w-1 md:w-12" aria-hidden="true" />
          {board.map((member, index) => (
            <button
              type="button"
              key={member.name}
              onClick={() => scrollTo(index)}
              aria-label={`${member.name}, ${member.role}`}
              className={cn(
                "relative h-72 w-56 shrink-0 snap-center overflow-hidden rounded-2xl border border-gold/15 bg-[#101010] p-0 text-left transition-all duration-500 ease-out sm:h-80 sm:w-60 md:h-96 md:w-72",
                activeIndex === index
                  ? "z-10 scale-105 border-gold/50"
                  : "scale-[0.88] opacity-40 grayscale-[40%] blur-[1px]",
              )}
            >
              <img
                src={member.image}
                alt={member.name}
                draggable={false}
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent px-4 pb-4 pt-12">
                <p className="text-sm font-semibold text-cream">{member.name}</p>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{member.role}</p>
              </div>
            </button>
          ))}
          {/* Right spacer — same width as left */}
          <div className="shrink-0 w-1 md:w-12" aria-hidden="true" />
        </div>

        {/* Dot indicators */}
        <div className="mt-6 flex justify-center gap-2">
          {board.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollTo(i)}
              aria-label={`Go to director ${i + 1}`}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                activeIndex === i ? "w-8 bg-gold" : "w-2 bg-gold/30",
              )}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
