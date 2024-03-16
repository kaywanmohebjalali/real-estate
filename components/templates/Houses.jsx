import React from 'react'
import BoxHouse from '../modules/Card'

const Houses = () => {
  return (
    


    <div className=" px-2 xl:container grid grid-cols-1 small:grid-cols-2 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-5  gap-8 py-20">
    
    <BoxHouse src='img/gal-1.jpeg' location='مالدیو' countRoom='4' area="400" price="560">

    </BoxHouse>
        
    <BoxHouse src='img/gal-2.jpeg' location='مالدیو' countRoom='4' area="400" price="560">

    </BoxHouse>

    <BoxHouse src='img/gal-3.jpeg' location='مالدیو' countRoom='4' area="400" price="560">

</BoxHouse>

<BoxHouse src='img/gal-4.jpeg' location='مالدیو' countRoom='4' area="400" price="560">

</BoxHouse>

<BoxHouse src='img/gal-5.jpeg' location='مالدیو' countRoom='4' area="400" price="560">

</BoxHouse>

<BoxHouse src='img/gal-6.jpeg' location='مالدیو' countRoom='4' area="400" price="560">

</BoxHouse>





</div>
  )
}

export default Houses