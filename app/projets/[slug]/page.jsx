import ProjetSingle from "@/components/projets/ProjetSingle";
import { notFound } from "next/navigation";
import { getWordpressContent } from "@/actions/getWordpressContent";
import { SINGLE_PROJECT_QUERY } from "@/actions/queries/singleProjectQuery";
import { PROJECTS_QUERY } from "@/actions/queries/projectsQuery";

function isValidSlug(slug) {
   return Boolean(slug && typeof slug === "string" && !/[\.\/\\]/.test(slug));
}

async function getProjectBySlug(slug) {
   try {
      return await getWordpressContent({
         query: SINGLE_PROJECT_QUERY,
         variables: { slug },
         rootField: "project",
      });
   } catch {
      return null;
   }
}

export async function generateMetadata({ params }) {
   const { slug } = await params;

   if (!isValidSlug(slug)) {
      return {
         title: "Page non trouvée - Graph & Co",
         description: "La page demandée n'existe pas.",
      };
   }

   const project = await getProjectBySlug(slug);
   if (!project) {
      return {
         title: "Page non trouvée - Graph & Co",
         description: "La page demandée n'existe pas.",
      };
   }

   const metaTitle = `${project.title} - Portfolio Web Colmar | Graph & Co`;
   const metaDesc =
      project.seo?.metaDesc ||
      "Découvrez cette réalisation de site web créée par notre agence à Colmar.";
   const ogImage = project.featuredImage?.node?.sourceUrl;

   return {
      alternates: {
         canonical: `https://graphandco.com/projets/${slug}`,
      },
      title: metaTitle,
      description: metaDesc,
      openGraph: {
         title: metaTitle,
         description: metaDesc,
         url: `https://graphandco.com/projets/${slug}`,
         type: "article",
         siteName: "Graph & Co",
         ...(ogImage
            ? {
                 images: [
                    {
                       url: ogImage,
                       width:
                          project.featuredImage?.node?.mediaDetails?.width ??
                          1200,
                       height:
                          project.featuredImage?.node?.mediaDetails?.height ??
                          630,
                       alt:
                          project.featuredImage?.node?.altText || project.title,
                    },
                 ],
              }
            : {}),
      },
   };
}

export default async function Page({ params }) {
   const { slug } = await params;

   if (!isValidSlug(slug)) {
      return notFound();
   }

   const project = await getProjectBySlug(slug);
   if (!project) {
      return notFound();
   }

   return <ProjetSingle project={project} />;
}

export async function generateStaticParams() {
   try {
      const projects = await getWordpressContent({
         query: PROJECTS_QUERY,
         variables: {},
         rootField: "projects",
      });
      const nodes = projects?.nodes ?? [];
      return nodes.filter((n) => n?.slug).map((n) => ({ slug: n.slug }));
   } catch {
      return [];
   }
}

export const dynamicParams = true;
