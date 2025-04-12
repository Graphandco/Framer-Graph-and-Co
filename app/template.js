"use client";
import ReactLenis from "@studio-freight/react-lenis";

export default function Template({ children }) {
	return (
		<ReactLenis
			root
			options={{
				lerp: 0.05,
				duration: 1.2,
				smoothTouch: true,
				touchMultiplier: 1.5,
			}}
		>
			{children}
		</ReactLenis>
	);
}
