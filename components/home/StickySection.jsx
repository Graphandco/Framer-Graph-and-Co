"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionLegend from "../SectionLegend";
import Button from "../ui/Button";
import PresentationText from "@/markdown/home/presentation.mdx";
import ParallaxImage from "../ui/ParallaxImage";

export const StickySection = () => {
	// const ref = useRef(null);
	// const { scrollYProgress } = useScroll({
	// 	target: ref,
	// 	offset: ["start start", "end start"],
	// });

	// Effet parallax léger sur la première section
	// const y = useTransform(scrollYProgress, [0, 1], [0, -10]);

	return (
		<section className="relative">
			{/* Section sticky */}
			<div
				// style={{ y }}
				className="sticky top-0 h-screen flex items-center justify-center bg-black text-white z-10"
			>
				<div className="wrapper flex flex-col gap-6 items-center text-center">
					<SectionLegend text="Notre expertise" />
					<h2 className="big-text font-bold">
						Créons un site web performant et élégant.
					</h2>
					<p className="max-w-xl">
						Chaque projet est pensé pour s’adapter à vos besoins,
						votre image, et vos ambitions.
					</p>
					<Button icon={null} white href="/offres">
						Voir nos offres
					</Button>
				</div>
			</div>

			{/* Section normale */}

			<section className="banner flex justify-center items-center relative min-h-screen overflow-hidden z-10 py-8">
				<div className="absolute inset-0 w-full h-full overflow-hidden will-change-transform bg-black">
					<ParallaxImage
						src="/home/exposure.avif"
						alt="Machine à écrire"
					/>
				</div>

				<div className="relative">
					<div className="wrapper flex flex-col gap-6 justify-center items-center markdown">
						<PresentationText />
						<Button icon={null} href="/contact">
							Nous contacter
						</Button>
					</div>
				</div>
			</section>

			{/* <div className=" py-72 relative z-20 bg-white">
				<div className="wrapper flex flex-col gap-6 justify-center items-center bg-white markdown">
					<PresentationText />
				</div>
			</div> */}
		</section>
	);
};
