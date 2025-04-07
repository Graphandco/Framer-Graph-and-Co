"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const ProjetItem = ({ project }) => {
	const { title, description, image } = project;
	const MotionImage = motion(Image);

	return (
		<motion.article
			whileHover="hover"
			className="relative bg-white rounded-3xl pt-72 px-3 overflow-hidden"
		>
			{/* Image animée */}

			<MotionImage
				variants={{
					hover: {
						scale: 1.2,
						filter: "blur(1px)",
					},
				}}
				transition={{ duration: 0.25, ease: "easeOut" }}
				src={`/projets/${image}`}
				alt={title}
				width={600}
				height={300}
				className="absolute top-0 left-0 w-full object-cover rounded-3xl aspect-[3/2]"
				priority
			/>

			{/* Texte */}
			<div className="px-3 pb-6 flex flex-col gap-3">
				<motion.div
					variants={{
						hover: { y: 10 },
					}}
					transition={{ duration: 0.3 }}
					className="text-lg font-semibold"
				>
					{title}
				</motion.div>
				<div className="text-black/70 leading-tight">{description}</div>
			</div>
		</motion.article>
	);
};

export default ProjetItem;
