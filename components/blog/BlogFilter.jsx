import Button from "../ui/Button";

/**
 * @param {{
 *   categories: { value: string, label: string }[];
 *   activeCategory: string;
 *   setActiveCategory: (v: string) => void;
 * }} props
 */
const BlogFilter = ({ categories, activeCategory, setActiveCategory }) => {
   return (
      <div className="sticky top-0 z-20 py-6 flex flex-wrap justify-center gap-2 sm:gap-4">
         {categories.map(({ value, label }) => (
            <Button
               key={value}
               small
               muted={activeCategory === value}
               black={activeCategory !== value}
               onClick={() => setActiveCategory(value)}
               icon={null}
            >
               {label}
            </Button>
         ))}
      </div>
   );
};

export default BlogFilter;
