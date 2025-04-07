"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import FadeInOnView from "../ui/FadeInOnView";

const SiteSurMesure = () => {
	const ref = useRef(null);

	// Scroll animation pour le titre + image (pas modifié)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "start 20%"],
	});

	const textScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
	const clipTop = useTransform(scrollYProgress, [0, 1], [100, 0]);
	const clipPath = useTransform(clipTop, (val) => {
		return `polygon(0 ${val}%, 100% ${val}%, 100% 100%, 0% 100%)`;
	});

	return (
		<>
			{/* Section sur-mesure */}
			<section id="sur-mesure" ref={ref} className="pt-28">
				<div className="wrapper py-24 sm:py-32 md:py-44 text-center relative overflow-hidden">
					<motion.div
						style={{ clipPath }}
						className="absolute flex justify-center top-1/2 left-1/2 -translate-1/2 w-full"
					>
						<Image
							src="/home/dark-woman.webp"
							width={800}
							height={800}
							alt="Dark woman"
							className="max-w-10/12 xs:max-w-full"
						/>
					</motion.div>
					<motion.div
						style={{ scale: textScale }}
						className="text-6xl title-font font-black relative z-10 mix-blend-exclusion text-white leading-none"
					>
						Un site "sur-mesure" rien que pour vous !
					</motion.div>
				</div>
				{/* Section logo + flèche */}
				<div className="border-y border-black/10">
					<div className="wrapper-small border-x border-black/10 relative">
						{/* Texte + logo */}
						<FadeInOnView>
							<div className="py-32 px-5 flex flex-col gap-5 items-center justify-center">
								<p>
									Un design fait pour durer et évoluer avec
									votre activité !
								</p>
								<Image
									src="/logo.svg"
									width={60}
									height={60}
									alt="Logo Graph and Co"
								/>
							</div>
						</FadeInOnView>

						{/* Flèche */}
						<FadeInOnView delay={0.2}>
							<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
								<div className="bg-white p-2 md:p-3 rounded-full border border-black/10">
									<div className="bg-black text-white rounded-full p-5 md:p-7 sm:text-xl">
										<FaArrowDownLong />
									</div>
								</div>
							</div>
						</FadeInOnView>
					</div>
				</div>
			</section>
		</>
	);
};

export default SiteSurMesure;
