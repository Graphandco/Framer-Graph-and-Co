"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion, useScroll } from "framer-motion";

export default function ScrollToTopButton() {
	const { scrollY } = useScroll();
	const [show, setShow] = useState(false);

	useEffect(() => {
		const callback = (latest) => {
			setShow(latest > 400);
		};

		scrollY.on("change", callback);

		return () => {
			scrollY.clearListeners("change");
		};
	}, [scrollY]);

	const handleClick = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<motion.button
			onClick={handleClick}
			aria-label="Scroll to top"
			title="Remonter"
			initial={{ opacity: 0, y: 50 }}
			animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
			transition={{ type: "spring", stiffness: 300, damping: 30 }}
			className="fixed bottom-8 right-8 z-50 rounded-full border border-primary/50 bg-black text-white p-3 shadow-lg hover:border-primary focus:outline-none cursor-pointer transition-colors duration-300 ease-in-out"
		>
			<FaArrowUp className="w-4 h-4" />
		</motion.button>
	);
}
