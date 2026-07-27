"use client";

import { useEffect, useState } from "react";
import { YakLoader } from "@/components/YakLoader";

export function ClientLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [reduced] = useState(() => {
    if (typeof window === "undefined") return false;
    return (
      !!window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  });

  // Lock scroll and pin to the top while the loader runs, so the reveal frames the top of the page.
  useEffect(() => {
    if (!loading) return;
    const prev = document.body.style.overflow;
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [loading]);

  return (
    <>
      {loading && (
        <YakLoader
          reduced={reduced}
          onComplete={() => {
            setLoading(false);
            // Signal the hero that the background reveal has fully finished, so its
            // walking-Yak sequence can begin (after a short, intentional delay).
            window.dispatchEvent(new CustomEvent("iy:reveal-complete"));
          }}
        />
      )}
      {/* Page is painted at full opacity behind the loader so it can be revealed through the
          wordmark holes; it just isn't interactive until the loader unmounts. */}
      <div aria-hidden={loading} style={{ pointerEvents: loading ? "none" : "auto" }}>
        {children}
      </div>
    </>
  );
}
