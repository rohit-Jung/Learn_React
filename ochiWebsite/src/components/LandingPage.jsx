import React from "react";
import { MdArrowOutward } from "react-icons/md";

function LandingPage() {
  return (
    <div className="h-screen w-full pt-32">
      <div className="font-['Founders_Grotesk_X'] text-[8.5vw] font-semibold w-full px-14 py-16 leading-[6.5vw] ">
        {["we create", "eye-opening", "presentations"].map((item, index) => (
          <div
            key={index}
            className="w-full uppercase flex items-stretch flex-grow-3"
          >
            {index == 1 && (
              <div className="w-[8.3vw] h-[5.6vw] bg-red-500 mr-3 relative -top-[1.25vw] rounded-md"></div>
            )}
            {item}
          </div>
        ))}
      </div>
      <hr className="bg-zinc-400 h-[1px] w-full mt-3" />
      <div className="flex justify-between py-4 px-16 items-center font-['Neue_Montreal_Regular'] text-[1.1rem]">
        <div>
          <p>For public and private companies</p>
        </div>
        <div>
          <p>From the first pitch to IPO</p>
        </div>
        <div className=" flex items-center gap-1">
          <div className="uppercase border-2 border-zinc-600 px-3 py-[0.2rem] rounded-full text-[1vw]">
            Start the project
          </div>
          <div className="uppercase border border-zinc-600 p-2 rounded-full">
            <MdArrowOutward />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default LandingPage;
