import ProjetSingle from "@/components/projets/ProjetSingle";
import { notFound } from "next/navigation";
import {
   getWordpressProject,
   getWordpressProjects,
} from "@/actions/getWordpressProjects";

export async function generateMetadata({ params }) {
   const { slug } = await params;

   // Validation du slug pour prévenir Path Traversal
   if (!slug || typeof slug !== "string" || /[\.\/\\]/.test(slug)) {
      return {
         title: "Page non trouvée - Graph & Co",
         description: "La page demandée n'existe pas.",
      };
   }

   const project = await getWordpressProject({ id: slug, idType: "SLUG" });

   if (!project) {
      return {
         title: "Page non trouvée - Graph & Co",
         description: "La page demandée n'existe pas.",
      };
   }

   const metaTitle =
      project.seo?.title ||
      `${project.title} - Portfolio Web Colmar | Graph & Co`;
   const metaDescription =
      project.seo?.metaDesc ||
      (project.content
         ? project.content.replace(/[#*<>&"']/g, "").substring(0, 160)
         : "Découvrez cette réalisation de site web créée par notre agence à Colmar.");

   return {
      title: metaTitle,
      description: metaDescription,
      openGraph: {
         title: metaTitle,
         description: metaDescription,
         url: `https://graphandco.com/projets/${slug}`,
         type: "article",
         siteName: "Graph & Co",
         ...(project.featuredImage && {
            images: [
               {
                  url: project.featuredImage.link,
                  width: project.featuredImage.width || 1200,
                  height: project.featuredImage.height || 630,
                  alt: project.title,
               },
            ],
         }),
      },
   };
}

export default async function Page({ params }) {
   const { slug } = await params;

   // Validation du slug pour prévenir Path Traversal
   if (!slug || typeof slug !== "string" || /[\.\/\\]/.test(slug)) {
      return notFound();
   }

   const project = await getWordpressProject({ id: slug, idType: "SLUG" });

   if (!project) {
      return notFound();
   }

   return <ProjetSingle project={project} />;
}

export async function generateStaticParams() {
   const projects = await getWordpressProjects();

   return projects.map((project) => ({
      slug: project.slug,
   }));
}

export const dynamicParams = true;
