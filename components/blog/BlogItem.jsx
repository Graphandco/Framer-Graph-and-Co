"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import RotatingButton from "../RotatingButton";

const BlogItem = ({ post }) => {
   const title = post.title ?? "";
   const slug = post.slug ?? "";
   const date = post.date;
   const description = post.blogAcf?.sousTitre ?? "";
   const categoryNode = post.categories?.nodes?.[0];
   const categoryLabel = categoryNode?.name?.trim() || "Blog";
   const imageNode = post.featuredImage?.node;
   const src = imageNode?.sourceUrl;
   const alt = imageNode?.altText?.trim() || title;
   const w = imageNode?.mediaDetails?.width ?? 1200;
   const h = imageNode?.mediaDetails?.height ?? 630;

   const MotionImage = motion.create(Image);

   const formattedDate = new Date(date).toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
   });

   return (
      <motion.article
         layout
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: 20 }}
         transition={{ duration: 0.4, ease: "easeOut" }}
         whileHover="hover"
         className="relative flex flex-col justify-end overflow-hidden rounded-3xl "
      >
         <div className="h-full flex flex-col relative">
            <div className="absolute top-3 right-3 bg-primary py-0.5 px-2 rounded-full text-sm z-10 font-medium">
               {categoryLabel}
            </div>
            {src ? (
               <MotionImage
                  variants={{
                     hover: { scale: 1.025, filter: "blur(2px)" },
                  }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  src={src}
                  alt={alt}
                  width={w}
                  height={h}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  style={{ width: "100%", height: "200px" }}
                  className="object-cover"
                  priority
               />
            ) : (
               <div
                  className="w-full bg-black/10 shrink-0"
                  style={{ height: "200px" }}
                  aria-hidden
               />
            )}
            <div className="relative grow-1 flex flex-col z-10 p-5 pt-2 bg-white">
               <div className="text-right text-sm font-medium text-black/40 mb-5">
                  {formattedDate}
               </div>
               <motion.div
                  variants={{
                     hover: { scale: 0.9 },
                  }}
                  transition={{ duration: 0.2 }}
                  className="text-xl mb-3 origin-left"
               >
                  {title}
               </motion.div>
               <div className="grow-1 text-black/40 font-medium leading-tight mb-2">
                  {description}
               </div>
               <RotatingButton
                  href={`/blog/${slug}`}
                  text="En savoir plus "
                  className="text-black"
                  letterSpacing={1}
                  radius={32}
                  hoverRadius={42}
               />
            </div>
         </div>
      </motion.article>
   );
};

export default BlogItem;
