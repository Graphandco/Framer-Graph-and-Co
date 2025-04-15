// app/analytics.tsx
"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function Analytics() {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		const handleRouteChange = () => {
			if (typeof window.gtag !== "undefined") {
				window.gtag("config", "G-345118589", {
					page_path: pathname + searchParams.toString(),
				});
			}
		};

		handleRouteChange();
	}, [pathname, searchParams]);

	return null;
}
