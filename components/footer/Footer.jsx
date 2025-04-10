import FooterLinks from "./FooterLinks";
import ChangingText from "../ui/ChangingText";
import NousContacter from "./NousContacter";

const Footer = () => {
	return (
		<footer className="sticky bottom-0 bg-black text-white">
			<div className="wrapper pb-6 pt-8 sm:pt-16">
				<div className="flex flex-col-reverse items-center xs:items-start xs:text-left xs:grid grid-cols-2 gap-x-6 gap-y-2 mb-10 xs:mb-7">
					<NousContacter />
					<ChangingText />
				</div>
				<FooterLinks />
			</div>
		</footer>
	);
};

export default Footer;
