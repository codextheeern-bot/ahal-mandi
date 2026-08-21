import { ExternalLink, MapPin, Phone, CalendarCheck } from "lucide-react";
import { branches, type Branch } from "@/data/site";
import { Reveal } from "@/components/ui/reveal";

function BranchCard({ branch }: { branch: Branch }) {
  return (
    <article className="menu-item rounded-2xl border border-gold/15 bg-[#101010] px-8 py-9 text-center hover:-translate-y-1 hover:border-gold/35">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-black">
        <MapPin size={17} className="text-gold" />
      </div>
      <h3 className="mt-5 font-display text-xl font-semibold text-cream">
        {branch.name}
      </h3>
      <div className="gold-rule mx-auto mt-3 w-20" />
      <a
        href={`tel:${branch.phone.replace(/\s/g, "")}`}
        className="menu-item mt-5 flex items-center justify-center gap-2 rounded-xl border border-gold/25 bg-[#15120B] px-3 py-2.5 text-xs text-gold hover:bg-gold/10"
      >
        <Phone size={13} />
        {branch.phone}
      </a>
      {branch.phone2 && (
        <a
          href={`tel:${branch.phone2.replace(/\s/g, "")}`}
          className="menu-item mt-2.5 flex items-center justify-center gap-2 rounded-xl border border-gold/25 bg-[#15120B] px-3 py-2.5 text-xs text-gold hover:bg-gold/10"
        >
          <Phone size={13} />
          {branch.phone2}
        </a>
      )}
      <div className="mt-3 flex gap-2.5">
        <a
          href={`tel:${branch.phone.replace(/\s/g, "")}`}
          className="menu-item flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-booking/50 bg-booking/15 px-2 py-2.5 text-[10px] leading-tight text-booking hover:bg-booking/25"
        >
          <CalendarCheck size={13} />
          Book Your Table
        </a>
        <a
          href={branch.map}
          target="_blank"
          rel="noreferrer"
          className="menu-item flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-border bg-black px-2 py-2.5 text-[10px] text-cream/70 hover:text-cream"
        >
          <ExternalLink size={13} />
          Explore
        </a>
      </div>
    </article>
  );
}

export function BranchesSection() {
  return (
    <section id="branches" className="bg-[#050505] py-20 md:py-24">
      <div className="mx-auto max-w-[1100px] px-6">
        <Reveal className="text-center">
          <h2 className="font-display text-4xl font-bold text-cream sm:text-5xl md:text-6xl">
            Visit Us
          </h2>
          <div className="gold-rule mx-auto mt-4 w-28" />
        </Reveal>

        <div
          className={
            branches.length === 1
              ? "mt-14 mx-auto grid max-w-sm gap-7"
              : "mt-14 grid gap-7 md:grid-cols-3"
          }
        >
          {branches.map((b, i) => (
            <Reveal key={b.name} delay={i * 120} className="h-full">
              <BranchCard branch={b} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
