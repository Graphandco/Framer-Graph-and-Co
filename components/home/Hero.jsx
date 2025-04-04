"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const Hero = () => {
	return (
		<section
			id="hero"
			className="min-h-screen flex flex-col justify-center"
		>
			<div className="pb-24 px-5">
				<motion.div>
					<Image
						src="/bg-hero.avif"
						// width={2500}
						// height={1500}
						fill
						alt="Hero"
						className="object-cover -z-10"
					/>
				</motion.div>
				<div className="mb-8 flex flex-col items-end gap-2 text-white font-semibold">
					<div>Interface utilisateur</div>
					<div>Expérience utilisateur</div>
					<div>Sécurité</div>
					<div>Accessibilité</div>
				</div>
				<div className="hero-lead title-font text-white font-semibold leading-25 mix-blend-exclusion">
					Graph & Co
				</div>
				<div className="hero-sub-lead title-font text-white font-medium leading-25 mix-blend-exclusion">
					Création de sites web
				</div>
				<div className="text-white mt-5 text-xl max-w-lg ">
					Nous sommes spécialisés dans la réalisation de sites web.
					Moderne et intuitif, votre site sera un puissant levier pour
					accroitre la vitalité de votre entreprise.
				</div>
			</div>
		</section>
	);
};

export default Hero;
