"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@heroui/react";
import { signOutAction } from "@/app/actions";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNavMenu({ user }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="relative">
      <button 
        className="p-2 bg-black text-white rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {isOpen && (
        <div className="fixed top-[64px] left-0 right-0 w-full bg-black text-white shadow-lg transition-all duration-300 ease-in-out z-50">
          <div className="flex flex-col w-full py-4 px-4">
            <div className="py-3 border-b border-gray-700">
              <span className="font-bold text-white">사용자</span>
            </div>
            <div className="py-3">
              <form action={signOutAction}>
                <Button type="submit" color="primary" className="w-full">
                  로그아웃
                </Button>
              </form>
            </div>
            <div className="py-3 border-t border-gray-700">
              <Link href='/protected/introduction'>
                <div className={`${pathname === '/protected/introduction' ? 'bg-gradient-to-r from-[#00C5FF] to-[#0176FF]' : ''} px-3 py-2 rounded-md text-white text-[15px] my-2`}>브랜드 소개</div>
              </Link>
              <Link href='/protected/brand'>
                <div className={`${pathname === '/protected/brand' ? 'bg-gradient-to-r from-[#00C5FF] to-[#0176FF]' : ''} px-3 py-2 rounded-md text-white text-[15px] my-2`}>리부트 디자인</div>
              </Link>
              <Link href='/protected/tools'>
                <div className={`${pathname === '/protected/tools' ? 'bg-gradient-to-r from-[#00C5FF] to-[#0176FF]' : ''} px-3 py-2 rounded-md text-white text-[15px] my-2`}>자주 사용하는 도구</div>
              </Link>
              <Link href='/protected/archive'>
                <div className={`${pathname === '/protected/archive' ? 'bg-gradient-to-r from-[#00C5FF] to-[#0176FF]' : ''} px-3 py-2 rounded-md text-white text-[15px] my-2`}>아카이빙 자료</div>
              </Link>
              <Link href='/protected/insight'>
                <div className={`${pathname === '/protected/insight' ? 'bg-gradient-to-r from-[#00C5FF] to-[#0176FF]' : ''} px-3 py-2 rounded-md text-white text-[15px] my-2`}>내부 인사이트</div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}