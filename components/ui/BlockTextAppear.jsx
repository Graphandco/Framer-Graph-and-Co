"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

gsap.registerPlugin(useGSAP);

const BlockTextAppear = ({ children }) => {
	const container = useRef();

	useGSAP(
		() => {
			const text = new SplitType(".split-text p", {
				types: "lines",
				tagName: "div",
				lineClass: "line",
			});

			text.lines.forEach((line) => {
				const content = line.innerHTML;
				line.innerHTML = `<span>${content}</span>`;
			});

			gsap.set(".split-text p .line span", {
				y: 400,
				display: "block",
			});

			gsap.to(".split-text p .line span", {
				y: 0,
				duration: 2,
				stagger: 0.075,
				ease: "power4.out",
				delay: 0.25,
			});

			return () => {
				if (text) text.revert();
			};
		},
		{ scope: container }
	);

	return (
		<div className="split-text" ref={container}>
			<p>{children}</p>
		</div>
	);
};

export default BlockTextAppear;
