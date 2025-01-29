"use client";
import React, { useState, useEffect } from "react";
import { items } from "./items";
import { Card, CardHeader, CardBody, Skeleton,Chip,Select,SelectItem } from "@heroui/react";
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
  const [searchFilter, setSearchFilter] = useState(new Set(['전체']));

  const handleGetData = async (page, searchKeyword) => {
    let query = supabase
      .from("datas")
      .select("*", { count: "exact" })
      .range((page - 1) * itemsPerPage, page * itemsPerPage - 1)
      .order("created_at", { ascending: false });

    if (searchFilter.has('이미지')) {
      query = query.eq('isVideo', false);
    } else if (searchFilter.has('동영상')) {
      query = query.eq('isVideo', true);
    }
    // searchKeyword가 있을 경우 쿼리에 추가
    if (searchKeyword) {
      query = query.ilike("name", `%${searchKeyword}%`); // 'column_name'을 검색할 컬럼명으로 변경하세요.
    }

    const { data, error, count } = await query;

    if (error) {
      console.log(error);
      setCompanyList([]);
      setTotalItems(0);
      return;
    }

    setCompanyList(data || "");
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
  }, [currentPage, searchKeyword, searchFilter]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleFilterChange = (selectedKeys) => {
    setSearchFilter(selectedKeys);
    // 필요한 경우, 선택된 필터에 따라 데이터를 다시 로드하거나 다른 작업을 수행할 수 있습니다.
  };

  console.log("data", companyList);
  console.log("searchFilter", searchFilter);
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-full flex justify-end">
        <div className="w-[30%] md:w-[10%] mb-4">
        <Select 
          selectedKeys={searchFilter} 
          onSelectionChange={handleFilterChange}
        >
          <SelectItem key="전체" value="전체">전체</SelectItem>
          <SelectItem key="이미지" value="이미지">이미지</SelectItem>
          <SelectItem key="동영상" value="동영상">동영상</SelectItem>
        </Select>
        </div>
        
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
        {loading ? (
          Array.from({ length: 16 }).map((_, index) => (
            <Card className="col-span-1 space-y-5 p-4" radius="lg" key={index}>
              <Skeleton className="rounded-lg">
                <div className="h-40 rounded-lg bg-default-300" />
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
          <div className="text-center w-full col-span-4">
            데이터가 없습니다.
          </div>
        ) : (
          companyList.map((item, index) => (
            <Link href={`${item.url}`} target="_blank" key={index}>
              <Card className="transform transition-transform duration-300 hover:scale-105 rounded-none h-96">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <div className="flex gap-2 justify-between items-center w-full">
                    <div className="flex gap-2 items-center">
                      <div className="relative w-12 h-12 ">
                        <Image
                          src={item.profile}
                          alt="thumbnail"
                          className="rounded-full"
                          fill
                        ></Image>
                      </div>
                      <p className="font-bold text-xl">{item.name}</p>
                    </div>
                    <div>
                      <Chip
                        variant="solid"
                        className={
                          item.isVideo
                            ? "bg-[#fef0e5] text-[#e77c29]" // 동영상일 경우
                            : "bg-[#e5f6fe] text-[#477ec0]" // 이미지일 경우
                        }
                      >
                        {item.isVideo ? "동영상" : "이미지"}
                      </Chip>
                    </div>
                  </div>
                  <p className="text-medium text-gray-500 ">
                    확인일시: {formatTimestampToDate(item.created_at)}
                  </p>
                  <h1 className="text-sm font-bold">ID:{item.adId}</h1>
                </CardHeader>
                <CardBody className="overflow-visible flex justify-center items-center ">
                  <div className="w-full h-full bg-[#e4e4e4] flex justify-center items-center">
                    <div className="relative w-full h-full bg-[#e4e4e4] aspect-w-16 aspect-h-9">
                      <Image
                        alt="Card background"
                        className="object-contain"
                        src={item.thumbnail}
                        fill
                      />
                    </div>
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
    </div>
  );
}
function formatTimestampToDate(timestamp) {
  // Date 객체를 생성합니다.
  const date = new Date(timestamp);

  // 년, 월, 일을 추출합니다.
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1
  const day = String(date.getUTCDate()).padStart(2, "0");

  // "년-월-일" 형식으로 반환합니다.
  return `${year}-${month}-${day}`;
}
