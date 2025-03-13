import React from "react";
import Image from "next/image";
function HighlightedSection() {
  return (
    <section className="w-[100vw] text-center bg-gray-50 h-full md:h-[426px] flex flex-col md:flex-row justify-evenly  items-center">
      <div className="flex flex-col items-center justify-center text-[27px] md:text-[55px]">
        <div className="flex flex-col items-center md:items-start justify-center gap-y-2">
          <p className="font-bold">이 문제만 해결되면</p>
          <p className="font-bold ">
            <span className="text-[#006FEE]">*ROAS</span>
            <span>금방 올리는 거죠!</span>
          </p>
          <p className="mb-8 text-xs text-[#A1A1A1] text-[15px] md:text-[25px]">
            *광고비 대비 수익률
          </p>
        </div>
        
      </div>

      <div className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] relative">
        <Image src="/images/chart.png" alt="Blue chart bars" fill />
      </div>
    </section>
  );
}

export default HighlightedSection;
