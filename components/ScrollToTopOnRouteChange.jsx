"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "@studio-freight/react-lenis";

/** Remonte en haut à chaque changement de route (Lenis ou scroll natif). */
export default function ScrollToTopOnRouteChange() {
	const pathname = usePathname();
	const lenis = useLenis();

	useEffect(() => {
		const goTop = () => {
			if (lenis) {
				lenis.scrollTo(0, { immediate: true, force: true });
			} else {
				window.scrollTo(0, 0);
			}
		};

		goTop();
		const id = requestAnimationFrame(goTop);
		return () => cancelAnimationFrame(id);
	}, [pathname, lenis]);

	return null;
}
