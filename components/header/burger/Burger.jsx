"use client";
import { useState } from "react";
import { Minus } from "lucide-react";

import { motion } from "framer-motion";
import BurgerNav from "./BurgerNav";

const Burger = ({ navLinks, textColor }) => {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <div className="items-center flex md:hidden">
         <motion.button
            // animate={{ rotate: isOpen ? 360 : 0 }}
            // transition={{ duration: 0.5, ease: "easeInOut" }}
            // whileHover={{ rotate: isOpen ? 360 : 180 }}
            // whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className=""
            aria-label="Menu burger"
         >
            <svg
               className={`w-8 aspect-square cursor-pointer -scale-x-100 ${isOpen ? "burger-menu burger-menu-open" : "burger-menu"}`}
            >
               <line
                  x1="0"
                  y1="50%"
                  x2="100%"
                  y2="50%"
                  className="top"
                  shapeRendering="crispEdges"
               />
               <line
                  x1="0"
                  y1="50%"
                  x2="100%"
                  y2="50%"
                  className="middle"
                  shapeRendering="crispEdges"
               />
               <line
                  x1="0"
                  y1="50%"
                  x2="100%"
                  y2="50%"
                  className="bottom"
                  shapeRendering="crispEdges"
               />
            </svg>
         </motion.button>
         <BurgerNav isOpen={isOpen} setIsOpen={setIsOpen} navLinks={navLinks} />
      </div>
   );
};

export default Burger;
