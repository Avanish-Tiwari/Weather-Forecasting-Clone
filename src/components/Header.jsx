import React from 'react'
import Search from './Search'

function Header() {
  return (
    <div className='grid grid-col-2 content-center min-h-full bg-gradient-to-r from-red-500 to-blue-500'>
      <div className='text-3xl font-bold p-3 '>Weather Forecast</div>
      <Search/>
    </div>
  )
}

export default Header