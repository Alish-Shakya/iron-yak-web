"use client";

import { useState } from "react";
import { YakLoader } from "@/components/YakLoader";

export function ClientLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <YakLoader onComplete={() => setLoading(false)} />}
      <div
        style={{
          opacity: loading ? 0 : 1,
          transition: "opacity 0.8s ease-in-out",
          pointerEvents: loading ? "none" : "auto",
        }}
      >
        {children}
      </div>
    </>
  );
}
