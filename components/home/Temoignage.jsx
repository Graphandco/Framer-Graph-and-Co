"use client";

import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import FadeInOnView from "@/components/ui/FadeInOnView"; // adapte le chemin si besoin
import Button from "@/components/ui/Button";
import Parallax from "@/components/ui/Parallax"; // adapte ce chemin selon ton projet
import { useRef } from "react";
import DistortedSlider from "@/components/DistortedSlider";

const Temoignage = () => {
	const containerRef = useRef(null);
	return (
		<section id="temoignage" ref={containerRef} className="relative">
			<div className="wrapper py-8 sm:py-16 md:py-24 ">
				<h2 className="title-text text-2xl sm:text-3xl md:sm:text-4xl font-semibold mb-10">
					La parole à...
				</h2>
				<div className="grid sm:grid-cols-[2fr_3fr] sm:flex-row gap-12 md:gap-24 items-stretch">
					{/* Bloc image */}
					<div className="w-full sm:w-80 flex justify-center sm:block mt-0 sm:mt-10">
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

					{/* Bloc texte */}
					<div className="flex flex-col justify-center w-full">
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

						<FadeInOnView delay={0.4}>
							<Button
								href="https://www.google.com/search?sca_esv=fccbee740c3569c2&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2Kzf6MYr6Dix-GSAblYyCQFImquqsxXSKWGuueYlXJcu_nOOnojgY0gkfQj8pUzftYs-5kRIK_tZ3RLuHvXrzbEaUCLgoS&q=Graph+and+Co+Reviews&sa=X&ved=2ahUKEwjJ2-eT4cWMAxVYKvsDHXmJOyYQ0bkNegQIORAE&biw=1450&bih=867&dpr=2"
								blank
								className="mt-8"
							>
								Voir plus d'avis
							</Button>
						</FadeInOnView>
					</div>
				</div>
			</div>
			{/* <DistortedSlider
				images={[
					"/mentions-legales.avif",
					"/contact/hero-contact2.avif",
					"/contact/hero-contact3.avif",
					"/contact/hero-contact4.avif",
					"/blog/blog-hero.avif",
					"/blog/blog-hero1.avif",
					"/blog/blog-hero3.avif",
					"/blog/blog-hero4.avif",
					"/blog/nextjs-15.avif",
					"/home/bg-hero.avif",
				]}
			/> */}
		</section>
	);
};

export default Temoignage;
