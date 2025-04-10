import { FiMapPin } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaMobileAlt, FaFacebook, FaLinkedin } from "react-icons/fa";

const NousContacter = () => {
	return (
		<div className="grid gap-y-5">
			<div className="text-2xl font-bold text-white/70">
				Nous contacter
			</div>
			<div className="leading-tight space-y-3">
				<div className="flex gap-2 items-center">
					<FiMapPin />
					<div>
						1, rue de la Lucelle <br />
						68127 Sainte-Croix-en-Plaine
					</div>
				</div>
				<div className="flex gap-2 items-center">
					<FaMobileAlt />
					<a
						className="hover:text-primary transition-colors"
						href="tel:0661619998"
					>
						06 61 61 99 98
					</a>
				</div>
				<div className="flex gap-2 items-center">
					<FaRegEnvelope />
					<a
						className="hover:text-primary transition-colors"
						href="mailto:contact@graphandco.com"
					>
						contact@graphandco.com
					</a>
				</div>
				<div className="flex items-center gap-3 text-lg ">
					<a
						href="https://www.facebook.com/graphandcoagency/"
						target="blank"
						title="Nous suivre sur Facebook"
						className="text-primary scale-100 hover:text-white hover:scale-125 transition-all"
					>
						<FaFacebook />
					</a>
					<a
						href="https://www.linkedin.com/company/graphandco/"
						target="blank"
						title="Nous suivre sur Linkedin"
						className="text-primary scale-100 hover:text-white hover:scale-125 transition-all"
					>
						<FaLinkedin />
					</a>
				</div>
			</div>
		</div>
	);
};

export default NousContacter;
