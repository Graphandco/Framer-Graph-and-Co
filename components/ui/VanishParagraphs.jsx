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
					const content = line.innerHTML;
					line.innerHTML = `
            <span style="
              display: block;
              transform: translateY(100%);
              opacity: 0;
              clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
            ">
              ${content}
            </span>
          `;
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
