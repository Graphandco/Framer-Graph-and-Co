"use client";

import FadeInOnView from "../ui/FadeInOnView";

const TextIntro = () => {
	return (
		<section>
			{/* <div className="wrapper py-12 bg-black/5 grid">
				<div className="text-8xl">
					Voici un long texte 8xl pour voir le retour à la ligne
				</div>
				<div className="text-7xl">
					Voici un long texte 7xl pour voir le retour à la ligne
				</div>
				<div className="text-6xl">
					Voici un long texte 6xl pour voir le retour à la ligne
				</div>
				<div className="text-5xl">
					Voici un long texte 5xl pour voir le retour à la ligne
				</div>
				<div className="text-4xl">
					Voici un long texte 4xl pour voir le retour à la ligne
				</div>
				<div className="text-3xl">
					Voici un long texte 3xl pour voir le retour à la ligne
				</div>
				<div className="text-2xl">
					Voici un long texte 2xl pour voir le retour à la ligne
				</div>
				<div className="text-xl">
					Voici un long texte xl pour voir le retour à la ligne
				</div>
				<div className="text-lg">
					Voici un long texte lg pour voir le retour à la ligne
				</div>
				<div className="">
					Voici un long texte normale pour voir le retour à la ligne
				</div>
			</div> */}
			<div className="wrapper py-24">
				<FadeInOnView delay={1} once={true}>
					<p className="text-4xl sm:text-5xl md:text-6xl font-semibold title-font mb-8">
						Réalisons ensemble votre site, doté de toutes les
						fonctionnalités dont vous et vos clients avez besoin.
					</p>
				</FadeInOnView>
				<FadeInOnView delay={1.25} once={true}>
					<p className="text-xl sm:text-2xl md:text-3xl font-semibold">
						<span className="text-foreground/70 mr-1">
							Selon votre profil et votre budget, plusieurs
							options s’offrent à vous.
						</span>
						Quel que soit le pack choisi, votre site sera
						personnalisé pour épouser vos besoins et ceux de vos
						clients.
						<span className="text-foreground/70 ml-1">
							Dans le futur, il sera envisageable de développer de
							nouvelles fonctionnalités pour l’adapter aux
							évolutions de votre activité.
						</span>
					</p>
				</FadeInOnView>
			</div>
		</section>
	);
};

export default TextIntro;
