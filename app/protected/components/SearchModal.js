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
  Input
} from "@heroui/react";
import { Pagination } from "@heroui/react";
import { FaSearch } from "react-icons/fa";

export default function SearchModal({ isOpen, onOpen, onOpenChange }) {
  const [selectedColor, setSelectedColor] = React.useState("default");
  const colors = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ];

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">업체 찾기</ModalHeader>
            <ModalBody>
              <div className="flex flex-col gap-3">
                <Input startContent={<FaSearch />} placeholder="검색어를 입력하세요" />
                <Table
                  aria-label="Example static collection table"
                  color={selectedColor}
                  defaultSelectedKeys={["2"]}
                  selectionMode="single"
                  shadow='none'
                >
                  <TableHeader>
                    <TableColumn>NAME</TableColumn>
                    <TableColumn>ROLE</TableColumn>
                    <TableColumn>STATUS</TableColumn>
                  </TableHeader>
                  <TableBody>
                    <TableRow key="1">
                      <TableCell>Tony Reichert</TableCell>
                      <TableCell>CEO</TableCell>
                      <TableCell>Active</TableCell>
                    </TableRow>
                    <TableRow key="2">
                      <TableCell>Zoey Lang</TableCell>
                      <TableCell>Technical Lead</TableCell>
                      <TableCell>Paused</TableCell>
                    </TableRow>
                    <TableRow key="3">
                      <TableCell>Jane Fisher</TableCell>
                      <TableCell>Senior Developer</TableCell>
                      <TableCell>Active</TableCell>
                    </TableRow>
                    <TableRow key="4">
                      <TableCell>William Howard</TableCell>
                      <TableCell>Community Manager</TableCell>
                      <TableCell>Vacation</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                
              </div>
              <div className="flex justify-center">
                <Pagination isCompact showControls initialPage={1} total={10} />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onPress={onClose}>
                확인
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
