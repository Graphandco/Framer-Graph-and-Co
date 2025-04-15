import NavLink from "@/components/header/NavLink";
import CustomButton from "@/components/ui/CustomButton";
import PageHero from "@/components/ui/PageHero";

export default function NotFound() {
	return (
		<>
			<PageHero title="404" image="/404.avif" />
			<div className="wrapper min-h-[50vh] flex flex-col gap-3 items-center justify-center">
				<p>La page recherchée n'existe pas</p>
				<h2 className="text-5xl">Page non trouvée</h2>
				<CustomButton href="/">Retour à l'accueil</CustomButton>
			</div>
		</>
	);
}
