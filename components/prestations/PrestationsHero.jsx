"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const PrestationsHero = () => {
	const sectionRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start start", "end start"],
	});

	const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

	return (
		<>
			<section
				id="hero"
				ref={sectionRef}
				className="relative min-h-screen overflow-hidden mb-28 bg-black"
			>
				{/* Fond avec scale */}
				<div className="absolute inset-0">
					<motion.div
						style={{ scale: scaleBg }}
						className="w-full h-full will-change-transform"
					>
						<video
							src="/prestations/prestations.mp4"
							autoPlay
							loop
							muted
							playsInline
							className="w-full h-full object-cover"
						/>
					</motion.div>
				</div>
			</section>
		</>
	);
};

export default PrestationsHero;
