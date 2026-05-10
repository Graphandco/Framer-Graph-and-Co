"use client";

import { useState } from "react";
import ProjetItem from "./ProjetItem";
import { AnimatePresence, motion } from "framer-motion";
import ProjetsFilter from "./ProjetsFilter";
import Button from "../ui/Button";

const ProjetsList = ({ projects, pageData }) => {
   const [activeCategory, setActiveCategory] = useState("tous");

   const filteredProjects = projects.filter((project) => {
      if (activeCategory === "tous") return true;
      const cat = String(project.projectAcf?.category ?? "").toLowerCase();
      return cat === activeCategory.toLowerCase();
   });

   // 🔀 mockup en dernier, puis featured en premier dans chaque groupe
   const orderedProjects = [...filteredProjects].sort((a, b) => {
      const aMock =
         String(a.projectAcf?.category ?? "").toLowerCase() === "mockup";
      const bMock =
         String(b.projectAcf?.category ?? "").toLowerCase() === "mockup";
      if (aMock !== bMock) return aMock ? 1 : -1;
      if (a.projectAcf.featured && !b.projectAcf.featured) return -1;
      if (!a.projectAcf.featured && b.projectAcf.featured) return 1;
      return 0;
   });

   return (
      <section id="projets" className="bg-black/10">
         <div className="wrapper py-8 sm:py-16">
            <h2 className="text-4xl font-bold mb-5 leading-tight">
               Ils nous ont fait confiance
            </h2>
            {/* Filtres */}
            <ProjetsFilter
               activeCategory={activeCategory}
               setActiveCategory={setActiveCategory}
            />

            {/* Liste des projets */}
            <motion.div
               layout
               className="grid xs:grid-cols-1 sm:grid-cols-2 gap-4"
            >
               <AnimatePresence>
                  {activeCategory === "tous" && (
                     <motion.article
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="p-4 sm:p-8 md:p-12 bg-white rounded-3xl"
                     >
                        <div className="text-sm xs:text-base">
                           <div
                              dangerouslySetInnerHTML={{
                                 __html: pageData.content,
                              }}
                           />
                        </div>
                        <Button small href="offres" className="mt-5">
                           Voir nos offres
                        </Button>
                     </motion.article>
                  )}

                  {orderedProjects.map((project) => (
                     <ProjetItem
                        key={project.slug}
                        project={project}
                        image={project.featuredImage.node.sourceUrl}
                     />
                  ))}
               </AnimatePresence>
            </motion.div>
         </div>
      </section>
   );
};

export default ProjetsList;
