"use client";
import ProjetItem from "./ProjetItem";
import ProjetItemFeatured from "./ProjetItemFeatured";
import { useResponsive } from "@/hooks/UseResponsive";

const ProjetsList = ({ projects }) => {
	const { isTablet } = useResponsive();
	const featuredProject = projects.filter((p) => p.featured);
	const otherProjects = projects.filter((p) => !p.featured);
	const listingProjects = !isTablet ? otherProjects : projects;

	return (
		<section id="projets">
			<div className="relative wrapper grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
				{featuredProject &&
					!isTablet &&
					featuredProject.map((project) => (
						<ProjetItemFeatured
							key={project.slug}
							project={project}
						/>
					))}

				{listingProjects.map((project) => (
					<ProjetItem key={project.slug} project={project} />
				))}
			</div>
		</section>
	);
};

export default ProjetsList;
