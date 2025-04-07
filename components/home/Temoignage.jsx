"use client";

import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import FadeInOnView from "../ui/FadeInOnView"; // adapte le chemin si besoin
import Button from "../ui/Button";

const Temoignage = () => {
	return (
		<section id="temoignage">
			<div className="wrapper mx-auto py-32">
				<div className="flex flex-col sm:flex-row gap-12 md:gap-24 items-stretch">
					{/* Bloc texte */}
					<div className="flex flex-col justify-center flex-[2] order-1 sm:order-2">
						<FadeInOnView>
							<div className="text-lg font-medium">
								<span className="inline-block text-primary text-5xl pr-5">
									<FaQuoteLeft />
								</span>
								Design soigné, navigation intuitive,
								architecture technique impeccable : Graph & Co a
								conçu pour moi un site sublime qui met en
								lumière mes services dans un style unique et
								original… MON style. Car ce professionnel
								chevronné fait du sur-mesure ! Avec lui, on
								avance avec méthode, en confiance et toujours
								dans la bonne humeur. En plus, il s’adapte à
								votre budget, à votre agenda et au degré
								d’accompagnement dont vous avez besoin. Bien
								s’entourer est la clé pour se doter d’un site
								internet performant, alors choisissez Graph &
								Co.
							</div>
						</FadeInOnView>

						<FadeInOnView delay={0.1}>
							<div className="text-black/50 font-medium py-8 border-b border-black/10">
								De la conception au lancement, nous mettons en
								place des solutions digitales soignées et
								durables dans le temps.
							</div>
						</FadeInOnView>

						<FadeInOnView delay={0.2}>
							<div className="pt-8 text-xl font-semibold title-font">
								Hélène Lichtenberger
							</div>
						</FadeInOnView>

						<FadeInOnView delay={0.3}>
							<div className="text-black/50">
								Auteure et biographe - BOMOT
							</div>
						</FadeInOnView>
						<FadeInOnView>
							<Button
								href="https://www.google.com/search?sca_esv=fccbee740c3569c2&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2Kzf6MYr6Dix-GSAblYyCQFImquqsxXSKWGuueYlXJcu_nOOnojgY0gkfQj8pUzftYs-5kRIK_tZ3RLuHvXrzbEaUCLgoS&q=Graph+and+Co+Reviews&sa=X&ved=2ahUKEwjJ2-eT4cWMAxVYKvsDHXmJOyYQ0bkNegQIORAE&biw=1450&bih=867&dpr=2"
								blank
								className="mt-8"
							>
								Voir plus d'avis
							</Button>
						</FadeInOnView>
					</div>

					{/* Bloc image */}
					<div className="order-2 sm:order-1 w-full sm:w-80 flex justify-center sm:block">
						<FadeInOnView>
							<div className="relative w-full h-full max-w-[400px]">
								<Image
									src="/home/helene.webp"
									alt="Photo d'Hélène de Bomot"
									width={400}
									height={600}
									className="w-full h-full object-cover outline outline-offset-5 outline-black/50"
									sizes="(max-width: 640px) 100vw, 320px"
								/>
							</div>
						</FadeInOnView>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Temoignage;
