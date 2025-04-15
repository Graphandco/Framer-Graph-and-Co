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
import { MdArrowOutward } from "react-icons/md";
import ProjetCarousel from "./ProjetCarousel";

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

	const images = Array.from(
		{ length: frontmatter?.nbrCaptures },
		(_, i) => `/projets/${frontmatter.slug}/capture${i + 1}.avif`
	);

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
				{images.length > 0 && (
					<>
						<div className="text-2xl text-center pt-8 pb-5">
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
						<ProjetCarousel />
					</>
				)}

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
