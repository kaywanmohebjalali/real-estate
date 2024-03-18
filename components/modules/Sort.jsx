import React from "react";

const Sort = ({ setValue }) => {
  return (
    <div className="w-1/2 text-black">
      <select onClick={(e)=>setValue(e.target.value)} name="cars" id="cars" className="w-full outline-none shadow-lg bg-gray-200 rounded-sm p-1 px-2">
        
        <option value=""> انتخاب کنید </option>
        <option value="room">تعداد اتاق</option>
        <option value="price">قیمت</option>
        <option value="size">اندازه</option>
       
      </select>
    </div>
  );
};

export default Sort;
