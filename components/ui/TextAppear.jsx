"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

gsap.registerPlugin(useGSAP);

export default function TextAppear({ children, className }) {
	const container = useRef();

	useGSAP(
		() => {
			// On split par mots ET caractères
			const split = new SplitType(container.current, {
				types: "words, chars",
			});

			// Chaque char en inline-block pour animation propre
			gsap.set(split.chars, {
				y: 400,
				opacity: 0,
				display: "inline-block",
			});

			gsap.to(split.chars, {
				y: 0,
				opacity: 1,
				duration: 1,
				stagger: 0.03,
				ease: "power4.out",
				delay: 0.4,
			});
		},
		{ scope: container }
	);

	return (
		<div className={className} ref={container}>
			{children}
		</div>
	);
}
