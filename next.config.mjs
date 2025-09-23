import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
   // Configuration MDX existante
   pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

   // Redirects existants
   async redirects() {
      return [
         {
            source: "/realisations/:path*", // toutes les pages sous /realisations/...
            destination: "/projets",
            permanent: true, // 301
         },
         {
            source: "/realisations", // la page /realisations elle-même
            destination: "/projets",
            permanent: true,
         },
      ];
   },

   // 🚀 NOUVELLES OPTIMISATIONS DE PERFORMANCE
   experimental: {
      optimizeCss: true, // Active l'optimisation CSS
      cssChunking: "strict", // Chunking CSS optimisé
   },

   // Compression et optimisations générales
   compress: true,
   poweredByHeader: false,

   // Optimisations webpack pour CSS
   webpack: (config, { dev, isServer }) => {
      if (!dev && !isServer) {
         // Optimisation CSS en production
         config.optimization.splitChunks.cacheGroups.styles = {
            name: "styles",
            test: /\.(css|scss|sass)$/,
            chunks: "all",
            enforce: true,
         };
      }
      return config;
   },

   // Headers de performance (optionnel)
   async headers() {
      return [
         {
            source: "/_next/static/css/(.*)",
            headers: [
               {
                  key: "Cache-Control",
                  value: "public, max-age=31536000, immutable",
               },
            ],
         },
      ];
   },
};

const withMDX = createMDX({
   // Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
