"use client";

import { useWindowSize } from "usehooks-ts";

export function useResponsive() {
	const { width } = useWindowSize();

	const isTablet = width <= 1024;
	const isMobile = width <= 767;

	return { width, isTablet, isMobile };
}
