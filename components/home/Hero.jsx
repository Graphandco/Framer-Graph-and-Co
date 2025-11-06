"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
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
      const section = document.getElementById("notre-expertise");
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
               className="relative w-full h-full will-change-transform after:content-[''] after:absolute after:top-0 after:left-0 after:h-1/4 after:w-full after:bg-linear-to-t after:from-transparent after:to-black/70"
            >
               <Image
                  src={heroImageSource}
                  alt="Hero"
                  fill
                  className="object-cover"
                  priority
                  sizes="100vw"
               />
            </motion.div>
         </div>

         <div className="absolute inset-0 flex flex-col justify-center px-5">
            {/* <FadeInOnView
					amount={0.1}
					delay={itemsDelay}
					once
					className="mb-8 flex flex-col items-end gap-1 text-white font-semibold"
				>
					<div>Interface utilisateur</div>
					<div>Expérience utilisateur</div>
					<div>Sécurité</div>
					<div>Accessibilité</div>
				</FadeInOnView> */}
            <div className="mb-8 flex flex-col items-end gap-1 text-white font-semibold">
               <div>Interface utilisateur</div>
               <div>Expérience utilisateur</div>
               <div>Sécurité</div>
               <div>Accessibilité</div>
            </div>

            <div ref={titleRef}>
               <motion.div
                  style={{ y: yTitle }}
                  className="text-10xl title-font text-white font-semibold leading-[0.8] xs:mix-blend-exclusion"
               >
                  {process.env.NEXT_PUBLIC_ENVIRONMENT === "DEV"
                     ? "Sandbox"
                     : "Graph & Co"}
               </motion.div>
            </div>

            <div className="relative mt-8 space-y-4">
               <motion.h1
                  style={{ y: yDesc }}
                  className="text-4xl title-font text-white font-medium leading-[0.8] xs:mix-blend-exclusion"
               >
                  Création de sites web professionnels à Colmar
               </motion.h1>
               <div className="text-white max-w-md">
                  Nous sommes spécialisés dans la réalisation de sites web.
                  Moderne et intuitif, votre site sera un puissant levier pour
                  accroitre la vitalité de votre entreprise.
               </div>
            </div>
            <div className="relative mt-12 mx-auto">
               <MagnetButton onClick={scrollToSection} />
            </div>
         </div>
      </section>
   );
};

export default Hero;
