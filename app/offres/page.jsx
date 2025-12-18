import Outils from "@/components/offres/Outils";
import PriceCards from "@/components/offres/prices/PriceCards";
import TextIntro from "@/components/offres/TextIntro";
import UserWithIcon from "@/components/offres/UserWithIcon";
import { VelocityText } from "@/components/offres/VelocityText";
import PageHero from "@/components/ui/PageHero";
import { getWordpressContent } from "@/actions/getWordpressContent";
import { getWordpressPacks } from "@/actions/getWordpressPacks";
export const metadata = {
   title: "Tarifs Création Site Web Colmar - Offres Vitrine & E-commerce | Graph & Co",
   description:
      "Découvrez nos tarifs de création de sites web à Colmar : site vitrine, e-commerce, premium. Hébergement inclus, design sur-mesure, maintenance assurée.",
   openGraph: {
      title: "Tarifs Création Site Web Colmar - Offres Vitrine & E-commerce | Graph & Co",
      description:
         "Découvrez nos tarifs de création de sites web à Colmar : site vitrine, e-commerce, premium. Hébergement inclus, design sur-mesure, maintenance assurée.",
      url: "https://graphandco.com/offres",
      images: [
         {
            url: "https://graphandco.com/og-image.jpg",
            width: 1200,
            height: 630,
            alt: "Graph & Co - offres",
         },
      ],
      type: "website",
   },
};

export default async function OffresPage() {
   const data = await getWordpressContent({ id: 60, type: "page" });
   const packs = await getWordpressPacks();
   return (
      <>
         <PageHero
            title={data.title}
            image="/offres/hero-offres.avif"
            imageClass="object-cover object-top"
            position="top"
         />
         <PriceCards data={data} packs={packs} />
         <TextIntro data={data} />
         <VelocityText />
         <UserWithIcon />
         <Outils />
      </>
   );
}
