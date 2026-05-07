"use client";

import Button from "../ui/Button";
import PresentationText from "@/markdown/home/presentation.mdx";
import Image from "next/image";
import SplitLineText from "@/components/SplitLineText";

export const HomeContentText = () => {
   return (
      <section className="pt-16 sm:pt-32 pb-12 relative z-20 bg-white">
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
               <div className="split-text">
                  <SplitLineText>
                     <PresentationText />
                  </SplitLineText>
               </div>
               <Button icon={null} href="/contact" className="mt-8">
                  Nous contacter
               </Button>
            </div>
         </div>
      </section>
   );
};
