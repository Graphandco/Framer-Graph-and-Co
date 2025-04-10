import PageHero from "@/components/ui/PageHero";
import { getMdxData } from "@/utils/mdxUtils";
import ProjetsList from "@/components/projets/ProjetsList";
import { TabsFAQ } from "@/components/TabsFAQ";

export const metadata = {
	title: "Les projets | Graph and Co",
	description:
		"Découvrez nos réalisations de sites web à Colmar : projets sur-mesure, vitrines, e-commerce. Un aperçu concret de notre savoir-faire en design, UX et performance.",
	openGraph: {
		title: "Les projets | Graph and Co",
		description:
			"Découvrez nos réalisations de sites web à Colmar : projets sur-mesure, vitrines, e-commerce. Un aperçu concret de notre savoir-faire en design, UX et performance.",
		url: "https://graphandco.com/projets",
		images: [
			{
				url: "https://graphandco.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Graph and Co - projets",
			},
		],
		type: "website",
	},
};

export default async function ProjectsPage() {
	const data = await getMdxData("markdown/projets");
	return (
		<>
			<PageHero title="Nos projets" image="/projets/hero-projets.avif" />

			<ProjetsList projects={data} />

			<section className="bg-black/5">
				<TabsFAQ />
			</section>
		</>
	);
}
