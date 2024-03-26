import { easeIn, motion, useAnimate, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

function Featured() {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleLeave = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full mb-20">
      <div className="px-14 pt-16 pb-6 border-b-[1px] mb-5 border-zinc-300">
        <h1 className="font-['Neue_Montreal_Regular'] text-5xl">
          Featured projects
        </h1>
      </div>
      <div className="w-full px-14 pt-6 pb- flex gap-6">
        <div className="h-[75vh] w-1/2  cursor-pointer ">
          <div className="uppercase flex items-center justify-start gap-2 py-2 text-[1vw] font-['Neue_Montreal_Regular']">
            <div className="h-2 w-2 bg-black rounded-full"></div>Fyde
          </div>
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleLeave(0)}
            className="w-full h-full relative"
          >
            <div className="absolute  font-['Founders_Grotesk_X'] left-full bottom-1/3 text-[#b7c77c] font-semibold z-10 -translate-x-1/2 -translate-y-1/2 text-8xl leading-[4vw] tracking-wide overflow-hidden">
              {"FYDE".split(" ").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.3 }}
                  key={index}
                  className="inline-block pt-6"
                >
                  {item}
                </motion.span>
              ))}
            </div>
            <img
              className="w-full h-full rounded-lg bg-cover bg-no-repeat bg-center"
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              alt=""
            />
          </motion.div>
        </div>
        <div className="h-[75vh] w-1/2  cursor-pointer ">
          <div className="uppercase flex items-center justify-start gap-2 py-2 text-[1vw] font-['Neue_Montreal_Regular']">
            <div className="h-2 w-2 bg-black rounded-full"></div>Fyde
          </div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleLeave(1)}
            className="w-full h-full relative"
          >
            <h1 className="absolute overflow-hidden bottom-1/3 text-[#b7c77c] font-semibold z-20 -translate-x-1/2 -translate-y-1/2 text-8xl leading-[4vw] font-['Founders_Grotesk_X'] tracking-wide">
              {"VISE".split(" ").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.3 }}
                  key={index}
                  className="inline-block pt-6"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <img
              className="w-full h-full rounded-lg bg-cover bg-no-repeat bg-center"
              src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
