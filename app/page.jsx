import Hero from "@/components/home/Hero";
import NosCompetences from "@/components/home/NosCompetences";
import NosAtouts from "@/components/home/NosAtouts";
// import Rassurance from "@/components/home/Rassurance";
import SiteSurMesure from "@/components/home/SiteSurMesure";
import Stats from "@/components/home/Stats";
import { StickySection } from "@/components/home/StickySection";
import Temoignage from "@/components/home/Temoignage";

export const metadata = {
   title: "Agence Web Colmar - Création Sites Internet Sur-Mesure | Graph & Co",
   description:
      "Agence web à Colmar spécialisée dans la création de sites internet sur-mesure. Design moderne, performances optimales et accompagnement personnalisé à Colmar.",
   openGraph: {
      title: "Agence Web Colmar - Création Sites Internet Sur-Mesure | Graph & Co",
      description:
         "Agence web à Colmar spécialisée dans la création de sites internet sur-mesure. Design moderne, performances optimales et accompagnement personnalisé à Colmar.",
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
