"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import HighlightedSection from "./HighlightedSection";
import FeatureSection from "./FeatureSection";

function ContentProductionProblems() {
  return (
    <article className="w-full h-full">
      <SectionHeader />

      {/* Divider */}
      <div className="mx-auto my-10 w-px h-[150px] md:h-[623px] bg-black" />

      {/* Planning Section */}
      <h2 className="mb-16 text-[35px] md:text-[70px] text-center font-bold">
        기획안과 레퍼런스 구상
      </h2>

      <HighlightedSection />
      <FeatureSection />
    </article>
  );
}

export default ContentProductionProblems;
