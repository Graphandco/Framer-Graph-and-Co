"use client";
import {
	motion,
	useScroll,
	useVelocity,
	useTransform,
	useSpring,
} from "framer-motion";
import React, { useRef } from "react";
import { FiArrowDown } from "react-icons/fi";
import VanishParagraphs from "../ui/VanishParagraphs";
import Button from "@/components/ui/Button";

export const VelocityText = () => {
	const targetRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start start", "end start"],
	});

	const scrollVelocity = useVelocity(scrollYProgress);

	const skewXRaw = useTransform(scrollVelocity, [-1, 1], ["45deg", "-45deg"]);
	const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 50 });

	const xRaw = useTransform(scrollYProgress, [0, 1], [0, -1200]);
	const x = useSpring(xRaw, { mass: 3, stiffness: 400, damping: 50 });

	return (
		<section ref={targetRef} className="h-[500vh] py-16">
			<div className="sticky top-0 flex h-screen flex-col justify-between overflow-hidden">
				<div className="wrapper-small py-24">
					<VanishParagraphs>
						<h2 className="title-text text-2xl sm:text-3xl md:sm:text-4xl font-semibold">
							Chaque site web est unique,
						</h2>
						<h3 className="title-text text-xl sm:text-2xl md:sm:text-3xl text-neutral-500 font-semibold mb-8">
							car chaque entreprise l'est également.
						</h3>
						<p>
							Soyez exigeant : nous créons ainsi votre site «
							sur-mesure », afin qu'il vous habille comme un
							vêtement taillé pour vous ! Ni trop grand, ni trop
							petit, dans une matière seyante et avec un budget
							qui vous correspond. Jetez un oeil à quelques unes
							de nos créations pour vous aider à définir vos
							besoins.
						</p>
					</VanishParagraphs>
					<Button icon={null} href="/projets" className="mt-8">
						Découvrez nos projets
					</Button>
				</div>
				<motion.p
					style={{ skewX, x }}
					className="origin-bottom-left pb-26 pl-12 whitespace-nowrap font-black! uppercase leading-[0.85] text-7xl md:leading-[0.85]"
				>
					Design propre, performance assurée.
				</motion.p>
				{/* <ScrollArrow /> */}
			</div>
		</section>
	);
};
