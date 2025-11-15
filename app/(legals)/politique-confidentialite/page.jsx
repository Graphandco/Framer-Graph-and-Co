import PageHero from "@/components/ui/PageHero";
import Politique from "@/markdown/politique-confidentialite.mdx";

export const metadata = {
   title: "Politique de confidentialité - Agence Web Colmar | Graph & Co",
   description:
      "Politique de confidentialité de Graph & Co, agence web à Colmar. Découvrez comment vos données personnelles sont collectées, utilisées et protégées sur notre site.",
   openGraph: {
      title: "Politique de confidentialité - Agence Web Colmar | Graph & Co",
      description:
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
         <PageHero
            title="Politique de confidentialité"
            image="/legals/politique.avif"
         />
         <div className="wrapper markdown py-8 sm:py-16">
            <Politique />
         </div>
      </>
   );
};

export default PolitiqueConfidentialitePage;
