import React from "react";
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".6"
      className="w-full pt-[7.2vw] pb-14 bg-[#004D43] rounded-tl-2xl rounded-tr-2xl overflow-hidden"
    >
      <div className="text-[25vw] leading-[27.4vw]  h-[18.7vw] border-t-2 border-b-2 border-zinc-400 font-['Founders_Grotesk_X']   font-bold uppercase whitespace-nowrap text-white ">
        <motion.div
          className="inline-block h-[25vw]"
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 9,
            ease: "linear",
          }}
        >
          we are ochi &nbsp;
        </motion.div>
        <motion.div
          className="inline-block h-[25vw]"
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 9,
            ease: "linear",
          }}
        >
          we are ochi &nbsp;
        </motion.div>
      </div>
    </div>
  );
}

export default Marquee;
