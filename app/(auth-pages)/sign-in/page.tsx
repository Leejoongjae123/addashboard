import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Button } from "@heroui/react";
export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;
  return (
    <form className="flex flex-col w-full h-[calc(100vh-4rem)] justify-center items-center">
      <div className="w-full max-w-[600px] aspect-[6/5] flex flex-col items-center justify-center bg-white rounded-3xl p-10 border-[3px] border-[#c8c8c8]">
        <div className="text-4xl font-bold text-center">
          <p className="text-black">안녕하세요!</p>
          <p className="text-black"><span className="bg-gradient-to-r from-[#017CFE] to-[#01C5FE] text-transparent bg-clip-text">애드트레커</span>입니다.</p>
          </div>


        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8 w-2/3">
          <Label htmlFor="email" className="text-[16px]">이메일</Label>
          <Input name="email" placeholder="이메일을 입력해주세요" required />
          <div className="flex justify-between items-center">
            <Label htmlFor="password" className="text-[16px]">비밀번호</Label>
          </div>
          <Input
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요"
            required
          />
          <SubmitButton pendingText="로그인 중..." formAction={signInAction}>
            로그인
          </SubmitButton>
          <FormMessage message={searchParams} />
        </div>
      </div>
    </form>
  );
}
