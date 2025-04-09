"use client";
import Image from "next/image";
import FooterLinks from "./FooterLinks";
import ChangingText from "../ui/ChangingText";
import { FiMapPin } from "react-icons/fi";
import { FaMobileAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";

const Footer = () => {
	return (
		<footer className="sticky bottom-0 bg-black text-white">
			<div className="wrapper pb-6 pt-8 sm:pt-16">
				<div className="flex flex-col-reverse items-center xs:items-start xs:text-left xs:grid grid-cols-2 gap-x-6 gap-y-2 mb-10 xs:mb-7">
					<div className="grid gap-y-5">
						<div className="text-2xl font-bold text-white/70">
							Nous contacter
						</div>
						<div className="leading-tight space-y-3">
							<div className="flex gap-2 items-center">
								<FiMapPin />
								<div>
									1, rue de la Lucelle <br />
									68127 Sainte-Croix-en-Plaine
								</div>
							</div>
							<div className="flex gap-2 items-center">
								<FaMobileAlt />
								<a
									className="hover:text-primary transition-colors"
									href="tel:0661619998"
								>
									06 61 61 99 98
								</a>
							</div>
							<div className="flex gap-2 items-center">
								<FaRegEnvelope />
								<a
									className="hover:text-primary transition-colors"
									href="mailto:contact@graphandco.com"
								>
									contact@graphandco.com
								</a>
							</div>
						</div>
					</div>
					<ChangingText />
				</div>
				<FooterLinks />
			</div>
		</footer>
	);
};

export default Footer;
