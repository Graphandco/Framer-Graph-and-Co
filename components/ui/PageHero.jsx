"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TextAppear from "../ui/TextAppear";

const PageHero = ({ title, children }) => {
   const sectionRef = useRef(null);
   const titleRef = useRef(null);

   const { scrollYProgress } = useScroll({
      target: sectionRef,
      offset: ["start start", "end start"],
   });

   const yTitle = useTransform(scrollYProgress, [0, 1], [0, -250]);
   const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 2]);

   return (
      <section
         id="hero"
         ref={sectionRef}
         className="relative min-h-[30vh] sm:min-h-[50vh] overflow-hidden bg-neutral-900"
      >
         <div className="absolute inset-0">
            <motion.div
               style={{ scale: scaleBg }}
               className="relative h-full w-full will-change-transform after:content-[''] after:absolute after:top-0 after:left-0 after:h-1/4 after:w-full after:bg-linear-to-t after:from-transparent after:to-black/70 before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-1/2 before:w-full before:bg-linear-to-t before:from-black/50 before:to-transparent before:z-10"
            >
               {children}
            </motion.div>
         </div>

         <motion.div
            style={{ y: yTitle }}
            className="absolute inset-0 z-20 flex flex-col justify-end pb-4 sm:pb-8 pointer-events-none"
         >
            <motion.div ref={titleRef} className="relative wrapper ml-0! pointer-events-auto">
               <div className="relative text-5xl title-font text-white font-semibold pl-5">
                  <TextAppear className="before:content-[''] before:absolute before:-left-0 before:top-[.60em] before:min-w-[.15em] before:aspect-square before:rounded-full before:bg-white">
                     <h1>{title}</h1>
                  </TextAppear>
               </div>
            </motion.div>
         </motion.div>
      </section>
   );
};

export default PageHero;
