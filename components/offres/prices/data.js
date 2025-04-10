const data = [
	{
		title: "Starter",
		price: 800,
		description: "Clé en main",
		details: [
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
	{
		title: "Medium",
		price: 1500,
		description: "Best seller",
		bestSeller: true,
		details: [
			{
				name: "Pack Starter +",
				checked: true,
			},
			{
				name: "Modifications illimitées",
				checked: true,
			},
			{
				name: "Maintenance du site",
				checked: true,
			},
			{
				name: "Hébergement + nom de domaine",
				checked: true,
			},
			{
				name: "Formation au backoffice",
				checked: true,
			},
			{
				name: "Vente en ligne",
				checked: false,
			},
		],
	},
	{
		title: "E-commerce",
		price: 2500,
		description: "Vente en ligne",
		details: [
			{
				name: "Pack Medium +",
				checked: true,
			},
			{
				name: "Système de vente en ligne (Prestashop)",
				checked: true,
			},
			{
				name: "Conseils paiements + transporteurs",
				checked: true,
			},
			{
				name: "Import depuis un autre site ou fichier CSV compatible",
				checked: true,
			},
			{
				name: "Création de 10 fiches produits",
				checked: true,
			},
			{
				name: "Module bancaire (CB)",
				checked: false,
			},
		],
	},
	{
		premium: true,
		title: "Premium",
		price: 2500,
		description: "Site expert",
		details: [
			{
				name: "Pack Medium +",
				checked: true,
			},
			{
				name: "Extra rapide (Next JS)",
				checked: true,
			},
			{
				name: "Animations complexes",
				checked: true,
			},
			{
				name: "Backoffice sur-mesure",
				checked: true,
			},
			{
				name: "Application mobile",
				checked: true,
			},
		],
	},
];
export default data;
