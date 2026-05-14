import PageHero from "@/components/ui/PageHero";
import BlogList from "@/components/blog/BlogList";
import { getWordpressContent } from "@/actions/getWordpressContent";
import { getGlobalQuery } from "@/actions/queries/globalQuery";
import { BLOGS_QUERY } from "@/actions/queries/blogsQuery";

const pageData = await getWordpressContent({
   query: getGlobalQuery("page"),
   variables: { id: 290 },
   rootField: "page",
});

const blogsData = await getWordpressContent({
   query: BLOGS_QUERY,
   variables: {},
   rootField: "posts",
});

export const metadata = {
   title:
      pageData.seo.title ||
      "Blog Web Colmar - Actualités UX/UI et Développement | Graph & Co",
   description:
      pageData.seo.metaDesc ||
      "Découvrez notre blog dédié à la création de sites web à Colmar : conseils en UX/UI, design sur-mesure, performance, accessibilité et retours d'expérience pour des sites modernes et efficaces.",
   robots: {
      index: pageData.seo?.metaRobotsNoindex !== "noindex",
      follow: pageData.seo?.metaRobotsNofollow !== "nofollow",
   },
   alternates: {
      canonical: "https://graphandco.com/blog",
   },
   openGraph: {
      title:
         pageData.seo.title ||
         "Blog Web Colmar - Actualités UX/UI et Développement | Graph & Co",
      description:
         pageData.seo.metaDesc ||
         "Découvrez notre blog dédié à la création de sites web à Colmar : conseils en UX/UI, design sur-mesure, performance, accessibilité et retours d'expérience pour des sites modernes et efficaces.",
      url: "https://graphandco.com/blog",
      images: [
         {
            url: "https://graphandco.com/og-image.jpg",
            width: 1200,
            height: 630,
            alt: "Graph & Co - blog",
         },
      ],
      type: "website",
   },
};

export default async function BlogPage() {
   const posts = blogsData?.nodes ?? [];
   return (
      <>
         <PageHero
            title={pageData.title}
            image={pageData.featuredImage.node.sourceUrl}
         />
         <section className="bg-black/5">
            <BlogList posts={posts} pageData={pageData} />
         </section>
      </>
   );
}
