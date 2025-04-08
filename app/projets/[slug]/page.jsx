import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ProjetSingle from "@/components/projets/ProjetSingle";

export async function generateMetadata({ params }) {
	const { slug } = params;
	const filePath = path.join(
		process.cwd(),
		"markdown/projets",
		`${slug}.mdx`
	);
	const fileContent = fs.readFileSync(filePath, "utf-8");
	const { data } = matter(fileContent);
	return {
		title: `${data.title} | Graph and Co`,
		description: data.metadesc || "Découvrez nos projets.",
		openGraph: {
			title: `${data.title} | Graph and Co`,
			description: data.metadesc,
			url: `https://graphandco.com/projets/${slug}`,
			type: "article",
			siteName: "Graph and Co",
			images: [
				{
					url: `https://graphandco.com/projets/${data.image}`,
					width: 1200,
					height: 630,
					alt: data.title,
				},
			],
		},
	};
}

export default async function Page({ params }) {
	const { slug } = await params;

	// 📌 Charger le fichier MDX
	const filePath = path.join(
		process.cwd(),
		"markdown/projets",
		`${slug}.mdx`
	);
	const fileContent = fs.readFileSync(filePath, "utf-8");

	return (
		<>
			<ProjetSingle fileContent={fileContent} />
		</>
	);
}

export function generateStaticParams() {
	const dirPath = path.join(process.cwd(), "markdown/projets");
	const files = fs.readdirSync(dirPath);

	return files
		.filter((file) => file.endsWith(".mdx"))
		.map((file) => ({
			slug: file.replace(/\.mdx$/, ""),
		}));
}

export const dynamicParams = true;
