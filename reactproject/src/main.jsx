import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//React changes every jsx element to HTML and JS accordingly through createElement and render method 

//During this process of conversion and rendering, react changes every element to a specific object with pre-defined attributes
//Because of this reason customized objects are not passed directly as a jsx

//Js variables are passed in here using curly braces. We write all the html-like code in return and js code above it in any jsx file

//The babel transpiler which you can look up to in github of react is responsible for injecting all these jsx elements to the main page.
ReactDOM.createRoot(document.getElementById('root')).render(
  //Strict mode 
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
