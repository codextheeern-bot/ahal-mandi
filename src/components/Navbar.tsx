import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/BrandLogo";

const links = [
  { label: "DISHES", href: "#dishes" },
  { label: "VISIT US", href: "#branches" },
  { label: "REVIEWS", href: "#reviews" },
  { label: "CAREER", href: "#career" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <header
      className={cn(
        "absolute inset-x-0 top-0 z-50 transition-all duration-700 ease-out",
        mounted ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0",
      )}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-10 md:py-5">
        <a href="#top" className="flex items-center" aria-label="Ahal Mandhi home">
          <BrandLogo
            compact
            className="navbar-brand transition-transform duration-300 hover:scale-105"
          />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="menu-item relative text-[11px] tracking-[0.14em] text-cream/70 hover:text-gold after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="menu-item text-cream/80 hover:text-gold md:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <ul className="mx-5 mb-2 rounded-md border border-gold/20 bg-[#0b0b0b] px-5 py-4 md:hidden">
          {links.map((l) => (
            <li key={l.label} className="py-2.5">
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-[15px] tracking-[0.14em] text-cream/70"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
