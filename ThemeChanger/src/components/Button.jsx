import React from "react";
import useTheme from "../context/context";


export const Button = () => {
  //the exporting of useTheme hook is used here as we did not have to use useContext 
  const{themeMode, enableDark, enableLight} = useTheme();

  //this function checks the input checkbox status and runs the functionality we created in App.jsx accordingly 
  //now how does it ypdate from here? => because this is updated in the context file itself and then synced accordingly
  const onButtonChange = (e) => {
    const isChecked = e.currentTarget.checked;
    if(isChecked){
        enableDark();
    }else{
        enableLight();
    }
  }
  return (
    <div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"  
          onChange={onButtonChange}
          checked={themeMode==="dark"}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ml-3 text-sm font-medium text-slate-50">
          Toggle Theme
        </span>
      </label>
    </div>
  );
};
