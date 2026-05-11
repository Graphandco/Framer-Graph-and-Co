"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger);

/** Polices next/font (`layout.js`) — corps : Outfit, titres : Urbanist */
const APP_FONT_FAMILIES = ["Outfit", "Urbanist"];

const GENERIC_FONT_KEYWORDS = new Set([
   "serif",
   "sans-serif",
   "monospace",
   "system-ui",
   "ui-sans-serif",
   "ui-serif",
   "ui-monospace",
   "cursive",
   "fantasy",
   "emoji",
]);

function parseFontFamilyList(fontFamily) {
   if (!fontFamily) return [];
   return fontFamily
      .split(",")
      .map((part) => part.trim().replace(/^["']|["']$/g, ""))
      .filter(Boolean);
}

/** Familles à charger : polices du thème + celles réellement appliquées aux blocs découpés */
function familiesToLoad(elements) {
   const names = new Set(APP_FONT_FAMILIES);
   for (const el of elements) {
      for (const name of parseFontFamilyList(
         getComputedStyle(el).fontFamily,
      )) {
         if (!GENERIC_FONT_KEYWORDS.has(name.toLowerCase())) {
            names.add(name);
         }
      }
   }
   return [...names];
}

/**
 * Attend le chargement des polices pour que SplitText mesure correctement
 * (évite le warning GSAP « called before fonts loaded »).
 */
async function waitForFontsBeforeSplit(elements) {
   if (typeof document === "undefined" || !document.fonts?.ready) return;

   await document.fonts.ready;

   const families = familiesToLoad(elements);
   await Promise.all(
      families.map((family) =>
         document.fonts.load(`1rem ${family}`).catch(() => []),
      ),
   );

   await new Promise((resolve) => {
      requestAnimationFrame(() => requestAnimationFrame(resolve));
   });
}

export default function SplitLineText({
   children,
   animateOnScroll = true,
   delay = 0,
}) {
   const containerRef = useRef(null);
   const elementRefs = useRef([]);
   const splitRefs = useRef([]);
   const lines = useRef([]);

   useGSAP(
      () => {
         if (!containerRef.current) return;

         let cancelled = false;

         const initializeSplitText = async () => {
            if (!containerRef.current) return;

            splitRefs.current = [];
            lines.current = [];
            elementRefs.current = [];

            let elements = [];
            if (containerRef.current.hasAttribute("data-copy-wrapper")) {
               elements = Array.from(containerRef.current.children);
            } else {
               const textBlocks = Array.from(
                  containerRef.current.querySelectorAll(
                     "p, li, h1, h2, h3, h4, h5, h6, blockquote",
                  ),
               );
               elements =
                  textBlocks.length > 0 ? textBlocks : [containerRef.current];
            }

            await waitForFontsBeforeSplit(elements);
            if (cancelled || !containerRef.current) return;

            for (const element of elements) {
               if (cancelled || !containerRef.current) return;

               elementRefs.current.push(element);

               const split = SplitText.create(element, {
                  type: "lines",
                  mask: "lines",
                  linesClass: "line++",
                  lineThreshold: 0.1,
               });

               splitRefs.current.push(split);

               const computedStyle = window.getComputedStyle(element);
               const textIndent = computedStyle.textIndent;

               if (textIndent && textIndent !== "0px") {
                  if (split.lines.length > 0) {
                     split.lines[0].style.paddingLeft = textIndent;
                  }
                  element.style.textIndent = "0";
               }

               split.lines.forEach((line) => {
                  line.classList.add("relative", "will-change-transform");
               });

               lines.current.push(...split.lines);
            }

            if (cancelled || !lines.current.length) return;

            gsap.set(lines.current, { y: "100%" });

            const animationProps = {
               y: "0%",
               duration: 1,
               stagger: 0.1,
               ease: "power4.out",
               delay: delay,
            };

            if (animateOnScroll) {
               gsap.to(lines.current, {
                  ...animationProps,
                  scrollTrigger: {
                     trigger: containerRef.current,
                     start: "top 90%",
                     once: true,
                  },
               });
            } else {
               gsap.to(lines.current, animationProps);
            }
         };

         initializeSplitText();

         return () => {
            cancelled = true;
            gsap.killTweensOf(lines.current);
            splitRefs.current.forEach((split) => {
               if (split) {
                  split.revert();
               }
            });
            splitRefs.current = [];
            lines.current = [];
         };
      },
      { scope: containerRef, dependencies: [animateOnScroll, delay] },
   );

   if (React.Children.count(children) === 1) {
      return React.cloneElement(children, { ref: containerRef });
   }

   return (
      <div ref={containerRef} data-copy-wrapper="true">
         {children}
      </div>
   );
}
