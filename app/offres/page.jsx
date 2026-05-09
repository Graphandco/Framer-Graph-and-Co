import Outils from "@/components/offres/Outils";
import PriceCards from "@/components/offres/prices/PriceCards";
import TextIntro from "@/components/offres/TextIntro";
import UserWithIcon from "@/components/offres/UserWithIcon";
import { VelocityText } from "@/components/offres/VelocityText";
import PageHero from "@/components/ui/PageHero";
import { getWordpressContent } from "@/actions/getWordpressContent";
import { TARIFS_QUERY } from "@/actions/queries/tarifsQuery";
import { PACKS_QUERY } from "@/actions/queries/packsQuery";

const data = await getWordpressContent({
   query: TARIFS_QUERY,
   variables: { id: 163 },
   rootField: "page",
});

const packsData = await getWordpressContent({
   query: PACKS_QUERY,
   variables: {},
   rootField: "packs",
});

const sortedPacksData = {
   ...packsData,
   nodes: [...packsData.nodes].sort(
      (a, b) => a.packs.order - b.packs.order
   ),
};

export const metadata = {
   title: "Tarifs création de sites web – Colmar, Sainte-Croix-en-Plaine | Graph & Co",
   description:
      "Tarifs création de sites web à Colmar, Sainte-Croix-en-Plaine et environs : vitrine, e-commerce, premium. Hébergement inclus, design sur-mesure, maintenance assurée.",
   alternates: {
      canonical: "https://graphandco.com/offres",
   },
   openGraph: {
      title: "Tarifs création de sites web – Colmar, Sainte-Croix-en-Plaine | Graph & Co",
      description:
         "Tarifs création de sites web à Colmar, Sainte-Croix-en-Plaine et environs : vitrine, e-commerce, premium. Hébergement inclus, design sur-mesure, maintenance assurée.",
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
   const heroImage =
      data?.featuredImage?.node?.sourceUrl || "/offres/hero-offres.avif";

   return (
      <>
         <PageHero title={data.title} image={heroImage} position="top" />
         <TextIntro data={data} />
         <PriceCards
            title={data.tarifs.packs_title}
            description={data.tarifs.packs_description}
            packsData={sortedPacksData}
         />
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
