import React from "react";
import Pagination from "../modules/Pagination";
import db from "../../data/db.json";
import SearchFilter from "../modules/SearchFilter";
import { useSearchParams } from "next/navigation";

const AllHouses = () => {
  const {homes}=db
  const searchParams = useSearchParams();
  const key=searchParams?.get('kayHome');
  const filterDB=key?homes.filter(home=>key?.includes(home.title)):homes
  return (
    <div className="mt-[45vh] sm:mt-[15vh]">
      <SearchFilter filterField='kayHome'/>
      {!filterDB.length?<div className="w-full text-center text-2xl text-indigo-500 mt-10">خانه ای یافت نشد</div>:<>

      <Pagination key={Math.random()} homes={filterDB} count={4} />
      </>
        
    }
      </div>
  );
};

export default AllHouses;


