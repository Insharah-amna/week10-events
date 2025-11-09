'use client'
import { useState } from 'react'

export default function Counter() {
  const [value, setValue] = useState(0);

  const increase = () => {
    setValue(value + 1)
  }
  
  const decrease = () => {
    if (value > 0) { 
      setValue(value - 1)
    }
  }

  return (
    <div className="bg-blue-100 text-black h-screen flex flex-col items-center justify-center gap-7">
      <h1 className="text-4xl font-bold">Counter</h1>

      <p className="text-3xl">{value }</p>

      <div className="flex gap-5">
        <button onClick={increase} className="rounded-sm bg-green-700 text-white px-4 py-2 cursor-pointer">
          Increase
        </button>

        <button onClick={decrease} className="rounded-sm bg-orange-700 text-white px-4 py-2 cursor-pointer">
          Decrease
        </button>
      </div>
    </div>
  );
}
