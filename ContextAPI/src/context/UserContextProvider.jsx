import React, { useState } from "react";
import UserContext from "./UserContext";

//The children is the element passed 
const UserContextProvider = ({children}) => {
    //User is now like the global state which can be used by any element passing through the fnc
    //Since the file provides context about the state to all the elements that use them it is called as contextprovider
    const [user, setUser] = useState(null)
    //we wrap the element with the context created and provide the acces of global state through value prop and provider method.
    //note: we have passed it as a object here
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
        
    )
}

export default UserContextProvider;