import React, { useContext } from 'react';
import { DayCodeContext } from './DayCode';

export default function Navbar() {
  const [selectedDay,setSelectedDay]=useContext(DayCodeContext)
  // setSelectedDay(1)
  // console.log(selectedDay)
  return (
    <div className="flex justify-start rounded-lg gap-4 my-2 p-5 bg-gradient-to-r from-purple-500 to-pink-500">
      <button onClick={()=>setSelectedDay(0)} className="px-4 py-2 text-white bg-purple-700 rounded-lg hover:bg-purple-600">
        Today
      </button>
      <button onClick={()=>setSelectedDay(1)} className="px-4 py-2 text-white bg-purple-700 rounded-lg hover:bg-purple-600">
        Day 1
      </button>
      <button onClick={()=>setSelectedDay(2)} className="px-4 py-2 text-white bg-purple-700 rounded-lg hover:bg-purple-600">
        Day 2
      </button>
      <button onClick={()=>setSelectedDay(3)} className="px-4 py-2 text-white bg-purple-700 rounded-lg hover:bg-purple-600">
        Day 3
      </button>
      <button onClick={()=>setSelectedDay(4)} className="px-4 py-2 text-white bg-purple-700 rounded-lg hover:bg-purple-600">
        Day 4
      </button>
    </div>
  );
}
