import Image from "next/image";
import React from "react";

const Temoignage = () => {
	return (
		<section id="temoignage">
			<div className="wrapper mx-auto py-16 sm:py-24  md:py-36">
				<div className="flex flex-col sm:flex-row gap-12 md:gap-24 items-stretch">
					{/* Texte : ordre normal en mobile, premier en sm+ */}
					<div className="flex flex-col justify-center flex-[2] order-1 sm:order-2">
						<div className="text-xl md:text-2xl leading-7 md:leading-8 text-black font-medium">
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

					{/* Image : centrée en mobile, colonne à gauche en sm+ */}
					<div className="order-2 sm:order-1 w-full sm:w-80 flex justify-center sm:block">
						<div className="relative w-full max-w-[400px] h-[400px] sm:h-full">
							<Image
								src="/helene.webp"
								fill
								alt="Photo d'Hélène de Bomot"
								className="object-cover"
								sizes="(max-width: 640px) 100vw, 320px"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Temoignage;
