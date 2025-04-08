import Image from "next/image";

const ContactText = () => {
	return (
		<div className="">
			<Image
				src="/contact/regis-avatar.avif"
				width={100}
				height={100}
				alt="Avatar Régis"
				className="aspect-square rounded-full object-cover float-left mr-6 mb-1 outline-2 outline-primary outline-offset-3"
				style={{ shapeOutside: "circle(50%)" }}
			/>
			<p className="text-justify xs:leading-relaxed">
				Vous souhaitez avoir un site web créé à votre image, qui vous
				ressemble et qui corresponde à vos valeurs ? Nous sommes là pour
				vous conseiller et vous guider en fonction de vos besoins et de
				votre budget. Chaque projet est différent et ne peut grandir
				qu'en avançant ensemble. Nous serons ravis de définir ensemble
				LE site taillé pour vous. N'hésitez pas à nous contacter pour
				toute demande d'information! Nous nous ferons un plaisir de
				revenir vers vous rapidement.
			</p>
		</div>
	);
};

export default ContactText;
