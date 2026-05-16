"use client";
import ReactLenis from "@studio-freight/react-lenis";
import ScrollToTopOnRouteChange from "@/components/ScrollToTopOnRouteChange";

export default function Template({ children }) {
	return (
		<ReactLenis
			root
			options={{
				lerp: 0.1,
				duration: 1.2,
				smoothTouch: true,
				touchMultiplier: 1.5,
			}}
		>
			<ScrollToTopOnRouteChange />
			{children}
		</ReactLenis>
	);
}
