import React, { useState } from "react";
import Pagination from "../modules/Pagination";
import db from "../../data/db.json";
import SearchFilter from "../modules/SearchFilter";
import { useSearchParams } from "next/navigation";
import Sort from "../modules/Sort";

const AllHouses = () => {
  const [value, setValue]=useState('all')
  const {homes}=db
  let [filterDB, finalDB]=''
  const searchParams = useSearchParams();
  const key=searchParams?.get('kayHome');
  filterDB=key?homes.filter(home=>key?.includes(home.title)):homes
 
  finalDB =value=='room'? (filterDB.sort((p1, p2) => (p1.roomCount < p2.roomCount) ? 1 : (p1.roomCount > p2.roomCount) ? -1 : 0)):
  value=='price'? (filterDB.sort((p1, p2) => (p1.price < p2.price) ? 1 : (p1.price > p2.price) ? -1 : 0)):
  value=='size'? (filterDB.sort((p1, p2) => (p1.meterage < p2.meterage) ? 1 : (p1.meterage > p2.meterage) ? -1 : 0)):filterDB
 
  return (
    <div className="mt-[45vh] sm:mt-[15vh]">
      <div className="container flex justify-between items-center gap-20">

      <Sort setValue={setValue}/> 
      <SearchFilter filterField='kayHome'/>
      </div>
      {!filterDB.length?<div className="w-full text-center text-2xl text-indigo-500 mt-10">خانه ای یافت نشد</div>:<>

      <Pagination key={Math.random()} homes={finalDB} count={4} />
      </>
        
    }
      </div>
  );
};

export default AllHouses;


