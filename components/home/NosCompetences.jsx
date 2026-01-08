import CompetencesText from "@/markdown/home/nos-competences.mdx";
import Button from "../ui/Button";
import SplitLineText from "../SplitLineText";

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
                  <span className="text-neutral-500">à votre service</span>
               </h2>
               <div className="split-text">
                  <SplitLineText>
                     <p>
                        Notre expertise : faire décoller votre site pour séduire
                        vos (futurs) clients. Graph and Co crée votre site
                        sur-mesure, 100% responsive, performant, fiable et
                        évolutif. En vous dotant d’un site internet à la hauteur
                        de vos ambitions, nous vous rendrons visible sur
                        internet pour que vos clients accèdent à votre offre,
                        n’importe où, n’importe quand.
                        <br />
                        Oui, chacun son métier. Le vôtre, être un expert dans
                        votre domaine. Le nôtre, booster votre présence en
                        ligne.
                     </p>
                     <p>
                        Notre expertise : faire décoller votre site pour séduire
                        vos (futurs) clients. Graph and Co crée votre site
                        sur-mesure, 100% responsive, performant, fiable et
                        évolutif. En vous dotant d’un site internet à la hauteur
                        de vos ambitions, nous vous rendrons visible sur
                        internet pour que vos clients accèdent à votre offre,
                        n’importe où, n’importe quand.
                        <br />
                        Oui, chacun son métier. Le vôtre, être un expert dans
                        votre domaine. Le nôtre, booster votre présence en
                        ligne.
                     </p>
                     <p>
                        Notre expertise : faire décoller votre site pour séduire
                        vos (futurs) clients. Graph and Co crée votre site
                        sur-mesure, 100% responsive, performant, fiable et
                        évolutif. En vous dotant d’un site internet à la hauteur
                        de vos ambitions, nous vous rendrons visible sur
                        internet pour que vos clients accèdent à votre offre,
                        n’importe où, n’importe quand.
                        <br />
                        Oui, chacun son métier. Le vôtre, être un expert dans
                        votre domaine. Le nôtre, booster votre présence en
                        ligne.
                     </p>
                  </SplitLineText>
               </div>
               <CompetencesText />
               <Button href="projets" className="mt-10">
                  Voir nos réalisations
               </Button>
            </div>
         </div>
      </section>
   );
};

export default NosCompetences;
