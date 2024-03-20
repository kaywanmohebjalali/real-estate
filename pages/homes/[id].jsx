import { useRouter } from "next/router";

import React from "react";
import db from "../../data/db.json";

const Home = () => {
  const { query} = useRouter();
  const homeId = query?.id;
  const { homes } = db;


  const {
    title,
    img,
    roomCount,
    meterage,
    price,
    code,
    address,
    buildingType,
    YearOfConstruction,
    description,
  } =homeId ? homes.find((home) => home?.id == homeId):{};

  return (

    <div className="container mt-[47vh] sm:mt-[15vh]">
      <div className="flex justify-evenly gap-4 flex-col lg:flex-row items-center">
        <div className="home-img  w-[80%] lg:w-[40%]  h-full">
          <img src={img} alt="" className="w-full h-full" />
        </div>

        <div className="w-[80%] lg:w-[60%]">
          <div className="">
            <h1 className="flex justify-between font-bold text-[1.3rem] sm:text-2xl">
              <span className="">{title}</span>
              <span>{price?.toLocaleString()} تومان</span>
            </h1>
            <div className=" flex gap-4 my-4">
              <span className=" green-tag button w-16 bg-green-500">ویژه</span>
              <span className="brown-tag button  w-16">برای اجاره</span>
            </div>
            <div className=" my-4 text-gray-700 text-xl ">{address}</div>
          </div>
          <div className="">
            <div className="flex justify-between items-center mt-8">
              <h2 className="text-xl sm:text-3xl">مرور کلی</h2>
              <p className="text-gray-700 sm:text-xl ">
                <span>کد ملک : </span>
                <span>{code}</span>
              </p>
            </div>
            <hr className="my-6 " />
            <ul className="flex flex-col sm:flex-row justify-between gap-4 text-gray-700 text-xl ">
              <li>
                <span>نوع ملک : </span>
                <span>{buildingType}</span>
              </li>
              <li>
                <span>اتاق : </span>
                <span>{roomCount}</span>
              </li>
              <li>
                <span>متراژ : </span>
                <span>{meterage}</span>
              </li>
              <li>
                <span>سال ساخت : </span>
                <span>{YearOfConstruction}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className=" mt-8">
        <div className="">
          <p className="text-gray-700 text-xl ">توضیحات</p>
          <hr className="my-4" />
          <p className="">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
