import Hero from "@/components/home/Hero";
import NosCompetences from "@/components/home/NosCompetences";
import NosAtouts from "@/components/home/NosAtouts";
// import Rassurance from "@/components/home/Rassurance";
import SiteSurMesure from "@/components/home/SiteSurMesure";
import Stats from "@/components/home/Stats";
import { HomeContentText } from "@/components/home/HomeContentText";
import { StickySection } from "@/components/home/StickySection";
import Temoignage from "@/components/home/Temoignage";
import { getWordpressContent } from "@/actions/getWordpressContent";
import { HOMEPAGE_QUERY } from "@/actions/queries/homepageQuery";

export const metadata = {
   title: "Agence Web Colmar - Création Sites Internet Sur-Mesure | Graph & Co",
   description:
      "Agence web à Colmar spécialisée dans la création de sites internet sur-mesure. Design moderne, performances optimales et accompagnement personnalisé à Colmar.",
   alternates: {
      canonical: "https://graphandco.com/",
   },
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

const data = await getWordpressContent({
   query: HOMEPAGE_QUERY,
   variables: { id: 106 },
   rootField: "page",
});
export default function Home() {
   return (
      <>
         <Hero data={data.homepage.hero} />
         <StickySection />
         <HomeContentText />
         <SiteSurMesure />
         <NosCompetences />
         <Stats />
         <NosAtouts />
         {/* <Rassurance /> */}
         <Temoignage />
      </>
   );
}
