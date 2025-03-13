import React from "react";
import Image from "next/image";
function FeatureCard({ title, description, image }) {
  return (
    <article className="w-[90%] md:w-1/3 max-w-[435px] aspect-[1/1] bg-[#EDEDED] rounded-2xl flex flex-col items-center justify-center p-8 gap-y-4">
      <Image src={image} alt={title} width={200} height={200} />
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-[30px] md:text-[35px] font-bold">{title}</h3>
        <p className="text-[20px] md:text-[25px] text-[#797979] font-normal">{description}</p>
      </div>
    </article>
  );
}

export default FeatureCard;
