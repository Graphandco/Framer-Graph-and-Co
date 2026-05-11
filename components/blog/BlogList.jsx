"use client";

import { useMemo, useState } from "react";
import BlogItem from "./BlogItem";
import BlogPresentation from "@/markdown/blog-presentation.mdx";
import { AnimatePresence, motion } from "framer-motion";
import BlogFilter from "./BlogFilter";

function collectCategoryFilters(posts) {
   const byLower = new Map();
   for (const post of posts) {
      for (const node of post.categories?.nodes ?? []) {
         const raw = node?.name?.trim();
         if (!raw) continue;
         const key = raw.toLowerCase();
         if (!byLower.has(key)) byLower.set(key, raw);
      }
   }
   const sorted = [...byLower.entries()].sort((a, b) =>
      a[1].localeCompare(b[1], "fr"),
   );
   return [
      { value: "tous", label: "Tous" },
      ...sorted.map(([value, label]) => ({ value, label })),
   ];
}

const BlogList = ({ posts = [] }) => {
   const [activeCategory, setActiveCategory] = useState("tous");

   const categoryFilters = useMemo(
      () => collectCategoryFilters(posts),
      [posts],
   );

   const filteredPosts = useMemo(() => {
      const list = posts.filter((post) => {
         if (activeCategory === "tous") return true;
         return (post.categories?.nodes ?? []).some(
            (n) =>
               String(n?.name ?? "").toLowerCase() ===
               activeCategory.toLowerCase(),
         );
      });
      return [...list].sort(
         (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      );
   }, [posts, activeCategory]);

   return (
      <section id="blog">
         <div className="wrapper py-8 sm:py-16">
            <h2 className="text-4xl mb-5">Plongée dans les coulisses du web</h2>
            <div className="markdown">
               <BlogPresentation />
            </div>
            <BlogFilter
               categories={categoryFilters}
               activeCategory={activeCategory}
               setActiveCategory={setActiveCategory}
            />

            <motion.div
               layout
               className="grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            >
               <AnimatePresence>
                  {filteredPosts.map((post) => (
                     <BlogItem key={post.slug} post={post} />
                  ))}
               </AnimatePresence>
            </motion.div>
         </div>
      </section>
   );
};

export default BlogList;
