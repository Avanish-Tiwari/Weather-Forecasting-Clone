import React from 'react'
import Search from './Search'

function Header() {
  return (
    <div className='min-h-screen flex flex-col px-5 py-2 justify-center text-center place-items-center bg-gradient-to-r from-red-500 to-blue-500'>
      <div className='text-3xl font-bold p-3 '>Weather Forecast</div>
      <Search/>
    </div>
  )
}

export default Header