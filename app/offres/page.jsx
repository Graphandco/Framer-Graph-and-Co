import Prices from "@/components/offres/Prices";
import SurMesure from "@/components/offres/SurMesure";
import TextIntro from "@/components/offres/TextIntro";
import UserWithIcon from "@/components/offres/UserWithIcon";
import PageHero from "@/components/ui/PageHero";

export default async function OffresPage() {
	return (
		<div>
			<PageHero
				title="Nos offres"
				image="/offres/hero-offres.avif"
				imageClass="object-cover object-top"
			/>
			<UserWithIcon />
			<TextIntro />
			<Prices />
			<SurMesure />
		</div>
	);
}
