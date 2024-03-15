import React from 'react'

const Header = () => {
  return (
      <header className='header col-span-4 xl:col-span-3 h-[50vh] xl:h-[70vh] xl:mr-[5rem]'>
        <div className='container text-start flex flex-col justify-center gap-8 h-full'>
    <img src="img/logo.png" alt="Nexter Logo" className="w-36 mx-auto"/>
                <h3 className="text-backGround-gold font-bold text-xl"> :خانه خودتان</h3>
                <h1 className="text-white font-bold  sm:text-3xl">
                    با خرید خانه نهایت آزادی را احساس کنید
                </h1>
                <button className="button px-2 pt-2 pb-3 ml-auto text-[0.8rem]">
                    املاک ما را مشاهده کنید
                </button>

                <p className="line text-gray-100 text-center">دیده می شود در</p>
                <figure className=" flex flex-row-reverse justify-between w-full">
                    <img src="img/logo-bbc.png" alt="BBC" className="w-14 h-6  sm:w-20 sm:h-8 " />
                    <img src="img/logo-bi.png" alt="BBC" className="w-14 h-6   sm:w-20 sm:h-8 " />
                    <img src="img/logo-forbes.png" alt="BBC" className="w-14 h-6  sm:w-20 sm:h-8 "/>
                    <img src="img/logo-techcrunch.png" alt="BBC" className="w-14 h-6  sm:w-20 sm:h-8 "/>
                </figure>
    </div>
    </header>

  )
}

export default Header