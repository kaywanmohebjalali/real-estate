import React from 'react'
import RealTors from './RealTors'
import Header from './Header'

const TopSite = () => {
  return (
    <div className='container grid grid-cols-4 min-h-[80vh]'>
         <RealTors className="grid-cols-1" />
        <Header/>
    </div>
  )
}

export default TopSite