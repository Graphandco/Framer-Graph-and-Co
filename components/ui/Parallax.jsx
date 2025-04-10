"use client";
import { useScrollParallax } from "@/hooks/useScrollParallax";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Parallax({
	level = "md",
	className = "",
	children,
	opacity = false,
	scale = false,
	scaleValue = 0.8,
	scaleDirection = "up",
}) {
	const containerRef = useRef(null);

	const {
		y,
		scale: s,
		opacity: o,
	} = useScrollParallax({
		target: containerRef,
		level,
		opacity,
		scale,
		scaleValue,
		scaleDirection,
	});

	return (
		<div ref={containerRef}>
			<motion.div
				style={{ y, scale: s, opacity: o }}
				className={className}
			>
				{children}
			</motion.div>
		</div>
	);
}
