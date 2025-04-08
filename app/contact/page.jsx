"use client";
import ContactForm from "@/components/contact/ContactForm";
import { TabsFAQ } from "@/components/TabsFAQ";
import BlockTextAppear from "@/components/ui/BlockTextAppear";
import PageHero from "@/components/ui/PageHero";

const ContactPage = () => {
	return (
		<>
			<PageHero title="Contact" image="/contact/hero-contact.avif" />
			<div className="wrapper mt-24">
				<ContactForm />
				<BlockTextAppear>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Iusto omnis, reprehenderit iste accusantium enim impedit
					mollitia dolor facere recusandae nobis id natus voluptatem
					aspernatur fugiat velit architecto! Sit vel iusto,
					necessitatibus blanditiis repellendus voluptas mollitia,
					quis quos unde explicabo eveniet praesentium quo consequatur
					autem perspiciatis esse laborum. Debitis consequatur ex
					fugiat dolore est adipisci quasi consectetur repellendus
					quia, incidunt quos praesentium accusantium. Sed qui atque a
					aliquid, fugit explicabo ducimus recusandae cumque deleniti
					perferendis reprehenderit assumenda itaque eveniet expedita
					modi cum maiores, vel magni veniam, adipisci perspiciatis
					iure? Sapiente omnis veniam saepe aut atque vel rerum,
					explicabo impedit corporis error aliquid commodi asperiores
					dolorum cupiditate deserunt nam quisquam quo ex at dolores,
					iste corrupti quam officia! Ullam doloremque, fugiat et
					eveniet voluptates perspiciatis laborum mollitia magni
					obcaecati, necessitatibus dolorum, ratione ut excepturi.
					Architecto vitae placeat nobis sint numquam odio eveniet
					eaque possimus neque est? Soluta commodi aspernatur eligendi
					doloribus exercitationem, eos maiores voluptatem magnam
					debitis in possimus harum nisi, id qui iste numquam aliquam
					mollitia ducimus! Harum eveniet voluptatum voluptatem quasi
					atque dignissimos consequatur, cupiditate adipisci!
					Distinctio, totam explicabo doloribus asperiores voluptate
					ad cumque! Nam error cum dolore neque ipsam in
					necessitatibus vitae praesentium consequatur fugiat odit,
					nesciunt temporibus facilis.
				</BlockTextAppear>
				<h1>Restons en contact !</h1>
				<TabsFAQ />
			</div>
		</>
	);
};

export default ContactPage;
