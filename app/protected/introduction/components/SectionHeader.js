import React from "react";

function SectionHeader() {
  return (
    <header className="mb-10 text-center mt-12">
      <p className="mb-5 text-[16px] md:text-[32px] text-zinc-800">Content Production Problems</p>
      <h1 className="text-[35px] md:text-[70px] font-bold ">
        <span>소재 제작의</span>
        <div className="bg-gradient-to-r from-[#016BFF] to-[#01C2FF] text-transparent bg-clip-text">가장 큰 문제점은?</div>
      </h1>
    </header>
  );
}

export default SectionHeader;
