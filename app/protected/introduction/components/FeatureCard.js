import React from "react";
import Image from "next/image";
function FeatureCard({ title, description, image }) {
  return (
    <article className="w-[90%] md:w-1/3 max-w-[349px] aspect-[349/432] bg-[#EDEDED] rounded-2xl flex flex-col items-center justify-center p-8 gap-y-4">
      <Image src={image} alt={title} width={200} height={200} />
      <div className="flex flex-col items-center justify-center gap-y-4">
        <h3 className="text-[24px] md:text-[35px] font-bold">{title}</h3>
        <p className="text-[15px] md:text-[20px] text-[#797979] font-normal">{description}</p>
      </div>
    </article>
  );
}

export default FeatureCard;
