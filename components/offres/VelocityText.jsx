"use client";
import {
	motion,
	useScroll,
	useVelocity,
	useTransform,
	useSpring,
} from "framer-motion";
import React, { useRef } from "react";
import { FiArrowDown } from "react-icons/fi";

export const VelocityText = () => {
	const targetRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start start", "end start"],
	});

	const scrollVelocity = useVelocity(scrollYProgress);

	const skewXRaw = useTransform(scrollVelocity, [-1, 1], ["45deg", "-45deg"]);
	const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 50 });

	const xRaw = useTransform(scrollYProgress, [0, 1], [0, -2000]);
	const x = useSpring(xRaw, { mass: 3, stiffness: 400, damping: 50 });

	return (
		<section
			ref={targetRef}
			className="h-[500vh] bg-neutral-50 text-neutral-950"
		>
			<div className="sticky top-0 flex h-screen flex-col justify-between overflow-hidden">
				<CenterCopy />
				<motion.p
					style={{ skewX, x }}
					className="origin-bottom-left whitespace-nowrap text-8xl title-font font-black! uppercase leading-[0.85] md:text-10xl md:leading-[0.85]"
				>
					Design propre, performance assurée.
				</motion.p>
				<ScrollArrow />
			</div>
		</section>
	);
};

const CenterCopy = () => {
	return (
		<div className="flex items-center justify-center px-4">
			<img
				src="https://images.unsplash.com/photo-1622599511051-16f55a1234d0?q=80&w=2536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="Placeholder image"
				className="mr-2 h-full w-20 bg-neutral-200 object-cover"
			/>
			<h1 className="text-3xl font-bold text-neutral-400 sm:text-5xl md:text-7xl">
				Life is short. <br />
				Don't waste it. <br />
				It's time to{" "}
				<span className="inline-block -skew-x-[18deg] font-black text-neutral-950">
					SHIFT.
				</span>
			</h1>
		</div>
	);
};

const ScrollArrow = () => {
	return (
		<>
			<div className="absolute left-4 top-1/2 hidden -translate-y-1/2 text-xs lg:block">
				<span
					style={{
						writingMode: "vertical-lr",
					}}
				>
					SCROLL
				</span>
				<FiArrowDown className="mx-auto" />
			</div>
			<div className="absolute right-4 top-1/2 hidden -translate-y-1/2 text-xs lg:block">
				<span
					style={{
						writingMode: "vertical-lr",
					}}
				>
					SCROLL
				</span>
				<FiArrowDown className="mx-auto" />
			</div>
		</>
	);
};
