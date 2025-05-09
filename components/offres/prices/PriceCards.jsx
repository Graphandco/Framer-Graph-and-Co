import data from "./data";
import PriceCard from "./PriceCard";
import TextIntro from "@/markdown/offres/text-intro.mdx";

const PriceCards = () => {
	return (
		<section className="bg-black text-white">
			<div className="wrapper py-8 sm:py-16">
				<div className="mb-12 space-y-3">
					<h2 className="text-center leading-tight sm:leading-tight text-5xl md:leading-tight">
						Trouvez le pack qui vous correspond !
					</h2>
					<div className="markdown offres-intro py-5 text-white/70">
						<TextIntro />
					</div>
				</div>
				<div className="grid grid-cols-1 gap-6 xs:grid-cols-2 md:grid-cols-4">
					{data.map((pack, index) => (
						<PriceCard pack={pack} key={index} />
					))}
				</div>
			</div>
		</section>
	);
};

export default PriceCards;
