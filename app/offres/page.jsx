"use client";

import Prices from "@/components/offres/Prices";
import SurMesure from "@/components/offres/SurMesure";
import TextIntro from "@/components/offres/TextIntro";
import PageHero from "@/components/ui/PageHero";

const PrestationsPage = () => {
	return (
		<div>
			<PageHero
				title="Nos offres"
				image="/offres/hero-offres.avif"
				imageClass="object-cover object-top"
			/>
			<TextIntro />
			<Prices />
			<SurMesure />
		</div>
	);
};

export default PrestationsPage;
