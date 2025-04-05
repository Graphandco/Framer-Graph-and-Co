// app/components/PageTransition.jsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const variants = {
	initial: {
		opacity: 0,
		y: 50,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: "easeOut" },
	},
	exit: {
		opacity: 0,
		y: 100,
		backgroundColor: "#000",
		transition: { duration: 0.4, ease: "easeInOut" },
	},
};

export default function PageTransition({ children }) {
	const pathname = usePathname();

	return (
		<AnimatePresence mode="wait">
			<motion.main
				key={pathname}
				variants={variants}
				initial="initial"
				animate="animate"
				exit="exit"
				className="min-h-screen"
			>
				{children}
			</motion.main>
		</AnimatePresence>
	);
}
