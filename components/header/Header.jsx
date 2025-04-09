"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useResponsive } from "@/hooks/UseResponsive";
import NavBar from "./NavBar";
import Burger from "./burger/Burger";
import NavLink from "./NavLink";

const Header = () => {
	const pathname = usePathname();
	const isHome = pathname === "/";
	const [scrolled, setScrolled] = useState(false);
	const [scrollDirection, setScrollDirection] = useState("up");
	const lastScrollY = useRef(0);
	const { isMobile } = useResponsive();

	useEffect(() => {
		const handleScroll = () => {
			const currentScroll = window.scrollY;
			setScrolled(currentScroll > 100);

			if (currentScroll > lastScrollY.current && currentScroll > 100) {
				setScrollDirection("down");
			} else if (currentScroll < lastScrollY.current) {
				setScrollDirection("up");
			}
			lastScrollY.current = currentScroll;
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Styles dynamiques
	const isDark = isHome && !scrolled;
	const textColor = !scrolled ? "text-white" : "text-black";
	const bgStyle = scrolled
		? "bg-white/80 backdrop-blur-sm shadow-sm"
		: "bg-transparent";
	// const borderStyle = !isHome ? "border-b border-black/10" : "";
	const visibility =
		scrollDirection === "down" ? "-translate-y-full" : "translate-y-0";

	const navLinks = [
		{ href: "/", name: "Accueil" },
		{ href: "/offres", name: "Offres" },
		{ href: "/projets", name: "Projets" },
		{ href: "/blog", name: "Blog" },
		{ href: "/contact", name: "Contact" },
	];

	return (
		<motion.header
			className={`fixed w-full left-0 top-0 z-50 py-2 sm:py-3 transition-all duration-300 transform ${bgStyle} ${visibility}`}
		>
			<section className="wrapper flex justify-between items-center">
				{/* Logo + nom */}
				<NavLink href="/">
					<motion.div
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.6, ease: "easeOut" }}
						className="flex gap-1 items-center"
					>
						<motion.div
							animate={{ scale: scrolled ? 0.75 : 1 }}
							transition={{ duration: 0.3 }}
							className="origin-center"
						>
							<Image
								src="/logo.svg"
								width={40}
								height={40}
								alt="Logo Graph and Co"
								priority
							/>
						</motion.div>
						<div
							className={`title-font font-medium transition-colors duration-300 ${textColor}`}
						>
							Graph and Co
						</div>
					</motion.div>
				</NavLink>
				{/* Navigation */}
				{!isMobile ? (
					<motion.nav
						initial="hidden"
						animate="visible"
						variants={{
							visible: {
								transition: {
									staggerChildren: 0.1,
									delayChildren: 0.3,
								},
							},
						}}
						className={`flex items-center gap-4 title-font text-lg transition-colors duration-300 ${textColor}`}
					>
						<NavBar navLinks={navLinks} />
					</motion.nav>
				) : (
					<Burger navLinks={navLinks} />
				)}
			</section>
		</motion.header>
	);
};

export default Header;
