import Image from "next/image";

const Footer = () => {
	return (
		<footer className="sticky bottom-0 bg-black text-white">
			<div className="wrapper py-24">
				<Image
					src="/logo.svg"
					width={60}
					height={60}
					alt="Logo Graph and Co"
				/>
				<div className="text-3xl">Graph & Co</div>
			</div>
		</footer>
	);
};

export default Footer;
