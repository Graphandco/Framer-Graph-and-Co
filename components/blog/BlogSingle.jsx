"use client";

import { useEffect, useState } from "react";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import MDXRenderer from "@/components/MDXRenderer";
import PageHero from "../ui/PageHero";
import Button from "../ui/Button";
import { GrReturn } from "react-icons/gr";

const BlogSingle = ({ fileContent }) => {
	const [mdxSource, setMdxSource] = useState(null);
	const [frontmatter, setFrontmatter] = useState(null);

	useEffect(() => {
		const processMDX = async () => {
			const { data, content } = matter(fileContent);
			const mdx = await serialize(content);
			setFrontmatter(data);
			setMdxSource(mdx);
		};

		processMDX();
	}, [fileContent]);

	if (!mdxSource || !frontmatter) return <p>Chargement...</p>;

	return (
		<>
			<PageHero
				title={frontmatter.title}
				image={`/blog/${frontmatter.image}`}
			/>
			<div className="wrapper py-8 sm:py-16">
				<Button small href="/blog" icon=<GrReturn /> className="mb-5">
					Retour au blog
				</Button>
				<MDXRenderer source={mdxSource} />
			</div>
		</>
	);
};

export default BlogSingle;
