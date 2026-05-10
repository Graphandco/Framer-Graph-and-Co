import Button from "../ui/Button";

/** Valeurs ACF (stockées en WP) + libellés affichés */
const CATEGORIES = [
   { value: "tous", label: "tous" },
   { value: "vitrine", label: "Vitrine" },
   { value: "ecommerce", label: "eCommerce" },
   { value: "mockup", label: "Mockup" },
];

const ProjetsFilter = ({ activeCategory, setActiveCategory }) => {
   return (
      <div className="sticky top-0 z-20 flex flex-wrap justify-center gap-2 py-6 sm:gap-4">
         {CATEGORIES.map(({ value, label }) => (
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

export default ProjetsFilter;
