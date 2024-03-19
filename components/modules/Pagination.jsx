import React, { useState } from "react";
import HomeCard from "./HomeCard";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
const Pagination = ({ homes, count, style }) => {
  const countPage = Math.ceil(homes?.length / count);

  const [page, setPage] = useState(0);

  function nextPage() {
    if (page + 1 < countPage) setPage((c) => c + 1);
  }
  function backPage() {
    if (page > 0) setPage((c) => c - 1);
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
                page + 1 == index + 1 ? "bg-indigo-500" : "bg-gray-100"
              } py-1 px-3 text-white font-bold transition ease-in-out delay-30 `}
              key={index}
              onClick={() => setPage(index)}
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
