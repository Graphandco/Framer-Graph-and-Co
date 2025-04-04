"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const Hero = () => {
	const { scrollYProgress } = useScroll();
	const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.4]);

	return (
		<section id="hero" className="relative min-h-screen overflow-hidden">
			{/* Image dans le flux avec blend visible */}
			<motion.div
				style={{ scale }}
				className="relative w-full h-full min-h-screen"
			>
				<Image
					src="/bg-hero.avif"
					alt="Hero"
					fill
					className="object-cover"
					priority
				/>
			</motion.div>

			{/* Contenu overlay + blend */}
			<div className="absolute inset-0 flex flex-col justify-center pb-24 px-5">
				<div className="mb-8 flex flex-col items-end gap-2 text-white font-semibold">
					<div>Interface utilisateur</div>
					<div>Expérience utilisateur</div>
					<div>Sécurité</div>
					<div>Accessibilité</div>
				</div>

				<div className="hero-lead title-font text-white font-semibold leading-25 mix-blend-exclusion">
					Graph & Co
				</div>

				<div className="flex items-center mt-12 gap-8">
					<div className="text-white max-w-md">
						Nous sommes spécialisés dans la réalisation de sites
						web. Moderne et intuitif, votre site sera un puissant
						levier pour accroitre la vitalité de votre entreprise.
					</div>
					<div className="hero-sub-lead title-font text-white font-medium leading-[0.8] mix-blend-exclusion">
						Création de sites web
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
