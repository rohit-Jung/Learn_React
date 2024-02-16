import React, { createContext, useContext } from "react";

//creates context using create context in react with states and methods to be used globally
export const ThemeContext = createContext({
    themeMode: 'light',
    enableDark: () => {},
    enableLight: () => {}
})

//providing them using provider method in react itself
export const ThemeProvider = ThemeContext.Provider

//creating a custom hook to use the context so that we don't have to use useContext in every file
export default function useTheme(){
    return useContext(ThemeContext)
}

//All the methods and constants are exported at the time of creation itself