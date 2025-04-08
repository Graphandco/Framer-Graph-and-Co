"use client";
import Image from "next/image";
import FooterLinks from "./FooterLinks";
import ChangingText from "../ui/ChangingText";

const Footer = () => {
	return (
		<footer className="sticky bottom-0 bg-black text-white">
			<div className="wrapper py-8 sm:py-16">
				<ChangingText />
				<Image
					src="/logo.svg"
					width={60}
					height={60}
					alt="Logo Graph and Co"
				/>
				<div className="text-3xl">Graph & Co</div>
				<FooterLinks />
			</div>
		</footer>
	);
};

export default Footer;
