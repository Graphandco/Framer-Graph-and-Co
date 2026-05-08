"use client";
import { FaSmile, FaCode, FaSadCry } from "react-icons/fa";
import { GiSwordsPower } from "react-icons/gi";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

const PICTO_MAP = {
   FaSmile,
   GiSwordsPower,
   FaCode,
   FaSadCry,
};

const resolvePicto = (picto) => {
   if (typeof picto !== "string") return null;
   const iconName = picto.replace(/[</>\s]/g, "");
   return PICTO_MAP[iconName] || null;
};

const Stats = ({ stats }) => {
   const refs = useRef([]);
   const containerRef = useRef(null);
   const isInView = useInView(containerRef, { once: false });

   useEffect(() => {
      if (!isInView) return;

      stats.forEach((stat, index) => {
         animate(0, Number(stat.number) || 0, {
            duration: 2.5,
            onUpdate: (value) => {
               if (refs.current[index]) {
                  const rounded = Math.round(value);
                  refs.current[index].textContent =
                     rounded.toLocaleString("en-US");
               }
            },
         });
      });
   }, [isInView, stats]);

   return (
      <section ref={containerRef} className="wrapper bg-white pb-20">
         <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.map((stat, index) => {
               const Icon = resolvePicto(stat.picto);
               const suffix = (stat.suffix ?? "").replace(/"/g, "").trim();

               return (
                  <div
                     key={index}
                     className="flex flex-col items-center py-3 sm:py-0"
                  >
                     <div className="text-3xl mb-3">
                        {Icon ? <Icon /> : null}
                     </div>
                     <p className="mb-3 text-center text-2xl">
                        <span ref={(el) => (refs.current[index] = el)} />
                        {suffix}
                     </p>
                     <p className="text-center text-neutral-500 leading-tight">
                        {stat.name}
                     </p>
                  </div>
               );
            })}
         </div>
      </section>
   );
};

export default Stats;
