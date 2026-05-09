"use client";
import FadeInOnView from "../ui/FadeInOnView";
import { GiStrong } from "react-icons/gi";
import { BsRocketTakeoffFill } from "react-icons/bs";

const UserWithIcon = ({ data }) => {
   return (
      <div className="bg-black text-white">
         <div className="wrapper flex flex-col xs:flex-row gap-10 items-start py-12">
            <FadeInOnView delay={0.25} once={true}>
               <div className="flex flex-col sm:flex-row items-center gap-3 text-white">
                  <GiStrong className="text-6xl" />
                  <div className="">{data.user_text1}</div>
               </div>
            </FadeInOnView>
            <FadeInOnView delay={0.5} once={true}>
               <div className="flex flex-col sm:flex-row items-center gap-3">
                  <BsRocketTakeoffFill className="text-6xl" />
                  <div className="">{data.user_text2}</div>
               </div>
            </FadeInOnView>
         </div>
      </div>
   );
};

export default UserWithIcon;
