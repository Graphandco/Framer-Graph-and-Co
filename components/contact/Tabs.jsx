"use client";
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";

const faqData = [
	{
		question:
			"J'ai un site qui a mal vieilli, comment se passe la refonte d'un site existant ?",
		answer: "Nous récupérons le contenu de votre ancien site et nous l'intégrons dans un nouveau design. Nous vous conseillons sur les meilleures pratiques pour améliorer l'expérience utilisateur et le référencement naturel.",
	},
	{
		question:
			"J'ai besoin d'un site très simple, juste pour être présent sur Internet, comment faire ?",
		answer: "Nous proposons des solutions adaptées à tous les besoins, même les plus simples. Nous pouvons créer un site vitrine qui présente votre entreprise et vos services de manière efficace.",
	},
	{
		question:
			"Je n'y connais rien en informatique, serais-je capable d'ajouter des actualités sur mon site ?",
		answer: "Oui, nous vous formons à l'utilisation de votre site et vous fournissons un accès facile pour ajouter du contenu. Nous utilisons des systèmes de gestion de contenu (CMS) intuitifs qui ne nécessitent pas de compétences techniques.",
	},
	{
		question:
			"Mon neveu (ou ma cousine) prétend qu'elle peut me faire un site tout aussi bien à l'aide d'un logiciel gratuit. Est-ce possible ? ",
		answer: "Créer un site web est plus complexe qu'il n'y paraît. Un logiciel gratuit peut offrir des fonctionnalités de base, mais il ne garantit pas la qualité, la sécurité et l'optimisation nécessaires pour un site professionnel. Nous utilisons des outils et des techniques avancés pour garantir un site performant et sécurisé.",
	},
	{
		question:
			"Je suis pressé(e) ! Combien de temps prendra la création de mon site ?",
		answer: "Le délai de création d'un site dépend de sa complexité. En général, un site vitrine peut être réalisé en quelques semaines, tandis qu'un site plus complexe peut prendre plusieurs mois. Nous travaillons avec vous pour établir un calendrier réaliste et respecter les délais.",
	},
];

const Tabs = () => {
	const [openIndex, setOpenIndex] = useState(null);

	return (
		<div className="pt-8 pb-12">
			<div className="mx-auto max-w-3xl">
				<h2 className="mb-4 text-center text-3xl">FAQ</h2>
				{faqData.map((item, index) => {
					const [ref, { height }] = useMeasure();
					const isOpen = openIndex === index;

					return (
						<motion.div
							key={index}
							animate={isOpen ? "open" : "closed"}
							className="border-b-[1px] border-b-slate-300"
						>
							<CustomButton
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
							</CustomButton>
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
