import React from "react";
import NavLink from "../header/NavLink";

const FooterLinks = () => {
	return (
		<div>
			<nav className="flex gap-2">
				<NavLink
					name="Politique de confidentialité"
					href="/politique-confidentialite"
				/>
				<NavLink name="Mentions légales" href="/mentions-legales" />
			</nav>
		</div>
	);
};

export default FooterLinks;
