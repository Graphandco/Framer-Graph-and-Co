"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function SiteSurMesure({ data }) {
   const ref = useRef(null);

   // Scroll progress : 0 = quand le haut de la section entre en bas de l'écran
   //                   1 = quand le haut de la section atteint ~40% du viewport
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "start 20%"], // permet de raccourcir la plage d’animation
   });

   /**
    * BACKGROUND
    * Le fond noir commence à 100% (hors écran) et monte vers 0% (pleinement visible)
    * Le mapping [0.2, 0.8] signifie qu'on démarre le mouvement à 20% du scroll progress,
    * et on le termine à 80%, pour garder le fond centré quand scrollYProgress = 0.5
    */
   const yBackground = useTransform(scrollYProgress, [0.5, 1], ["100%", "0%"]);
   const smoothYBackground = useSpring(yBackground, {
      stiffness: 100,
      damping: 20,
   });

   /**
    * TEXTE
    * Il se déplace légèrement vers le haut pendant le scroll.
    * Ici, on le fait monter de 0 à -80px entre 0.2 et 0.8 du scroll progress
    */
   const yText = useTransform(scrollYProgress, [0.7, 1], [60, 0]);
   const smoothYText = useSpring(yText, { stiffness: 100, damping: 20 });

   return (
      <section
         ref={ref}
         className="relative py-28 sm:py-40 overflow-hidden flex items-center justify-center"
      >
         {/* Overlay noir qui translate vers le haut */}
         <motion.div
            style={{ y: smoothYBackground }}
            className="absolute inset-0 bg-black z-10"
         />
         <div className="wrapper">
            {/* Texte avec effet de parallax et mix-blend pour contraste */}
            <motion.h2
               style={{ y: smoothYText }}
               className="relative z-20 text-6xl text-font text-white mix-blend-difference text-center font-black!"
            >
               {data.parallax_black_white}
            </motion.h2>
         </div>
      </section>
   );
}

// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";
// import { useRef } from "react";
// import { FaArrowDownLong } from "react-icons/fa6";
// import FadeInOnView from "../ui/FadeInOnView";

// const SiteSurMesure = () => {
// 	const ref = useRef(null);

// 	// Scroll animation pour le titre + image (pas modifié)
// 	const { scrollYProgress } = useScroll({
// 		target: ref,
// 		offset: ["start end", "start 20%"],
// 	});

// 	const textScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
// 	const clipTop = useTransform(scrollYProgress, [0, 1], [100, 0]);
// 	const clipPath = useTransform(clipTop, (val) => {
// 		return `polygon(0 ${val}%, 100% ${val}%, 100% 100%, 0% 100%)`;
// 	});

// 	return (
// 		<>
// 			{/* Section sur-mesure */}
// 			<section id="sur-mesure" ref={ref} className="relative pt-28">
// 				<div className="wrapper py-24 sm:py-32 md:py-44 text-center relative overflow-hidden">
// 					<motion.div
// 						style={{ clipPath }}
// 						className="absolute flex justify-center top-1/2 left-1/2 -translate-1/2 w-full"
// 					>
// 						<Image
// 							src="/home/dark-woman.webp"
// 							width={800}
// 							height={800}
// 							alt="Dark woman"
// 							className="max-w-10/12 xs:max-w-full"
// 							style={{ width: "100%", height: "auto" }}
// 						/>
// 					</motion.div>
// 					<motion.div
// 						style={{ scale: textScale }}
// 						className="text-6xl title-font font-black relative z-10 mix-blend-exclusion text-white leading-none"
// 					>
// 						Un site "sur-mesure" rien que pour vous !
// 					</motion.div>
// 				</div>
// 				{/* Section logo + flèche */}
// 				<div className="border-y border-black/10">
// 					<div className="wrapper-small border-x border-black/10 relative">
// 						{/* Texte + logo */}
// 						<FadeInOnView>
// 							<div className="py-32 px-5 flex flex-col gap-5 items-center justify-center">
// 								<p>
// 									Un design fait pour durer et évoluer avec
// 									votre activité !
// 								</p>
// 								<Image
// 									src="/logo.svg"
// 									width={60}
// 									height={60}
// 									alt="Logo Graph and Co"
// 								/>
// 							</div>
// 						</FadeInOnView>

// 						{/* Flèche */}
// 						<FadeInOnView delay={0.2}>
// 							<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
// 								<div className="bg-white p-2 md:p-3 rounded-full border border-black/10">
// 									<div className="bg-black text-white rounded-full p-5 md:p-7 sm:text-xl">
// 										<FaArrowDownLong />
// 									</div>
// 								</div>
// 							</div>
// 						</FadeInOnView>
// 					</div>
// 				</div>
// 			</section>
// 		</>
// 	);
// };

// export default SiteSurMesure;
