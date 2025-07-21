"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import SectionLegend from "@/components/SectionLegend";

const NosAtouts = () => {
   const [selected, setSelected] = useState(0);
   const FEATURES = [
      {
         title: "Interface utilisateur",
         content: "Un site internet unique, au design innovant et moderne",
         image: "/rassurance/interface-utilisateur.avif",
      },
      {
         title: "Expérience utilisateur",
         image: "/rassurance/experience-utilisateur.avif",
         content: "Un site internet unique, au design innovant et moderne",
      },
      {
         title: "Sécurité",
         content:
            "Votre site est protégé, les données de vos visiteurs sont sécurisées",
         image: "/rassurance/securite.avif",
      },
      {
         title: "Accessibilité",
         content:
            "Un site accessible et intuitif sur tous les types de supports et tailles d'écrans",
         image: "/rassurance/accessibilite.avif",
      },
   ];

   return (
      <section className="bg-black pt-8 pb-16 text-white">
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
            <div className="grid sm:grid-cols-[3fr_4fr] items-center gap-6 py-12 md:gap-12">
               <AnimatePresence mode="wait">
                  {FEATURES.map((tab, index) => {
                     return selected === index ? (
                        <motion.div
                           initial={{ opacity: 0, y: 50 }}
                           animate={{ opacity: 1, y: 0 }}
                           exit={{ opacity: 0, y: 50 }}
                           transition={{
                              duration: 0.3,
                              ease: [0.68, -0.55, 0.265, 1.55], // Effet de rebond
                           }}
                           key={index}
                           className="w-full"
                        >
                           <TabContent
                              title={tab.title}
                              content={tab.content}
                              image={tab.image}
                              index={index}
                           />
                        </motion.div>
                     ) : undefined;
                  })}
               </AnimatePresence>
               <div className="w-full shrink-0 overflow-scroll">
                  {FEATURES.map((tab, index) => {
                     return (
                        <Tab
                           key={index}
                           setSelected={setSelected}
                           selected={selected === index}
                           title={tab.title}
                           content={tab.content}
                           image={tab.image}
                           tabNum={index}
                        />
                     );
                  })}
               </div>
            </div>
         </div>
      </section>
   );
};

const Tab = ({ selected, title, setSelected, tabNum }) => {
   return (
      <motion.div
         className="group relative w-full"
         onHoverStart={() => setSelected(tabNum)}
         onClick={() => setSelected(tabNum)}
         whileHover={{ scale: 1.02 }}
         transition={{ duration: 0.2 }}
      >
         <motion.button
            className="relative z-0 flex w-full border-l-[6px] border-slate-200 p-4 transition-colors group-hover:border-primary md:flex-col md:border-l-8 md:p-6 cursor-pointer"
            whileHover={{ backgroundColor: "rgba(255 255 255 0.15)" }}
            transition={{ duration: 0.2 }}
         >
            <span
               className={`w-full text-start text-3xl font-bold transition-colors border-b border-white/50 pb-2 ${
                  selected
                     ? "text-primary"
                     : "text-white group-hover:text-primary"
               }`}
            >
               {title}
               <span className="text-[15px] sm:text-[20px] font-semibold align-top ml-2">
                  <span className="text-primary">{"{"}</span>
                  <span>{tabNum + 1}</span>
                  <span className="text-primary">{"}"}</span>
               </span>
            </span>
         </motion.button>
         {selected && (
            <motion.span
               layoutId="vertical-slide-feature-slider"
               className="absolute bottom-0 left-0 top-0 z-10 w-[6px] bg-primary md:w-2"
            />
         )}
      </motion.div>
   );
};

const TabContent = ({ title, content, image }) => (
   <div className="w-full">
      <div className="relative h-[300px] sm:h-[500px] w-full rounded-xl bg-slate-800 shadow-xl overflow-hidden">
         <div className="absolute inset-0">
            <Image src={image} alt={title} fill className="object-cover" />
            <div className="absolute inset-0 bg-black/50" />
         </div>
         <div className="relative z-10 p-8 h-full flex flex-col justify-end">
            <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
            <p className="text-lg text-neutral-300 leading-tight">{content}</p>
         </div>
      </div>
   </div>
);
export default NosAtouts;
