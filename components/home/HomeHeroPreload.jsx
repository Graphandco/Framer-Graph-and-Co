import { HERO_IMAGES } from "@/components/home/HeroBackground";

/** Preload des variantes hero (home uniquement) pour améliorer le LCP mobile. */
export default function HomeHeroPreload() {
   return (
      <>
         <link
            rel="preload"
            as="image"
            href={HERO_IMAGES.phone}
            type="image/avif"
            media="(max-width: 539px)"
            fetchPriority="high"
         />
         <link
            rel="preload"
            as="image"
            href={HERO_IMAGES.mobile}
            type="image/avif"
            media="(min-width: 540px) and (max-width: 767px)"
            fetchPriority="high"
         />
         <link
            rel="preload"
            as="image"
            href={HERO_IMAGES.tablet}
            type="image/avif"
            media="(min-width: 768px) and (max-width: 1023px)"
            fetchPriority="high"
         />
         <link
            rel="preload"
            as="image"
            href={HERO_IMAGES.desktop}
            type="image/avif"
            media="(min-width: 1024px)"
            fetchPriority="high"
         />
      </>
   );
}
