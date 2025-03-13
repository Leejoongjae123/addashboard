import React from "react";
import Image from "next/image";
function SectionHeader() {
  return (
    <div className="text-center flex flex-col items-center justify-center w-[100vw] aspect-[1920/570] relative">
      <div>
        <Image src="/images/top.png" alt="icon1" fill />
      </div>
      <div className="relative">
        <p className="mb-5 text-[16px] md:text-[32px] text-white"></p>
        <h1 className="text-[27px] md:text-[55px] font-bold text-white">
          <div>
            소재 제작의{" "}
            <span className="bg-gradient-to-r from-[#016BFF] to-[#01C2FF] text-transparent bg-clip-text">
              가장 큰 문제점
            </span>
          </div>
          <div className="text-[27px] md:text-[55px] font-bold text-white">
            기획안과 레퍼런스 구상
          </div>
        </h1>
      </div>
    </div>
  );
}

export default SectionHeader;
