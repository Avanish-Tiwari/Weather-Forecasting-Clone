
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import {  PinCodeProvider } from './components/PinCodeContext'


function App() {

  return (
    <div className='min-h-screen flex flex-row md:flex-col overflow-auto grid-cols-2'>
    <PinCodeProvider>
      <div className='flex'>
     <Header/>

      </div>
     <div  >
    <Outlet />

     </div>
    </PinCodeProvider>
    </div>
  )
}

export default App
