import React from 'react'

const SideBar = () => {
  return (
    
    <div className='flex items-start xl:items-center   text-gray-50  bg-backGround-gold w-20 xl:w-full absolute top-0 bottom-0 xl:bottom-[92vh] right-0 xl:left-0'>

      <input
                    type="checkbox"
                    name="toggle"
                    id="sidebar-toggle"
                    class="sidebar__input"
                    />
                <label for="sidebar-toggle" class="sidebar__label flex items-center justify-center">
                    <div  class="sidebar__btn xl:ml-auto xl:mr-4"></div>
                </label>
                <div class="sidebar__bg"></div>
      </div>
                   
  )
}

export default SideBar