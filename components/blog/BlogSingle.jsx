import PageHeroSection from "../ui/PageHeroSection";
import { ArrowLeft, ArrowRight } from "lucide-react";
import NavLink from "../header/NavLink";

function BlogFooterLinks() {
   return (
      <div className="mt-8 text-primary">
         <NavLink
            href="/offres"
            className="mt-3 mb-5 flex items-center gap-1 underline group"
         >
            Découvrez nos offres de création de sites
            <ArrowRight
               size={15}
               className="transition-transform duration-200 group-hover:translate-x-1.5"
            />
         </NavLink>
         <NavLink
            href="/projets"
            className="mt-3 mb-5 flex items-center gap-1 underline group"
         >
            Consultez nos réalisations récentes{" "}
            <ArrowRight
               size={15}
               className="transition-transform duration-200 group-hover:translate-x-1.5"
            />
         </NavLink>
      </div>
   );
}

export default function BlogSingle({ post }) {
   const heroUrl =
      post?.featuredImage?.node?.sourceUrl ?? "/projets/hero-projets.avif";
   const subtitle = post?.blogAcf?.sousTitre ?? "";

   return (
      <>
         <PageHeroSection title={post.title} image={heroUrl} position="center" />
         <div className="wrapper pb-24">
            <NavLink
               href="/blog"
               className="mt-3 mb-5 inline-flex items-center gap-1 underline group"
            >
               <ArrowLeft
                  size={15}
                  className="transition-transform duration-200 group-hover:-translate-x-1.5"
               />
               Retour au blog
            </NavLink>
            {subtitle ? <h2 className="text-4xl mb-5">{subtitle}</h2> : null}
            {post.content ? (
               <div
                  className="markdown"
                  dangerouslySetInnerHTML={{ __html: post.content }}
               />
            ) : null}
            <BlogFooterLinks />
         </div>
      </>
   );
}
