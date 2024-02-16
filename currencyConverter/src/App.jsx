import React, { useState } from "react";
import { InputBox } from "../components";
import useCurrencyInfo from "../hooks/useCurrencyInfo";
import { useEffect } from "react";

function App() {
  //States to change the data
  const [Amount, setAmount] = useState(0);
  const [From, setFrom] = useState("usd");
  const [To, setTo] = useState("npr");
  const [ConvertedAmount, setConvertedAmount] = useState(0);

  //Use of custom hook to access the data fetched by it 
  const data = useCurrencyInfo(From);

  //we stored keys in options to provide user with the options in drop down 
  //why keys? cause keys contains all the curreny value. can be confirmed by accessing the API itself
  const options = Object.keys(data);

  const swap = () => {
    setFrom(To);
    setTo(From);
    setAmount(ConvertedAmount);
    setConvertedAmount(Amount);
  };

   // useEffect to update ConvertedAmount when currency changes
   useEffect(() => {
    setConvertedAmount(Amount * data[To]);
  }, [Amount, To, data]);
  
  const currency = () => {
    setConvertedAmount(Amount * data[To]);
  };

  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          currency();
        }}
      >
        <div>
          <InputBox
            label="From"
            amount={Amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(Amount)}
            selectCurrency={From}
            onAmountChange={(amount) => setAmount(amount)}
          />
        </div>
        <div>
          <button onClick={swap}>SWAP</button>
        </div>
        <div>
          <InputBox
            label="TO"
            amount={ConvertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={To}
            amountDisabled
          />
        </div>
        <div>
          <button type="submit">Convert</button>
        </div>
      </form>
    </div>
  );
}

export default App;
