"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { FaArrowDownLong } from "react-icons/fa6";

const SiteSurMesure = () => {
	const ref = useRef(null);
	const logoSectionRef = useRef(null);

	// Section "sur-mesure" scroll-based
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start 90%", "end 80%"],
	});

	const textScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
	const clipTop = useTransform(scrollYProgress, [0, 1], [100, 0]);
	const clipPath = useTransform(clipTop, (val) => {
		return `polygon(0 ${val}%, 100% ${val}%, 100% 100%, 0% 100%)`;
	});

	return (
		<>
			<div className="min-h-screen"></div>

			{/* Section sur-mesure */}
			<section id="sur-mesure" ref={ref}>
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

			{/* Section logo + flèche */}
			<div className="border-y border-black/10">
				<div
					ref={logoSectionRef}
					className="wrapper-small border-x border-black/10 relative"
				>
					{/* Container texte + logo, anim from bottom */}
					<motion.div
						initial={{ y: 40, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.3, ease: "easeOut" }}
						viewport={{ once: false, amount: 0.7 }}
						className="py-32 px-5 flex flex-col gap-5 items-center justify-center"
					>
						<p>
							Un design fait pour durer et évoluer avec votre
							activité
						</p>
						<Image
							src="/logo.svg"
							width={60}
							height={60}
							alt="Logo Graph and Co"
						/>
					</motion.div>

					{/* Flèche, anim en décalé */}
					<motion.div
						initial={{ y: 40, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{
							delay: 0.2,
							duration: 0.3,
							ease: "easeOut",
						}}
						viewport={{ once: false, amount: 0.7 }}
						className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
					>
						<div className="bg-white p-2 md:p-3 rounded-full border border-black/10">
							<div className="bg-black text-white rounded-full p-5 md:p-7 sm:text-xl">
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
