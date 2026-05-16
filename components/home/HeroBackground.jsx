/** Images hero responsive — sélection native via <picture>, sans JS (LCP). */
const HERO_IMAGES = {
   phone: "/home/bg-hero-phone.avif",
   mobile: "/home/bg-hero-mobile.avif",
   tablet: "/home/bg-hero-tablet.avif",
   desktop: "/home/bg-hero-desktop.avif",
};

export default function HeroBackground({ alt }) {
   return (
      <picture className="absolute inset-0 block h-full w-full">
         <source
            media="(max-width: 539px)"
            srcSet={HERO_IMAGES.phone}
            type="image/avif"
         />
         <source
            media="(max-width: 767px)"
            srcSet={HERO_IMAGES.mobile}
            type="image/avif"
         />
         <source
            media="(max-width: 1023px)"
            srcSet={HERO_IMAGES.tablet}
            type="image/avif"
         />
         <img
            src={HERO_IMAGES.desktop}
            alt={alt}
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover"
         />
      </picture>
   );
}

export { HERO_IMAGES };
