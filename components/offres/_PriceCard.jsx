"use client";
import React from "react";
import { FiCheck, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import Button from "./Button";

const PricingCard = ({
	title,
	price,
	// bestFor,
	benefits,
	// buttonText,
	// onClick,
	premium = false,
}) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className={twMerge(
				"rounded-2xl border p-6 bg-gradient-to-br from-zinc-950/50 to-zinc-900/80 text-zinc-200",
				premium && "border-yellow-500"
			)}
		>
			<div className="mb-6 text-center">
				<h3 className="text-xl font-semibold">{title}</h3>
				{/* <p className="text-sm text-zinc-400">{bestFor}</p> */}
				<p className="my-3 text-3xl font-bold text-white">{price}</p>
			</div>

			<ul className="mb-6 space-y-2">
				{benefits.map((b, i) => (
					<li key={i} className="flex items-center gap-2">
						<span
							className={twMerge(
								"grid size-5 place-content-center rounded-full",
								b.checked
									? "bg-primary text-black"
									: "bg-zinc-800 text-zinc-400"
							)}
						>
							{b.checked ? <FiCheck /> : <FiX />}
						</span>
						<span className="text-sm">{b.text}</span>
					</li>
				))}
			</ul>

			<Button
				href="/contact"
				className={twMerge(
					"w-full rounded-md px-4 py-2 text-lg transition-all",
					premium
						? "bg-yellow-500 text-black hover:bg-yellow-600"
						: "text-zinc-100 hover:bg-zinc-800"
				)}
			>
				Sélectionner
			</Button>
		</motion.div>
	);
};

export default PricingCard;
