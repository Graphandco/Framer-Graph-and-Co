"use client";

import { DarkGradientPricing } from "../ui/DarkGradientPricing";

const Prices = () => {
	const data = [
		{
			title: "Starter",
			price: 800,
			description: "clé en main",
			items: [
				{
					name: "RDV personnalisé",
					checked: true,
				},
				{
					name: "Développement de votre site",
					checked: true,
				},
				{
					name: "Site sécurisé",
					checked: true,
				},
				{
					name: "Responsive Design",
					checked: true,
				},
				{
					name: "Hébergement et maintenance",
					checked: false,
				},
				{
					name: "Nom de domaine",
					checked: false,
				},
			],
		},
	];

	return (
		<section>
			<DarkGradientPricing />
		</section>
	);
};

export default Prices;
