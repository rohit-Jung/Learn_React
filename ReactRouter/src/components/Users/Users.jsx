import React from 'react'
import { useParams } from 'react-router-dom'

const Users = () => {
  const { params } = useParams();
  return (
    <div className='m-3 flex items-center justify-center'>Parameters: {params}</div>
  )
}

export default Users