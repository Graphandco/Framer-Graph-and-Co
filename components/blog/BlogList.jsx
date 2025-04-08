"use client";

import { useState } from "react";
import BlogItem from "./BlogItem";
import RealisationsText from "@/markdown/realisations.mdx";
import { AnimatePresence, motion } from "framer-motion";
import BlogFilter from "./BlogFilter";
import Button from "../ui/Button";

const BlogList = ({ blog }) => {
	const [activeCategory, setActiveCategory] = useState("tous");

	const filteredBlogs = blog.filter((blog) =>
		activeCategory === "tous" ? true : blog.category === activeCategory
	);

	return (
		<section id="blog">
			<div className="wrapper py-8 sm:py-16">
				{/* Filtres */}
				<BlogFilter
					activeCategory={activeCategory}
					setActiveCategory={setActiveCategory}
				/>

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
								className="p-4 sm:p-8 md:p-12 bg-white rounded-3xl"
							>
								<div className="text-sm xs:text-base">
									<RealisationsText />
								</div>
								<Button small href="offres" className="mt-5">
									Voir nos offres
								</Button>
							</motion.article>
						)}

						{filteredBlogs.map((blog) => (
							<BlogItem key={blog.slug} blog={blog} />
						))}
					</AnimatePresence>
				</motion.div>
			</div>
		</section>
	);
};

export default BlogList;
