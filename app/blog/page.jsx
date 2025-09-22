import PageHero from "@/components/ui/PageHero";
import { getMdxData } from "@/utils/mdxUtils";
import BlogList from "@/components/blog/BlogList";

export const metadata = {
   title: "Blog Web & Tech | Actualités Développement | Graph & Co Alsace",
   description:
      "Découvrez notre blog dédié à la création de sites web à Colmar : conseils en UX/UI, design sur-mesure, performance, accessibilité et retours d’expérience pour des sites modernes et efficaces.",
   openGraph: {
      title: "Blog Web & Tech | Actualités Développement | Graph & Co Alsace",
      description:
         "Découvrez notre blog dédié à la création de sites web à Colmar : conseils en UX/UI, design sur-mesure, performance, accessibilité et retours d’expérience pour des sites modernes et efficaces.",
      url: "https://graphandco.com/blog",
      images: [
         {
            url: "https://graphandco.com/og-image.jpg",
            width: 1200,
            height: 630,
            alt: "Graph and Co - blog",
         },
      ],
      type: "website",
   },
};

export default async function BlogPage() {
   const data = await getMdxData("markdown/blog");
   return (
      <>
         <PageHero title="Le blog" image="/blog/blog-hero.avif" />
         <section className="bg-black/5">
            <BlogList blog={data} />
         </section>
      </>
   );
}
