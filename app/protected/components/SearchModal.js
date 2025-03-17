"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  RadioGroup,
  Radio,
  Input,
  Link
} from "@heroui/react";

import { Pagination } from "@heroui/react";
import { FaSearch } from "react-icons/fa";
import {createClient} from "@/utils/supabase/client"
import {useEffect,useState} from "react"
import { debounce } from 'lodash';
import useGlobalSearch from "@/store/useGlobalSearch";


export default function SearchModal({ isOpen, onOpen, onOpenChange }) {
  const supabase = createClient()
  const [companyList, setCompanyList] = useState([])
  const { searchKeyword, setSearchKeyword } = useGlobalSearch();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 10;

  const handleSearch = async (page = 1) => {
    let query = supabase
      .from("inputs")
      .select("*", { count: "exact" })
      .range((page - 1) * itemsPerPage, page * itemsPerPage - 1)
      .order('title', { ascending: true });

    if (searchTerm) {
      query = query.ilike('title', `%${searchTerm}%`);
    }

    const { data, error, count } = await query;

    if (error) {
      console.error(error);
    } else {
      setCompanyList(data);
      setTotalItems(count);
    }
  };
  

  useEffect(() => {
    handleSearch(currentPage);
  }, [currentPage,searchTerm]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const [selectedColor, setSelectedColor] = React.useState("default");
  const colors = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ];

  const handleSelectionChange = (selectedKeys) => {
    console.log('selectedKeys', selectedKeys)
    if (selectedKeys.size > 0) {
      const selectedCompany = companyList.find(company => company.title === Array.from(selectedKeys)[0]);
      console.log('selectedCompany', selectedCompany)
      if (selectedCompany) {
        setSearchKeyword(selectedCompany.title); // 선택된 회사명으로 검색어 설정
        console.log('searchKeyword', searchKeyword)
      }
      setSelectedColor("success"); // 초록색으로 설정
    } else {
      setSelectedColor("default"); // 기본 색상으로 설정
    } 
  };
  
  const debouncedSearch = debounce((value) => {
    setSearchTerm(value);
  }, 500);

  const handleSearchChange = (e) => {
    // debouncedSearch(e.target.value);
    setSearchTerm(e.target.value);
  };


  console.log('searchKeyword', searchKeyword)
  console.log('currentPage', currentPage)

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent className="h-[70vh] max-h-[70vh] w-[90vw] md:max-w-[781px] p-8">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-[25px] font-bold">업체 찾기</ModalHeader>
            <ModalBody className="overflow-y-auto scrollbar-hide">
              <div className="flex flex-col gap-3">
                <Input 
                  classNames={{
                    input: "text-[20px] font-bold",
                    inputWrapper: "text-[20px] font-bold"
                  }} 
                  startContent={<FaSearch />} 
                  placeholder="검색어를 입력하세요" 
                  value={searchTerm} 
                  onChange={handleSearchChange} 
                />
                <Table

                  aria-label="Example static collection table"
                  color={selectedColor}
                  defaultSelectedKeys={[""]}
                  selectionMode="single"
                  shadow='none'
                  onSelectionChange={handleSelectionChange}
                  classNames={{
                    base: "",
                    wrapper:"m-0 p-0"
                  }}
                >
                  <TableHeader>
                    <TableColumn className="text-center text-[20px] font-bold">회사명</TableColumn>
                    <TableColumn className="text-center text-[20px] font-bold">생성일자</TableColumn>
                    <TableColumn className="text-center text-[20px] font-bold">분류</TableColumn>
                  </TableHeader>

                  <TableBody>
                    {companyList.map((company) => (
                      <TableRow key={company.title} >
                        <TableCell className="text-center whitespace-nowrap text-[22px] font-bold">{company.title}</TableCell>
                        <TableCell className="text-center whitespace-nowrap text-[22px] font-bold text-[#9D9D9D]">{formatTimestampToDate(company.created_at)}</TableCell>
                        <TableCell className="text-center whitespace-nowrap text-[22px] font-bold">{company.category}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="flex justify-center">
                <Pagination
                  isCompact
                  showControls
                  initialPage={1}
                  total={Math.ceil(totalItems / itemsPerPage)}
                  onChange={handlePageChange}
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onPress={
                ()=>{
                  onClose()
                  setCurrentPage(1)
                }}>
                확인
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
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