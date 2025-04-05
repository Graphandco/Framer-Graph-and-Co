"use client";
import { motion } from "framer-motion";

export default function Template({ children }) {
	return (
		<motion.div
			initial={{ y: 20, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: 100, opacity: 0 }} // 👈 animation de sortie
			transition={{ ease: "easeInOut", duration: 0.6 }}
		>
			{children}
		</motion.div>
	);
}
