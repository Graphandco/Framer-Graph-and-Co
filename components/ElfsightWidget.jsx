"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function ElfsightWidget() {
	const containerRef = useRef(null);
	const [shouldRender, setShouldRender] = useState(false);
	const [scriptLoaded, setScriptLoaded] = useState(false);

	// Charger le script Elfsight dès que visible
	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !scriptLoaded) {
					const scriptId = "elfsight-platform";
					if (!document.getElementById(scriptId)) {
						const script = document.createElement("script");
						script.src =
							"https://static.elfsight.com/platform/platform.js";
						script.async = true;
						script.id = scriptId;
						document.body.appendChild(script);
					}
					setScriptLoaded(true);
				}
			},
			{ threshold: 0.2 }
		);

		if (containerRef.current) {
			observer.observe(containerRef.current);
		}

		return () => {
			if (containerRef.current) observer.unobserve(containerRef.current);
		};
	}, [scriptLoaded]);

	// Observer quand Elfsight injecte réellement son contenu
	useEffect(() => {
		if (!scriptLoaded || !containerRef.current) return;

		const mutationObserver = new MutationObserver((mutations) => {
			for (const mutation of mutations) {
				if (mutation.addedNodes.length > 0) {
					setShouldRender(true); // animation déclenchée uniquement quand contenu injecté
				}
			}
		});

		mutationObserver.observe(containerRef.current, {
			childList: true,
			subtree: true,
		});

		return () => mutationObserver.disconnect();
	}, [scriptLoaded]);

	return (
		<motion.div
			ref={containerRef}
			className="elfsight-app-de744188-5a09-4251-a21c-8dacff4b1e4a"
			data-elfsight-app-lazy
			initial={{ opacity: 0, y: 50 }}
			animate={shouldRender ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 0.6, ease: "easeOut" }}
		/>
	);
}
