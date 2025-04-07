import PageHero from "@/components/ui/PageHero";
import { getMdxData } from "@/utils/mdxUtils";
import RealisationsText from "@/markdown/realisations.mdx";
import ProjetsList from "@/components/projets/ProjetsList";

export default async function ProjectsPage() {
	const data = await getMdxData("markdown/projets");
	return (
		<>
			<PageHero title="Nos projets" image="/projets/hero-projets.avif" />
			<section className="bg-black/5">
				<div className="wrapper pt-24">
					<RealisationsText />
				</div>
				<ProjetsList projects={data} />
			</section>
		</>
	);
}
