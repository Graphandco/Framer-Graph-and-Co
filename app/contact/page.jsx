import ContactForm from "@/components/contact/ContactForm";
import ContactText from "@/components/contact/ContactText";
import Tabs from "@/components/contact/Tabs";
import PageHero from "@/components/ui/PageHero";

export const metadata = {
   title: "Contact Agence Web Alsace | Devis Gratuit Site Internet | Graph & Co",
   description:
      "Contactez Graph & Co, votre agence web en Alsace. Devis gratuit pour votre projet de site internet professionnel. Réponse rapide garantie.",
   openGraph: {
      title: "Contact Agence Web Alsace | Devis Gratuit Site Internet | Graph & Co",
      description:
         "Contactez Graph & Co, votre agence web en Alsace. Devis gratuit pour votre projet de site internet professionnel. Réponse rapide garantie.",
      url: "https://graphandco.com/contact",
      images: [
         {
            url: "https://graphandco.com/og-image.jpg",
            width: 1200,
            height: 630,
            alt: "Graph and Co - contact",
         },
      ],
      type: "website",
   },
};

const ContactPage = () => {
   return (
      <>
         <PageHero title="Contact" image="/contact/hero-contact.avif" />
         <div className="wrapper py-8 sm:py-16 space-y-6 xs:space-y-10">
            <h2 className="text-3xl">Une envie, un projet ?</h2>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-16 pb-10">
               <ContactText />
               <ContactForm />
            </div>
            <hr className="border-slate-300" />
            <Tabs />
         </div>
      </>
   );
};

export default ContactPage;
