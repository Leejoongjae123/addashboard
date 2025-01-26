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

      <div className="flex gap-2 w-full justify-center items-center overflow-x-auto scrollbar-hide whitespace-nowrap">
        
        <Tooltip content="A 하는 사이트 입니다.">
          <Link href="https://www.naver.com" target="_blank">
            <Chip color="default" size="lg">
              업체링크A
            </Chip>
          </Link>
        </Tooltip>
        <Tooltip content="B 하는 사이트 입니다.">
          <Link href="https://www.naver.com" target="_blank">
            <Chip color="primary" size="lg">
              업체링크B
            </Chip>
          </Link>
        </Tooltip>
        <Tooltip content="C 하는 사이트 입니다.">
          <Link href="https://www.naver.com" target="_blank">
            <Chip color="secondary" size="lg">
              업체링크C
            </Chip>
          </Link>
        </Tooltip>
        <Tooltip content="D 하는 사이트 입니다.">
          <Link href="https://www.naver.com" target="_blank">
            <Chip color="success" size="lg">
              업체링크D
            </Chip>
          </Link>
        </Tooltip>
        <Tooltip content="E 하는 사이트 입니다.">
          <Link href="https://www.naver.com" target="_blank">
            <Chip color="warning" size="lg">
              업체링크E
            </Chip>
          </Link>
        </Tooltip>
      </div>
      <SearchModal
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
      />
    </div>
  );
}
