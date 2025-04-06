"use client";

import Prices from "@/components/offres/Prices";
import PageHero from "@/components/ui/PageHero";

const PrestationsPage = () => {
	return (
		<div>
			<PageHero
				title="Nos offres"
				image="/offres/hero-offres.avif"
				imageClass="object-cover object-top"
			/>
			<Prices />
		</div>
	);
};

export default PrestationsPage;
