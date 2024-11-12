import React from 'react'
import Navbar from './Navbar'
import Content from './Content'
import DayCode from './DayCode'

export default function Home() {


  return (
    
    <div  className='min-h-screen grid grid-row-3   bg-gradient-to-r from-white to-yellow-200 to-yellow-300 to-yellow-400'>
      <DayCode>
      <div className='row-span-1 grid items-end'>
      <Navbar/>
      </div>
      <div className='row-span-2'>
      <Content/>
      </div>
      
      </DayCode>
      
    </div>
  )
}
