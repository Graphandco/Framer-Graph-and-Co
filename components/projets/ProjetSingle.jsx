import PageHeroSection from "../ui/PageHeroSection";
import Button from "../ui/Button";
import { FaEye } from "react-icons/fa";
import ProjetCarousel from "./ProjetCarousel";
import { MdArrowOutward } from "react-icons/md";
import { ArrowLeft } from "lucide-react";
import NavLink from "../header/NavLink";

export default function ProjetSingle({ project }) {
   const acf = project?.projectAcf;
   const heroUrl =
      project?.featuredImage?.node?.sourceUrl ?? "/projets/hero-projets.avif";
   const position = acf?.positionDuBackground || "center";
   const galleryUrls =
      acf?.galerieDimages?.nodes
         ?.map((n) => n?.sourceUrl)
         .filter(Boolean) ?? [];
   const siteUrl = acf?.lienDuSite;

   return (
      <>
         <PageHeroSection
            title={project.title}
            image={heroUrl}
            position={position}
         />
         <div className="wrapper pb-24">
            <NavLink
               href="/projets"
               className="group mt-3 mb-5 inline-flex items-center gap-1 underline"
            >
               <ArrowLeft
                  size={15}
                  className="transition-transform duration-200 group-hover:-translate-x-1.5"
               />
               Retour aux projets
            </NavLink>
            {acf?.sousTitre ? (
               <h2 className="mb-5 text-4xl font-bold">{acf.sousTitre}</h2>
            ) : null}
            {siteUrl ? (
               <Button blank icon={<FaEye />} href={siteUrl} className="mb-8">
                  Voir le site
               </Button>
            ) : null}
            {project.content ? (
               <div
                  className="markdown max-w-none"
                  dangerouslySetInnerHTML={{ __html: project.content }}
               />
            ) : null}
            {galleryUrls.length > 0 ? (
               <>
                  <div className="pb-5 pt-8 text-center text-2xl">
                     Plongez dans l&apos;univers de{" "}
                     {siteUrl ? (
                        <a
                           href={siteUrl}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="group inline-block origin-left text-primary transition-transform duration-200 hover:scale-105"
                        >
                           {project.title}
                           <sup>
                              <MdArrowOutward className="inline origin-bottom transition-transform duration-200 group-hover:-translate-x-2 group-hover:rotate-45" />
                           </sup>
                        </a>
                     ) : (
                        <span>{project.title}</span>
                     )}
                  </div>
                  <ProjetCarousel images={galleryUrls} />
               </>
            ) : null}
         </div>
      </>
   );
}
