import React, { useEffect, useState } from "react";
import HomeCard from "./HomeCard";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
const Pagination = ({ homes, count, style , page}) => {
  const countPage = Math.ceil(homes?.length / count);
  
  const { replace, pathname} = useRouter();
  
  
  
  const searchParams = useSearchParams();
  
  const params = new URLSearchParams(searchParams);
  
  
  function handleClick(value) {
        
        params.set("page", value+1);
  
 
        replace(`${pathname}?${params.toString()}`);

      }
      
      useEffect(()=>{
  if (page===undefined) {
     handleClick(0)
  }
  },[page])



  function nextPage() {
    if (page + 1 < countPage) handleClick(page+1);
  }
  function backPage() {
    if (page > 0) handleClick(page-1);
  }



  return (
    <div className="">
      <div className={`cards-home xl:container   gap-4 py-20  px-2 ${style}`}>
        {homes &&
          homes
            .slice(page * count, page * count + count)
            .map((home) => <HomeCard key={home.id} {...home} />)}
      </div>

      <div className="mat-8 w-full flex justify-center items-center gap-2 flex-row-reverse">
        <p
          className={`cursor-pointer rounded-full  bg-indigo-500 p-2 text-white font-bold ${
            page == 0 ? "opacity-0" : ""
          }`}
          onClick={backPage}
        >
          <HiChevronDoubleLeft />
        </p>
        {countPage &&
          Array.from({ length: countPage }).map((item, index) => (
            <p
              className={`cursor-pointer flex justify-center items-center rounded-full  ${
                page  == index  ? "bg-indigo-500" : "bg-gray-100"
              } py-1 px-3 text-white font-bold transition ease-in-out delay-30 `}
              key={index}
              onClick={() => handleClick(index)}
            >
              {index + 1}
            </p>
          ))}
        <p
          className={`cursor-pointer rounded-full bg-indigo-500 p-2 text-white font-bold ${
            page == countPage - 1 ? "opacity-0" : ""
          }`}
          onClick={nextPage}
        >
          <HiChevronDoubleRight />
        </p>
      </div>
    </div>
  );
};

export default Pagination;
