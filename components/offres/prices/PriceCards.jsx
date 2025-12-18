import PriceCard from "./PriceCard";

const PriceCards = ({ data, packs }) => {
   return (
      <section className="bg-black text-white">
         <div className="wrapper py-8 sm:py-16">
            <div className="mb-12 space-y-3">
               <h2 className="text-center leading-tight sm:leading-tight text-5xl md:leading-tight">
                  {data.pack_title}
               </h2>

               <div
                  className="prose py-5 text-white/80"
                  dangerouslySetInnerHTML={{
                     __html: data.pack_description,
                  }}
               />
            </div>
            <div className="grid grid-cols-1 gap-6 xs:grid-cols-2 md:grid-cols-4">
               {packs.map((pack) => (
                  <PriceCard pack={pack} key={pack.id} />
               ))}
            </div>
         </div>
      </section>
   );
};

export default PriceCards;
