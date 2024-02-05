import React, { useCallback, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function PasswordGenerator() {
  //useState Hooks to tell react when to change things in UI
  const [Password, setPassword] = useState("");
  const [Length, setLength] = useState(8);
  const [NumAllow, setNumAllow] = useState(false);
  const [CharAllow, setCharAllow] = useState(false);
  const [Eye, setEye] = useState(false);

  //useCallback Hook is used here so that the code is being optimized whenever the dependencies are changed. This is done by react itself. Memorization of code according to the dependencies are done here.
  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (NumAllow) str += "1234567890";
    if (CharAllow) str += "!@#$%^&*()_-";

    for (let i = 1; i <= Length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [Length, NumAllow, CharAllow, setPassword]);


  //something is copied to the browser's clipboard using following process. We are not provided with window object in next js so this process cannot be used there.
  //useRef Hook's use is also shown here with two of its method select and setSelectionRange 
  const copyToClipboard = useCallback(() => {
        passwordRef.current?.select()
        passwordRef.current?.setSelectionRange(0,101)
        window.navigator.clipboard.writeText(Password)
      }, [Password]
  )
  
  //storing useRef Hook to a constant so that it can be used later
  const passwordRef = useRef(null)

  //One of the most important Hook: useEffect. This executes the function inside whenever the dependencies change or re-renders.
  useEffect(() => {
    PasswordGenerator();
  }, [Length, NumAllow, CharAllow, PasswordGenerator]);

  //toggle password visibility to show and hide password
  const togglePasswordVisibility = () => {
    setEye((prev) => !prev);
  };

  return (
    <>
      <div className="w-full h-auto bg-zinc-600 p-5 mt-5 flex items-center justify-center flex-col gap-4">
        <h1 className="text-center text-3xl font-bold text-transform: uppercase">
          Password Generator
        </h1>
        <div className="flex">
            <input
                type= {Eye ? "text" : "password"} 
                value={Password}
                className="outline-none py-1 px-3 min-w-80 text-black font-semibold rounded-l-md"
                placeholder="Password"
                readOnly
                //referance is passed with the help of constant it is stored in
                ref={passwordRef}
                />

          {/* added eyeicon to toggle visibility of password */}
           <button onClick={togglePasswordVisibility}
           className="outline-none bg-white text-black px-3 py-1 shrink-0">
             {/* //imported eye icon from fontawesome using npm install --save @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons */}
             <FontAwesomeIcon icon={Eye ? faEyeSlash : faEye} />
          </button>

            <button
                className="outline-none bg-blue-700 text-white px-3 py-1 shrink-0 rounded-r-md"
                //calling fnc to copy the text as the button is clicked
                onClick={copyToClipboard}
                >
                Copy
            </button>
        </div>
        <div className="flex gap-2 text-black font-semibold">
            <div className="flex gap-3">
                <input 
                type="range"
                min={8}
                max={100}
                value={Length}
                //whenever the range is changed, a event is triggered whose value is updated by React using setLength counter/setter.(e.target.value -> targets the value of event onChange)
                onChange={(e) => setLength(e.target.value)} 
                className="cursor-pointer"
                />
                <label htmlFor="length">Length: {Length}</label>
            </div>

            <div>
                <input 
                type="checkbox" 
                defaultChecked = {NumAllow}
                //Reason why we pass an arrow function inside the setNumAllow is to keep changing the variable/setter opposite to the previous one.
                //if we had directly passed true in the setter the NumAllow would have been true whenever the checkbox was triggered and would not change afterwards but since we want it's negation everytime we pass it in arrow fnc
                //React sends these changes in the form of data packets so same changes are recognized as one when react passes a packet of changes to change the UI
                onChange={() => {
                    setNumAllow((prev) => !prev);
                }
            }
            />
                <label htmlFor="numbers">Numbers</label>
            </div>

            <div>
                <input 
                type="checkbox" 
                defaultChecked = {CharAllow}
                // Same Reason as above
                onChange={() => {
                    setCharAllow((prev) => !prev);
                }
            }
            />
                <label htmlFor="numbers">Characters</label>
            </div>
             
        </div>
      </div>
    </>
  );
}

export default PasswordGenerator;
