"use client";

import { motion } from "framer-motion";
import React, { useMemo, useState } from "react";
import NavLink from "./header/NavLink";

export default function RotatingButton({
   href,
   text,
   letterSpacing = 3, // espacement entre lettres
   radius = 35, // rayon de base
   hoverRadius = 45, // rayon au hover
   speed = 10, // vitesse de rotation
   backgroundColor = "var(--primary", // couleur de fond du cercle central
   className = "",
}) {
   const [isHovered, setIsHovered] = useState(false);
   const letters = useMemo(() => text.split(""), [text]);

   const angleStep = 360 / letters.length;

   return (
      <NavLink href={href} className="flex justify-center">
         <div
            className="relative flex items-center justify-center cursor-pointer"
            style={{
               width: `${(hoverRadius + 20) * 2}px`,
               height: `${(hoverRadius + 20) * 2}px`,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
         >
            {/* Cercle central */}
            <motion.div
               className="absolute w-8 h-8 rounded-full"
               style={{
                  backgroundColor: backgroundColor,
               }}
               layout
            />

            {/* Texte rotatif */}
            <motion.div
               className={`absolute w-full h-full flex items-center justify-center ${className}`}
               animate={{ rotate: 360 }}
               transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: speed,
               }}
            >
               {letters.map((letter, i) => {
                  const angle = i * angleStep;
                  const r = isHovered ? hoverRadius : radius;
                  const x = Math.cos((angle * Math.PI) / 180) * r;
                  const y = Math.sin((angle * Math.PI) / 180) * r;

                  return (
                     <motion.span
                        key={i}
                        className="absolute  font-bold uppercase font-bebas"
                        style={{
                           letterSpacing: `${letterSpacing}px`,
                           transformOrigin: "center",
                        }}
                        animate={{
                           transform: `translate(${x}px, ${y}px) rotate(${
                              angle + 90
                           }deg)`,
                        }}
                        transition={{
                           type: "spring",
                           stiffness: 400, // Rigidité du ressort (plus élevé = plus rapide, plus de rebond)
                           damping: 10, // Amortissement (plus élevé = moins de rebond, plus stable)
                           mass: 1, // Masse de l'élément (plus léger = plus réactif, plus lourd = plus lent)
                        }}
                     >
                        {letter}
                     </motion.span>
                  );
               })}
            </motion.div>
         </div>
      </NavLink>
   );
}
