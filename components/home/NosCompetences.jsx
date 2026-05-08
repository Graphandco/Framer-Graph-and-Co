import CompetencesText from "@/markdown/home/nos-competences.mdx";
import Button from "../ui/Button";
import SplitLineText from "../SplitLineText";

const NosCompetences = ({ data }) => {
   return (
      <section className="bg-white">
         <div className="wrapper">
            <div className="py-16 md:py-24 relative">
               <h2 className="text-4xl mb-10">
                  <span>
                     {data.black_title}
                     <br />
                  </span>
                  <span className="text-neutral-500">{data.grey_title}</span>
               </h2>
               <div className="split-text">
                  <SplitLineText>
                     <div dangerouslySetInnerHTML={{ __html: data.content }} />
                  </SplitLineText>
               </div>
               {/* <CompetencesText /> */}
               <Button href="projets" className="mt-10">
                  Voir nos réalisations
               </Button>
            </div>
         </div>
      </section>
   );
};

export default NosCompetences;
