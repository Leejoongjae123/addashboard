"use client";
import React, { useState } from "react";
import { Input, Button, Chip, Tooltip } from "@heroui/react";
import { FaSearch } from "react-icons/fa";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Link
} from "@heroui/react";
import SearchModal from "./SearchModal";
import useGlobalSearch from "@/store/useGlobalSearch";
export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const [isFilterDropdownVisible, setIsFilterDropdownVisible] = useState(false);
  const [isCategoryDropdownVisible, setIsCategoryDropdownVisible] =
    useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { searchKeyword, setSearchKeyword } = useGlobalSearch();

  const toggleFilterDropdown = () => {
    setIsFilterDropdownVisible(!isFilterDropdownVisible);
  };

  const toggleCategoryDropdown = () => {
    setIsCategoryDropdownVisible(!isCategoryDropdownVisible);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center mx-auto rounded-lg py-6 px-0 md:px-12 gap-y-4">
      <div className="flex gap-2 w-full justify-between gap-x-4">
        <Button onClick={onOpen} color="primary" size="md" className="w-12">
          업체 찾기
        </Button>
        <Input
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          startContent={<FaSearch />}
          placeholder="업체명을 입력해주세요"
          className="w-full"
        ></Input>
      </div>

      <div className="flex gap-2 w-full justify-center items-center flex-wrap">
        
        {/* <Tooltip content=""> */}
          <Link href="/" target="_blank">
            <Chip color="default" size="lg">
              준비 중
            </Chip>
          </Link>
        {/* </Tooltip> */}
        {/* <Tooltip content=""> */}
          <Link href="/" target="_blank">
            <Chip color="primary" size="lg">
              준비 중
            </Chip>
          </Link>
        {/* </Tooltip> */}
        {/* <Tooltip content=""> */}
          <Link href="https://blog.naver.com/PostList.naver?blogId=rebootdesign&from=postList&categoryNo=8" target="_blank">
            <Chip color="secondary" size="lg">
              정보 블로그
            </Chip>
          </Link>
        {/* </Tooltip> */}
        {/* <Tooltip content=""> */}
            <Link href="/" target="_blank">
            <Chip color="success" size="lg">
              준비 중
            </Chip>
          </Link>
        {/* </Tooltip> */}
        {/* <Tooltip content=""> */}
          <Link href="/" target="_blank">
            <Chip color="warning" size="lg">
              준비 중
            </Chip>
          </Link>
        {/* </Tooltip> */}
      </div>
      <SearchModal
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
      />
    </div>
  );
}
