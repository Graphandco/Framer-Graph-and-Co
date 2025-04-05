"use client";
import { useTransitionRouter } from "next-view-transitions";

const Nav = () => {
	const navLinks = [
		{ href: "/", label: "Accueil" },
		{ href: "/prestations", label: "Prestations" },
		{ href: "/projets", label: "Projets" },
		{ href: "/blog", label: "Blog" },
		{ href: "/contact", label: "Contact" },
	];

	const router = useTransitionRouter();

	function slideInOut() {
		document.documentElement.animate(
			[
				{
					opacity: 1,
					transform: "translateY(0)",
				},
				{
					opacity: 0.2,
					transform: "translateY(-35%)",
				},
			],
			{
				duration: 1000,
				easing: "cubic-bezier(0.87, 0, 0.13, 1)",
				fill: "forwards",
				pseudoElement: "::view-transition-old(root)",
			}
		);

		document.documentElement.animate(
			[
				{
					clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
				},
				{
					clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
				},
			],
			{
				duration: 1000,
				easing: "cubic-bezier(0.87, 0, 0.13, 1)",
				fill: "forwards",
				pseudoElement: "::view-transition-new(root)",
			}
		);
	}

	return (
		<>
			<>
				{navLinks.map((link, i) => (
					<a
						key={i}
						onClick={(e) => {
							e.preventDefault();
							router.push(link.href, {
								onTransitionReady: slideInOut,
							});
						}}
						href={link.href}
					>
						{link.label}
					</a>
				))}
			</>
		</>
	);
};

export default Nav;
