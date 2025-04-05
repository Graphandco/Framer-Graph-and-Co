"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useResponsive } from "@/hooks/UseResponsive";
import Burger from "./burger/Burger";
import { TransitionLink } from "./ui/TransitionLink";
import Link from "next/link";

const Header = () => {
	const pathname = usePathname();
	const isHome = pathname === "/";
	const [scrolled, setScrolled] = useState(false);
	const [showHeader, setShowHeader] = useState(true);
	const lastScrollY = useRef(0);
	const timeoutRef = useRef(null);
	const { isMobile } = useResponsive();

	const navLinks = [
		{ href: "/", label: "Accueil" },
		{ href: "/prestations", label: "Prestations" },
		{ href: "/projets", label: "Projets" },
		{ href: "/blog", label: "Blog" },
		{ href: "/contact", label: "Contact" },
	];

	useEffect(() => {
		const handleScroll = () => {
			const currentScroll = window.scrollY;
			const scrollingDown = currentScroll > lastScrollY.current;
			setScrolled(currentScroll > 100);

			clearTimeout(timeoutRef.current);

			if (scrollingDown && currentScroll > 100) {
				// Scroll vers le bas → cacher après délai léger
				timeoutRef.current = setTimeout(() => {
					setShowHeader(false);
				}, 500);
			} else {
				// Scroll vers le haut → réafficher après délai léger
				timeoutRef.current = setTimeout(() => {
					setShowHeader(true);
				}, 500);
			}

			lastScrollY.current = currentScroll;
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
			clearTimeout(timeoutRef.current);
		};
	}, []);

	// Styles dynamiques
	const isDark = isHome && !scrolled;
	const textColor = isDark ? "text-white" : "text-black";
	const bgStyle = scrolled
		? "bg-white/80 backdrop-blur-sm shadow-sm"
		: "bg-transparent";
	const borderStyle = !isHome ? "border-b " : "";

	return (
		<motion.header
			animate={{ y: showHeader ? 0 : -100, opacity: showHeader ? 1 : 0 }}
			transition={{ duration: 0.4, ease: "easeInOut" }}
			className={`fixed w-full left-0 top-0 z-50 py-3 ${bgStyle} ${borderStyle}`}
		>
			<div className="wrapper flex justify-between items-center">
				{/* Logo + nom */}
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
						/>
					</motion.div>
					<div
						className={`title-font font-medium transition-colors duration-300 ${textColor}`}
					>
						Graph and Co
					</div>
				</motion.div>

				{/* Navigation */}
				{!isMobile ? (
					<motion.div
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
						{navLinks.map((link, i) => (
							<motion.div
								key={i}
								variants={{
									hidden: { y: 20, opacity: 0 },
									visible: { y: 0, opacity: 1 },
								}}
								transition={{ duration: 0.5, ease: "easeOut" }}
							>
								<TransitionLink href={link.href}>
									{link.label}
								</TransitionLink>
							</motion.div>
						))}
					</motion.div>
				) : (
					<Burger />
				)}
			</div>
		</motion.header>
	);
};

export default Header;
