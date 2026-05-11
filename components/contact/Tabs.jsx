"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

/**
 * @param {{ items: { question?: string; answer?: string }[] }} props
 */
export default function Tabs({ items = [] }) {
   const [openIndex, setOpenIndex] = useState(null);

   return (
      <div className="pb-12 pt-8">
         <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-center text-3xl">FAQ</h2>
            {items.length === 0 ? (
               <p className="text-center text-neutral-500">
                  Aucune question pour le moment.
               </p>
            ) : (
               items.map((row, index) => {
                  const isOpen = openIndex === index;
                  return (
                     <div
                        key={index}
                        className="border-b border-slate-300"
                     >
                        <button
                           type="button"
                           onClick={() =>
                              setOpenIndex(isOpen ? null : index)
                           }
                           className="flex w-full cursor-pointer items-center justify-between gap-4 py-6 text-left text-lg font-medium transition-colors"
                           aria-expanded={isOpen}
                           aria-controls={`faq-panel-${index}`}
                           id={`faq-trigger-${index}`}
                        >
                           <span
                              className={
                                 isOpen
                                    ? "text-neutral-500"
                                    : "text-foreground"
                              }
                           >
                              {row.question}
                           </span>
                           <FiChevronDown
                              className={`shrink-0 text-2xl text-slate-900 transition-transform duration-300 ease-out motion-reduce:transition-none ${
                                 isOpen ? "rotate-180" : "rotate-0"
                              }`}
                              aria-hidden
                           />
                        </button>

                        <div
                           id={`faq-panel-${index}`}
                           role="region"
                           aria-labelledby={`faq-trigger-${index}`}
                           className="grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none"
                           style={{
                              gridTemplateRows: isOpen ? "1fr" : "0fr",
                           }}
                        >
                           <div className="min-h-0 overflow-hidden">
                              <div
                                 className="markdown max-w-none pb-6 text-base leading-relaxed text-slate-600"
                                 dangerouslySetInnerHTML={{
                                    __html: row.answer ?? "",
                                 }}
                              />
                           </div>
                        </div>
                     </div>
                  );
               })
            )}
         </div>
      </div>
   );
}
