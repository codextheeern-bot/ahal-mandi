import { Star } from "lucide-react";
import { reviews, type Review } from "@/data/site";
import { Reveal } from "@/components/ui/reveal";

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="menu-item w-[320px] shrink-0 rounded-2xl border border-gold/12 bg-[#101010] p-7 hover:-translate-y-1 hover:border-gold/35 md:w-[380px] md:p-8">
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={13}
            className={
              i < review.stars ? "fill-gold text-gold" : "text-muted-foreground"
            }
          />
        ))}
      </div>
      <p className="mt-4 text-xs italic leading-relaxed text-[#9a9a9a] md:text-sm">
        "{review.text}"
      </p>
      <div className="mt-6 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-[#15120B] text-[11px] text-gold">
          {review.initials}
        </span>
        <div>
          <p className="text-xs font-medium text-cream">{review.name}</p>
          <p className="text-[9px] tracking-wide text-gold/70">
            Verified Customer
          </p>
        </div>
      </div>
    </article>
  );
}

export function ReviewsSection() {
  // Duplicate the list once so the track can loop seamlessly at -50%.
  const loop = [...reviews, ...reviews];

  return (
    <section id="reviews" className="overflow-hidden bg-[#080808] py-20 md:py-24">
      <div className="mx-auto max-w-[1000px] px-6">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold/80 md:text-sm">
            Testimonials
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-cream sm:text-5xl md:text-6xl">
            Reviews
          </h2>
          <div className="gold-rule mx-auto mt-5 w-24" />
        </Reveal>
      </div>

      <Reveal delay={120} className="mt-12">
        <div className="group relative [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="marquee-track flex w-max gap-6">
            {loop.map((r, i) => (
              <ReviewCard key={`${r.name}-${i}`} review={r} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
