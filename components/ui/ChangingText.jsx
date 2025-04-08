"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ChangingText = () => {
	const phrases = ["Élégant", "Sécurisé", "Accessible", "Performant"];

	const [active, setActive] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setActive((prev) => (prev + 1) % phrases.length);
		}, 2500);

		return () => clearInterval(interval);
	}, [phrases.length]);

	return (
		<div className="bg-black px-4 text-center overflow-hidden">
			<h3 className="text-3xl title-font font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
				Réalisons ensemble votre site
				<div className="relative mt-2 h-[2.5em] w-full text-white/50">
					<AnimatePresence mode="wait">
						<motion.div
							key={phrases[active]}
							initial={{
								y: 10,
								opacity: 0,
								filter: "blur(6px)",
							}}
							animate={{
								y: 0,
								opacity: 1,
								filter: "blur(0px)",
							}}
							exit={{
								y: -10,
								opacity: 0,
								filter: "blur(6px)",
							}}
							transition={{
								duration: 0.2,
								ease: [0.4, 0, 0.2, 1], // ease-in-out
							}}
							className="absolute left-1/2 top-0 w-full -translate-x-1/2 text-white/50"
						>
							{phrases[active]}
						</motion.div>
					</AnimatePresence>
				</div>
			</h3>
		</div>
	);
};

export default ChangingText;
