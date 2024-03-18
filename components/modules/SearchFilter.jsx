"use client";
/* eslint-disable react/prop-types */
import { useSearchParams, usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useRef } from "react";

import { HiMiniMagnifyingGlass } from "react-icons/hi2";

const SearchFilter = ({ filterField = "" }) => {
  const inputRef = useRef();
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams);
  function handleClick(value) {
    params.set(filterField, value);
    replace(`${pathname}?${params.toString()}`);
  }



  return (
    <div className="w-1/3 mx-auto flex justify-between px-2 items-center bg-gray-200 rounded-md shadow-md">
      <input
        ref={inputRef}
        className=" px-2 py-1 text-black w-[90%] bg-gray-200 border-none outline-none"
      ></input>
      <HiMiniMagnifyingGlass
        onClick={() => handleClick(inputRef.current.value)}
      />
    </div>
  );
};

export default SearchFilter;
