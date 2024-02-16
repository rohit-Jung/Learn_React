import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    //we used user to access the updated data
  const {user} = useContext(UserContext)

  if(!user) return <h1>Please Login First</h1>
    //back there in login component we had passed the object to the user state containing Username and Password
    //Hence we can access it using dot operator
  return <h1>Wellciommee to the page Mr. {user.Username}<br/>Your password is {user.Password}</h1>
}

export default Profile