"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import FadeInOnView from "../ui/FadeInOnView";
import MagnetButton from "../ui/MagnetButton";
import TextAppear from "../ui/TextAppear";
import { useResponsive } from "@/hooks/UseResponsive";

const PageHero = ({ title, image, imageClass = "object-cover" }) => {
	const sectionRef = useRef(null);
	const titleRef = useRef(null);
	const { isTablet, isMobile } = useResponsive();
	const sectionHeight = isMobile ? "min-h-[30vh]" : "min-h-[50vh]";

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
			className={`relative ${sectionHeight} overflow-hidden bg-black`}
		>
			{/* Fond avec scale */}
			<div className="absolute inset-0">
				<motion.div
					style={{ scale: scaleBg }}
					className="w-full h-full will-change-transform"
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
						className="text-5xl title-font text-white font-semibold leading-[0.8]"
					>
						<TextAppear>.{title}</TextAppear>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default PageHero;
