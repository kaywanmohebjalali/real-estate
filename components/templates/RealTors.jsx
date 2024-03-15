import React from "react";
import BoxImage from "../modules/BoxImage";

const RealTors = () => {
  return (
    <div className=" w-full col-span-4  xl:col-span-1 xl:col-start-1 xl:row-start-1 h-[42vh] sm:h-[20vh] xl:h-[70vh] bg-backGround-dark ">
      <div className="container flex flex-col items-center justify-center gap-10 sm:gap-0 sm:justify-evenly xl:justify-center w-full h-full  xl:gap-10">
        <p class="text-backGround-gold font-bold">سه مالک برتر</p>
        <div className="flex  flex-col sm:flex-row  gap-6  sm:justify-center xl:flex-col    md:gap-10  text-end  sm:px-6 md:px-0">
          <BoxImage src="img/realtor-1.jpeg">
            <div className="">
              <h3 className="text-white text-sm">کیوان کحب جلالی</h3>
              <p className="text-gray-100 text-[0.75rem] ">869 فروش خانه</p>
            </div>
          </BoxImage>

          <BoxImage src="img/realtor-2.jpeg">
            <div class="">
              <h3 className="text-white text-sm">مریم اندیشه</h3>
              <p class="text-gray-100 text-[0.75rem]">243 فروش خانه</p>
            </div>
          </BoxImage>

          <BoxImage src="img/realtor-3.jpeg">
            <div className="">
              <h3 className="text-white text-sm">علی رضا ساعدی</h3>
              <p class="text-gray-100 text-[0.75rem]">130 فروش خانه</p>
            </div>
          </BoxImage>
        </div>
      </div>
    </div>
  );
};

export default RealTors;
