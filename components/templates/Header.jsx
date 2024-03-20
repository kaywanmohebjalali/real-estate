import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
      <header className='header col-span-4 xl:col-span-3 h-[60vh] xl:h-[70vh] xl:mr-[5rem] py-4'>
        <div className='container text-start flex flex-col justify-evenly   h-full'>
    <img src="/img/logo.png" alt="Nexter Logo" className="w-28 sm:w-36 mx-auto"/>
                <h3 className="text-backGround-gold font-bold text-xl"> خانه خودتان:</h3>
                <h1 className="text-white font-bold  sm:text-3xl">
                    با خرید خانه نهایت آزادی را احساس کنید
                </h1>
                <Link href="/homes?page=1" className="button  py-2 px-4 ml-auto text-lg">
                    املاک ما را مشاهده کنید
                </Link>

                <p className="line text-gray-100 text-center">دیده می شود در</p>
                <figure className=" flex flex-row-reverse justify-between w-full">
                    <img src="/img/logo-bbc.png" alt="BBC" className="w-14 h-6  sm:w-20 sm:h-8 " />
                    <img src="/img/logo-bi.png" alt="BBC" className="w-14 h-6   sm:w-20 sm:h-8 " />
                    <img src="/img/logo-forbes.png" alt="BBC" className="w-14 h-6  sm:w-20 sm:h-8 "/>
                    <img src="/img/logo-techcrunch.png" alt="BBC" className="w-14 h-6  sm:w-20 sm:h-8 "/>
                </figure>
    </div>
    </header>

  )
}

export default Header