"use client";

import { useEffect, useState } from "react";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import MDXRenderer from "@/components/MDXRenderer";
import PageHero from "../ui/PageHero";
import CustomButton from "../ui/CustomButton";
import { GrReturn } from "react-icons/gr";
import Loading from "../Loading";
import { FaEye } from "react-icons/fa";
import { ProjetCarousel } from "./ProjetCarousel";
import { MdArrowOutward } from "react-icons/md";

const ProjetSingle = ({ fileContent }) => {
	const [mdxSource, setMdxSource] = useState(null);
	const [frontmatter, setFrontmatter] = useState(null);

	const images = [
		{
			thumb: "/politique.avif",
			full: "/politique.avif",
			alt: "Politique de confidentialité",
		},
		{
			thumb: "/mentions-legales.avif",
			full: "/mentions-legales.avif",
			alt: "Mentions légales",
		},
		{
			thumb: "/politique.avif",
			full: "/projets/3eme-chance.avif",
			alt: "Politique de confidentialité",
		},
		{
			thumb: "/mentions-legales.avif",
			full: "/projets/bomot.avif",
			alt: "Mentions légales",
		},
	];
	useEffect(() => {
		const processMDX = async () => {
			const { data, content } = matter(fileContent);
			const mdx = await serialize(content);
			setFrontmatter(data);
			setMdxSource(mdx);
		};

		processMDX();
	}, [fileContent]);

	if (!mdxSource || !frontmatter) return <Loading />;

	return (
		<>
			<PageHero
				title={frontmatter.title}
				image={`/projets/${frontmatter.image}`}
				position={
					frontmatter.position ? frontmatter.position : "center"
				}
			/>
			<div className="wrapper pb-24">
				<CustomButton
					small
					outline
					href="/projets"
					icon=<GrReturn />
					className="mt-3 mb-8 ml-auto"
				>
					Retour aux projets
				</CustomButton>
				<h2 className="text-4xl font-bold mb-5">
					{frontmatter.description}
				</h2>
				<CustomButton
					blank
					icon={<FaEye />}
					href={frontmatter.url}
					className="mb-8"
				>
					Voir le site
				</CustomButton>
				<MDXRenderer source={mdxSource} />
				<div className="text-2xl text-center pt-7 pb-3">
					Découvrez{" "}
					<a
						href={frontmatter.url}
						target="blank"
						className="text-neutral-500 hover:text-primary transition-colors"
					>
						{frontmatter.title}
						<sup>
							<MdArrowOutward className="inline" />
						</sup>
					</a>{" "}
					en images !
				</div>
				<ProjetCarousel images={images} />
				{/* <div>
					<CustomButton
						href={frontmatter.url}
						blank
						icon={null}
						className="w-full py-4"
					>
						Découvrir le site {frontmatter.title}
					</CustomButton>
				</div> */}
			</div>
		</>
	);
};

export default ProjetSingle;
