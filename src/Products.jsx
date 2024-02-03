import React from 'react'

function Products({salary, about}) {
  //Here the salray and about passed in the fnc are called props: properties as per REACT
   
  //We also can use the word prop which will be an object. Hence in order to access it in the program we must use dot operator
  //To not use this repeatedly we directly pass the props with their key name as a jsx 
  //This way we can directly use the variable without using dot operator
  return (
    <div className='p-5 bg-zinc-800 rounded'>
        {/* Still the dot operator is being used becaused about is an object here */}

        <h1>Name :{about.name}</h1>
        <h2>Age: {about.age}</h2>
        <h1>Salary: {salary}</h1>
        <h2>Home: {about.home}</h2>
    </div>
  )
}

export default Products