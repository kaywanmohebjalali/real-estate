import React from 'react'
import BoxHouse from '../modules/HomeCard'
import db from '../../data/db.json'
const Houses = () => {
  const {homes}=db;
  return (
    


    <div className=" px-2 xl:container grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-5  gap-8 py-20">
    {
      homes && homes.slice(0,6).map(home=><BoxHouse key={home.id}  {...home}/>)
    }
        





</div>
  )
}

export default Houses