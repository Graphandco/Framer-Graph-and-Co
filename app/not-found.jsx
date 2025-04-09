import NavLink from "@/components/header/NavLink";
import Button from "@/components/ui/Button";
import PageHero from "@/components/ui/PageHero";

export default function NotFound() {
	return (
		<>
			<PageHero title="404" image="/404.avif" />
			<div className="wrapper min-h-[50vh] flex flex-col gap-3 items-center justify-center">
				<p>La page recherchée n'existe pas</p>
				<h2 className="title-font text-5xl font-bold">
					Page non trouvée
				</h2>
				<Button href="/">Retour à l'accueil</Button>
			</div>
		</>
	);
}
