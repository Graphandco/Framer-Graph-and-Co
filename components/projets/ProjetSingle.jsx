"use client";

import PageHero from "../ui/PageHero";
import Button from "../ui/Button";
import { FaEye } from "react-icons/fa";
import ProjetCarousel from "./ProjetCarousel";
import { MdArrowOutward } from "react-icons/md";
import { ArrowLeft } from "lucide-react";
import NavLink from "../header/NavLink";

const ProjetSingle = ({ project }) => {
   if (!project) return null;

   // Récupère les images depuis le champ ACF gallery
   let images = [];
   if (project.gallery && Array.isArray(project.gallery)) {
      // Extrait les liens des images depuis la gallery ACF
      images = project.gallery
         .map((image) => image?.link)
         .filter((link) => link); // Filtre les valeurs null/undefined
   }

   // Image hero : featuredImage ou image ACF
   const heroImage = project.featuredImage?.link || project.image || null;
   const heroPosition = project.position || "center";

   return (
      <>
         <PageHero
            title={project.title}
            image={heroImage}
            position={heroPosition}
         />
         <div className="wrapper pb-24">
            <NavLink
               href="/projets"
               className="mt-3 mb-5 inline-flex items-center gap-1 underline group"
            >
               <ArrowLeft
                  size={15}
                  className="transition-transform duration-200 group-hover:-translate-x-1.5"
               />
               Retour aux projets
            </NavLink>
            {project.subtitle && (
               <h2 className="text-4xl font-bold mb-5">{project.subtitle}</h2>
            )}
            {project.url && (
               <Button
                  blank
                  icon={<FaEye />}
                  href={project.url}
                  className="mb-8"
               >
                  Voir le site
               </Button>
            )}
            {project.content && (
               <div
                  className="prose max-w-none mb-8"
                  dangerouslySetInnerHTML={{ __html: project.content }}
               />
            )}
            {images.length > 0 && (
               <>
                  <div className="text-2xl text-center pt-8 pb-5">
                     Plongez dans l'univers de{" "}
                     {project.url ? (
                        <a
                           href={project.url}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-primary hover:scale-105 inline-block transition-transform origin-left group duration-200"
                        >
                           {project.title}
                           <sup>
                              <MdArrowOutward className="inline group-hover:rotate-45 group-hover:-translate-x-2 origin-bottom transition-transform duration-200" />
                           </sup>
                        </a>
                     ) : (
                        <span className="text-primary">{project.title}</span>
                     )}
                  </div>
                  <ProjetCarousel images={images} />
               </>
            )}
         </div>
      </>
   );
};

export default ProjetSingle;
