"use client";

import { useEffect, useRef } from "react";

export default function ElfsightWidget() {
	const widgetRef = useRef(null);

	useEffect(() => {
		const scriptId = "elfsight-platform";

		// Évite d’ajouter le script plusieurs fois
		if (!document.getElementById(scriptId)) {
			const script = document.createElement("script");
			script.src = "https://static.elfsight.com/platform/platform.js";
			script.async = true;
			script.id = scriptId;
			document.body.appendChild(script);
		}
	}, []);

	return (
		<div
			ref={widgetRef}
			className="elfsight-app-de744188-5a09-4251-a21c-8dacff4b1e4a"
			data-elfsight-app-lazy
		/>
	);
}
