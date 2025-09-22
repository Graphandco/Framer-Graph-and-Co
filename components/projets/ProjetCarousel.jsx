"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const AUTO_SCROLL = true;
const SCROLL_INTERVAL = 5000; // ms

export default function ProjetCarousel({ images = [] }) {
   const [index, setIndex] = useState(0);
   const [direction, setDirection] = useState(0);
   const [progressKey, setProgressKey] = useState(0);
   const [isPaused, setIsPaused] = useState(false);
   const intervalRef = useRef(null);

   const imageCount = images.length;

   const paginate = (newDirection) => {
      if (imageCount === 0) return;
      setDirection(newDirection);
      setIndex((prev) => (prev + newDirection + imageCount) % imageCount);
      setProgressKey((prev) => prev + 1);
   };

   useEffect(() => {
      if (!AUTO_SCROLL || isPaused || imageCount === 0) return;

      intervalRef.current = setInterval(() => {
         paginate(1);
      }, SCROLL_INTERVAL);

      return () => clearInterval(intervalRef.current);
   }, [index, isPaused, imageCount]);

   const variants = {
      enter: (direction) => ({
         x: direction > 0 ? 300 : -300,
         opacity: 0,
         scale: 0.8,
      }),
      center: {
         x: 0,
         opacity: 1,
         scale: 1,
      },
      exit: (direction) => ({
         x: direction < 0 ? 300 : -300,
         opacity: 0,
         scale: 0.8,
      }),
   };

   if (imageCount === 0) {
      return (
         <div className="w-full max-w-3xl mx-auto p-10 text-center text-neutral-500">
            Aucune image à afficher.
         </div>
      );
   }

   return (
      <div
         className="relative w-full max-w-3xl mx-auto overflow-hidden bg-neutral-100 rounded-lg shadow-lg"
         onMouseEnter={() => setIsPaused(true)}
         onMouseLeave={() => setIsPaused(false)}
      >
         <div className="relative aspect-video">
            <AnimatePresence initial={false} custom={direction}>
               <motion.img
                  key={index}
                  src={images[index]}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                     x: { type: "spring", stiffness: 300, damping: 30 },
                     opacity: { duration: 0.2 },
                  }}
                  className="absolute top-0 left-0 w-full h-full object-cover"
               />
            </AnimatePresence>

            {/* Progress bar */}
            {AUTO_SCROLL && !isPaused && (
               <motion.div
                  key={progressKey}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                     duration: SCROLL_INTERVAL / 1000,
                     ease: "linear",
                  }}
                  className="absolute bottom-0 left-0 h-1 bg-primary"
               />
            )}
         </div>

         {/* Arrows */}
         <div className="absolute inset-0 flex items-center justify-between px-4">
            <button
               onClick={() => paginate(-1)}
               className="bg-white bg-opacity-70 hover:bg-opacity-100 p-2 rounded-full transition"
            >
               <GoArrowLeft size={24} />
            </button>
            <button
               onClick={() => paginate(1)}
               className="bg-white bg-opacity-70 hover:bg-opacity-100 p-2 rounded-full transition"
            >
               <GoArrowRight size={24} />
            </button>
         </div>

         {/* Image counter */}
         <div className="absolute bottom-2 right-4 text-sm bg-white/70 px-2 py-1 rounded">
            {index + 1} / {imageCount}
         </div>
      </div>
   );
}
