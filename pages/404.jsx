import Link from 'next/link'
import React from 'react'

const PageNotFound = () => {
  return (
    <div className="mt-[45vh] sm:mt-[15vh] flex justify-center items-center">

    <Link className='button px-2 text-xl'  href='/'>برگشتن به صفحه اصلی</Link>
    </div>
  )
}
PageNotFound.displayName ='PageNotFound'

export default PageNotFound