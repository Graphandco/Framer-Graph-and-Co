"use client";

import { motion } from "framer-motion";
import {
	SiNike,
	Si3M,
	SiAbstract,
	SiAdobe,
	SiAirtable,
	SiAmazon,
	SiBox,
	SiBytedance,
	SiChase,
	SiCloudbees,
	SiBurton,
	SiBmw,
	SiHeroku,
	SiBuildkite,
	SiCouchbase,
	SiDailymotion,
	SiWoocommerce,
	SiEpicgames,
	SiGenius,
	SiGodaddy,
	SiPrestashop,
	SiStrapi,
	SiAdobephotoshop,
	SiAdobexd,
	SiAdobeillustrator,
} from "react-icons/si";
import {
	FaRegCalendarAlt,
	FaHtml5,
	FaCss3,
	FaWordpress,
	FaMobileAlt,
} from "react-icons/fa";
import { FaLanguage, FaElementor, FaReact } from "react-icons/fa6";
import { MdFastfood } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io5";
import { RiPhpLine, RiNextjsFill } from "react-icons/ri";

export default function Outils() {
	return (
		<section className="overflow-hidden py-24">
			<div className="relative -mt-2 -rotate-1 scale-[1.01] border-y-2 border-zinc-900 ">
				<div className="relative z-0 flex overflow-hidden border-b-2 border-zinc-900">
					<TranslateWrapper>
						<LogoItemsTop />
					</TranslateWrapper>
					<TranslateWrapper>
						<LogoItemsTop />
					</TranslateWrapper>
					<TranslateWrapper>
						<LogoItemsTop />
					</TranslateWrapper>
				</div>
				<div className="relative z-0 flex overflow-hidden">
					<TranslateWrapper reverse>
						<LogoItemsBottom />
					</TranslateWrapper>
					<TranslateWrapper reverse>
						<LogoItemsBottom />
					</TranslateWrapper>
					<TranslateWrapper reverse>
						<LogoItemsBottom />
					</TranslateWrapper>
				</div>

				{/* <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-32 bg-gradient-to-r from-white to-white/0" />
				<div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-32 bg-gradient-to-l from-white to-white/0" /> */}
			</div>
		</section>
	);
}

const TranslateWrapper = ({ children, reverse }) => {
	return (
		<motion.div
			initial={{ translateX: reverse ? "-100%" : "0%" }}
			animate={{ translateX: reverse ? "0%" : "-100%" }}
			transition={{
				duration: reverse ? 30 : 30,
				repeat: Infinity,
				ease: "linear",
			}}
			className="flex px-2"
		>
			{children}
		</motion.div>
	);
};

const LogoItem = ({ Icon, name }) => {
	return (
		<span className="flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 sm:py-4">
			<Icon className="text-primary text-lg sm:text-xl md:text-2xl" />
			<span className="whitespace-nowrap sm:text-lg font-semibold uppercase mix-blend-exclusion">
				{name}
			</span>
		</span>
	);
};

const LogoItemsTop = () => (
	<>
		<LogoItem Icon={FaRegCalendarAlt} name="Prise de RDV en ligne" />
		<LogoItem Icon={FaLanguage} name="Sites multilangues" />
		<LogoItem Icon={MdFastfood} name="Click and collect" />
		<LogoItem Icon={FaMobileAlt} name="Applications mobiles" />
	</>
);

const LogoItemsBottom = () => (
	<>
		<LogoItem Icon={FaHtml5} name="HTML" />
		<LogoItem Icon={FaCss3} name="CSS" />
		<LogoItem Icon={IoLogoJavascript} name="Javascript" />
		<LogoItem Icon={RiPhpLine} name="PHP" />
		<LogoItem Icon={FaWordpress} name="Wordpress" />
		<LogoItem Icon={SiWoocommerce} name="WooCommerce" />
		<LogoItem Icon={FaElementor} name="Elementor" />
		<LogoItem Icon={SiPrestashop} name="Prestashop" />
		<LogoItem Icon={FaReact} name="React" />
		<LogoItem Icon={RiNextjsFill} name="NextJS" />
		<LogoItem Icon={SiStrapi} name="Strapi" />
		<LogoItem Icon={SiAdobephotoshop} name="Photoshop" />
		<LogoItem Icon={SiAdobeillustrator} name="Illustrator" />
		<LogoItem Icon={SiAdobexd} name="Adobe XD" />
	</>
);
