"use client";

import { useEffect, useState } from "react";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import MDXRenderer from "@/components/MDXRenderer";
import PageHero from "../ui/PageHero";
import Button from "../ui/Button";
import { GrReturn } from "react-icons/gr";
import Loading from "../Loading";
import { FaEye } from "react-icons/fa";
import ProjetCarousel from "./ProjetCarousel";
import { MdArrowOutward } from "react-icons/md";
import { ArrowLeft, ArrowLeftCircleIcon } from "lucide-react";
import NavLink from "../header/NavLink";

const ProjetSingle = ({ fileContent }) => {
   const [mdxSource, setMdxSource] = useState(null);
   const [frontmatter, setFrontmatter] = useState(null);

   useEffect(() => {
      const processMDX = async () => {
         const { data, content } = matter(fileContent);
         const mdx = await serialize(content);
         setFrontmatter(data);
         setMdxSource(mdx);
      };

      processMDX();
   }, [fileContent]);

   const images = Array.from(
      { length: frontmatter?.nbrCaptures },
      (_, i) => `/projets/${frontmatter.slug}/capture${i + 1}.avif`
   );

   if (!mdxSource || !frontmatter) return <Loading />;

   return (
      <>
         <PageHero
            title={frontmatter.title}
            image={`/projets/${frontmatter.image}`}
            position={frontmatter.position ? frontmatter.position : "center"}
         />
         <div className="wrapper pb-24">
            {/* <Button
               small
               outline
               href="/projets"
               icon=<GrReturn />
               className="mt-3 mb-8 inline-flex"
            >
               Retour aux projets
            </Button> */}
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
            <h2 className="text-4xl font-bold mb-5">
               {frontmatter.description}
            </h2>
            <Button
               blank
               icon={<FaEye />}
               href={frontmatter.url}
               className="mb-8"
            >
               Voir le site
            </Button>
            <MDXRenderer source={mdxSource} />
            {images.length > 0 && (
               <>
                  <div className="text-2xl text-center pt-8 pb-5">
                     Découvrez{" "}
                     <a
                        href={frontmatter.url}
                        target="blank"
                        className="text-neutral-500 hover:text-primary transition-colors"
                     >
                        {frontmatter.title}
                        <sup>
                           <MdArrowOutward className="inline" />
                        </sup>
                     </a>{" "}
                     en images !
                  </div>
                  <ProjetCarousel images={images} />
               </>
            )}
         </div>
      </>
   );
};

export default ProjetSingle;
