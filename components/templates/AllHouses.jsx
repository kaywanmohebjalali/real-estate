import React from 'react'
import Pagination from '../modules/Pagination'
import HomeCard from '../modules/HomeCard'
import db from "../../data/db.json";

const AllHouses = () => {
    
   
  return (
    <div className='mt-[45vh] sm:mt-[15vh]'>
                 <Pagination db={db}  count={5}/>
                    
                 
    </div>
  )
}

export default AllHouses