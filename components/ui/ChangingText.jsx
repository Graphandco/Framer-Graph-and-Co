"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ChangingText = () => {
	const phrases = ["Élégant", "Sécurisé", "Accessible", "Performant"];

	const [active, setActive] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setActive((prev) => (prev + 1) % phrases.length);
		}, 2000);

		return () => clearInterval(interval);
	}, [phrases.length]);

	return (
		<div className="bg-black px-4 text-center overflow-hidden">
			<div className="text-white text-4xl">
				Réalisons ensemble
				<br />
				votre site
				<div className="relative h-[2.5em] w-full text-white/50">
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
			</div>
		</div>
	);
};

export default ChangingText;
