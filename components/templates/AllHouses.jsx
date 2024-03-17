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
      <Pagination homes={filterDB} count={3} />
    </div>
  );
};

export default AllHouses;


// خانه 
// ویلایی