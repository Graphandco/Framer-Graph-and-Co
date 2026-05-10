import PageHero from "@/components/ui/PageHero";
import ProjetsList from "@/components/projets/ProjetsList";
import { getWordpressContent } from "@/actions/getWordpressContent";
import { PROJECTS_QUERY } from "@/actions/queries/projectsQuery";
import { getGlobalQuery } from "@/actions/queries/globalQuery";

const projectsData = await getWordpressContent({
   query: PROJECTS_QUERY,
   variables: {},
   rootField: "projects",
});

const pageData = await getWordpressContent({
   query: getGlobalQuery("page"),
   variables: { id: 193 },
   rootField: "page",
});

export const metadata = {
   title: "Portfolio Sites Web Colmar - Réalisations E-commerce & Vitrines | Graph & Co",
   description:
      "Découvrez nos réalisations de sites web à Colmar : projets sur-mesure, vitrines, e-commerce. Un aperçu concret de notre savoir-faire en design, UX et performance.",
   alternates: {
      canonical: "https://graphandco.com/projets",
   },
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
   return (
      <>
         <PageHero
            title={pageData.title}
            image={pageData.featuredImage.node.sourceUrl}
         />

         <ProjetsList projects={projectsData.nodes} pageData={pageData} />
      </>
   );
}
