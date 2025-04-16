import PageHero from "@/components/ui/PageHero";
import Mentions from "@/markdown/mentions-legales.mdx";

export const metadata = {
	title: "Mentions légales | Graph and Co",
	description:
		"Mentions légales de Graph and Co, agence de création de sites web à Colmar. Retrouvez toutes les informations légales, coordonnées et responsabilités du site.",
	openGraph: {
		title: "Mentions légales | Graph and Co",
		description:
			"Mentions légales de Graph and Co, agence de création de sites web à Colmar. Retrouvez toutes les informations légales, coordonnées et responsabilités du site.",
		url: "https://graphandco.com/mentions-legales",
		images: [
			{
				url: "https://graphandco.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Graph and Co - Mentions légales",
			},
		],
		type: "website",
	},
};

const MentionsLegalesPage = () => {
	return (
		<>
			<PageHero
				title="Mentions légales"
				image="/legals/mentions-legales.avif"
			/>
			<div className="wrapper markdown py-8 sm:py-16">
				<Mentions />
			</div>
		</>
	);
};

export default MentionsLegalesPage;
