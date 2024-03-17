import React from 'react'
import BoxHouse from '../modules/HomeCard'
import db from '../../data/db.json'
const Houses = () => {
  const {homes}=db;
  return (
    


    <div className="cards-home px-2 xl:container  gap-8 py-20">
    {
      homes && homes.slice(0,6).map(home=><BoxHouse key={home.id}  {...home}/>)
    }
        





</div>
  )
}

export default Houses