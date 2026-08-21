import React, { useEffect, useRef, useState, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface GalleryItem {
  common: string;
  binomial: string;
  photo: {
    url: string;
    text: string;
    pos?: string;
    by?: string;
  };
  hero?: {
    kicker: string;
    subkicker: string;
    title: string[];
  };
}

interface CircularGalleryProps extends HTMLAttributes<HTMLDivElement> {
  items: GalleryItem[];
  /** Controls how far the items are from the center. */
  radius?: number;
  /** Milliseconds each plate stays in front before the next one steps in. */
  holdDuration?: number;
  /** Milliseconds the rotation between plates takes. */
  transitionDuration?: number;
  onStepChange?: (index: number) => void;
}

const CircularGallery = React.forwardRef<HTMLDivElement, CircularGalleryProps>(
  (
    {
      items,
      className,
      radius = 130,
      holdDuration = 2600,
      transitionDuration = 1100,
      onStepChange,
      ...props
    },
    ref,
  ) => {
    const [step, setStep] = useState(0);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
      timerRef.current = setInterval(
        () => setStep((prev) => prev + 1),
        holdDuration + transitionDuration,
      );
      return () => {
        if (timerRef.current) clearInterval(timerRef.current);
      };
    }, [holdDuration, transitionDuration]);

    const anglePerItem = 360 / items.length;

    useEffect(() => {
      onStepChange?.(((step % items.length) + items.length) % items.length);
    }, [step, items.length, onStepChange]);
    const rotation = -step * anglePerItem;

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex h-full w-full items-center justify-center [perspective:1200px]",
          className,
        )}
        {...props}
      >
        <div
          className="relative h-full w-full [transform-style:preserve-3d]"
          style={{
            transform: `rotateY(${rotation}deg)`,
            transition: `transform ${transitionDuration}ms cubic-bezier(0.65, 0, 0.35, 1)`,
          }}
        >
          {items.map((item, i) => {
            const itemAngle = i * anglePerItem;
            const relativeAngle = (itemAngle + rotation) % 360;
            const wrapped = (relativeAngle + 360) % 360;
            const normalized = wrapped > 180 ? 360 - wrapped : wrapped;
            const isFront = normalized < 1;
            const opacity = isFront ? 1 : 0.3;
            const scale = isFront ? 1 : 0.8;

            return (
              <div
                key={item.common}
                className="absolute left-1/2 top-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 [backface-visibility:hidden]"
                style={{
                  transform: `rotateY(${itemAngle}deg) translateZ(${radius}px) rotateY(${-itemAngle - rotation}deg) scale(${scale})`,
                  opacity,
                  transition: `opacity ${transitionDuration}ms ease, transform ${transitionDuration}ms cubic-bezier(0.65, 0, 0.35, 1)`,
                  zIndex: Math.round(1000 - normalized),
                }}
              >
                <img
                  src={item.photo.url}
                  alt={item.photo.text}
                  width={900}
                  height={900}
                  loading="eager" fetchPriority="high"
                  className="hero-img-float h-full w-full object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.65)]"
                  style={{
                    objectPosition: item.photo.pos,
                    animationDelay: `${i * 0.35}s`,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  },
);

CircularGallery.displayName = "CircularGallery";

export { CircularGallery };
