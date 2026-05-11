import Image from "next/image";

const ContactText = ({ pageData }) => {
   return (
      <div>
         <Image
            src="/contact/regis-avatar.avif"
            width={100}
            height={100}
            alt="Avatar Régis"
            className="aspect-square rounded-full object-cover float-left mr-6 mb-1 outline-2 outline-primary outline-offset-3"
            style={{ shapeOutside: "circle(50%)" }}
         />
         <div
            className="text-justify xs:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: pageData.content }}
         />
      </div>
   );
};

export default ContactText;
