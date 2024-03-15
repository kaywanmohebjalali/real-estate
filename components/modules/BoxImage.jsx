import React from 'react'

const BoxImage = ({children='', src=''}) => {
  return (
    <div className="box flex   sm:pr-0  items-center gap-4 ">
    <img
      src={src}
      alt="real-tors top 1"
      className="w-16 rounded-full "
    />
       {children}
  </div>
  )
}

export default BoxImage