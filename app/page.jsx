import Hero from "@/components/home/Hero";
import NosCompetences from "@/components/home/NosCompetences";
import NosAtouts from "@/components/home/NosAtouts";
// import Rassurance from "@/components/home/Rassurance";
import SiteSurMesure from "@/components/home/SiteSurMesure";
import Stats from "@/components/home/Stats";
import { StickySection } from "@/components/home/StickySection";
import Temoignage from "@/components/home/Temoignage";

export const metadata = {
   title: "Création de sites Web | Graph and Co",
   description:
      "Agence web à Colmar spécialisée dans la création de sites sur mesure. Graph and Co conçoit des sites rapides, esthétiques et orientés expérience utilisateur.",
   openGraph: {
      title: "Création de sites Web | Graph and Co",
      description:
         "Vous avez un projet de site web sur-mesure ? Graph and Co vous accompagne avec une approche esthétique, rapide et pensée pour vos utilisateurs. Discutons-en !",
      url: "https://graphandco.com/contact",
      images: [
         {
            url: "https://graphandco.com/og-image.jpg",
            width: 1200,
            height: 630,
            alt: "Graph and Co - accueil",
         },
      ],
      type: "website",
   },
};

export default function Home() {
   return (
      <>
         <Hero />
         <StickySection />
         <SiteSurMesure />
         <NosCompetences />
         <Stats />
         <NosAtouts />
         {/* <Rassurance /> */}
         <Temoignage />
      </>
   );
}
