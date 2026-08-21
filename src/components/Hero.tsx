import { useState } from "react";
import heroBgless1 from "@/assets/hero-bgless-1.png";
import heroBgless2 from "@/assets/hero-bgless-2.png";
import heroBgless3 from "@/assets/hero-bgless-3.png";
import { CircularGallery, type GalleryItem } from "@/components/ui/circular-gallery";
import { Reveal } from "@/components/ui/reveal";
import { BrandLogo } from "@/components/BrandLogo";

const heroGallery: GalleryItem[] = [
  {
    common: "Chicken Mandhi",
    binomial: "slow-cooked classic",
    photo: { url: heroBgless1, text: "Chicken mandhi platter with saffron rice" },
    hero: { kicker: "Welcome to", subkicker: "the feast of", title: ["LIMITLESS", "LOVE"] },
  },
  {
    common: "Peri Peri Mandhi",
    binomial: "charcoal grilled, chili kissed",
    photo: { url: heroBgless2, text: "Peri peri mandhi platter with chili flakes" },
    hero: { kicker: "Welcome to", subkicker: "the feast of", title: ["TRUE", "SPICE"] },
  },
  {
    common: "Alfaham Mandhi",
    binomial: "rich & aromatic",
    photo: { url: heroBgless3, text: "Alfaham mandhi platter with grilled chicken" },
    hero: { kicker: "Welcome to", subkicker: "the feast of", title: ["ARABIAN", "NIGHTS"] },
  },
];

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeHero = heroGallery[activeIndex]!.hero!;

  return (
    <section id="top" className="hero relative overflow-hidden bg-[#050505]">
      <div className="relative mx-auto h-full max-w-[1500px] px-0 md:px-8">
        {/* Mobile/reference composition */}
        <div className="hero-copy hero-copy-mobile absolute bottom-0 left-6 z-30 max-w-[58%]">
          <p className="hero-kicker">{activeHero.kicker}</p>
          <p className="hero-kicker">{activeHero.subkicker}</p>
          <h2 className="hero-title-mobile">
            <span>{activeHero.title[0]}</span>
            <span>{activeHero.title[1]}</span>
          </h2>
        </div>

        {/* Desktop/reference composition */}
        <Reveal className="hero-copy hero-copy-desktop absolute left-6 top-1/2 z-30 -translate-y-[57%] lg:left-10">
          <p className="hero-kicker">{activeHero.kicker}</p>
          <p className="hero-kicker hero-kicker-desktop">{activeHero.subkicker}</p>
          <h2 className="hero-title-desktop">
            <span>{activeHero.title[0]}</span>
            <span>{activeHero.title[1]}</span>
          </h2>
          <p className="hero-description">
            Experience the authentic taste of Arabia at Ahal Mandhi. Made
            <br /> with passion, served with tradition.
          </p>
        </Reveal>

        <div className="hero-gallery-wrap relative z-10 flex justify-center">
          <div className="hero-plate-in relative aspect-square rounded-full border border-gold/20 p-2">
            <div className="relative h-full w-full rounded-full ring-1 ring-gold/15">
              <CircularGallery items={heroGallery} radius={280} holdDuration={2600} onStepChange={setActiveIndex} />
            </div>
          </div>
        </div>

        <BrandLogo className="hero-brand absolute z-30" />
      </div>
    </section>
  );
}
