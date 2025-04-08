import PageHero from "@/components/ui/PageHero";
import { getMdxData } from "@/utils/mdxUtils";
import ProjetsList from "@/components/projets/ProjetsList";
import { TabsFAQ } from "@/components/TabsFAQ";

export default async function ProjectsPage() {
	const data = await getMdxData("markdown/projets");
	return (
		<>
			<PageHero title="Nos projets" image="/projets/hero-projets.avif" />
			<section className="bg-black/5">
				<TabsFAQ />
				<ProjetsList projects={data} />
			</section>
		</>
	);
}
