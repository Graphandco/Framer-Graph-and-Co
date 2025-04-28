"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import NavLink from "../header/NavLink";
import Button from "../ui/Button";

const BlogItem = ({ blog }) => {
	const { title, description, slug, category, image, date } = blog;
	const MotionImage = motion.create(Image);
	console.log(blog);

	const formattedDate = new Date(date).toLocaleDateString("fr-FR", {
		day: "2-digit",
		month: "long",
		year: "numeric",
	});

	return (
		<motion.article
			layout
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 20 }}
			transition={{ duration: 0.4, ease: "easeOut" }}
			whileHover="hover"
			className="relative flex flex-col justify-end overflow-hidden rounded-3xl "
		>
			<NavLink
				href={`/blog/${slug}`}
				className="h-full flex flex-col relative"
			>
				<div className="absolute top-3 right-3 bg-primary py-0.5 px-2 rounded-full text-sm z-10 font-medium">
					{category}
				</div>
				<MotionImage
					variants={{
						hover: { scale: 1.025, filter: "blur(2px)" },
					}}
					transition={{ duration: 0.25, ease: "easeOut" }}
					src={`/blog/${image}`}
					alt={title}
					width={600}
					height={200}
					style={{ width: "100%", height: "170px" }}
					className="object-cover"
					priority
				/>
				{/* Text content */}
				<div className="relative grow-1 flex flex-col z-10 p-8 pt-2 bg-white">
					<div className="text-right text-sm font-medium text-black/40 mb-5">
						{formattedDate}
					</div>
					<motion.div
						variants={{
							hover: { scale: 0.9 },
						}}
						transition={{ duration: 0.2 }}
						className="text-xl mb-3 origin-left"
					>
						{title}
					</motion.div>
					<div className="grow-1 text-black/40 font-medium leading-tight mb-8">
						{description}
					</div>
					<Button small icon={null}>
						En savoir plus
					</Button>
				</div>
			</NavLink>
		</motion.article>
	);
};

export default BlogItem;
