"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink = ({ children, href, ...props }) => {
	const router = useRouter();

	const handleTransition = async (e) => {
		e.preventDefault();

		const main = document.querySelector("main");
		main?.classList.add("page-transition");

		await sleep(250);
		router.push(href);

		// scrollTo après un léger délai pour s’assurer que la page est montée
		setTimeout(() => {
			window.scrollTo({ top: 0, behavior: "auto" });
		}, 100);

		await sleep(250);
		main?.classList.remove("page-transition");
	};

	return (
		<Link {...props} href={href} onClick={handleTransition}>
			{children}
		</Link>
	);
};
