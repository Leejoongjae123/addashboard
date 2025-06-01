"use client";
import React, { useState, useEffect } from "react";
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
import { createClient } from "@/utils/supabase/client";
import useSearchFilter from "@/store/useSearchFilter";

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const [isFilterDropdownVisible, setIsFilterDropdownVisible] = useState(false);
  const [isCategoryDropdownVisible, setIsCategoryDropdownVisible] =
    useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { searchKeyword, setSearchKeyword } = useGlobalSearch();
  const { filters, setFilters, selectedFilter, setSelectedFilter } = useSearchFilter();
  const supabase = createClient();

  const handleFilterClick = (category) => {
    if (selectedFilter && selectedFilter.category === category) {
      setSelectedFilter(null);
    } else {
      // 선택된 카테고리에 해당하는 필터 찾기
      const foundFilter = filters.find(filter => filter.category === category);
      
      // 선택된 카테고리와 해당 카테고리의 모든 title 저장
      if (foundFilter) {
        setSelectedFilter({
          category: category,
          titles: foundFilter.titles
        });
      }
    }
  };

  useEffect(() => {
    const fetchFilters = async () => {
      const { data, error } = await supabase.from("google_inputs").select("*");
      
      if (data) {
        // category 값을 기준으로 중복 제거하고 title을 리스트 형태로 할당
        const categoryMap = new Map();
        
        data.forEach(item => {
          if (!categoryMap.has(item.category)) {
            categoryMap.set(item.category, []);
          }
          categoryMap.get(item.category).push(item.title);
        });
        
        const uniqueFilters = Array.from(categoryMap, ([category, titles]) => ({ category, titles }));
        
        setFilters(uniqueFilters);
      }
    };
    fetchFilters();
  }, []);
  console.log("filters", filters);
  console.log("selectedFilter", selectedFilter);

  const toggleFilterDropdown = () => {
    setIsFilterDropdownVisible(!isFilterDropdownVisible);
  };

  const toggleCategoryDropdown = () => {
    setIsCategoryDropdownVisible(!isCategoryDropdownVisible);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center mx-auto rounded-lg py-6 px-0 md:px-12 gap-y-8">
      <div className="flex gap-2 w-full justify-between gap-x-4">
        <Button onClick={onOpen} color="primary" size="md" className="w-[90px] text-[17px] text-white">
          업체 찾기
        </Button>
        <Input
          classNames={{
            input: "text-[17px] text-white",
            inputWrapper: "text-[17px] text-black"
          }}
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          startContent={<FaSearch />}
          placeholder="업체명을 입력해주세요"
          className="w-full"
        ></Input>
      </div>

      <div className="flex gap-2 w-full justify-center items-center flex-wrap">
        {filters.map((filter) => (
          <Chip 
            key={filter.category} 
            color={selectedFilter && selectedFilter.category === filter.category ? "primary" : "white"} 
            size="lg" 
            className={`${selectedFilter && selectedFilter.category === filter.category ? "" : "border-2 border-[#BBBBBB]"} cursor-pointer transition-transform duration-200 hover:scale-105`}
            onClick={() => handleFilterClick(filter.category)}
          >
            {filter.category}
          </Chip>
        ))}
      </div>
      <SearchModal
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
      />
    </div>
  );
}
