import type { Dish } from "@/data/site";

export function DishCard({ dish }: { dish: Dish }) {
  return (
    <article className="menu-dish-card menu-item group relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-[#101010] hover:-translate-y-1 hover:border-gold/45 hover:shadow-[0_18px_45px_rgba(212,175,55,0.16)]">
      <img
        src={dish.image}
        alt={dish.title}
        width={640}
        height={940}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/10 to-transparent" />
      <div className="menu-dish-copy absolute inset-x-4 bottom-4 rounded-[24px] border border-white/10 bg-black/70 px-6 pb-6 pt-6 backdrop-blur-md md:inset-x-5 md:bottom-5 md:px-6 md:pb-6">
        <p className="text-[10px] font-semibold tracking-[0.22em] text-gold md:text-[11px]">
          {dish.category}
        </p>
        <h3 className="mt-2 font-sans text-xl font-bold leading-tight text-cream md:text-2xl">
          {dish.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-[#9d9d9d] md:text-sm">
          {dish.description}
        </p>
      </div>
    </article>
  );
}
