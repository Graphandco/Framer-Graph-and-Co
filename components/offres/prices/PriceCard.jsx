"use client";
import { FiCheck, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import CustomButton from "@/components/ui/CustomButton";

const PriceCard = ({ pack }) => {
	const { title, description, price, details, premium, bestSeller } = pack;

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
			viewport={{ amount: 0.4, once: false }} // 👈 visible à 40% du composant
			className={`bg-[#121212] p-8 rounded-2xl flex flex-col ${bestSeller && "border border-primary/50"}`}
		>
			{/* Header */}
			<div className="flex flex-col justify-between text-center">
				<div className="text-primary font-semibold title-font mb-4">
					{title}
				</div>
				<div className="cart-price pb-8 border-b border-white/40">
					<div className="min-h-14 flex flex-col justify-between">
						{premium ? (
							<div className="min-h-20 flex flex-col justify-center">
								<div className="text-white">Nous contacter</div>
							</div>
						) : (
							<div className="min-h-20 flex flex-col justify-between">
								<div className="text-white/40">à partir de</div>
								<div className="text-white text-4xl font-medium">
									{price} €
								</div>
							</div>
						)}
					</div>
					<div className="mt-5 text-white/70">{description}</div>
				</div>
			</div>

			{/* Détails */}
			<div className="flex flex-col grow gap-4 py-8">
				{details.map((detail, index) => (
					<div key={index} className="flex items-center gap-4">
						{detail.checked ? (
							<span className="grid size-5 aspect-square place-content-center rounded-full bg-primary text-sm text-black font-semibold">
								<FiCheck />
							</span>
						) : (
							<span className="grid size-5 aspect-square place-content-center rounded-full bg-white/20 text-sm text-white">
								<FiX />
							</span>
						)}
						<span
							className={`text-sm ${detail.checked ? "text-white" : "text-white/50"}`}
						>
							{detail.name}
						</span>
					</div>
				))}
			</div>

			<CustomButton
				small
				white
				icon={null}
				href="/contact"
				className="w-full"
			>
				Choisir
			</CustomButton>
		</motion.div>
	);
};

export default PriceCard;
