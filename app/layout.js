import { Suspense } from "react";
import { Outfit, Urbanist } from "next/font/google";
import "./globals.css";
import "./custom.scss";
import { ViewTransitions } from "next-view-transitions";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import LoadGoogleAnalytics from "@/components/LoadGoogleAnalytics";
import JsonLdLocalBusiness from "@/components/seo/JsonLdLocalBusiness";
import MatomoAnalytics from "@/components/MatomoAnalytics";
import BodyClassHandler from "@/utils/BodyClassHandler";
// import { GoogleAnalytics } from "@next/third-parties/google";

const outfit = Outfit({
   variable: "--font-outfit",
   subsets: ["latin"],
});

const urbanist = Urbanist({
   variable: "--font-urbanist",
   subsets: ["latin"],
});

function getMatomoOrigin() {
   const url = process.env.NEXT_PUBLIC_MATOMO_URL;
   if (!url) return null;
   try {
      return new URL(url).origin;
   } catch {
      return null;
   }
}

const matomoOrigin = getMatomoOrigin();

export const metadata = {
   title: "Agence Web Colmar - Création de Sites Internet | Graph & Co",
   description:
      "Agence web à Colmar spécialisée dans la création de sites internet sur mesure. Design moderne, sites rapides et accompagnement personnalisé.",
   alternates: {
      canonical: "https://graphandco.com/",
   },
   openGraph: {
      title: "Agence Web Colmar - Création de Sites Internet | Graph & Co",
      description:
         "Agence web à Colmar spécialisée dans la création de sites internet sur mesure. Design moderne, sites rapides et accompagnement personnalisé.",
      url: "https://graphandco.com",
      images: [
         {
            url: "https://graphandco.com/og-image.jpg",
            width: 1200,
            height: 630,
            alt: "Graph & Co - accueil",
         },
      ],
      type: "website",
   },
};

export default function RootLayout({ children }) {
   return (
      <ViewTransitions>
         <html lang="fr" className="relative">
            <head>
               <link rel="manifest" href="/manifest.json" />
               <link rel="icon" href="/logo512.png" />
               <meta name="theme-color" content="#ffffff" />
               {matomoOrigin ? (
                  <>
                     <link rel="preconnect" href={matomoOrigin} />
                     <link rel="dns-prefetch" href={matomoOrigin} />
                  </>
               ) : null}
            </head>
            <BodyClassHandler />
            <body
               className={`${outfit.variable} ${urbanist.variable} antialiased`}
               suppressHydrationWarning={true}
            >
               <JsonLdLocalBusiness />
               {process.env.NEXT_PUBLIC_ENVIRONMENT === "DEV" && (
                  <div className="fixed inset-0 outline-4 -outline-offset-4 outline-primary z-50 pointer-events-none"></div>
               )}

               <Header />
               <main className="relative z-10 bg-white">{children}</main>
               <ScrollToTopButton />
               <Footer />
               <LoadGoogleAnalytics />
               <Suspense fallback={null}>
                  <MatomoAnalytics />
               </Suspense>
            </body>
            {/* <GoogleAnalytics gaId="G-345118589" /> */}
            {/* </BodyClassHandler> */}
         </html>
      </ViewTransitions>
   );
}
