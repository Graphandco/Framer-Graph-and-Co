"use client";
import { TabsFAQ } from "@/components/TabsFAQ";
import PageHero from "@/components/ui/PageHero";

const ContactPage = () => {
	return (
		<>
			<PageHero title="Contact" image="/contact/hero-contact.avif" />
			<div className="wrapper mt-24">
				<h1>Restons en contact !</h1>
				<TabsFAQ />
			</div>
		</>
	);
};

export default ContactPage;
