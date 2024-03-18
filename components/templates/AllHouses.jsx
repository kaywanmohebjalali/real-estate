import React, { useEffect, useRef, useState } from "react";
import Pagination from "../modules/Pagination";
import db from "../../data/db.json";
import SearchFilter from "../modules/SearchFilter";
import Sort from "../modules/Sort";
import { useRouter } from "next/router";

const AllHouses = () => {
  const [render, setRender] = useState("");
  const { query } = useRouter();
  const { homes } = db;
  const filterDB = useRef(homes);
  const finalDB = useRef(homes);
  const keySort = useRef("");
  const keyHome = useRef("");

  keySort.current = query.keySort;
  keyHome.current = query.kayHome;

  useEffect(() => {
    filterDB.current = keyHome.current
      ? homes.filter((home) => keyHome.current?.includes(home.title))
      : homes;

    finalDB.current =
      keySort.current == "room"
        ? filterDB.current.sort((p1, p2) => p2.roomCount - p1.roomCount)
        : (finalDB.current =
            keySort.current == "price"
              ? filterDB.current.sort((p1, p2) => p2.price - p1.price)
              : (finalDB.current =
                  keySort.current == "size"
                    ? filterDB.current.sort(
                        (p1, p2) => p2.meterage - p1.meterage
                      )
                    : filterDB.current));
    setRender(Math.random());
    console.log("keySort.current==room :", keySort.current == "room");
  }, [keySort.current, keyHome.current]);

  return (
    <div className="mt-[45vh] sm:mt-[15vh]">
      <div className="container flex justify-between items-center gap-20">
        <Sort filterField="keySort" />
        <SearchFilter filterField="kayHome" />
      </div>
      {!filterDB.current?.length ? (
        <div className="w-full text-center text-2xl text-indigo-500 mt-10">
          خانه ای یافت نشد
        </div>
      ) : (
        <>
          <Pagination key={Math.random()} homes={finalDB.current} count={4} />
        </>
      )}
    </div>
  );
};

export default AllHouses;
