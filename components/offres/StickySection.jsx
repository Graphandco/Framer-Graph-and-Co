"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionLegend from "../SectionLegend";

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
				</div>
			</div>

			{/* Section normale */}
			<div className=" py-72 relative z-20 bg-white">
				<div className="wrapper flex flex-col gap-6 justify-center items-center bg-white">
					<div className="big-text font-bold">
						Nos autres services
					</div>
				</div>
			</div>
		</section>
	);
};
