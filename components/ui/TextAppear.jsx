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
			const heroText = new SplitType(container.current, {
				types: "chars",
			});
			gsap.set(heroText.chars, { y: 400, opacity: 0 });

			gsap.to(heroText.chars, {
				y: 0,
				opacity: 1,
				duration: 1,
				stagger: 0.075,
				ease: "power4.out",
				delay: 0.5,
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
