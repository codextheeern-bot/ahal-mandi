import { cn } from "@/lib/utils";
import logoMark from "@/assets/logo-mark.png";

type BrandLogoProps = {
  className?: string;
  compact?: boolean;
};

export function BrandLogo({ className, compact = false }: BrandLogoProps) {
  return (
    <img
      src={logoMark}
      alt="Ahal Mandi"
      className={cn(
        "brand-logo select-none object-contain",
        compact ? "h-20 w-auto md:h-20" : "h-32 w-auto md:h-40",
        className,
      )}
    />
  );
}
