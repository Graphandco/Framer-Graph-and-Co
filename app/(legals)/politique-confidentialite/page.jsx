import PageHeroSection from "@/components/ui/PageHeroSection";
import { getWordpressContent } from "@/actions/getWordpressContent";
import { getGlobalQuery } from "@/actions/queries/globalQuery";

const pageData = await getWordpressContent({
   query: getGlobalQuery("page"),
   variables: { id: 338 },
   rootField: "page",
});

export const metadata = {
   title:
      pageData.seo.title ||
      "Politique de confidentialité - Agence Web Colmar | Graph & Co",
   description:
      pageData.seo.metaDesc ||
      "Politique de confidentialité de Graph & Co, agence web à Colmar. Découvrez comment vos données personnelles sont collectées, utilisées et protégées sur notre site.",
   robots: {
      index: pageData.seo?.metaRobotsNoindex !== "noindex",
      follow: pageData.seo?.metaRobotsNofollow !== "nofollow",
   },
   alternates: {
      canonical: "https://graphandco.com/politique-confidentialite",
   },
   openGraph: {
      title:
         pageData.seo.title ||
         "Politique de confidentialité - Agence Web Colmar | Graph & Co",
      description:
         pageData.seo.metaDesc ||
         "Politique de confidentialité de Graph & Co, agence web à Colmar. Découvrez comment vos données personnelles sont collectées, utilisées et protégées sur notre site.",
      url: "https://graphandco.com/politique-confidentialite",
      images: [
         {
            url: "https://graphandco.com/og-image.jpg",
            width: 1200,
            height: 630,
            alt: "Graph & Co - Politique de confidentialité",
         },
      ],
      type: "website",
   },
};

const PolitiqueConfidentialitePage = () => {
   return (
      <>
         <PageHeroSection
            title={pageData.title}
            image={pageData.featuredImage.node.sourceUrl}
         />
         <div className="wrapper markdown py-8 sm:py-16">
            <div dangerouslySetInnerHTML={{ __html: pageData.content }} />
         </div>
      </>
   );
};

export default PolitiqueConfidentialitePage;
