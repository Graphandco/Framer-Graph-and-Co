import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Supporte les fichiers .md et .mdx
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

	reactStrictMode: true, // Warnings supplémentaires en dev
	swcMinify: true, // Minification ultra rapide
	compress: true, // Compression gzip/brotli
	images: {
		formats: ["image/avif", "image/webp"],
		domains: ["yourdomain.com"], //
	},
	experimental: {
		legacyBrowsers: false, // Build uniquement pour navigateurs modernes
		optimizeCss: true,
	},
	poweredByHeader: false, // Supprime "X-Powered-By: Next.js"

	async headers() {
		return [
			{
				source: "/(.*)",
				headers: [
					{
						key: "Strict-Transport-Security",
						value: "max-age=63072000; includeSubDomains; preload",
					},
					{ key: "X-Content-Type-Options", value: "nosniff" },
					{ key: "X-Frame-Options", value: "DENY" },
					{
						key: "Referrer-Policy",
						value: "strict-origin-when-cross-origin",
					},
					{
						key: "Permissions-Policy",
						value: "geolocation=(), microphone=(), camera=()",
					},
				],
			},
		];
	},
};

// Intégration avec MDX
const withMDX = createMDX({
	// Ajouter remark/rehype plugins...
});

export default withMDX(nextConfig);
