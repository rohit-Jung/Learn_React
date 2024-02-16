import React, { useEffect, useState } from 'react'
import Products from './Products';
import BackgroundChange from './BackgroundChange';
import Logo from './assets/react.svg';
import PasswordGenerator from './PasswordGenerator';
import { Button } from '../../ThemeChanger/src/components/Button';
import { ThemeProvider } from '../../ThemeChanger/src/context/context';

function App() {
  //Hooks are basically used to tell React to change anything in the UI

  //{JSX} accepts only evaluate Expression : final outcome ; not any processing stuffs.
  //This is the reason we use arrow fncs when using jsx as a variable because the arrow fnc returns only one final outcome
  
  //For example we donot use [ variable = {fnc(param)} ] -> here fnc(param) is not the evaluated expression
  //rather we use [ variable = {() => {fnc(param)}} ] -> here the arrow fnc used gives us the evaluated expression ( final outcome ) 
  var[a, b] = useState(21000);
  const defaultColor = 'black';
  const [Color, setColor] = useState(defaultColor)
  const defaultColorChange = () => {
    setColor(defaultColor);
  }
 
  //All of the below code are explained in App.jsx of ThemeChanger
  const [themeMode, setThemeMode] = useState('light');

  const enableDark = () => {
    setThemeMode('dark');
  }

  const enableLight = () => {
    setThemeMode('light');
  }

  useEffect(() => {
    const main = document.querySelector('html')
    main.classList.remove("light","dark")
    main.classList.add(themeMode)
  }, [themeMode])
  
  return (
    <>
    <ThemeProvider value={{themeMode, enableDark, enableLight}}>
      <div className='w-full h-auto text-white p-10 bg-slate-300 dark:bg-zinc-700'>
        <div className='flex items-center justify-center gap-1 mb-4 rounded relative' style={{backgroundColor: Color}}>
          <img src={Logo} alt="React logo" />
          <h1 className='m-5 font-bold text-2xl'>React with Rohit</h1>
        <Button/>
        </div>
          <Products salary = {a} about = {{'name':'Ram Bahadur', 'age':21, 'home':'Kathmandu'}}/>
          <button onClick={()=> b(a+1000)} className='text-white bg-green-500 rounded-md p-3 mt-4'>Increase Salary</button>
          <BackgroundChange setColor={ setColor } defaultColor = { defaultColorChange }/>
          <PasswordGenerator/>
      </div>
    </ThemeProvider>
    </>
  )
}

export default App
