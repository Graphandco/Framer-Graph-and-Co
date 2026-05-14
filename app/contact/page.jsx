import ContactForm from "@/components/contact/ContactForm";
import ContactText from "@/components/contact/ContactText";
import Tabs from "@/components/contact/Tabs";
import PageHero from "@/components/ui/PageHero";
import { getWordpressContent } from "@/actions/getWordpressContent";
import { CONTACT_QUERY } from "@/actions/queries/contactQuery";

const pageData = await getWordpressContent({
   query: CONTACT_QUERY,
   variables: { id: 342 },
   rootField: "page",
});

export const metadata = {
   title:
      pageData.seo.title ||
      "Contact Agence Web Colmar - Devis Gratuit Site Internet | Graph & Co",
   description:
      pageData.seo.metaDesc ||
      "Contactez Graph & Co, votre agence web à Colmar. Devis gratuit pour votre projet de site internet professionnel. Réponse rapide garantie.",
   robots: {
      index: pageData.seo?.metaRobotsNoindex !== "noindex",
      follow: pageData.seo?.metaRobotsNofollow !== "nofollow",
   },
   alternates: {
      canonical: "https://graphandco.com/contact",
   },
   openGraph: {
      title:
         pageData.seo.title ||
         "Contact Agence Web Colmar - Devis Gratuit Site Internet | Graph & Co",
      description:
         pageData.seo.metaDesc ||
         "Contactez Graph & Co, votre agence web à Colmar. Devis gratuit pour votre projet de site internet professionnel. Réponse rapide garantie.",
      url: "https://graphandco.com/contact",
      images: [
         {
            url: "https://graphandco.com/og-image.jpg",
            width: 1200,
            height: 630,
            alt: "Graph & Co - contact",
         },
      ],
      type: "website",
   },
};

const faqItems = Array.isArray(pageData?.faq?.item) ? pageData.faq.item : [];

const ContactPage = () => {
   return (
      <>
         <PageHero
            title={pageData.title}
            image={pageData.featuredImage.node.sourceUrl}
         />
         <div className="wrapper py-8 sm:py-16 space-y-6 xs:space-y-10">
            <h2 className="text-3xl">Une envie, un projet ?</h2>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-16 pb-10">
               <ContactText pageData={pageData} />
               <ContactForm />
            </div>
            <hr className="border-slate-300" />
            <Tabs items={faqItems} />
         </div>
      </>
   );
};

export default ContactPage;
