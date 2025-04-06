"use client";
import { useTransitionRouter } from "next-view-transitions";

const NavLink = ({ name, href, className, setIsOpen = false }) => {
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
				duration: 750,
				// easing: "cubic-bezier(0.87, 0, 0.13, 1)",
				easing: "cubic-bezier(0.76, 0, 0.24, 1)",
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
				duration: 750,
				// easing: "cubic-bezier(0.87, 0, 0.13, 1)",
				easing: "cubic-bezier(0.76, 0, 0.24, 1)",
				fill: "forwards",
				pseudoElement: "::view-transition-new(root)",
			}
		);
	}

	return (
		<a
			onClick={(e) => {
				e.preventDefault();
				() => setIsOpen(false);
				router.push(href, {
					onTransitionReady: slideInOut,
				});
			}}
			href={href}
			className={className}
		>
			{name}
		</a>
	);
};

export default NavLink;
