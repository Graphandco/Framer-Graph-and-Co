"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function BodyClassHandler() {
   const pathname = usePathname(); // Récupère le pathname actuel

   useEffect(() => {
      const id = pathname === "/" ? "home" : `${pathname.replace(/\//g, "")}`;
      document.body.id = id;
   }, [pathname]);

   return null; // Ce composant n'affiche rien, il modifie juste le body
}
