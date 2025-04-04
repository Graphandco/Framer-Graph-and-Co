"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { FaArrowDownLong } from "react-icons/fa6";

const SiteSurMesure = () => {
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start 90%", "end 80%"], // déclenchement plus tard
	});

	// Texte : scale de 2 à 1
	const textScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

	// ClipPath : de 0% visible (masqué) à 100% visible, mais plus lentement
	const clipTop = useTransform(scrollYProgress, [0, 1], [100, 0]); // 👈 termine plus tard

	// Transforme clipTop en string CSS
	const clipPath = useTransform(clipTop, (val) => {
		return `polygon(0 ${val}%, 100% ${val}%, 100% 100%, 0% 100%)`;
	});

	// Animation du logo (plus tard)
	const logoY = useTransform(scrollYProgress, [0.8, 1], [40, 0]);
	const logoOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

	// Animation de la flèche (encore plus tard : effet stagger)
	const arrowY = useTransform(scrollYProgress, [0.85, 1], [40, 0]);
	const arrowOpacity = useTransform(scrollYProgress, [0.85, 1], [0, 1]);

	return (
		<>
			<div className="min-h-screen"></div>
			<section id="sur-mesure" ref={ref}>
				<div className="wrapper py-44 text-center relative overflow-hidden">
					<motion.div
						style={{
							clipPath,
						}}
						className="absolute flex justify-center top-1/2 left-1/2 -translate-1/2 w-full "
					>
						<Image
							src="/home/dark-woman.webp"
							width={800}
							height={800}
							alt="Dark woman"
						/>
					</motion.div>
					<motion.div
						style={{ scale: textScale }}
						className="sur-mesure title-font font-black relative z-10 mix-blend-exclusion text-white leading-none"
					>
						Un site "sur-mesure" rien que pour vous !
					</motion.div>
				</div>
			</section>
			<div className="border-y border-black/10">
				<div className="wrapper-small border-x border-black/10 relative">
					<div className="py-32 px-5 flex flex-col gap-5 items-center justify-center">
						<p>
							Un design fait pour durer et évoluer avec votre
							activité
						</p>
						<motion.div style={{ y: logoY, opacity: logoOpacity }}>
							<Image
								src="/logo.svg"
								width={60}
								height={60}
								alt="Logo Graph and Co"
							/>
						</motion.div>
					</div>
					<motion.div
						style={{ y: arrowY, opacity: arrowOpacity }}
						className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
					>
						<div className="bg-white p-3 rounded-full border border-black/10">
							<div className="bg-black text-white rounded-full p-7 text-xl">
								<FaArrowDownLong />
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default SiteSurMesure;
