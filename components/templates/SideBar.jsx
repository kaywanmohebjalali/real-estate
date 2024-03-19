import Link from 'next/link'
import React, { useRef } from 'react'

const SideBar = () => {
    const inputRef=useRef('')
    

    function OffCheckedInput(){inputRef.current.checked = false}
    
  return (
    
    <div className='flex items-center xl:items-start    text-gray-50  bg-backGround-gold w-full xl:w-20 fixed top-0 bottom-[92vh] xl:bottom-0 right-0  z-[2000000000]'>

      <input
                    ref={inputRef}
                    type="checkbox"
                    name="toggle"
                    id="sidebar-toggle"
                    className="sidebar__input "
                    />
                <label htmlFor="sidebar-toggle" className="sidebar__label flex items-center justify-center">
                    <div  className="sidebar__btn ml-auto mr-4 xl:mx-auto"></div>
                </label>
                <div className="sidebar__bg">

                <ul className="list w-full h-full  flex  items-center flex-col gap-9 mt-[-1000px]">
                    <li className="button p-1 w-24">
                        <Link href="/" className='' onClick={OffCheckedInput}>صفحه اصلی</Link>
                    </li>
                    <li className="button p-1 w-24">
                        <Link href="#" className="" onClick={OffCheckedInput}>ویژگی ها</Link>
                    </li>
                    <li className="button p-1 w-24" onClick={OffCheckedInput}>
                        <Link href="" className="">نظرات</Link>
                    </li>
                    <li className="button p-1 w-24" onClick={OffCheckedInput}>
                        <Link href="houses.html" className="">خانه ها</Link>
                    </li>
                    <li className="button p-1 w-24" onClick={OffCheckedInput}>
                        <Link href="#" className="">گالری</Link>
                    </li>
                </ul>
                </div>
                
      </div>
                   
  )
}

export default SideBar