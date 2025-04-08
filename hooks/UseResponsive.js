"use client";
import { useState, useEffect } from "react";

export function useResponsive() {
	const [isMobile, setIsMobile] = useState(false);
	const [isTablet, setIsTablet] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;
			setIsMobile(width < 768);
			setIsTablet(width >= 768 && width < 1024);
		};

		handleResize(); // Check initial
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return { isMobile, isTablet };
}
