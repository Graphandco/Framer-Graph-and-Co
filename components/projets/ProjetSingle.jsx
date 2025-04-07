"use client";

import { useEffect, useState } from "react";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import MDXRenderer from "@/components/MDXRenderer";
import PageHero from "../ui/PageHero";
import Button from "../ui/Button";
import { GrReturn } from "react-icons/gr";

const ProjetSingle = ({ fileContent }) => {
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
				image={`/projets/${frontmatter.image}`}
			/>
			<div className="wrapper py-24">
				<Button
					small
					href="/projets"
					icon=<GrReturn />
					className="mb-5"
				>
					Retour aux projets
				</Button>
				<MDXRenderer source={mdxSource} />
			</div>
		</>
	);
};

export default ProjetSingle;
