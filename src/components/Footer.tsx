import { MapPin, Phone } from "lucide-react";
import { branches } from "@/data/site";
import { Reveal } from "@/components/ui/reveal";
import { BrandLogo } from "@/components/BrandLogo";

export function Footer() {
  return (
    <footer className="bg-[#050505] pt-16">
      <div className="mx-auto grid max-w-[1100px] gap-12 px-6 md:grid-cols-[0.8fr_1.4fr]">
        <Reveal>
          <BrandLogo className="footer-brand" />
          <p className="mt-5 max-w-xs text-[10px] leading-relaxed text-[#8C8C8C]">
            Bringing the authentic taste of Arabian Mandhi to the heart of
            Kerala. Experience royalty in every grain.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <p className="text-[9px] tracking-[0.25em] text-gold">OUR BRANCHES</p>
          <div className={branches.length === 1 ? "mt-5 grid gap-4 sm:max-w-xs" : "mt-5 grid gap-4 sm:grid-cols-2"}>
            {branches.map((b) => (
              <div
                key={b.name}
                className="menu-item rounded-md border border-gold/12 bg-[#101010] p-4 hover:-translate-y-0.5 hover:border-gold/30"
              >
                <p className="font-display text-xs font-semibold text-cream">
                  {b.name}
                </p>
                <p className="mt-2 flex gap-1.5 text-[9px] leading-relaxed text-[#8C8C8C]">
                  <MapPin size={10} className="mt-0.5 shrink-0 text-gold/70" />
                  {b.address}
                </p>
                <p className="mt-2 flex items-center gap-1.5 text-[9px] text-gold">
                  <Phone size={10} />
                  {b.phone}
                </p>
                {b.phone2 && (
                  <p className="mt-1 flex items-center gap-1.5 text-[9px] text-gold">
                    <Phone size={10} />
                    {b.phone2}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="mt-14 border-t border-gold/10 py-5">
        <p className="text-center text-[8px] tracking-[0.2em] text-[#6b6b6b]">
          © 2026 AHAL MANDHI & GRILLS LLP. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
