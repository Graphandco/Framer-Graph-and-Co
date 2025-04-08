import Button from "../ui/Button";

const BlogFilter = ({ activeCategory, setActiveCategory }) => {
	const categories = ["tous", "tech"];

	return (
		<div className="sticky top-0 z-20 py-6 flex flex-wrap justify-center gap-2 sm:gap-4">
			{categories.map((category) => (
				<Button
					key={category}
					small
					muted={activeCategory === category}
					black={activeCategory !== category}
					onClick={() => setActiveCategory(category)}
					icon={null}
				>
					{category}
				</Button>
			))}
		</div>
	);
};

export default BlogFilter;
