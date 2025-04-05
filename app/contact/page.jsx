"use client";
import ContactHero from "@/components/contact/ContactHero";
import { TabsFAQ } from "@/components/TabsFAQ";

const ContactPage = () => {
	return (
		<>
			<ContactHero />
			<div className="wrapper mt-24">
				<h1>Restons en contact !</h1>
				<TabsFAQ />
			</div>
		</>
	);
};

export default ContactPage;
