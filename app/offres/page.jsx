import Prices from "@/components/offres/Prices";
import SurMesure from "@/components/offres/SurMesure";
import TextIntro from "@/components/offres/TextIntro";
import UserWithIcon from "@/components/offres/UserWithIcon";
import PageHero from "@/components/ui/PageHero";

export const metadata = {
	title: "Nos offres | Graph and Co",
	description:
		"Découvrez nos offres de création de sites web à Colmar : sites vitrines, e-commerce, solutions sur-mesure. Design soigné, fonctionnalités avancées, accompagnement personnalisé.",
	openGraph: {
		title: "Nos offres | Graph and Co",
		description:
			"Découvrez nos offres de création de sites web à Colmar : sites vitrines, e-commerce, solutions sur-mesure. Design soigné, fonctionnalités avancées, accompagnement personnalisé.",
		url: "https://graphandco.com/offres",
		images: [
			{
				url: "https://graphandco.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Graph and Co - offres",
			},
		],
		type: "website",
	},
};

export default async function OffresPage() {
	return (
		<>
			<PageHero
				title="Nos offres"
				image="/offres/hero-offres.avif"
				imageClass="object-cover object-top"
			/>
			<Prices />
			<TextIntro />
			<SurMesure />
			<UserWithIcon />
		</>
	);
}
