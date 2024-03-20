import React, { useEffect, useState } from "react";
import HomeCard from "./HomeCard";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
const Pagination = ({ homes, count, style, page=0 }) => {



  const countPage = Math.ceil(homes?.length / count);
  const { replace, pathname} = useRouter();

  // const [page, setPage] = useState(page);


  // console.log('p : ',page);
  const searchParams = useSearchParams();
 
  const params = new URLSearchParams(searchParams);
 
   
  function handleClick(value) {
    // if (!value) {
    //   if (asPath != "/homes") replace(`${pathname}`);
    // } else {
      params.set("page", value+1);
      replace(`${pathname}?${params.toString()}`);
    // }
  }



  function nextPage() {
    if (page + 1 < countPage) setPage((c) => c + 1);
  }
  function backPage() {
    if (page > 0) setPage((c) => c - 1);
  }

  // useEffect(()=>{
  //   console.log('page : ',page);
  //   console.log('pppppp :',page==undefined);
  //   if(page==0)handleClick(0)  
  // },[])


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
                page == index ? "bg-indigo-500" : "bg-gray-100"
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
