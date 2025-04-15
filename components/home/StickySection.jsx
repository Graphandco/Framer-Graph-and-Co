"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionLegend from "../SectionLegend";
import CustomButton from "../ui/CustomButton";
import PresentationText from "@/markdown/home/presentation.mdx";
import ParallaxImage from "../ui/ParallaxImage";
import Image from "next/image";

export const StickySection = () => {
	// const ref = useRef(null);
	// const { scrollYProgress } = useScroll({
	// 	target: ref,
	// 	offset: ["start start", "end start"],
	// });

	// Effet parallax léger sur la première section
	// const y = useTransform(scrollYProgress, [0, 1], [0, -10]);

	return (
		<section className="relative">
			{/* Section sticky */}
			<div
				// style={{ y }}
				className="sticky top-0 h-screen flex items-center justify-center bg-black text-white z-10"
				id="notre-expertise"
			>
				<div className="wrapper flex flex-col gap-6 items-center text-center">
					<SectionLegend text="Notre expertise" />
					<h2 className="big-text font-bold">
						Créons un site web performant et élégant.
					</h2>
					<p className="max-w-xl">
						Chaque projet est pensé pour s’adapter à vos besoins,
						votre image, et vos ambitions.
					</p>
					<CustomButton icon={null} white href="/offres">
						Voir nos offres
					</CustomButton>
				</div>
			</div>
			{/* Section normale */}
			{/* <section className="banner flex justify-center items-center relative min-h-screen overflow-hidden z-10 py-8">
				<div className="absolute inset-0 w-full h-full overflow-hidden will-change-transform bg-black">
					<ParallaxImage
						src="/home/exposure.avif"
						alt="Machine à écrire"
					/>
				</div>

				<div className="relative">
					<div className="wrapper flex flex-col gap-6 justify-center items-center markdown">
						<PresentationText />
						<CustomButton icon={null} href="/contact">
							Nous contacter
						</CustomButton>
					</div>
				</div>
			</section> */}

			<div className="pt-16 sm:pt-32 pb-12 relative z-20 bg-white">
				<div className="wrapper grid gap-10 bg-white border-l border-r border-neutral-200">
					<h2 className="text-4xl">
						<span>Qu’est-ce qu’un bon site web ?</span>
						<br />
						<span className="text-neutral-500">
							Et surtout, pourquoi faire appel à un pro ?
						</span>
					</h2>
					<div className="grid sm:grid-cols-[2fr_3fr] gap-4 sm:gap-14  justify-center items-center">
						<div>
							<Image
								src="/contact/regis-avatar.avif"
								alt="Grph and Co Régis avatar"
								width={400}
								height={600}
								className="rounded-xl"
								priority
							/>
							<div className="text-lg title-font mt-5 font-bold">
								Régis
							</div>
							<div className="italic font-medium text-neutral-500">
								Créateur de Graph and Co
							</div>
						</div>
						<div className="markdown">
							<PresentationText />
							<CustomButton
								icon={null}
								href="/contact"
								className="mt-8"
							>
								Nous contacter
							</CustomButton>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
