import PageHero from "@/components/ui/PageHero";
import { getWordpressContent } from "@/actions/getWordpressContent";
import { getGlobalQuery } from "@/actions/queries/globalQuery";

const pageData = await getWordpressContent({
   query: getGlobalQuery("page"),
   variables: { id: 333 },
   rootField: "page",
});

export const metadata = {
   title: "Mentions légales - Agence Web Colmar | Graph & Co",
   description:
      "Mentions légales de Graph & Co, agence de création de sites web à Colmar. Retrouvez toutes les informations légales, coordonnées et responsabilités du site.",
   alternates: {
      canonical: "https://graphandco.com/mentions-legales",
   },
   openGraph: {
      title: "Mentions légales - Agence Web Colmar | Graph & Co",
      description:
         "Mentions légales de Graph & Co, agence de création de sites web à Colmar. Retrouvez toutes les informations légales, coordonnées et responsabilités du site.",
      url: "https://graphandco.com/mentions-legales",
      images: [
         {
            url: "https://graphandco.com/og-image.jpg",
            width: 1200,
            height: 630,
            alt: "Graph & Co - Mentions légales",
         },
      ],
      type: "website",
   },
};

const MentionsLegalesPage = () => {
   return (
      <>
         <PageHero
            title={pageData.title}
            image={pageData.featuredImage.node.sourceUrl}
         />
         <div className="wrapper markdown py-8 sm:py-16">
            <div dangerouslySetInnerHTML={{ __html: pageData.content }} />
         </div>
      </>
   );
};

export default MentionsLegalesPage;
