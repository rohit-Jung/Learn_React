import React, { useEffect, useState } from 'react'

function useCurrencyInfo(currency) { 
    // to update data in the UI. an empty object is use so that incase the data isn't fetched the program doesn't crashes
    const [Data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        
        //currency key is used to extract the data from the object according to the currency we need to convert from 
        //the currency is passed in the later part of program - in the main App.jsx
        .then((res) => setData(res[currency]))
        console.log(Data)
    }, [currency])
    console.log(Data);
    //we return data only as it has already been fetched and handelled and the need for user to update isn't there anymore
    //so we return the same data so that whenever we use this hook we will be able to access the data and use it properly
    return Data
}


//We have exported the hook to use it in other components
export default useCurrencyInfo;