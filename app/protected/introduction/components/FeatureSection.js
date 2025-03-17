import React from "react";
import FeatureCard from "./FeatureCard";

function FeatureSection() {
  const features = [
    {
      title: "주 2회 업데이트",
      description: "월요일/목요일 자사에서 제공되는 레퍼런스 업데이트",
      image: "/images/icon1.png",
      
    },
    {
      title: "고효율 광고 확인",
      description: "광고 잘 만드는 광고주만 쏙! 고효율 광고 모음집",
      image: "/images/icon2.png",
    },
    {
      title: "찾기 쉬운 서비스",
      description: "레퍼런스 찾기 쉽게끔 하려고 열심히 구성하고 있습니다.",
      image: "/images/icon3.png",
    },
  ];

  return (
    <section className="text-center">
      <div className="flex flex-col items-center justify-center my-12 md:my-24">
        <div className="text-[30px] md:text-[60px] font-bold">애드트래커라면</div>
        <div className="text-[30px] md:text-[60px] font-bold bg-gradient-to-r from-[#01D0FF] to-[#0167FF] text-transparent bg-clip-text">
          레퍼런스 걱정 끝!
        </div>
      </div>

      <div className="flex gap-[28px] justify-center items-center flex-col md:flex-row">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            image={feature.image}
          />
        ))}
      </div>

      <button className="bg-[#006FEE] w-[90%] max-w-[368px]  rounded-full text-[20px] md:text-[23px] font-bold text-white mb-24 mt-12 md:mt-[125px] p-3">
        애드트래커 문의 ▶
      </button>
    </section>
  );
}

export default FeatureSection;
