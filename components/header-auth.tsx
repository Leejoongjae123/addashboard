import { signOutAction } from "@/app/actions";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "@heroui/react";
import { createClient } from "@/utils/supabase/server";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import MobileNavMenu from "./mobile-nav-menu";

export default async function AuthButton() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!hasEnvVars) {
    return (
      <>
        <div className="flex gap-4 items-center">
          <div>
            <Badge
              variant={"default"}
              className="font-normal pointer-events-none"
            >
              Please update .env.local file with anon key and url
            </Badge>
          </div>
          <div className="flex gap-2">
            <Button
              
              size="sm"
              
              disabled
              className="opacity-75 cursor-none pointer-events-none text-[17px]"
            >
              <Link href="/sign-in">로그인</Link>
            </Button>
            <Button
              
              size="sm"
              
              disabled
              className="opacity-75 cursor-none pointer-events-none"
            >
              <Link href="/sign-up">Sign up</Link>
            </Button>
          </div>
        </div>
      </>
    );
  }
  return user ? (
    <>
      {/* 데스크탑 뷰 (md 이상) */}
      <div className="hidden md:flex items-center gap-4">
        <span className="text-medium font-bold text-white">사용자</span>
        <form action={signOutAction}>
          <Button type="submit" color="primary">
            로그아웃
          </Button>
        </form>
      </div>
      
      {/* 모바일 뷰 (md 미만) - 햄버거 메뉴 */}
      <div className="flex md:hidden">
        <MobileNavMenu user={user} />
      </div>
    </>
  ) : (
    <div className="flex gap-2">
      <Button size="sm" color="primary" className="text-[17px]">
        <Link href="/sign-in">로그인</Link>
      </Button>
    </div>
  );
}
