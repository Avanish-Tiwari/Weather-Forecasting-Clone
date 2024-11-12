import React from 'react'
import Navbar from './Navbar'
import Content from './Content'
import DayCode from './DayCode'

export default function Home() {


  return (
    
    <div  className='min-h-screen flex flex-col justify-center p-10 bg-gradient-to-r from-white to-yellow-200 to-yellow-300 to-yellow-400'>
      <DayCode>
      <Navbar/>

      <Content/>
      </DayCode>
      
    </div>
  )
}
