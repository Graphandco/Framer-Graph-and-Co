import PageHero from "@/components/ui/PageHero";
import ProjetsList from "@/components/projets/ProjetsList";
import { getWordpressProjects } from "@/actions/getWordpressProjects";
import { getWordpressContent } from "@/actions/getWordpressContent";

export const metadata = {
   title: "Portfolio Sites Web Colmar - Réalisations E-commerce & Vitrines | Graph & Co",
   description:
      "Découvrez nos réalisations de sites web à Colmar : projets sur-mesure, vitrines, e-commerce. Un aperçu concret de notre savoir-faire en design, UX et performance.",
   openGraph: {
      title: "Portfolio Sites Web Colmar - Réalisations E-commerce & Vitrines | Graph & Co",
      description:
         "Découvrez nos réalisations de sites web à Colmar : projets sur-mesure, vitrines, e-commerce. Un aperçu concret de notre savoir-faire en design, UX et performance.",
      url: "https://graphandco.com/projets",
      images: [
         {
            url: "https://graphandco.com/og-image.jpg",
            width: 1200,
            height: 630,
            alt: "Graph & Co - projets",
         },
      ],
      type: "website",
   },
};

export default async function ProjectsPage() {
   const projects = await getWordpressProjects();
   const data = await getWordpressContent({ id: 57, type: "page" });
   return (
      <>
         <PageHero title={data.title} image="/projets/hero-projets.avif" />

         <ProjetsList projects={projects} data={data} />
      </>
   );
}
