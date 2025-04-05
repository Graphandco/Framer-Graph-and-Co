"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Template = ({ children }) => {
	const pathname = usePathname();
	const [displayedChildren, setDisplayedChildren] = useState(children);
	const [isExiting, setIsExiting] = useState(false);

	// Lorsque les children changent, lancer l'animation de sortie
	useEffect(() => {
		setIsExiting(true);

		const timeout = setTimeout(() => {
			setDisplayedChildren(children);
			setIsExiting(false);
		}, 600); // durée de l'animation de sortie

		return () => clearTimeout(timeout);
	}, [children]);

	return (
		<div className="relative overflow-hidden">
			{/* Page sortante avec clip-path */}
			<AnimatePresence mode="wait">
				{isExiting && (
					<motion.div
						key="exit"
						initial={{
							clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
						}}
						animate={{
							clipPath:
								"polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
						}}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.6, ease: "easeInOut" }}
						className="absolute inset-0"
					>
						{displayedChildren}
					</motion.div>
				)}
			</AnimatePresence>

			{/* Page entrante avec fade + translate */}
			<AnimatePresence mode="wait">
				{!isExiting && (
					<motion.div
						key={pathname}
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.6, ease: "easeOut" }}
					>
						{displayedChildren}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Template;
