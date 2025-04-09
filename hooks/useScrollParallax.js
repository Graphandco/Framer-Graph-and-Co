import { useScroll, useTransform } from "framer-motion";

export function useScrollParallax({
	target,
	level = "md",
	opacity = false,
	scale = false,
	scaleValue = 0.8,
	scaleDirection = "up",
}) {
	const levels = {
		xs: [0, -40],
		sm: [0, -60],
		md: [0, -80],
		lg: [0, -120],
		xl: [0, -200],
		xxl: [0, -400],
	};

	const output = levels[level] ?? levels["md"];

	// Scroll progress from entrance to full exit of the container
	const { scrollYProgress } = useScroll({
		target,
		offset: ["start end", "end start"], // maps to progress from 0 to 1
	});

	const y = useTransform(scrollYProgress, [0, 1], output);

	const s = scale
		? useTransform(
				scrollYProgress,
				[0, 1],
				scaleDirection === "down" ? [1, scaleValue] : [scaleValue, 1]
			)
		: undefined;

	// Opacity stays 1 until 50% of container is visible, then fades to 0
	const o = opacity
		? useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0])
		: undefined;

	return { y, scale: s, opacity: o };
}
