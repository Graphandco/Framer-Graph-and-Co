"use client";

import { useState } from "react";
import Button from "../ui/Button";
import ProjetItem from "./ProjetItem";
import RealisationsText from "@/markdown/realisations.mdx";
import { AnimatePresence, motion } from "framer-motion";

const ProjetsList = ({ projects }) => {
	const [activeCategory, setActiveCategory] = useState("tous");

	const filteredProjects = projects.filter((project) =>
		activeCategory === "tous" ? true : project.category === activeCategory
	);

	// 🔀 Trie les projets pour que les `featured` passent en premier
	const orderedProjects = [...filteredProjects].sort((a, b) => {
		if (a.featured && !b.featured) return -1;
		if (!a.featured && b.featured) return;
	});

	return (
		<section id="projets">
			<div className="wrapper py-16">
				{/* Filtres */}
				<div className="sticky top-0 z-20 py-6 flex flex-wrap justify-center gap-4">
					{["tous", "vitrine", "e-commerce", "mockup"].map(
						(category) => (
							<Button
								key={category}
								small
								muted={activeCategory === category}
								black={activeCategory !== category}
								onClick={() => setActiveCategory(category)}
								icon={null}
							>
								{category}
							</Button>
						)
					)}
				</div>

				{/* Liste des projets */}
				<motion.div
					layout
					className="grid xs:grid-cols-1 sm:grid-cols-2 gap-4"
				>
					<AnimatePresence>
						{activeCategory === "tous" && (
							<motion.article
								layout
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 20 }}
								transition={{ duration: 0.4, ease: "easeOut" }}
								className="p-12 bg-white rounded-3xl"
							>
								<RealisationsText />
								<Button small href="offres" className="mt-5">
									Voir nos offres
								</Button>
							</motion.article>
						)}

						{orderedProjects.map((project) => (
							<ProjetItem key={project.slug} project={project} />
						))}
					</AnimatePresence>
				</motion.div>
			</div>
		</section>
	);
};

export default ProjetsList;
