"use client";

import { motion } from "framer-motion";
import React, { useMemo, useState } from "react";
import NavLink from "./header/NavLink";

function roundPx(value) {
   return Math.round(value * 100) / 100;
}

export default function RotatingButton({
   href,
   text,
   letterSpacing = 3,
   radius = 35,
   hoverRadius = 45,
   speed = 10,
   backgroundColor = "var(--primary)",
   className = "",
}) {
   const [isHovered, setIsHovered] = useState(false);
   const letters = useMemo(() => text.split(""), [text]);

   const angleStep = letters.length ? 360 / letters.length : 0;

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
            <motion.div
               className="absolute h-8 w-8 rounded-full"
               style={{ backgroundColor }}
            />

            <motion.div
               className={`absolute flex h-full w-full items-center justify-center ${className}`}
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
                  const rad = (angle * Math.PI) / 180;
                  const x = roundPx(Math.cos(rad) * r);
                  const y = roundPx(Math.sin(rad) * r);
                  const rotate = roundPx(angle + 90);

                  return (
                     <motion.span
                        key={`${i}-${letter}`}
                        className="absolute font-bebas font-bold uppercase"
                        style={{
                           letterSpacing: `${letterSpacing}px`,
                           transformOrigin: "center",
                        }}
                        animate={{ x, y, rotate }}
                        transition={{
                           type: "spring",
                           stiffness: 400,
                           damping: 10,
                           mass: 1,
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
