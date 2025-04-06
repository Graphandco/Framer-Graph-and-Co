"use client";
import React from "react";
import { FiCheck, FiX } from "react-icons/fi";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

export const DarkGradientPricing = () => {
	return (
		<section
			style={{
				backgroundImage:
					"radial-gradient(100% 100% at 50% 0%, rgba(13,13,17,1), rgba(9,9,11,1))",
			}}
			className="relative overflow-hidden bg-zinc-950 text-zinc-200 selection:bg-zinc-600"
		>
			<div className="wrapper relative z-10 py-20">
				<div className="mb-12 space-y-3">
					<h2 className="text-center text-3xl font-semibold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
						Trouvez le pack qui vous correspond !
					</h2>
				</div>

				<div className="grid grid-cols-1 gap-6 xs:grid-cols-2 md:grid-cols-4">
					<PriceCard
						tier="Starter"
						price="800 €"
						bestFor="Site clé en main"
						CTA={
							<GhostButton className="w-full">
								Get started free
							</GhostButton>
						}
						benefits={[
							{
								text: "RDV personnalisé",
								checked: true,
							},
							{
								text: "Développement de votre site",
								checked: true,
							},
							{ text: "Site sécurisé", checked: true },
							{ text: "Responsive design", checked: true },
							{
								text: "Hébergement et maintenance",
								checked: false,
							},
							{ text: "Nom de domaine", checked: false },
						]}
					/>
					<PriceCard
						tier="Medium"
						price="1500 €"
						bestFor="Best for 1-5 users"
						CTA={
							<GhostButton className="w-full">
								Get started free
							</GhostButton>
						}
						benefits={[
							{ text: "Pack starter +", checked: true },
							{ text: "Modifications illimitées", checked: true },
							{ text: "Maintenance du site", checked: true },
							{
								text: "Hébergement + Nom de domaine",
								checked: true,
							},
							{ text: "Rédaction des contenus", checked: false },
							{ text: "Vente en ligne", checked: false },
						]}
					/>
					<PriceCard
						tier="E-commerce"
						price="$79/mo"
						bestFor="Best for 5-50 users"
						CTA={
							<GhostButton className="w-full bg-zinc-50 text-zinc-950 hover:bg-zinc-200 hover:text-zinc-900">
								14-day free trial
							</GhostButton>
						}
						benefits={[
							{ text: "Five workspaces", checked: true },
							{ text: "Email support", checked: true },
							{ text: "7 day data retention", checked: true },
							{ text: "Custom roles", checked: true },
							{ text: "Priority support", checked: false },
							{ text: "SSO", checked: false },
						]}
					/>
					<PriceCard
						tier="Premium"
						price="Nous contacter"
						bestFor="Best for 50+ users"
						CTA={
							<GhostButton className="w-full">
								Contact us
							</GhostButton>
						}
						benefits={[
							{ text: "Unlimited workspaces", checked: true },
							{ text: "Email support", checked: true },
							{ text: "30 day data retention", checked: true },
							{ text: "Custom roles", checked: true },
							{ text: "Priority support", checked: true },
							{ text: "SSO", checked: true },
						]}
					/>
				</div>
			</div>
		</section>
	);
};

const PriceCard = ({ tier, price, bestFor, CTA, benefits }) => {
	return (
		<Card>
			<div className="flex flex-col items-center border-b border-zinc-700 pb-6">
				<span className="mb-6 inline-block text-zinc-50">{tier}</span>
				<span className="mb-3 inline-block text-4xl font-medium ">
					{price}
				</span>
				<span className="bg-gradient-to-br from-zinc-200 to-zinc-500 bg-clip-text text-center text-transparent">
					{bestFor}
				</span>
			</div>

			<div className="space-y-4 py-9">
				{benefits.map((b, i) => (
					<Benefit {...b} key={i} />
				))}
			</div>

			{CTA}
		</Card>
	);
};

const Benefit = ({ text, checked }) => {
	return (
		<div className="flex items-center gap-3">
			{checked ? (
				<span className="grid size-5 aspect-square place-content-center rounded-full bg-primary text-sm text-black font-semibold">
					<FiCheck />
				</span>
			) : (
				<span className="grid size-5 aspect-square place-content-center rounded-full bg-zinc-800 text-sm text-zinc-400">
					<FiX />
				</span>
			)}
			<span className="text-sm text-zinc-300">{text}</span>
		</div>
	);
};

const Card = ({ className, children, style = {} }) => {
	return (
		<motion.div
			initial={{
				filter: "blur(2px)",
			}}
			whileInView={{
				filter: "blur(0px)",
			}}
			transition={{
				duration: 0.5,
				ease: "easeInOut",
				delay: 0.25,
			}}
			style={style}
			className={twMerge(
				"relative h-full w-full overflow-hidden rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-950/50 to-zinc-900/80 p-6",
				className
			)}
		>
			{children}
		</motion.div>
	);
};

const GhostButton = ({ children, className, ...rest }) => {
	return (
		<button
			className={twMerge(
				"rounded-md px-4 py-2 text-lg text-zinc-100 transition-all hover:scale-[1.02] hover:bg-zinc-800 hover:text-zinc-50 active:scale-[0.98]",
				className
			)}
			{...rest}
		>
			{children}
		</button>
	);
};
