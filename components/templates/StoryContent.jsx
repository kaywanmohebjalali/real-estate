import React from 'react'

const StoryContent = () => {
  return (
    <div className="w-full md:w-[50%] flex flex-col justify-center items-start px-6 md:mx-8 xl:mx-12 gap-4">
    <h3 className="text-backGround-gold font-bold text-xl md:text-2xl">مشتریان خوشحال</h3>

    <h2 className="text-3xl">
        &rdquo;بهترین تصمیم زندگی ما&ldquo;
    </h2>

    <p className="text-[0.78rem] md:text-[0.9rem] font-thin">
        متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پر کردن
        فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده میشود. طراحان
        وب و گرافیک از این متن برای پرکردن
    </p>

    <button className="button w-40 pt-2 font-bold text-[1rem]">خانه خود را پیدا کنید</button>
</div>
  )
}

export default StoryContent