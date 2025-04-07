"use client";
import Button from "../ui/Button";
import ProjetItem from "./ProjetItem";
import RealisationsText from "@/markdown/realisations.mdx";

const ProjetsList = ({ projects }) => {
	const featuredProject = projects.filter((p) => p.featured);
	const otherProjects = projects.filter((p) => !p.featured);
	const orderedProjects = [...featuredProject, ...otherProjects];

	return (
		<section id="projets">
			<div className="relative wrapper grid xs:grid-cols-1 sm:grid-cols-2 gap-4 pt-24">
				<article className="p-12 bg-white rounded-3xl">
					<RealisationsText />
					<Button small href="offres" className="mt-5">
						Voir nos offres
					</Button>
				</article>
				{orderedProjects &&
					orderedProjects.map((project) => (
						<ProjetItem key={project.slug} project={project} />
					))}
			</div>
		</section>
	);
};

export default ProjetsList;
