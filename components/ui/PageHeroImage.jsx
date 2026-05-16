"use client";

import { useState } from "react";
import Image from "next/image";

export default function PageHeroImage({ src, alt, position = "center" }) {
   const [loaded, setLoaded] = useState(false);

   return (
      <Image
         src={src}
         alt={alt}
         fill
         priority
         sizes="100vw"
         onLoad={() => setLoaded(true)}
         className={`object-cover object-${position} transition-opacity duration-500 ease-out ${
            loaded ? "opacity-100" : "opacity-0"
         }`}
      />
   );
}
