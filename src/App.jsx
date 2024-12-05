
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import {  PinCodeProvider } from './components/PinCodeContext'


function App() {
  
  return (
    <div className='grid grid-cols-3 min-h-screen'>
    <PinCodeProvider>
      <div className='col-span-1'>
     <Header/>

      </div>
     <div  className='col-span-2'>
    <Outlet />

     </div>
    </PinCodeProvider>
    </div>
  )
}

export default App
