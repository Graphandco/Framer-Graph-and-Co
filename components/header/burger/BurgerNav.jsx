"use client";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import NavLink from "../NavLink";

const BurgerNav = ({ isOpen, setIsOpen, navLinks }) => {
   const navVariants = {
      open: {
         x: "0%",
         borderTopLeftRadius: "0vw",
         borderBottomLeftRadius: "0vw",
         opacity: 1,
         transition: {
            type: "spring",
            stiffness: 120,
            damping: 14,
            bounce: 0.15,
         },
      },
      closed: {
         x: "100%",
         borderTopLeftRadius: "50vw",
         borderBottomLeftRadius: "50vw",
         opacity: 0,
         transition: {
            type: "spring",
            stiffness: 120,
            damping: 18,
         },
      },
   };

   const linkWrapperVariants = {
      open: {
         transition: {
            staggerChildren: 0.12,
            delayChildren: 0.15,
         },
      },
      closed: {
         transition: {
            staggerDirection: -1,
            staggerChildren: 0.08,
         },
      },
   };
   const navLinkVariants = {
      open: {
         x: 0,
         opacity: 1,
         transition: {
            type: "spring",
            stiffness: 180,
            damping: 8,
            bounce: 0.4,
         },
      },
      closed: {
         x: 25,
         opacity: 0,
         transition: {
            type: "spring",
            stiffness: 120,
            damping: 20,
         },
      },
   };

   return (
      <motion.nav
         className="fixed top-0 bottom-0 left-0 right-0 w-full -z-10"
         initial="closed"
         animate={isOpen ? "open" : "closed"}
         variants={navVariants}
      >
         {/* Bouton fermeture */}
         {/* <motion.button
				className="text-3xl bg-foreground text-white hover:bg-primary transition-colors p-4 rounded-full absolute top-3 right-3 flex items-center justify-center"
				whileHover={{ rotate: "180deg" }}
				whileTap={{ scale: 0.9 }}
				onClick={() => setIsOpen(false)}
				aria-label="Fermer le menu"
			>
				<X />
			</motion.button> */}

         {/* Liens */}
         <motion.div
            variants={linkWrapperVariants}
            className="flex flex-col gap-7 justify-center items-start bg-foreground/95 h-screen px-12"
         >
            {navLinks.map((navlink, i) => (
               <motion.div key={i} variants={navLinkVariants}>
                  <NavLink
                     name={navlink.name}
                     href={navlink.href}
                     setIsOpen={setIsOpen}
                     className="inline-block pl-6 text-white z-10 text-font font-black text-6xl hover:text-primary transition-colors"
                     rel="nofollow"
                  />
               </motion.div>
            ))}
         </motion.div>
      </motion.nav>
   );
};

export default BurgerNav;
