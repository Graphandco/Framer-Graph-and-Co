"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const ParallaxImage = ({ src, alt }) => {
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], [0, -300]);

	return (
		<div ref={ref} className="relative w-full h-full overflow-hidden">
			<motion.div
				style={{ y, scale: 1.8 }}
				className="absolute inset-0 will-change-transform after:content-[''] after:absolute after:inset-0 after:bg-white/40"
				// className="absolute inset-0 will-change-transform "
			>
				<Image
					src={src}
					alt={alt}
					fill
					className="absolute w-full h-full will-change-transform object-cover"
					sizes="100vw"
					priority
				/>
			</motion.div>
		</div>
	);
};

export default ParallaxImage;
