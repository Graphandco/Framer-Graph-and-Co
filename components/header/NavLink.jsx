"use client";
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const NavLink = ({
	name,
	href,
	className,
	setIsOpen = false,
	isHeaderLink = false,
	children,
}) => {
	const router = useTransitionRouter();
	const pathname = usePathname();
	const [isHovered, setIsHovered] = useState(false);

	function slideInOut() {
		document.documentElement.animate(
			[
				{ opacity: 1, transform: "translateY(0)" },
				{ opacity: 0.2, transform: "translateY(-35%)" },
			],
			{
				duration: 750,
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
				easing: "cubic-bezier(0.76, 0, 0.24, 1)",
				fill: "forwards",
				pseudoElement: "::view-transition-new(root)",
			}
		);
	}

	const showDot =
		isHeaderLink &&
		(pathname === href || // lien exact
			pathname.startsWith(href + "/") || // sous-routes
			isHovered); // au survol
	return (
		<a
			onClick={(e) => {
				e.preventDefault();
				if (typeof setIsOpen === "function") {
					setIsOpen(false);
				}
				router.push(href, {
					onTransitionReady: slideInOut,
				});
			}}
			href={href}
			className={`relative ${className}`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<AnimatePresence>
				{showDot && (
					<motion.span
						className="absolute bottom-1.5 -left-3 w-2 aspect-square bg-primary rounded-full"
						initial={{ y: -20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{
							opacity: 0,
							transition: {
								duration: 0.3,
								ease: "linear", // ou "easeInOut", "easeIn", etc.
							},
						}}
						transition={{
							type: "spring",
							stiffness: 500,
							damping: 15,
						}}
					/>
				)}
			</AnimatePresence>
			{name || children}
		</a>
	);
};

export default NavLink;
