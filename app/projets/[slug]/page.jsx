import fs from "fs";
import path from "path";

import Link from "next/link";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import ProjetSingle from "@/components/projets/ProjetSingle";

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
	return [{ slug: "welcome" }, { slug: "about" }];
}

export const dynamicParams = true;
