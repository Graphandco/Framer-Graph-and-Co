import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "markdown/projets");

export function getAllPostsData() {
	const fileNames = fs.readdirSync(postsDirectory);

	const allPostsData = fileNames.map((fileName) => {
		const slug = fileName.replace(/\.mdx$/, "");
		const fullPath = path.join(postsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, "utf8");
		const { data: metadata, content } = matter(fileContents);

		return {
			slug,
			metadata,
			content,
		};
	});

	return allPostsData;
}
