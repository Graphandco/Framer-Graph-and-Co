"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import FadeInOnView from "../ui/FadeInOnView";
import MagnetButton from "../ui/MagnetButton";
import { useResponsive } from "@/hooks/UseResponsive";

const Hero = () => {
	const sectionRef = useRef(null);
	const titleRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start start", "end start"],
	});

	const yTitle = useTransform(scrollYProgress, [0, 1], [0, -80]);
	const yDesc = useTransform(scrollYProgress, [0, 1], [0, -120]);
	const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

	const scrollToSection = () => {
		const section = document.getElementById("sur-mesure");
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};
	const { isPhone, isMobile, isTablet, isDesktop } = useResponsive();
	function getHeroImageSource() {
		if (isPhone) return "/home/bg-hero-phone.avif";
		if (isMobile) return "/home/bg-hero-mobile.avif";
		if (isTablet) return "/home/bg-hero-tablet.avif";
		if (isDesktop) return "/home/bg-hero-desktop.avif";
		return "/home/bg-hero-desktop.avif";
	}

	const heroImageSource = getHeroImageSource();

	return (
		<section
			id="hero"
			ref={sectionRef}
			className="relative min-h-screen overflow-hidden"
		>
			{/* Fond avec scale */}
			<div className="absolute inset-0">
				<motion.div
					style={{ scale: scaleBg }}
					className="w-full h-full will-change-transform"
				>
					<Image
						src={heroImageSource}
						alt="Hero"
						fill
						className="object-cover"
						priority
					/>
				</motion.div>
			</div>

			{/* Contenu blendé */}
			<div className="absolute inset-0 flex flex-col justify-center px-5">
				<FadeInOnView
					amount={0.1}
					delay={1}
					once
					className="mb-8 flex flex-col items-end gap-2 text-white font-semibold"
				>
					<div>Interface utilisateur</div>
					<div>Expérience utilisateur</div>
					<div>Sécurité</div>
					<div>Accessibilité</div>
				</FadeInOnView>

				<div ref={titleRef}>
					<motion.div
						style={{ y: yTitle }}
						className="text-10xl title-font text-white font-semibold leading-[0.8] xs:mix-blend-exclusion"
					>
						Graph & Co
					</motion.div>
				</div>

				<div className="flex flex-col-reverse xs:flex-row xs:items-center mt-6 gap-8">
					<FadeInOnView amount={0.1}>
						<div className="text-white max-w-md xs:mix-blend-exclusion">
							Nous sommes spécialisés dans la réalisation de sites
							web. Moderne et intuitif, votre site sera un
							puissant levier pour accroitre la vitalité de votre
							entreprise.
						</div>
					</FadeInOnView>
					<motion.h1
						style={{ y: yDesc }}
						className="text-6xl title-font text-white font-medium leading-[0.8] xs:mix-blend-exclusion"
					>
						Création de sites web
					</motion.h1>
				</div>
				<div className="mt-12 mx-auto">
					<MagnetButton onClick={scrollToSection} />
				</div>
			</div>
		</section>
	);
};

export default Hero;
