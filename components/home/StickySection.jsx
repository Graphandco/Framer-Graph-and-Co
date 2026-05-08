"use client";

import SectionLegend from "../SectionLegend";
import Button from "../ui/Button";

export const StickySection = ({ data }) => {
   return (
      <section
         id="notre-expertise"
         className="sticky top-0 h-screen flex items-center justify-center bg-black text-white -z-10"
      >
         <div className="wrapper flex flex-col gap-6 items-center text-center">
            <SectionLegend text={data.top_legend} />
            <h2 className="big-text font-bold">{data.title}</h2>
            <p className="max-w-xl">{data.description}</p>
            <Button icon={null} white href="/offres">
               Voir nos offres
            </Button>
         </div>
      </section>
   );
};
