import Image from "next/image";
import ContactPresentation from "@/markdown/contact.mdx";

const ContactText = () => {
	return (
		<div>
			<Image
				src="/contact/regis-avatar.avif"
				width={100}
				height={100}
				alt="Avatar Régis"
				className="aspect-square rounded-full object-cover float-left mr-6 mb-1 outline-2 outline-primary outline-offset-3"
				style={{ shapeOutside: "circle(50%)" }}
			/>
			<ContactPresentation className="text-justify xs:leading-relaxed" />
		</div>
	);
};

export default ContactText;
