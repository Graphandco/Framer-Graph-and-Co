import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogSingle from "@/components/blog/BlogSingle";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
   const { slug } = await params;
   
   // Validation du slug pour prévenir Path Traversal
   if (!slug || typeof slug !== "string" || /[\.\/\\]/.test(slug)) {
      return {
         title: "Page non trouvée - Graph & Co",
         description: "La page demandée n'existe pas.",
      };
   }
   
   const filePath = path.join(process.cwd(), "markdown/blog", `${slug}.mdx`);
   
   // Vérification supplémentaire : s'assurer que le chemin résolu est bien dans le répertoire attendu
   const resolvedPath = path.resolve(filePath);
   const allowedDir = path.resolve(process.cwd(), "markdown/blog");
   if (!resolvedPath.startsWith(allowedDir)) {
      return {
         title: "Page non trouvée - Graph & Co",
         description: "La page demandée n'existe pas.",
      };
   }
   
   let fileContent;
   try {
      fileContent = fs.readFileSync(filePath, "utf-8");
   } catch (error) {
      return {
         title: "Page non trouvée - Graph & Co",
         description: "La page demandée n'existe pas.",
      };
   }
   const { data } = matter(fileContent);
   return {
      title: `${data.title} - Blog Web Colmar | Graph & Co`,
      description:
         data.metadesc ||
         "Découvrez notre article de blog sur la création de sites web à Colmar.",
      openGraph: {
         title: `${data.title} - Blog Web Colmar | Graph & Co`,
         description: data.metadesc,
         url: `https://graphandco.com/blog/${slug}`,
         type: "article",
         siteName: "Graph & Co",
         images: [
            {
               url: `https://graphandco.com/blog/${data.image}`,
               width: 1200,
               height: 630,
               alt: data.title,
            },
         ],
      },
   };
}

export default async function Page({ params }) {
   const { slug } = await params;

   // Validation du slug pour prévenir Path Traversal
   if (!slug || typeof slug !== "string" || /[\.\/\\]/.test(slug)) {
      return notFound();
   }

   const filePath = path.join(process.cwd(), "markdown/blog", `${slug}.mdx`);
   
   // Vérification supplémentaire : s'assurer que le chemin résolu est bien dans le répertoire attendu
   const resolvedPath = path.resolve(filePath);
   const allowedDir = path.resolve(process.cwd(), "markdown/blog");
   if (!resolvedPath.startsWith(allowedDir)) {
      return notFound();
   }

   let fileContent;
   try {
      fileContent = fs.readFileSync(filePath, "utf-8");
   } catch (error) {
      // Si le fichier est introuvable, renvoyer une 404
      return notFound();
   }

   return <BlogSingle fileContent={fileContent} />;
}

export function generateStaticParams() {
   const dirPath = path.join(process.cwd(), "markdown/blog");
   const files = fs.readdirSync(dirPath);

   return files
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => ({
         slug: file.replace(/\.mdx$/, ""),
      }));
}

export const dynamicParams = true;
