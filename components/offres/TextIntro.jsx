"use client";
import FadeInOnView from "../ui/FadeInOnView";
import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";

const TextIntro = ({ data }) => {
   const containerRef = useRef(null);
   const videoRef = useRef(null);
   const isInView = useInView(containerRef, { once: false, amount: 0.3 });

   useEffect(() => {
      if (videoRef.current) {
         if (isInView) {
            // Démarre la vidéo quand la section est visible
            videoRef.current.play().catch((error) => {
               console.warn("Erreur lors de la lecture de la vidéo:", error);
            });
         } else {
            // Met en pause la vidéo quand elle n'est plus visible (optionnel)
            // videoRef.current.pause();
         }
      }
   }, [isInView]);

   return (
      <section>
         {/* 
			<div className="wrapper py-12 bg-black/5 grid">
				<div className="text-10xl">
					Voici un long texte 10xl pour voir le retour à la ligne
				</div>
				<div className="text-9xl">
					Voici un long texte 9xl pour voir le retour à la ligne
				</div>
				<div className="text-8xl">
					Voici un long texte 8xl pour voir le retour à la ligne
				</div>
				<div className="text-7xl">
					Voici un long texte 7xl pour voir le retour à la ligne
				</div>
				<div className="text-6xl">
					Voici un long texte 6xl pour voir le retour à la ligne
				</div>
				<div className="text-5xl">
					Voici un long texte 5xl pour voir le retour à la ligne
				</div>
				<div className="text-4xl">
					Voici un long texte 4xl pour voir le retour à la ligne
				</div>
				<div className="text-3xl">
					Voici un long texte 3xl pour voir le retour à la ligne
				</div>
				<div className="text-2xl">
					Voici un long texte 2xl pour voir le retour à la ligne
				</div>
				<div className="text-xl">
					Voici un long texte xl pour voir le retour à la ligne
				</div>
				<div className="text-lg">
					Voici un long texte lg pour voir le retour à la ligne
				</div>
				<div className="">
					Voici un long texte normale pour voir le retour à la ligne
				</div>
			</div>
          */}
         <div
            className="py-8 sm:py-16 relative border-b border-white/20"
            ref={containerRef}
         >
            <video
               ref={videoRef}
               className="absolute inset-0 w-full h-full object-cover"
               preload="auto"
               muted
               playsInline
            >
               <source src="/smoke-video.mp4" type="video/mp4" />
               Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
            <div
               className="wrapper prose relative z-10 text-white mix-blend-difference"
               dangerouslySetInnerHTML={{
                  __html: data.content,
               }}
            />
            {/* <p className="text-3xl mb-8">
               Réalisons ensemble votre site, doté de toutes les fonctionnalités
               dont vous et vos clients avez besoin.
            </p>
            <p className="text-lg font-medium">
               <span className="text-foreground/70 mr-1">
                  Selon votre profil et votre budget, plusieurs options
                  s’offrent à vous.
               </span>
               Quel que soit le pack choisi, votre site sera personnalisé pour
               épouser vos besoins et ceux de vos clients.
               <span className="text-foreground/70 ml-1">
                  Dans le futur, il sera envisageable de développer de nouvelles
                  fonctionnalités pour l’adapter aux évolutions de votre
                  activité.
               </span>
            </p> */}
         </div>
      </section>
   );
};

export default TextIntro;
