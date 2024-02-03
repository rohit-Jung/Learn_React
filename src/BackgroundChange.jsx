import React from 'react'
import StateChange from './StateChange'

function BackgroundChange({ setColor, defaultColor }) {
  return (
    <>
        <StateChange/>
        <div className='p-5 mt-4 bg-zinc-600 rounded'>
            <h1 className='font-semibold py-3 font-sans'>WHat is this NoW? </h1>
            <div>
                <button className='bg-orange-600 px-3 py-2 rounded mr-4' onClick={()=>setColor('red')}>Red Color</button>
                <button className='bg-blue-600 px-3 py-2 rounded mr-4' onClick={()=>setColor('blue')}>Blue Color</button>
                <button className='bg-green-600 px-3 py-2 rounded mr-4' onClick={()=>setColor('green')}>Green Color</button>
                <button className='bg-purple-600 px-3 py-2 rounded mr-4' onClick={()=>setColor('purple')}>Purple Color</button>
                <button className='px-3 py-2 rounded mr-4 bg-black text-white' onClick={defaultColor}>Reset Color</button>
            </div>  
        </div>
    </>
  )
}

export default BackgroundChange