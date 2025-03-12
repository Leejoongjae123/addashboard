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
        <div className={`${pathname === '/protected/introduction' ? 'bg-gradient-to-r from-[#00C5FF] to-[#0176FF]' : ''} px-3 py-1 rounded-md text-white text-[15px]`}>브랜드 소개</div>
      </Link>
      <Link href='/protected/brand'>
        <div className={`${pathname === '/protected/brand' ? 'bg-gradient-to-r from-[#00C5FF] to-[#0176FF]' : ''} px-3 py-1 rounded-md text-white text-[15px]`}>리부트 디자인</div>
      </Link>
      <Link href='/protected/tools'>
        <div className={`${pathname === '/protected/tools' ? 'bg-gradient-to-r from-[#00C5FF] to-[#0176FF]' : ''} px-3 py-1 rounded-md text-white text-[15px]`}>자주 사용하는 도구</div>
      </Link>
      <Link href='/protected/archive'>
        <div className={`${pathname === '/protected/archive' ? 'bg-gradient-to-r from-[#00C5FF] to-[#0176FF]' : ''} px-3 py-1 rounded-md text-white text-[15px]`}>아카이빙 자료</div>
      </Link>
      <Link href='/protected/insight'>
        <div className={`${pathname === '/protected/insight' ? 'bg-gradient-to-r from-[#00C5FF] to-[#0176FF]' : ''} px-3 py-1 rounded-md text-white text-[15px]`}>내부 인사이트</div>
      </Link>
    </div>
  );
}
