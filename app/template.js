"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import ScrollToTopOnRouteChange from "@/components/ScrollToTopOnRouteChange";

const ReactLenis = dynamic(
	() => import("@studio-freight/react-lenis").then((mod) => mod.default),
	{ ssr: false },
);

const LENIS_OPTIONS = {
	lerp: 0.1,
	duration: 1.2,
	smoothTouch: false,
	touchMultiplier: 1.5,
};

const MOBILE_MEDIA = "(max-width: 767px)";

export default function Template({ children }) {
	const [isMobile, setIsMobile] = useState(true);

	useEffect(() => {
		const mq = window.matchMedia(MOBILE_MEDIA);
		const update = () => setIsMobile(mq.matches);
		update();
		mq.addEventListener("change", update);
		return () => mq.removeEventListener("change", update);
	}, []);

	if (isMobile) {
		return (
			<>
				<ScrollToTopOnRouteChange />
				{children}
			</>
		);
	}

	return (
		<ReactLenis root options={LENIS_OPTIONS}>
			<ScrollToTopOnRouteChange />
			{children}
		</ReactLenis>
	);
}
