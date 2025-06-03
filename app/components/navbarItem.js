'use client'
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarItem() {
  const pathname = usePathname();
  console.log("pathname:", pathname);
  
  return (
    <div className="hidden md:flex justify-evenly items-center gap-x-6">
      <Link href='/protected/introduction'>
        <div className={`${pathname === '/protected/introduction' ? 'bg-gradient-to-r from-[#00C5FF] to-[#0176FF]' : ''} px-3 py-1 rounded-md text-white text-[15px] relative group`}>
          브랜드 소개
          <span className={`absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-[#00C5FF] to-[#0176FF] group-hover:w-full transition-all duration-300 ${pathname === '/protected/introduction' ? 'hidden' : ''}`}></span>
        </div>
      </Link>
      <Link href='https://rebootdesign.co.kr' target="_blank">
        <div className={`${pathname === '/protected/design' ? 'bg-gradient-to-r from-[#00C5FF] to-[#0176FF]' : ''} px-3 py-1 rounded-md text-white text-[15px] relative group`}>
          리부트 디자인
          <span className={`absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-[#00C5FF] to-[#0176FF] group-hover:w-full transition-all duration-300 ${pathname === '/protected/design' ? 'hidden' : ''}`}></span>
        </div>
      </Link>
      <Link href='/protected/google'>
        <div className={`${pathname === '/protected/google' ? 'bg-gradient-to-r from-[#00C5FF] to-[#0176FF]' : ''} px-3 py-1 rounded-md text-white text-[15px] relative group`}>
          구글 광고 트레커
          <span className={`absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-[#00C5FF] to-[#0176FF] group-hover:w-full transition-all duration-300 ${pathname === '/protected/tools' ? 'hidden' : ''}`}></span>
        </div>
      </Link>
      <Link href='/protected/meta'>
        <div className={`${pathname === '/protected/meta' ? 'bg-gradient-to-r from-[#00C5FF] to-[#0176FF]' : ''} px-3 py-1 rounded-md text-white text-[15px] relative group`}>
          메타 광고 트레커
          <span className={`absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-[#00C5FF] to-[#0176FF] group-hover:w-full transition-all duration-300 ${pathname === '/protected/tools' ? 'hidden' : ''}`}></span>
        </div>
      </Link>
      <Link href='https://motiol-studio.notion.site/COMING-TO-YOU-LIVE-1e1a0a8f361380669287d3c524d7d933?pvs=4' target="_blank">
        <div className={`${pathname === '/protected/archive' ? 'bg-gradient-to-r from-[#00C5FF] to-[#0176FF]' : ''} px-3 py-1 rounded-md text-white text-[15px] relative group`}>
          아카이빙 자료
          <span className={`absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-[#00C5FF] to-[#0176FF] group-hover:w-full transition-all duration-300 ${pathname === '/protected' ? 'hidden' : ''}`}></span>
        </div>
      </Link>
      {/* <Link href='/protected/insight'>
        <div className={`${pathname === '/protected/insight' ? 'bg-gradient-to-r from-[#00C5FF] to-[#0176FF]' : ''} px-3 py-1 rounded-md text-white text-[15px] relative group`}>
          내부 인사이트
          <span className={`absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-[#00C5FF] to-[#0176FF] group-hover:w-full transition-all duration-300 ${pathname === '/protected/insight' ? 'hidden' : ''}`}></span>
        </div>
      </Link> */}
    </div>
  );
}
