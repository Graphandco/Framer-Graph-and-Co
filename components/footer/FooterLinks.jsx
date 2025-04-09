import React from "react";
import NavLink from "../header/NavLink";
import Image from "next/image";

const FooterLinks = () => {
	return (
		<div>
			<nav className="flex gap-x-3 gap-y-2 flex-wrap items-center justify-center xs:justify-end text-sm">
				<NavLink
					name="Mentions légales"
					href="/mentions-legales"
					className="hover:text-primary transition-colors"
				/>
				<NavLink
					name="Politique de confidentialité"
					href="/politique-confidentialite"
					className="hover:text-primary transition-colors"
				/>
				<div className="flex gap-2 items-center">
					<Image
						src="/logo.svg"
						width={20}
						height={20}
						alt="Logo Graph and Co"
					/>
					<span>{new Date().getFullYear()} ©Graph and Co</span>
				</div>
			</nav>
		</div>
	);
};

export default FooterLinks;
