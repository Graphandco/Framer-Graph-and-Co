"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useResponsive } from "@/hooks/UseResponsive";
import Burger from "./burger/Burger";
import Nav from "./Nav";

const Header = () => {
	const pathname = usePathname();
	const isHome = pathname === "/";
	const [scrolled, setScrolled] = useState(false);
	const [scrollDirection, setScrollDirection] = useState("up");
	const lastScrollY = useRef(0);
	const { isTablet, isMobile } = useResponsive();

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

	return (
		<motion.header
			className={`fixed w-full left-0 top-0 z-50 py-3 transition-all duration-300 transform ${bgStyle} ${visibility}`}
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
						<Nav />
					</motion.div>
				) : (
					<Burger />
				)}
			</div>
		</motion.header>
	);
};

export default Header;
