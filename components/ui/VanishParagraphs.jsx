"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import gsap from "gsap";
import SplitType from "split-type";

export default function VanishParagraphs({ children }) {
	const containerRef = useRef(null);
	const isInView = useInView(containerRef, {
		once: true,
		margin: "0px 0px -100px 0px",
	});
	const [show, setShow] = useState(false);

	useEffect(() => {
		if (isInView && containerRef.current) {
			const elements = containerRef.current.querySelectorAll("p, h2, h3");

			elements.forEach((el) => {
				const split = new SplitType(el, {
					types: "lines",
					tagName: "div",
					lineClass: "line",
				});

				split.lines.forEach((line) => {
					// Utiliser textContent pour éviter les risques XSS
					// Si le contenu contient du HTML, il sera converti en texte
					const content = line.textContent || line.innerText || "";
					
					// Créer un span de manière sécurisée
					const span = document.createElement("span");
					span.style.display = "block";
					span.style.transform = "translateY(100%)";
					span.style.opacity = "0";
					span.style.clipPath = "polygon(0 0, 100% 0, 100% 0, 0 0)";
					span.textContent = content;
					
					// Vider la ligne et ajouter le span
					line.innerHTML = "";
					line.appendChild(span);
				});
			});

			setShow(true);

			gsap.to(containerRef.current.querySelectorAll(".line span"), {
				y: 0,
				opacity: 1,
				clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
				duration: 2.2,
				stagger: 0.12,
				ease: "power4.out",
				delay: 0.3,
			});
		}
	}, [isInView]);

	return (
		<div
			ref={containerRef}
			className="vanish-paragraphs"
			style={{
				visibility: show ? "visible" : "hidden",
			}}
		>
			{children}
		</div>
	);
}
