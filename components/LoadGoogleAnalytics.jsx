"use client";

import { useEffect } from "react";

export default function LoadGoogleAnalytics() {
   useEffect(() => {
      const loadScript = () => {
         // Injecte le script principal
         const script = document.createElement("script");
         script.src =
            "https://www.googletagmanager.com/gtag/js?id=G-8KZZ89ZK05";
         script.async = true;
         document.head.appendChild(script);

         // Configure GA après chargement
         window.dataLayer = window.dataLayer || [];
         function gtag() {
            window.dataLayer.push(arguments);
         }
         gtag("js", new Date());
         gtag("config", "G-345118589");
      };

      // Attendre que la page soit complètement chargée
      if (document.readyState === "complete") {
         loadScript();
      } else {
         window.addEventListener("load", loadScript);
         return () => window.removeEventListener("load", loadScript);
      }
   }, []);

   return null;
}
