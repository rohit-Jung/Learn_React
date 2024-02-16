import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
      <h2 className="text-3xl font-bold text-center">Hellioww sir !!</h2>
      <div className='flex items-center flex-col border-2 p-3 m-5 gap-2'>
        <Login/>
        <Profile />
      </div>
    </UserContextProvider>
  )
}

export default App
