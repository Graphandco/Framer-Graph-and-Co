"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MagnetButton from "@/components/ui/MagnetButton";
import SplitLineText from "@/components/SplitLineText";
import HeroBackground from "@/components/home/HeroBackground";

const Hero = ({ data }) => {
	const sectionRef = useRef(null);
	const titleRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start start", "end start"],
	});

	const yTitle = useTransform(scrollYProgress, [0, 1], [0, -80]);
	const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

	const scrollToSection = () => {
		const section = document.getElementById("notre-expertise");
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};

	const heroAlt = data?.hero_title
		? `${data.hero_title} — Graph & Co`
		: "Graph & Co — agence web à Colmar";

	const brandTitle =
		process.env.NEXT_PUBLIC_ENVIRONMENT === "DEV" ? "Sandbox" : "Graph & Co";

	return (
		<section
			id="hero"
			ref={sectionRef}
			className="relative min-h-screen overflow-hidden"
		>
			<div className="absolute inset-0">
				<motion.div
					style={{ scale: scaleBg }}
					className="relative h-full w-full will-change-transform after:absolute after:top-0 after:left-0 after:h-1/4 after:w-full after:bg-linear-to-t after:from-transparent after:to-black/70 after:content-[''] before:absolute before:bottom-0 before:left-0 before:z-10 before:h-1/2 before:w-full before:bg-linear-to-t before:from-black/50 before:to-transparent before:content-['']"
				>
					<HeroBackground alt={heroAlt} />
				</motion.div>
			</div>

			<div className="absolute inset-0 flex flex-col justify-center px-5">
				<div className="mb-8 flex flex-col items-end gap-1 font-semibold text-white">
					{data.atouts.map((atout) => (
						<div key={atout.name}>{atout.name}</div>
					))}
				</div>

				<div ref={titleRef}>
					<SplitLineText animateOnScroll={false}>
						<motion.div
							style={{ y: yTitle }}
							className="title-font text-10xl font-semibold text-white xs:mix-blend-exclusion"
						>
							{brandTitle}
						</motion.div>
					</SplitLineText>
				</div>

				<div className="relative mt-8 space-y-4">
					<h1 className="title-font text-4xl font-medium leading-[0.9] text-white xs:mix-blend-exclusion">
						{data.hero_title}
					</h1>
					<p className="max-w-md text-white">{data.hero_description}</p>
				</div>
				<div className="relative mx-auto mt-12">
					<MagnetButton onClick={scrollToSection} />
				</div>
			</div>
		</section>
	);
};

export default Hero;
