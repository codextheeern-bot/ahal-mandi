import { useEffect, useState } from "react";
import logoMark from "@/assets/logo-mark.png";

const MIN_VISIBLE_MS = 1700;
const FADE_MS = 500;

export function LoadingScreen() {
  const [fading, setFading] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), MIN_VISIBLE_MS);
    const hideTimer = setTimeout(
      () => setHidden(true),
      MIN_VISIBLE_MS + FADE_MS,
    );
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505] transition-opacity duration-500 ease-out"
      style={{ opacity: fading ? 0 : 1, pointerEvents: fading ? "none" : "auto" }}
    >
      <div className="relative flex flex-col items-center">
        <img
          src={logoMark}
          alt="Ahal Mandi"
          className="loading-logo relative z-10 h-60 w-auto animate-pulse md:h-[19.5rem]"
        />
        <div className="loading-beam" />
      </div>
    </div>
  );
}
