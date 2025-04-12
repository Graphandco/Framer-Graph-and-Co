import CompetencesText from "@/markdown/home/nos-competences.mdx";

const NosCompetences = () => {
	return (
		<section>
			<div className="wrapper">
				<div className="py-16 md:py-24 relative">
					<h2 className="title-text text-2xl sm:text-3xl md:sm:text-4xl font-semibold mb-10">
						<span>
							Nos compétences
							<br />
						</span>
						<span className="text-neutral-500">
							à votre service
						</span>
					</h2>
					<CompetencesText />
				</div>
			</div>
		</section>
	);
};

export default NosCompetences;
