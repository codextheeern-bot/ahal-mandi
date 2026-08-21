import { useState } from "react";
import { dishes } from "@/data/site";
import { DishCard } from "./DishCard";
import { Reveal } from "@/components/ui/reveal";

const INITIAL_COUNT = 3;

export function MenuSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleDishes = showAll ? dishes : dishes.slice(0, INITIAL_COUNT);
  const hasMore = dishes.length > INITIAL_COUNT;

  return (
    <section id="dishes" className="menu-section bg-[#050505]">
      <div className="menu-shell mx-auto">
        <div className="menu-heading text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold/80 md:text-sm">
            Ahal Mandhi
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-cream sm:text-5xl md:text-6xl">
            Our Signature Flavours
          </h2>
          <div className="mx-auto mt-6 h-px w-28 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>

        <div className="menu-grid">
          {visibleDishes.map((d, i) => (
            <Reveal key={d.title} delay={i * 70} className="h-full">
              <DishCard dish={d} />
            </Reveal>
          ))}
        </div>

        {hasMore && (
          <Reveal className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="menu-item rounded-full border border-gold/60 px-10 py-3.5 text-xs font-semibold tracking-[0.3em] text-gold hover:bg-gold/10"
            >
              {showAll ? "VIEW LESS" : "VIEW MORE"}
            </button>
          </Reveal>
        )}
      </div>
    </section>
  );
}
