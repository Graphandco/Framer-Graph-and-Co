"use client";

import { useState } from "react";
import BlogItem from "./BlogItem";
import BlogPresentation from "@/markdown/presentation-blog.mdx";
import { AnimatePresence, motion } from "framer-motion";
import BlogFilter from "./BlogFilter";

const BlogList = ({ blog }) => {
	const [activeCategory, setActiveCategory] = useState("tous");

	const filteredBlogs = blog
		// Filtrer par catégorie
		.filter((blog) =>
			activeCategory === "tous" ? true : blog.category === activeCategory
		)
		// Trier par date (du plus récent au plus ancien)
		.sort(
			(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
		);

	return (
		<section id="blog">
			<div className="wrapper py-8 sm:py-16">
				<div className="markdown">
					<BlogPresentation />
				</div>
				{/* Filtres */}
				<BlogFilter
					activeCategory={activeCategory}
					setActiveCategory={setActiveCategory}
				/>

				{/* Liste des projets */}
				<motion.div
					layout
					className="grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
				>
					<AnimatePresence>
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
