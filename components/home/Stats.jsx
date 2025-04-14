"use client";
import { FaSmile, FaCode, FaSadCry } from "react-icons/fa";
import { GiSwordsPower } from "react-icons/gi";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

const Stats = () => {
	const stats = [
		{
			num: 97,
			suffix: "%",
			subheading: "Fidélisation client",
			icon: <FaSmile />,
		},
		{
			num: 15,
			suffix: "",
			subheading: "Ans d'expérience",
			icon: <GiSwordsPower />,
		},
		{
			num: 295123,
			suffix: "",
			subheading: "Lignes de code",
			icon: <FaCode />,
		},
		{
			num: 12,
			suffix: "",
			subheading: "Demandes de réparation d'imprimante",
			icon: <FaSadCry />,
		},
	];

	const refs = useRef([]);
	const containerRef = useRef(null);
	const isInView = useInView(containerRef, { once: false });

	useEffect(() => {
		if (!isInView) return;

		stats.forEach((stat, index) => {
			animate(0, stat.num, {
				duration: 2.5,
				onUpdate: (value) => {
					if (refs.current[index]) {
						const rounded = Math.round(value);
						refs.current[index].textContent =
							rounded.toLocaleString("en-US");
					}
				},
			});
		});
	}, [isInView]);

	return (
		<section ref={containerRef} className="wrapper pb-20">
			<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
				{stats.map((stat, index) => (
					<div
						key={index}
						className="flex flex-col items-center py-3 sm:py-0"
					>
						<div className="text-3xl mb-3">{stat.icon}</div>
						<p className="mb-3 text-center text-2xl">
							<span ref={(el) => (refs.current[index] = el)} />
							{stat.suffix}
						</p>
						<p className="text-center text-neutral-500 leading-tight">
							{stat.subheading}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Stats;
