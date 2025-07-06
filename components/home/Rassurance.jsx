"use client";

import { useState } from "react";
import Image from "next/image";
import SectionLegend from "../SectionLegend";
import { AnimatePresence, motion } from "framer-motion";

const Rassurance = () => {
   const atouts = [
      {
         name: "Interface utilisateur",
         description: "Un site internet unique, au design innovant et moderne",
         image: "/rassurance/interface-utilisateur.avif",
      },
      {
         name: "Expérience utilisateur",
         description: "Un site internet unique, au design innovant et moderne",
         image: "/rassurance/experience-utilisateur.avif",
      },
      {
         name: "Sécurité",
         description:
            "Votre site est protégé, les données de vos visiteurs sont sécurisées",
         image: "/rassurance/securite.avif",
      },
      {
         name: "Accessibilité",
         description:
            "Un site accessible et intuitif sur tous les types de supports et tailles d'écrans",
         image: "/rassurance/accessibilite.avif",
      },
   ];

   const [hoveredIndex, setHoveredIndex] = useState(0);

   return (
      <section
         id="rassurance"
         className="relative bg-black text-white pt-8 pb-16 overflow-hidden"
      >
         <div className="wrapper">
            <div className="relative flex items-center justify-between">
               <Image
                  src="/logo.svg"
                  width={50}
                  height={50}
                  alt="Logo Graph and Co"
               />
               <SectionLegend text="Les atouts de votre site" />
            </div>
            <div className="py-14 grid sm:grid-cols-[2fr_3fr] gap-8 sm:gap-12 items-center">
               {/* Colonne gauche avec animation */}
               <AnimatePresence mode="wait">
                  <motion.div
                     key={atouts[hoveredIndex].name}
                     initial={{ opacity: 0, y: 30 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: 30 }}
                     transition={{ duration: 0.2, ease: "easeOut" }}
                     className="relative space-y-3"
                  >
                     <Image
                        src={atouts[hoveredIndex].image}
                        width={300}
                        height={250}
                        alt={atouts[hoveredIndex].name}
                        style={{ width: "100%", height: "auto" }}
                     />
                     <div className="text-xl text-white/50">
                        {atouts[hoveredIndex].name}
                     </div>
                     <div className="text-lg text-white">
                        {atouts[hoveredIndex].description}
                     </div>
                  </motion.div>
               </AnimatePresence>

               {/* Colonne droite : hover des atouts */}
               <div className="grid gap-4">
                  {atouts.map((atout, i) => (
                     <div
                        key={i}
                        onMouseEnter={() => setHoveredIndex(i)}
                        className={` py-3 sm:py-6 border-b border-white/50 text-4xl cursor-pointer text-white/50 transition-colors duration-300`}
                     >
                        <div
                           className={`relative transition-all duration-300 ease-out transform ${
                              i === hoveredIndex
                                 ? "translate-x-5 text-white"
                                 : "translate-x-0"
                           }`}
                        >
                           <span>{atout.name}</span>
                           <span className="text-[15px] sm:text-[20px] font-semibold align-top ml-2">
                              <span className="text-primary">{"{"}</span>
                              <span>{i + 1}</span>
                              <span className="text-primary">{"}"}</span>
                           </span>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};

export default Rassurance;
