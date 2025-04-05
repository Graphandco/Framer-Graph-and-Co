"use client";
import ReactLenis from "@studio-freight/react-lenis";
import { TabsFAQ } from "@/components/TabsFAQ";

const ContactPage = () => {
	return (
		<ReactLenis root>
			<div className="wrapper mt-24">
				<h1>Restons en contact !</h1>
				<TabsFAQ />
			</div>
		</ReactLenis>
	);
};

export default ContactPage;
