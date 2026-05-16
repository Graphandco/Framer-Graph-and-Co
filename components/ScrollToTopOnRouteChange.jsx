"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "@studio-freight/react-lenis";

/** Remonte en haut à chaque changement de route (Lenis). */
export default function ScrollToTopOnRouteChange() {
   const pathname = usePathname();
   const lenis = useLenis();

   useEffect(() => {
      if (!lenis) return;

      const goTop = () => lenis.scrollTo(0, { immediate: true, force: true });
      goTop();
      const id = requestAnimationFrame(goTop);
      return () => cancelAnimationFrame(id);
   }, [pathname, lenis]);

   return null;
}
