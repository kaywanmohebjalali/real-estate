
import React from 'react'

const Box = ({icon='', children=''}) => {
  return (
    <div className="flex w-full gap-2">
       {icon}
       {children}
    </div>
  )
}

export default Box