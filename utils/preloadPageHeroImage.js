import { getImageProps } from "next/image";
import { preload } from "react-dom";

const heroImageOptions = {
   alt: "",
   fill: true,
   sizes: "100vw",
   priority: true,
};

/** URL optimisée Next.js (/_next/image) pour preload / link. */
export function getPageHeroImageProps(src) {
   if (!src) return null;
   return getImageProps({ src, ...heroImageOptions }).props;
}

/**
 * Précharge l'image hero via l'URL optimisée Next.js (/_next/image).
 * À appeler dans un Server Component avant le rendu de PageHero.
 */
export function preloadPageHeroImage(src) {
   const props = getPageHeroImageProps(src);
   if (!props?.src) return;
   preload(props.src, { as: "image", fetchPriority: "high" });
}
