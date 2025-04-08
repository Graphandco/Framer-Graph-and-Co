"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import FadeInOnView from "../ui/FadeInOnView";
import MagnetButton from "../ui/MagnetButton";
import TextAppear from "../ui/TextAppear";

const PageHero = ({ title, image, imageClass = "object-cover" }) => {
	const sectionRef = useRef(null);
	const titleRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start start", "end start"],
	});

	const yTitle = useTransform(scrollYProgress, [0, 1], [0, -250]);
	const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 2]);

	return (
		<section
			id="hero"
			ref={sectionRef}
			className="relative min-h-[30vh] sm:min-h-[50vh] overflow-hidden bg-black"
		>
			{/* Fond avec scale */}
			<div className="absolute inset-0">
				<motion.div
					style={{ scale: scaleBg }}
					className="w-full h-full will-change-transform after:content-[''] after:absolute after:top-0 after:left-0 after:h-1/4 after:w-full after:bg-linear-to-t after:from-transparent after:to-black/70 "
				>
					<Image
						src={image}
						alt="title"
						fill
						className={imageClass}
						priority
					/>
				</motion.div>
			</div>

			<div className="absolute inset-0 flex flex-col justify-end py-14  px-5">
				<div ref={titleRef}>
					<motion.div
						style={{ y: yTitle }}
						className="text-8xl title-font text-white font-semibold leading-[0.8]"
					>
						<TextAppear>.{title}</TextAppear>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default PageHero;
