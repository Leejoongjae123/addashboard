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
      <h1 className="text-4xl font-bold text-center">로그인</h1>

      <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8 w-1/2">
        <Label htmlFor="email">이메일</Label>
        <Input name="email" placeholder="이메일을 입력해주세요" required />
        <div className="flex justify-between items-center">
          <Label htmlFor="password">비밀번호</Label>
          
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
    </form>
  );
}
