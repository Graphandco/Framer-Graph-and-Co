"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import NavLink from "../header/NavLink";

const ProjetItem = ({ project }) => {
	const { title, description, slug, image, position } = project;
	const MotionImage = motion.create(Image);

	return (
		<motion.article
			layout
			initial={{ opacity: 0, y: 20, filter: "blur(3px)" }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 20 }}
			transition={{ duration: 0.4, ease: "easeOut" }}
			whileHover="hover"
			whileInView={{
				filter: "blur(0px)",
			}}
			viewport={{ amount: 0.4, once: false }}
			className="relative featured nth-2:row-span-2 flex flex-col justify-end overflow-hidden rounded-3xl after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1/2 after:w-full after:bg-linear-to-t after:to-transparent after:from-black/80"
		>
			<NavLink
				href={`/projets/${slug}`}
				className="h-full flex items-end"
			>
				<MotionImage
					variants={{
						hover: { scale: 1.025, filter: "blur(4px)" },
					}}
					transition={{ duration: 0.25, ease: "easeOut" }}
					src={`/projets/${image}`}
					alt={title}
					fill
					className={`object-cover object-${position ? position : "center"}`}
					priority
				/>
				{/* Text content */}
				<div className="relative z-10 text-white px-8 pt-52 pb-6">
					<motion.div
						variants={{
							hover: { scale: 0.9 },
						}}
						transition={{ duration: 0.2 }}
						className="text-3xl origin-left"
					>
						.{title}
					</motion.div>
					<div className="text-neutral-400 leading-tight">
						{description}
					</div>
				</div>
			</NavLink>
		</motion.article>
	);
};

export default ProjetItem;
