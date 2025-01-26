"use client";
import React, { useState, useEffect } from "react";
import { items } from "./items";
import { Card, CardHeader, CardBody,Skeleton } from "@heroui/react";
import { Pagination } from "@heroui/react";
import { createClient } from "@/utils/supabase/client";
import useGlobalSearch from "@/store/useGlobalSearch";
import Image from "next/image";
// import { Link } from "lucide-react";
import Link from "next/link";

export default function CardSections() {
  const supabase = createClient();
  const [companyList, setCompanyList] = useState([]);
  const { searchKeyword, setSearchKeyword } = useGlobalSearch();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 16;
  const [loading, setLoading] = useState(true);

  const handleGetData = async (page, searchKeyword) => {
    let query = supabase
      .from("datas")
      .select("*", { count: "exact" })
      .range((page - 1) * itemsPerPage, page * itemsPerPage - 1)
      .order('created_at', { ascending: false });

    // searchKeyword가 있을 경우 쿼리에 추가
    if (searchKeyword) {
      query = query.ilike('name', `%${searchKeyword}%`); // 'column_name'을 검색할 컬럼명으로 변경하세요.
    }

    const { data, error, count } = await query;

    if (error) {
      console.log(error);
      setCompanyList([]);
      setTotalItems(0);
      return;
    }

    setCompanyList(data || '');
    setTotalItems(count || 0);
  };

  useEffect(() => {
    // 데이터 로드 시 로딩 상태 업데이트
    const fetchData = async () => {
      setLoading(true);
      await handleGetData(currentPage, searchKeyword);
      setLoading(false);
    };

    fetchData();
  }, [currentPage, searchKeyword]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  console.log('data',companyList)
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
        {loading ? (
          Array.from({ length: 16 }).map((_, index) => (
            <Card className="w-[200px] space-y-5 p-4" radius="lg" key={index}>
              <Skeleton className="rounded-lg">
                <div className="h-24 rounded-lg bg-default-300" />
              </Skeleton>
              <div className="space-y-3">
                <Skeleton className="w-3/5 rounded-lg">
                  <div className="h-3 w-3/5 rounded-lg bg-default-200" />
                </Skeleton>
                <Skeleton className="w-4/5 rounded-lg">
                  <div className="h-3 w-4/5 rounded-lg bg-default-200" />
                </Skeleton>
                <Skeleton className="w-2/5 rounded-lg">
                  <div className="h-3 w-2/5 rounded-lg bg-default-300" />
                </Skeleton>
              </div>
            </Card>
          ))
        ) : companyList.length === 0 ? (
          <div className="text-center w-full col-span-4">데이터가 없습니다.</div>
        ) : (
          companyList.map((item, index) => (
            <Link href={`${item.url}`} target="_blank" key={index}>
              <Card className="py-4 transform transition-transform duration-300 hover:scale-110">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <h1 className="text-lg font-bold">ID:{item.adId}</h1>
                  <p className="text-medium text-gray-500">확인일시: {formatTimestampToDate(item.created_at)}</p>
                  <div className="flex gap-2 justify-between items-center">
                    <div className="relative w-6 h-6 ">
                      <Image src={item.profile} alt="thumbnail" className="rounded-full" fill></Image>
                    </div>
                    <p className="font-bold text-medium">{item.name}</p>
                  </div>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <div className="relative w-full h-36">
                    <Image
                      alt="Card background"
                      className="object-cover rounded-xl"
                      src={item.thumbnail}
                      fill
                    />
                  </div>
                </CardBody>
              </Card>
            </Link>
          ))
        )}
      </div>
      <div className="w-full flex justify-center mb-20">
      <Pagination
        isCompact
        showControls
        initialPage={1}
        total={Math.ceil(totalItems / itemsPerPage)}
        onChange={(page) => {
          setLoading(true);
          handlePageChange(page);
        }}
        page={currentPage}
      />
      </div>
      
    </>
  );
}
function formatTimestampToDate(timestamp) {
  // Date 객체를 생성합니다.
  const date = new Date(timestamp);
  
  // 년, 월, 일을 추출합니다.
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
  const day = String(date.getUTCDate()).padStart(2, '0');
  
  // "년-월-일" 형식으로 반환합니다.
  return `${year}-${month}-${day}`;
}