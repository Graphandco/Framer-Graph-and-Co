import Hero from "@/components/home/Hero";
import NosCompetences from "@/components/home/NosCompetences";
import NosAtouts from "@/components/home/NosAtouts";
// import Rassurance from "@/components/home/Rassurance";
import SiteSurMesure from "@/components/home/SiteSurMesure";
import Stats from "@/components/home/Stats";
import { StickySection } from "@/components/home/StickySection";
import Temoignage from "@/components/home/Temoignage";

export const metadata = {
   title: "Agence Web Alsace | Création Sites Internet Colmar | Graph & Co",
   description:
      "Agence web en Alsace spécialisée dans la création de sites internet sur-mesure. Design moderne, performances optimales et accompagnement personnalisé à Colmar.",
   openGraph: {
      title: "Agence Web Alsace | Création Sites Internet Colmar | Graph & Co",
      description:
         "Agence web en Alsace spécialisée dans la création de sites internet sur-mesure. Design moderne, performances optimales et accompagnement personnalisé à Colmar.",
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
