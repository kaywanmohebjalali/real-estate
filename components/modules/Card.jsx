import Link from "next/link";
import React from "react";
import { HiOutlineLocationMarker,HiOutlineUser,HiOutlineLibrary,HiOutlineKey   } from "react-icons/hi";

const BoxHouse = ({ src='',link='', location='', countRoom='', area='', price='' }) => {
  return (
    <div className="card max-w-[400px] mx-auto bg-[#f9f7f6]">
      <img src={src} alt="House 6" className="w-full h-[50%]" />
      <h5 className="button w-2/3 bg-backGround-dark mx-auto translate-y-[-50%]">آپارتمان خانوادگی مدرن</h5>

    
      <div className=" grid grid-cols-2 justify-between gap-4 px-4 small:px-1 text-[0.8rem] py-6">
        <div className="flex items-center gap-1">
       <HiOutlineLocationMarker/>
          <p className="card__text">{location}</p>
        </div>

        <div className="flex items-center gap-1">
          <HiOutlineUser />
          <p className="card__text">{countRoom} اتاق</p>
        </div>

        <div className="flex items-center gap-1">
         <HiOutlineLibrary/>
          <p className="card__text">{area} متر مربع</p>
        </div>

        <div className="flex items-center gap-1">
           <HiOutlineKey />
          <p className="card__text">{price} میلیون تومان</p>
        </div>
      </div>

      <Link href={link} className="button">
        مشاهده ملک
      </Link>
    </div>
  );
};

export default BoxHouse;
