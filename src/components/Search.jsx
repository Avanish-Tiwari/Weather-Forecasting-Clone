import React, { useContext, useEffect, useState } from 'react';
import { PinCodeContext } from './PinCodeContext';

export default function Search() {
  // Destructure pinCode and setPinCode from the context

  const { pinCode, setPinCode } = useContext(PinCodeContext);

  const handleInputChange = (event) => {
    setPinCode(event.target.value); // Update the PIN code
    // console.log(event.target.value.)
  };
  useEffect(()=>{
    // console.log(pinCode)
  },[pinCode])

  return (
    <div className='px-2'>
      <input
        type="text"
        value={pinCode}
        onChange={handleInputChange}
        placeholder="Enter PIN code"
        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500
        "
      />
    </div>
  );
}
