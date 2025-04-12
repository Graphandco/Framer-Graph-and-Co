"use client";
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";

const faqData = [
	{
		question:
			"J'ai un site qui a mal vieillit, comment se passe la refonte d'un site existant ?",
		answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque laboriosam neque reprehenderit saepe eius dolorum vel consequuntur perspiciatis ad vero.",
	},
	{
		question:
			"J'ai besoin d'un site très simple, juste pour être présent sur Internet, comment faire ?",
		answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque laboriosam neque reprehenderit saepe eius dolorum vel consequuntur perspiciatis ad vero.",
	},
	{
		question:
			"Je n'y connais rien en informatique, serais-je capable d'ajouter des actualités sur mon site ?",
		answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque laboriosam neque reprehenderit saepe eius dolorum vel consequuntur perspiciatis ad vero.",
	},
	{
		question:
			"Mon neveu (ou ma cousine) prétend qu'elle peut me faire un site tout aussi bien à l'aide d'un logiciel gratuit. Est-ce possible ? ",
		answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque laboriosam neque reprehenderit saepe eius dolorum vel consequuntur perspiciatis ad vero.",
	},
	{
		question:
			"Je suis pressé(e) ! Combien de temps prendra la création de mon site ?",
		answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque laboriosam neque reprehenderit saepe eius dolorum vel consequuntur perspiciatis ad vero.",
	},
];

const Tabs = () => {
	const [openIndex, setOpenIndex] = useState(null);

	return (
		<div className="pt-8 pb-12">
			<div className="mx-auto max-w-3xl">
				<h2 className="mb-4 text-center text-3xl font-semibold">FAQ</h2>
				{faqData.map((item, index) => {
					const [ref, { height }] = useMeasure();
					const isOpen = openIndex === index;

					return (
						<motion.div
							key={index}
							animate={isOpen ? "open" : "closed"}
							className="border-b-[1px] border-b-slate-300"
						>
							<button
								onClick={() =>
									setOpenIndex((prev) =>
										prev === index ? null : index
									)
								}
								className="flex w-full items-center justify-between gap-4 py-6 cursor-pointer"
							>
								<span
									className={`text-left text-lg transition-all font-medium ${
										isOpen
											? "text-neutral-500"
											: "text-foreground"
									}`}
								>
									{item.question}
								</span>
								<motion.span
									variants={{
										open: { rotate: "180deg" },
										closed: { rotate: "0deg" },
									}}
									animate={isOpen ? "open" : "closed"}
								>
									<FiChevronDown className="text-2xl text-slate-900" />
								</motion.span>
							</button>
							<motion.div
								initial={false}
								animate={{
									height: isOpen ? height : "0px",
									marginBottom: isOpen ? "24px" : "0px",
								}}
								className="overflow-hidden text-slate-600"
							>
								<div ref={ref}>
									<p>{item.answer}</p>
								</div>
							</motion.div>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
};

export default Tabs;
