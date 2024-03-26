import React from "react";

function AboutPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.1"
      className="bg-[#CDEA68] w-full font-['Neue_Montreal_Regular']  rounded-tl-2xl rounded-tr-2xl"
    >
      <div className="w-[90%] text-[3.6vw] leading-none mb-16  px-14 pt-[4.6rem]">
        <p>
          Ochi is a strategic partner for fast-growing tech businesses that need
          to raise funds, sell products, explain complex ideas, and hire great
          people.
        </p>
      </div>
      <hr className="w-[100%] border-gray-500 opacity-[60%] "></hr>
      <div className="flex items-start justify-between pt-3 mb-20 text-[1.1vw] px-14 py-[1rem]">
        <div className="w-[55%]">
          <p>What you can expect:</p>
        </div>
        <div className="w-1/3">
          <p className="w-2/3">
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether its live or digital,
            delivered for one or a hundred people.{" "}
          </p>
          <p className="w-2/3 pt-6">
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </p>
        </div>
        <div className="w-1/6 pt-16 flex flex-col justify-end">
          <p>S:</p>
          <br />
          <p>Instagram</p>
          <p>Behance</p>
          <p>Facebook</p>
        </div>
      </div>
      <div>
        <hr className="w-[100%] border-gray-500 opacity-[60%] overflow-x-auto"></hr>
        <div className="px-14 pt-[1rem] flex justify-between items-start pb-10">
          <div>
            <h1 className="text-[58px] pb-4 leading-none">Our approach: </h1>
            <div className="w-fit flex justify-center items-center gap-8 text-white bg-black rounded-full px-8 py-4 uppercase">
              <h1>Read more</h1>
              <div className="h-2 w-2 rounded-full bg-white"></div>
            </div>
          </div>
          <div className="h-[32.5vw] w-1/2 bg-[#b7c77c]  rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
