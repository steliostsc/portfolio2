"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";

export default function LenisWrapper({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // On mobile, don't use Lenis (no smooth scroll)
  if (isMobile) {
    return <>{children}</>;
  }

  // On desktop, use Lenis smooth scroll
  return <ReactLenis root>{children}</ReactLenis>;
}
