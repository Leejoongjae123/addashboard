import FetchDataSteps from "@/components/tutorial/fetch-data-steps";
import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";
import SearchBar from "./components/SearchBar";
import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import { Pagination } from "@heroui/react";
import CardSections from "./components/CardSections";
export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <>
      <div className="flex flex-col w-full mt-24 mb-12 gap-y-6 justify-center items-center">
        <div className="text-5xl font-extrabold text-black col-span-12">
          애드트레커 <span className="text-5xl font-bold bg-gradient-to-r from-[#0dccff] to-[#4760ff] bg-clip-text text-transparent">1.0</span>
        </div>
        <div className="text-2xl font-bold text-[#757575] col-span-12">효율적인 광고 맞춤형 전략 솔루션</div>
        {/* <div className="col-span-12 md:col-span-6 flex flex-col justify-center items-center gap-y-2 md:gap-y-12 ">
          <div className="flex flex-col justify-center items-center gap-y-4">
            <h1 className="w-full text-4xl font-bold text-center">
              광고 현황 대시보드
            </h1>
          </div>

          <div className="flex flex-col justify-center items-center">
            <p className="w-full font-light text-gray-500   dark:text-gray-400 text-center">
              효율적인 광고 캠페인을 위한 모든 정보를 한 곳에서 확인하세요.
            </p>
            <p className="w-full font-light text-gray-500  dark:text-gray-400 text-center">
              지금 바로 맞춤형 전략을 시작해 보세요!
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 w-full h-auto flex flex-col justify-center items-center">
          <Image
            src="/images/advertisement.jpg"
            alt="mockup"
            className="w-4/5 h-auto object-cover rounded-3xl mx-auto "
          />
        </div> */}
      </div>
      <div className="w-[80vw] md:w-[70vw] h-full flex flex-col justify-center items-center mx-auto my-6">
        <SearchBar />
        <CardSections/>
      </div>
    </>
  );
}
