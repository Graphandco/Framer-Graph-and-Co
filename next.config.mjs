import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
   pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

   async redirects() {
      return [
         {
            source: "/realisations/:path*",
            destination: "/projets",
            permanent: true,
         },
         {
            source: "/realisations",
            destination: "/projets",
            permanent: true,
         },
      ];
   },

   // 🚀 OPTIMISATIONS JAVASCRIPT MODERNES
   experimental: {
      // optimizeCss: true, // Commenté si problème avec critters
      cssChunking: "strict",

      // Optimisations JavaScript modernes
      esmExternals: true, // Utilise les modules ES natifs
      serverComponentsExternalPackages: [], // Optimise les server components
   },

   // Configuration de transpilation moderne
   transpilePackages: [], // Évite la transpilation inutile

   // Support des navigateurs modernes
   compiler: {
      // Supprime les console.log en production
      removeConsole: process.env.NODE_ENV === "production",
   },

   compress: true,
   poweredByHeader: false,

   webpack: (config, { dev, isServer }) => {
      if (!dev && !isServer) {
         // Optimisation JavaScript moderne
         config.resolve.alias = {
            ...config.resolve.alias,
            // Utilise les versions ES modules quand disponibles
            "framer-motion": "framer-motion/dist/es",
         };

         // Target ES2020+ pour éviter la transpilation
         config.target = ["web", "es2020"];

         // Optimisation des chunks
         config.optimization.splitChunks.cacheGroups = {
            ...config.optimization.splitChunks.cacheGroups,

            // Chunk moderne pour les navigateurs récents
            modern: {
               name: "modern",
               test: /[\\/]node_modules[\\/]/,
               chunks: "all",
               priority: 30,
               reuseExistingChunk: true,
            },

            styles: {
               name: "styles",
               test: /\.(css|scss|sass)$/,
               chunks: "all",
               enforce: true,
            },
         };

         // Tree shaking agressif
         config.optimization.usedExports = true;
         config.optimization.sideEffects = false;
      }
      return config;
   },

   async headers() {
      return [
         {
            source: "/_next/static/chunks/(.*)",
            headers: [
               {
                  key: "Cache-Control",
                  value: "public, max-age=31536000, immutable",
               },
            ],
         },
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

const withMDX = createMDX({});
export default withMDX(nextConfig);
