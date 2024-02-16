import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

//Here we provided two states to the user context now these states can be used on any components through the use of Use context hook
//we were able to access the updater setUser as we have given access to it on our UserContextProvider (basically we passed it as value to use it here)
function Login() {
  const [Password, setPassword] = useState('')
  const [Username, setUsername] = useState('')

  const {setUser} = useContext(UserContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({Username, Password})

  }

  return (
    <>
    {/* Here are just some basic react  */}

    <input 
    className='border-black border-2 rounded p-2 w-full bg-slate-50'
    type="text" 
    value={Username} 
    onChange={(e) => setUsername(e.target.value)}
    placeholder='Username'
    />
    
    <input 
    className='border-black border-2 rounded p-2 w-full bg-slate-50'
    type="password" 
      value={Password} 
      onChange={(e) => setPassword(e.target.value)}
      placeholder='Password'
    />
    <button
    className='border-black border-2 rounded-lg p-2 max-w-screen-md bg-red-500 font-bold'
    onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Login