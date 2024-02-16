import { useEffect, useState } from "react";

import "./App.css";
import { Button } from "./components/Button";
import Card from "./components/Card";
import { ThemeProvider } from "./context/context";

function App() {
  const [themeMode, setThemeMode] = useState('light')

  //Since we have created empty functions in the context setting up the functionaliy here
  //How does the setting up functionality here works in the context? 
  //=> because we have created the methods with the same name and set functionality to each of them so it embedds with each other
  const enableDark = () => {
      setThemeMode('dark')
  }
  const enableLight = () => {
    setThemeMode('light')
  }

  //using UseEffect hook to change the mode in html whenever the themeMode is changed(the button does this)
  useEffect(() => {
    const mode = document.querySelector('html')
    mode.classList.remove("light", 'dark')
    mode.classList.add(themeMode)
  }, [themeMode])
  
  return (
    //wrapping all the variables with themeProvider and passing the value prop with states and methods the children would use/access
    <>
    <ThemeProvider value={{themeMode, enableDark, enableLight}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Button/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
      </ThemeProvider>
    </>
  );
}

export default App;
