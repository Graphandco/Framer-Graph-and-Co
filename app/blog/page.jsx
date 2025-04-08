import PageHero from "@/components/ui/PageHero";
import { getMdxData } from "@/utils/mdxUtils";
import BlogList from "@/components/blog/BlogList";

export default async function BlogPage() {
	const data = await getMdxData("markdown/blog");
	return (
		<>
			<PageHero title="Le blog" image="/blog/blog-hero.avif" />
			<section className="bg-black/5">
				<BlogList blog={data} />
			</section>
		</>
	);
}
