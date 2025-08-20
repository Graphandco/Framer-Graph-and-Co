import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
   // Configure `pageExtensions` to include markdown and MDX files
   pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

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
};

const withMDX = createMDX({
   // Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
