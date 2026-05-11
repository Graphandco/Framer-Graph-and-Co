import BlogSingle from "@/components/blog/BlogSingle";
import { notFound } from "next/navigation";
import { getWordpressContent } from "@/actions/getWordpressContent";
import { SINGLE_BLOG_QUERY } from "@/actions/queries/singleBlogQuery";
import { BLOGS_QUERY } from "@/actions/queries/blogsQuery";

function isValidSlug(slug) {
   return Boolean(slug && typeof slug === "string" && !/[\.\/\\]/.test(slug));
}

async function getPostBySlug(slug) {
   try {
      return await getWordpressContent({
         query: SINGLE_BLOG_QUERY,
         variables: { slug },
         rootField: "post",
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

   const post = await getPostBySlug(slug);
   if (!post) {
      return {
         title: "Page non trouvée - Graph & Co",
         description: "La page demandée n'existe pas.",
      };
   }

   const metaTitle = `${post.title} - Blog Web Colmar | Graph & Co`;
   const metaDesc =
      post.seo?.metaDesc ||
      post.blogAcf?.sousTitre ||
      "Découvrez notre article de blog sur la création de sites web à Colmar.";
   const ogImage = post.featuredImage?.node?.sourceUrl;

   return {
      alternates: {
         canonical: `https://graphandco.com/blog/${slug}`,
      },
      title: metaTitle,
      description: metaDesc,
      openGraph: {
         title: metaTitle,
         description: metaDesc,
         url: `https://graphandco.com/blog/${slug}`,
         type: "article",
         siteName: "Graph & Co",
         ...(ogImage
            ? {
                 images: [
                    {
                       url: ogImage,
                       width:
                          post.featuredImage?.node?.mediaDetails?.width ??
                          1200,
                       height:
                          post.featuredImage?.node?.mediaDetails?.height ?? 630,
                       alt:
                          post.featuredImage?.node?.altText || post.title,
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

   const post = await getPostBySlug(slug);
   if (!post) {
      return notFound();
   }

   return <BlogSingle post={post} />;
}

export async function generateStaticParams() {
   try {
      const posts = await getWordpressContent({
         query: BLOGS_QUERY,
         variables: {},
         rootField: "posts",
      });
      const nodes = posts?.nodes ?? [];
      return nodes.filter((n) => n?.slug).map((n) => ({ slug: n.slug }));
   } catch {
      return [];
   }
}

export const dynamicParams = true;
