import PageHero from "@/components/ui/PageHero";
import PageHeroImage from "@/components/ui/PageHeroImage";
import {
   getPageHeroImageProps,
   preloadPageHeroImage,
} from "@/utils/preloadPageHeroImage";

/**
 * Wrapper serveur : preload + image SSR passée au shell client (animations).
 */
export default function PageHeroSection({ title, image, position = "center" }) {
   if (image) {
      preloadPageHeroImage(image);
   }

   const preloadHref = image ? getPageHeroImageProps(image)?.src : null;

   return (
      <>
         {preloadHref ? (
            <link
               rel="preload"
               as="image"
               href={preloadHref}
               fetchPriority="high"
            />
         ) : null}
         <PageHero title={title}>
            <PageHeroImage src={image} alt={title} position={position} />
         </PageHero>
      </>
   );
}
