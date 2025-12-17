"use client";

import SectionLegend from "../SectionLegend";
import Button from "../ui/Button";
import Image from "next/image";
import { useResponsive } from "@/hooks/UseResponsive";

export const StickySection = ({ data }) => {
   const { isPhone, isMobile, isTablet, isDesktop } = useResponsive();
   function getHeroImageSource() {
      if (isPhone) return "/home/regis-avatar-mobile.avif";
      if (isMobile) return "/home/regis-avatar-mobile.avif";
      if (isTablet) return "/home/regis-avatar-tablet.avif";
      if (isDesktop) return "/home/regis-avatar.avif";
      return "/home/regis-avatar.avif";
   }
   const heroImageSource = getHeroImageSource();

   return (
      <section className="relative">
         {/* Section sticky */}
         <div
            // style={{ y }}
            className="sticky top-0 h-screen flex items-center justify-center bg-black text-white z-10"
            id="notre-expertise"
         >
            <div className="wrapper flex flex-col gap-6 items-center text-center">
               <SectionLegend text="Notre expertise" />
               <h2 className="big-text font-bold">{data.sticky_title}</h2>
               <p className="max-w-xl">{data.sticky_description}</p>
               <Button icon={null} white href="/offres">
                  Voir nos offres
               </Button>
            </div>
         </div>

         <div className="pt-16 sm:pt-32 pb-12 relative z-20 bg-white">
            <div className="wrapper grid gap-10 bg-white border-l border-r border-neutral-200">
               <h2 className="text-4xl">
                  <span>Qu’est-ce qu’un bon site web ?</span>
                  <br />
                  <span className="text-neutral-500">
                     Et surtout, pourquoi faire appel à un pro ?
                  </span>
               </h2>
               <div className="grid sm:grid-cols-[2fr_3fr] gap-4 sm:gap-14  justify-center items-center">
                  <div>
                     <Image
                        src="/home/regis-avatar.avif"
                        alt="Graph and Co Régis avatar"
                        width={400}
                        height={600}
                        className="rounded-xl"
                        priority
                        sizes="(max-width: 640px) 100vw, 400px"
                     />
                     <div className="text-lg title-font mt-5 font-bold">
                        Régis
                     </div>
                     <div className="italic font-medium text-neutral-500">
                        Créateur de Graph and Co
                     </div>
                  </div>
                  <div className="markdown">
                     {data.content && (
                        <div
                           dangerouslySetInnerHTML={{ __html: data.content }}
                        />
                     )}
                     <Button icon={null} href="/contact" className="mt-8">
                        Nous contacter
                     </Button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};
