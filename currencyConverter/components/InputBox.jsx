import React, { useId } from "react";

//This is just a basic component where various props are passed to change the value accordingly
function InputBox({ 
  label,
  amount,
  onAmountChange,
  amountDisabled = false,
  selectCurrency = "usd",
  onCurrencyChange,
  currencyOptions = [],
  currencyDisabled = false,
  className = ""}
) {
  // The useId hook is used to optimise and relate the label and input
  const amountId = useId()

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div>
        <label htmlFor={amountId} >{label}</label>
        <input
          id={amountId}
          type="number"
          placeholder="value"
          value={amount}
          disabled= {amountDisabled}
          // The and operator is used incase if there is no onAmountChange
          // The targeted value is changed to number cause sometimes JS changes the targeted value to string itself
          onChange={(e) => onAmountChange && (onAmountChange(Number(e.target.value)))}
        />
      </div>
      <div>
        <p>Currency Type</p>
        <select 
        value={selectCurrency}
        disabled= {currencyDisabled}
        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}>

          {currencyOptions.map((currency) => (
            //key is passed to optimize the system
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
