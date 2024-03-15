import React from "react";
import Box from "../modules/Box";
import { HiGlobeAlt,HiOutlineLocationMarker,HiOutlineKey,HiOutlinePresentationChartLine ,HiOutlineLockClosed,HiOutlineScale     } from "react-icons/hi";
const Feature = () => {
  return (
    <div className="container grid gap-6 grid-cols-1  sm:grid-cols-2  xl:grid-cols-3">

      <Box icon={<HiGlobeAlt size='3rem'  className="text-backGround-gold" />}>
        <div className="w-[80%] pt-4">
          <h4 className="">بهترین خانه های لوکس جهان</h4>
          <p className="u-paragraph">
            نکته بعدی در مورد متن ساختگی لورم ایپسوم این است که بعضی از طراحان
            وبسایت و گرافیست کاران بعد از آنکه قالب و محتوای مورد نظرشون را
            ایجاد کردند
          </p>
        </div>
      </Box>

      <Box icon={<HiOutlineLocationMarker  size='3rem'  className="text-backGround-gold " />}>
        <div className="w-[80%] pt-4">
        <h4 className="">همه خانه ها در مکان های برتر</h4>
        <p className="">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است
        </p>
        </div>
      </Box>

      <Box icon={<HiOutlineKey   size='3rem'  className="text-backGround-gold " />}>
        <div className="w-[80%] pt-4">
        <h4 className="u-heading--dark">خانه جدید در یک هفته</h4>
        <p className="u-paragraph">
          ز آنجا که لورم ایپسوم، شباهت زیادی به متن های واقعی دارد، طراحان
          معمولا از لورم ایپسوم استفاده میکنند تا فقط به مشتری یا کار فرما نشان
          دهند که قالب طراحی شده
        </p>
        </div>
      </Box>
  

      <Box icon={<HiOutlinePresentationChartLine    size='3rem'  className="text-backGround-gold" />}>
        <div className="w-[80%] pt-4">
        <h4 className="u-heading--dark">فقط بهترین خواص</h4>
        <p className="u-paragraph">
          تا فقط به مشتری یا کار فرما نشان دهند که قالب طراحی شده بعد از اینکه
          متن در آن قرار میگرد چگونه خواهد بود و فونت ها و اندازه ها چگونه در
          نظر گرفته شده است.
        </p>
        </div>
      </Box>

      <Box icon={<HiOutlineLockClosed  size='3rem'  className="text-backGround-gold " />}>
        <div className="w-[80%] pt-4">
        <h4 className="u-heading--dark">پرداخت های ایمن در بعدی</h4>
        <p className="u-paragraph">
          ر نتیجه طرح کلی دید درستی به کار فرما نمیدهد. اگر طراح بخواهد دنبال
          متن های مرتبط بگردد تمرکزش از روی کار اصلی برداشته میشود و اینکار زمان
          بر خواهد بود.
        </p>
        </div>
      </Box>

      <Box icon={<HiOutlineScale   size='3rem'  className="text-backGround-gold " />}>
        <div className="w-[80%] pt-4">
        <h4 className="u-heading--dark">1% مشاوران املاک برتر</h4>
        <p className="u-paragraph">
          همچنین طراح به دنبال این است که پس از ارایه کار نظر دیگران را در مورد
          طراحی جویا شود و نمی‌خواهد افراد روی متن های موجود تمرکز کنند.
        </p>
        </div>
      </Box>




 

     



    </div>
  );
};

export default Feature;
