import CompetencesText from "@/markdown/home/nos-competences.mdx";
import CustomButton from "../ui/CustomButton";

const NosCompetences = () => {
	return (
		<section>
			<div className="wrapper">
				<div className="py-16 md:py-24 relative">
					<h2 className="text-4xl mb-10">
						<span>
							Nos compétences
							<br />
						</span>
						<span className="text-neutral-500">
							à votre service
						</span>
					</h2>
					<CompetencesText />
					<CustomButton href="projets" className="mt-10">
						Voir nos réalisations
					</CustomButton>
				</div>
			</div>
		</section>
	);
};

export default NosCompetences;
