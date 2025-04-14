"use client";

import { useEffect, useState } from "react";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import MDXRenderer from "@/components/MDXRenderer";
import PageHero from "../ui/PageHero";
import Button from "../ui/Button";
import { GrReturn } from "react-icons/gr";
import Loading from "../Loading";

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

	if (!mdxSource || !frontmatter) {
		return <Loading />;
	}
	return (
		<>
			<PageHero
				title={frontmatter.title}
				image={`/blog/${frontmatter.image}`}
			/>
			<div className="wrapper pb-24">
				<Button
					small
					href="/blog"
					icon=<GrReturn />
					className="mt-3 mb-8 ml-auto"
				>
					Retour au blog
				</Button>
				<h2 className="text-4xl mb-5">{frontmatter.description}</h2>
				<MDXRenderer source={mdxSource} />
			</div>
		</>
	);
};

export default BlogSingle;
