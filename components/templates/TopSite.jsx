import React from 'react'
import RealTors from './RealTors'
import Header from './Header'

const TopSite = () => {
  return (
    <div className=' grid grid-cols-4  h-[70vh] mt-[8vh]  xl:mt-0 '>
        <Header/>
         <RealTors/>
    </div>
  )
}

export default TopSite