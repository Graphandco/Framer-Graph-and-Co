"use client";

import Button from "../ui/Button";
import Image from "next/image";
import SplitLineText from "@/components/SplitLineText";

export const HomeContentText = ({ data }) => {
   return (
      <section className="pt-16 sm:pt-32 pb-12 relative z-20 bg-white">
         <div className="wrapper grid gap-10 bg-white border-l border-r border-neutral-200">
            <h2 className="text-4xl">
               <span>{data.black_title}</span>
               <br />
               <span className="text-neutral-500">{data.grey_title}</span>
            </h2>
            <div className="grid sm:grid-cols-[2fr_3fr] gap-4 sm:gap-14  justify-center items-center">
               <div>
                  <Image
                     src={data.image.node.sourceUrl}
                     alt={data.image.node.altText}
                     width={data.image.node.mediaDetails.width}
                     height={data.image.node.mediaDetails.height}
                     className="rounded-xl"
                     priority
                     sizes="(max-width: 640px) 100vw, 400px"
                  />
                  <div className="text-lg title-font mt-5 font-bold">Régis</div>
                  <div className="italic font-medium text-neutral-500">
                     Créateur de Graph and Co
                  </div>
               </div>
               <div className="split-text">
                  <SplitLineText>
                     <div
                        dangerouslySetInnerHTML={{ __html: data.main_text }}
                     />
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
