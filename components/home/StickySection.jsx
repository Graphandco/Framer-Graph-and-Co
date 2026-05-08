"use client";

import SectionLegend from "../SectionLegend";
import Button from "../ui/Button";

export const StickySection = () => {
   return (
      <section
         id="notre-expertise"
         className="sticky top-0 h-screen flex items-center justify-center bg-black text-white -z-10"
      >
         <div className="wrapper flex flex-col gap-6 items-center text-center">
            <SectionLegend text="Notre expertise" />
            <h2 className="big-text font-bold">
               Créons un site web performant et élégant.
            </h2>
            <p className="max-w-xl">
               Chaque projet est pensé pour s’adapter à vos besoins, votre
               image, et vos ambitions.
            </p>
            <Button icon={null} white href="/offres">
               Voir nos offres
            </Button>
         </div>
      </section>
   );
};
