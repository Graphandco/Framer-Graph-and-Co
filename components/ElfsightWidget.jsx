"use client";

import { useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function ElfsightWidget() {
	const [scriptLoaded, setScriptLoaded] = useState(false);
	const controls = useAnimation();

	const handleInView = async () => {
		const scriptId = "elfsight-platform";

		function initElfsight() {
			if (window.elfsight) {
				window.elfsight.render();
			}
		}

		if (!document.getElementById(scriptId)) {
			const script = document.createElement("script");
			script.src = "https://static.elfsight.com/platform/platform.js";
			script.async = true;
			script.id = scriptId;
			script.onload = () => {
				setScriptLoaded(true);
				initElfsight();
			};
			document.body.appendChild(script);
		} else {
			setScriptLoaded(true);
			initElfsight();
		}

		// Lance l’animation après chargement
		await controls.start({ opacity: 1, y: 0 });
	};

	return (
		<motion.div
			className="elfsight-app-de744188-5a09-4251-a21c-8dacff4b1e4a"
			initial={{ opacity: 0, y: 50 }}
			animate={controls}
			transition={{ duration: 0.6, ease: "easeOut" }}
			whileInView={handleInView}
			viewport={{ once: true, amount: 0.2 }} // 20% visible pour déclencher
		/>
	);
}
