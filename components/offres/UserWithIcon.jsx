"use client";
import FadeInOnView from "../ui/FadeInOnView";
import { GiStrong } from "react-icons/gi";
import { BsRocketTakeoffFill } from "react-icons/bs";

const UserWithIcon = () => {
	return (
		<div className="bg-black text-white">
			<div className="wrapper flex flex-col xs:flex-row gap-10 items-start py-12">
				<FadeInOnView delay={0.25} once={true}>
					<div className="flex flex-col sm:flex-row items-center gap-3 text-white">
						<GiStrong className="text-6xl" />
						<div className="">
							Vous êtes novice en informatique ? Aucun problème,
							nous vous montrons à quel point éditer votre site
							est un vrai jeu d'enfant !
						</div>
					</div>
				</FadeInOnView>
				<FadeInOnView delay={0.5} once={true}>
					<div className="flex flex-col sm:flex-row items-center gap-3">
						<BsRocketTakeoffFill className="text-6xl" />
						<div className="">
							Vous êtes un utilisateur aguerri ? Vous serez ravi
							du niveau de personnalisation que le site vous
							propose.
						</div>
					</div>
				</FadeInOnView>
			</div>
		</div>
	);
};

export default UserWithIcon;
