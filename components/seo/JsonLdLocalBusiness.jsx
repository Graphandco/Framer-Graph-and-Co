/**
 * Schéma JSON-LD LocalBusiness pour le SEO local (agence web Colmar)
 * @see https://schema.org/LocalBusiness
 */
export default function JsonLdLocalBusiness() {
	const ldData = {
		"@context": "https://schema.org",
		"@type": "ProfessionalService",
		"@id": "https://graphandco.com/#organization",
		name: "Graph & Co",
		alternateName: "Agence web Colmar - Graph & Co",
		description:
			"Agence web à Colmar spécialisée dans la création de sites internet sur mesure. Design moderne, performances optimales et accompagnement personnalisé.",
		url: "https://graphandco.com",
		logo: "https://graphandco.com/logo512.png",
		image: "https://graphandco.com/og-image.jpg",
		telephone: "06 61 61 99 98",
		email: "contact@graphandco.com",
		address: {
			"@type": "PostalAddress",
			streetAddress: "1, rue de la Lucelle",
			addressLocality: "Sainte-Croix-en-Plaine",
			postalCode: "68127",
			addressRegion: "Grand Est",
			addressCountry: "FR",
		},
		geo: {
			"@type": "GeoCoordinates",
			latitude: 47.9886,
			longitude: 7.3867,
		},
		areaServed: [
			{ "@type": "City", name: "Colmar" },
			{ "@type": "State", name: "Alsace" },
		],
		sameAs: [
			"https://www.facebook.com/graphandcoagency/",
			"https://www.linkedin.com/company/graphandco/",
		],
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(ldData) }}
		/>
	);
}
