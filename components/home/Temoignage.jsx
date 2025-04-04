import Image from "next/image";
import React from "react";

const Temoignage = () => {
	return (
		<section id="temoignage">
			<div className="wrapper mx-auto py-36">
				<div className="flex gap-24 items-stretch">
					{/* Colonne image */}
					<div className="w-80 relative flex-1">
						<div className="relative w-full h-full">
							<Image
								src="/helene.webp"
								fill
								alt="Photo d'Hélène de Bomot"
								className="object-cover"
								sizes="max(min(100vw - 48px, 1848px), 1px)"
							/>
						</div>
					</div>

					{/* Colonne texte */}
					<div className="flex flex-col justify-center flex-[2]">
						<div className="text-2xl leading-8 text-black font-semibold">
							Design soigné, navigation intuitive, architecture
							technique impeccable : Graph & Co a conçu pour moi
							un site sublime qui met en lumière mes services dans
							un style unique et original… MON style. Car ce
							professionnel chevronné fait du sur-mesure ! Avec
							lui, on avance avec méthode, en confiance et
							toujours dans la bonne humeur. En plus, il s’adapte
							à votre budget, à votre agenda et au degré
							d’accompagnement dont vous avez besoin. Bien
							s’entourer est la clé pour se doter d’un site
							internet performant, alors choisissez Graph & Co.
						</div>
						<div className="text-black/50 font-medium py-8 border-b border-black/10">
							De la conception au lancement, nous mettons en place
							des solutions digitales soignées et durables dans le
							temps.
						</div>
						<div className="pt-8 text-xl font-semibold title-font">
							Hélène Lichtenberger
						</div>
						<div className="text-black/50">
							Auteure et biographe - BOMOT
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Temoignage;
