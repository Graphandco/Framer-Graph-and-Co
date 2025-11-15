"use client";

import { useEffect, useState } from "react";
import { useConsentManager } from "@c15t/nextjs";

export default function LoadGoogleAnalytics() {
   // useConsentManager retourne { consents, selectedConsents, ... }
   const { consents } = useConsentManager();
   const [isGALoaded, setIsGALoaded] = useState(false);

   useEffect(() => {
      // Ne charger Google Analytics que si le consentement marketing est accordé
      if (!consents || !consents.marketing?.granted || isGALoaded) {
         return;
      }

      // Vérifier si GA n'est pas déjà chargé
      if (window.dataLayer && window.gtag) {
         setIsGALoaded(true);
         return;
      }

      const loadScript = () => {
         // Éviter de charger plusieurs fois
         if (
            document.querySelector(
               'script[src*="googletagmanager.com/gtag/js"]'
            )
         ) {
            setIsGALoaded(true);
            return;
         }

         // Injecte le script principal
         const script = document.createElement("script");
         script.src =
            "https://www.googletagmanager.com/gtag/js?id=G-8KZZ89ZK05";
         script.async = true;
         script.onload = () => {
            // Configure GA après chargement
            window.dataLayer = window.dataLayer || [];
            function gtag() {
               window.dataLayer.push(arguments);
            }
            window.gtag = gtag;
            gtag("js", new Date());
            gtag("config", "G-8KZZ89ZK05");
            setIsGALoaded(true);
         };
         document.head.appendChild(script);
      };

      // Attendre que la page soit complètement chargée
      if (document.readyState === "complete") {
         loadScript();
      } else {
         window.addEventListener("load", loadScript, { once: true });
      }
   }, [consents?.marketing?.granted, isGALoaded]);

   return null;
}
