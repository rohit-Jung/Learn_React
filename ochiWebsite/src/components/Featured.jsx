import React from "react";

function Featured() {
  return (
    <div className="w-full mb-20">
      <div className="px-14 pt-16 pb-6 border-b-[1px] mb-5 border-zinc-300">
        <h1 className="font-['Neue_Montreal_Regular'] text-5xl">
          Featured projects
        </h1>
      </div>
      <div className="w-full px-14 pt-6 pb- flex gap-6">
        <div className="h-[75vh] w-1/2  cursor-pointer relative ">
          <div className="uppercase flex items-center justify-start gap-2 py-2 text-[1vw] font-['Neue_Montreal_Regular']">
            <div className="h-2 w-2 bg-black rounded-full"></div>Fyde
          </div>
          <div className="w-full h-full ">
            <h1 className="absolute font-['Founders_Grotesk_X'] left-full bottom-1/4 text-[#b7c77c] font-semibold z-10 -translate-x-1/2 -translate-y-1/2 text-8xl leading-none">
              {"FYDE".split(" ").map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h1>
            <img
              className="w-full h-full rounded-lg bg-cover bg-no-repeat bg-center"
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              alt=""
            />
          </div>
        </div>
        <div className="h-[75vh] w-1/2  cursor-pointer relative">
          <div className="uppercase flex items-center justify-start gap-2 py-2 text-[1vw] font-['Neue_Montreal_Regular']">
            <div className="h-2 w-2 bg-black rounded-full"></div>Fyde
          </div>
          <div className="w-full h-full">
            <h1 className="absolute font-['Founders_Grotesk_X'] bottom-1/4 text-[#b7c77c] font-semibold z-20 -translate-x-1/2 -translate-y-1/2 text-8xl leading-none">
              {"VISE".split(" ").map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h1>
            <img
              className="w-full h-full rounded-lg bg-cover bg-no-repeat bg-center"
              src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
