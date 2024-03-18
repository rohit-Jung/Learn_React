import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotatedeg, setRotatedeg] = useState();
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = (Math.atan2(deltaY, deltaX) * 180) / Math.PI;
      setRotatedeg(angle - 180);
    });
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.9"
        className="relative w-full h-screen bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')] bg-no-repeat bg-center bg-cover"
      >
        <div
          // data-scroll
          // data-scroll-section
          // data-scroll-speed=".1"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  h-56 flex items-center gap-10"
        >
          <div className="w-[14.5vw] h-[14.5vw] bg-gray-100 rounded-full flex justify-center items-center overflow-hidden">
            <h1 className=" text-white text-center uppercase absolute z-10">
              Play
            </h1>
            <div
              style={{
                transform: `rotate(${rotatedeg}deg)`,
                position: "absolute",
              }}
              className="absolute w-[9vw] h-[9vw] bg-black rounded-full flex justify-center items-center overflow-hidden cursor-pointer"
            >
              <div className={`line w-full h-7`}>
                <div className="circle bg-gray-100 rounded-full h-full w-7"></div>
              </div>
            </div>
          </div>
          <div className="w-[14.5vw] h-[14.5vw] bg-gray-100 rounded-full flex justify-center items-center overflow-hidden">
            <h1 className=" text-white text-center uppercase absolute z-10">
              Play
            </h1>

            <div
              style={{
                transform: `rotate(${rotatedeg}deg)`,
                position: "absolute",
              }}
              className="absolute w-[9vw] h-[9vw] bg-black rounded-full flex justify-center items-center overflow-hidden cursor-pointer"
            >
              <div className={`line w-full h-7`}>
                <div className="circle bg-gray-100 rounded-full h-full w-7"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
