import Outils from "@/components/offres/Outils";
import PriceCards from "@/components/offres/prices/PriceCards";
import TextIntro from "@/components/offres/TextIntro";
import UserWithIcon from "@/components/offres/UserWithIcon";
import { VelocityText } from "@/components/offres/VelocityText";
import PageHero from "@/components/ui/PageHero";

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
   return (
      <>
         <PageHero
            title="Découvrez nos offres de création de sites web à Colmar"
            image="/offres/hero-offres.avif"
            imageClass="object-cover object-top"
            position="top"
         />
         <TextIntro />
         <PriceCards />
         {/*
			<div className="info wrapper-small pt-12 sm:pt-24">
				 <h2 className="text-2xl title-font font-semibold mb-10">
					Réalisons ensemble votre site, doté de toutes les
					fonctionnalités dont vous et vos clients avez besoin.
				</h2> */}
         {/* <VanishParagraphs>
					<h2 className="title-text text-2xl sm:text-3xl md:sm:text-4xl font-semibold">
						Chaque site web est unique,
					</h2>
					<h3 className="title-text text-xl sm:text-2xl md:sm:text-3xl text-neutral-500 font-semibold mb-8">
						car chaque entreprise l'est également.
					</h3>
					<p>
						Soyez exigeant : nous créons ainsi votre site «
						sur-mesure », afin qu'il vous habille comme un vêtement
						taillé pour vous ! Ni trop grand, ni trop petit, dans
						une matière seyante et avec un budget qui vous
						correspond. Jetez un oeil à quelques unes de nos
						créations pour vous aider à définir vos besoins.
					</p>
				</VanishParagraphs> 
				<Button icon={null} href="/projets" className="mt-8">
					Découvrez nos projets
				</Button>
			</div>
         */}
         <VelocityText />
         <UserWithIcon />
         <Outils />
      </>
   );
}
