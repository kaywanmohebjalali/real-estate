"use client";
/* eslint-disable react/prop-types */
import { useSearchParams, usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

import { HiMiniMagnifyingGlass } from "react-icons/hi2";
// سوییت
const SearchFilter = ({ filterField = "" }) => {
  const inputRef = useRef();
  const { replace, asPath} = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams);
  
  function handleClick(value) {
  
    
    if (!value ) {
      if(asPath!='/homes') replace(`${pathname}`);
    } else {
      params.set(filterField, value);
      replace(`${pathname}?${params.toString()}`);
    }
  }

  function handleEnter(event) {
    if (event?.code == "Enter") {
      const value = inputRef.current.value;
      handleClick(value);
  }
}
  

  useEffect(() => {
    window.addEventListener("keyup", handleEnter);

    return () => window.removeEventListener("keyup", handleEnter);
  }, [asPath]);

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
