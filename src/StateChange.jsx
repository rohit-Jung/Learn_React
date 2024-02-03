import React, { useState } from 'react'

function StateChange() {
  var[c,d] = useState(false);
  return (
    <>
      <div className='p-5 bg-zinc-800 mt-4 font-semibold rounded flex items-center justify-center flex-col gap-2'>
        <h1>BULB ?</h1>
          <div className={`${c === false? ' bg-white': 'bg-yellow-600'} text-black rounded-full h-20 w-20 border-2 border-black text-center` }></div>
        <button  className='rounded-md text-black bg-blue-200 px-4 py-2 mt-2'onClick={()=> d(!c)}>{c === false? 'ON':'OFF'}</button>
      </div>
    </>
  )
}

export default StateChange