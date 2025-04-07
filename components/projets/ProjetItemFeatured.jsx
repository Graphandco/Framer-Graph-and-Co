"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const ProjetItemFeatured = ({ project }) => {
	const { title, description, image } = project;

	return (
		<motion.article
			whileHover="hover"
			className="relative featured col-span-2 flex flex-col justify-end overflow-hidden rounded-3xl after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1/4 after:w-full after:bg-linear-to-t after:to-transparent after:from-black/70"
		>
			{/* Image avec scale et blur au hover */}
			<motion.div
				variants={{
					hover: { scale: 1.025, filter: "blur(4px)" },
				}}
				transition={{ duration: 0.25, ease: "easeOut" }}
				className="absolute inset-0 z-0"
			>
				<Image
					src={`/projets/${image}`}
					alt={title}
					fill
					className="object-cover"
					priority
				/>
			</motion.div>

			{/* Contenu texte au-dessus */}
			<div className="relative z-10 text-white p-8">
				<motion.div
					variants={{
						hover: { scale: 0.9 },
					}}
					transition={{ duration: 0.2 }}
					className="text-3xl title-font font-semibold origin-left"
				>
					{title}
				</motion.div>
				<div className="text-white/70 leading-tight ">
					{description}
				</div>
			</div>
		</motion.article>
	);
};

export default ProjetItemFeatured;
