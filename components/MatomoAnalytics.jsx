"use client";

import { trackAppRouter } from "@socialgouv/matomo-next";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL;
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;
const MATOMO_INIT_DELAY_MS = 3000;

export default function MatomoAnalytics() {
   const pathname = usePathname();
   const searchParams = useSearchParams();
   const isInitializedRef = useRef(false);

   useEffect(() => {
      if (!MATOMO_URL || !MATOMO_SITE_ID) return;

      const track = () => {
         trackAppRouter({
            url: MATOMO_URL,
            siteId: MATOMO_SITE_ID,
            pathname,
            searchParams,
         });
         isInitializedRef.current = true;
      };

      if (isInitializedRef.current) {
         track();
         return;
      }

      const timer = setTimeout(track, MATOMO_INIT_DELAY_MS);
      return () => clearTimeout(timer);
   }, [pathname, searchParams]);

   return null;
}
