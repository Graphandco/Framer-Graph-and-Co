"use client";

import { useEffect, useState } from "react";
import {
   ConsentManagerDialog,
   ConsentManagerProvider,
   CookieBanner,
} from "@c15t/nextjs";

export default function ConsentManager({ children }) {
   const [mounted, setMounted] = useState(false);

   useEffect(() => {
      setMounted(true);
   }, []);

   return (
      <ConsentManagerProvider
         options={{
            mode: "offline", // Mode offline sans backend
            consentCategories: ["necessary", "marketing"],
            ignoreGeoLocation: true, // Toujours afficher la bannière (pour test)
            translations: {
               defaultLanguage: "fr",
               translations: {
                  fr: {
                     common: {
                        acceptAll: "Tout accepter",
                        rejectAll: "Tout refuser",
                        save: "Enregistrer mes préférences",
                        customize: "Paramétrer",
                     },
                     cookieBanner: {
                        title: "Nous utilisons des cookies",
                        description:
                           "Nous utilisons des cookies pour améliorer votre expérience sur notre site et analyser notre trafic. Vous pouvez choisir d'accepter ou de refuser les cookies de marketing.",
                     },
                     consentManagerDialog: {
                        title: "Paramètres des cookies",
                        description:
                           "Choisissez les cookies que vous souhaitez accepter. Les cookies nécessaires sont toujours actifs.",
                     },
                     consentTypes: {
                        necessary: {
                           title: "Cookies nécessaires",
                           description:
                              "Ces cookies sont essentiels au fonctionnement du site. Ils ne peuvent pas être désactivés.",
                        },
                        marketing: {
                           title: "Cookies marketing et analytics",
                           description:
                              "Ces cookies nous permettent d'analyser l'utilisation du site et d'améliorer notre offre. Nous utilisons Google Analytics pour comprendre comment les visiteurs utilisent notre site.",
                        },
                     },
                  },
               },
            },
         }}
      >
         {mounted && (
            <>
               <CookieBanner />
               <ConsentManagerDialog
                  theme={{
                     "dialog.root": "c15t-dialog-root",
                     "dialog.header": "c15t-dialog-header",
                     "dialog.title": "c15t-dialog-title",
                     "dialog.description": "c15t-dialog-description",
                     "dialog.content": "c15t-dialog-content",
                     "dialog.footer": "c15t-dialog-footer",
                     "dialog.overlay": "c15t-dialog-overlay",
                  }}
               />
            </>
         )}
         {children}
      </ConsentManagerProvider>
   );
}
