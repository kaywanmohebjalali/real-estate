import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";

const Sort = ({ filterField }) => {
  const { replace, pathname, query, asPath } = useRouter();
  const selectRef = useRef();

  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams);

  function setUrl(value) {
    if (value) {
      params.set(filterField, value);
      replace(`${pathname}?${params.toString()}`);
    }
  }
  useEffect(() => {
    if (!asPath.includes("keySort")) {
      selectRef.current.value = "";
    }
  }, [query]);
  return (
    <div className="w-1/2 text-black">
      <select
        ref={selectRef}
        defaultValue=""
        onChange={(e) => setUrl(e.target.value)}
        name="cars"
        id="cars"
        className="w-full outline-none shadow-lg bg-gray-200 rounded-sm p-1 px-2"
      >
        <option value=""> انتخاب کنید </option>
        <option value="room">تعداد اتاق</option>
        <option value="price">قیمت</option>
        <option value="size">اندازه</option>
      </select>
    </div>
  );
};

export default Sort;
