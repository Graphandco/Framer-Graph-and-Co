"use client";

import { DarkGradientPricing } from "../ui/DarkGradientPricing";

const Prices = () => {
	return (
		<section>
			<div className="wrapper py-24">
				<p className="text-4xl sm:text-5xl md:text-6xl font-semibold title-font mb-8">
					Réalisons ensemble votre site, doté de toutes les
					fonctionnalités dont vous et vos clients avez besoin.
				</p>
				<p className="text-xl sm:text-2xl md:text-3xl font-semibold">
					<span className="text-foreground/70 mr-1">
						Selon votre profil et votre budget, plusieurs options
						s’offrent à vous.
					</span>
					Quel que soit le pack choisi, votre site sera personnalisé
					pour épouser vos besoins et ceux de vos clients.
					<span className="text-foreground/70 ml-1">
						Dans le futur, il sera envisageable d’en développer de
						nouvelles pour l’adapter aux évolutions de votre
						activité.
					</span>
				</p>
			</div>
			<DarkGradientPricing />
		</section>
	);
};

export default Prices;
