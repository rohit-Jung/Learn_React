import React from "react";

function Cards() {
  return (
    <div className="w-full px-12 flex items-center justify-center gap-4 mb-20">
      <div className="w-1/2 relative overflow-hidden">
        <div className="card rounded-lg  bg-[#004D43] w-full h-[55vh] flex items-center justify-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute left-8 bottom-8 rounded-full border-[#9BC45F] text-[#9BC45F] border-[2px] px-3 py-1">
            &copy;2019-2022
          </button>
        </div>
      </div>
      <div className="w-1/2 overflow-hidden flex gap-4">
        <div className="card relative flex items-center justify-center rounded-lg  w-1/2 h-[55vh] bg-[#212121]">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute left-8 bottom-8 rounded-full text-[0.95vw] border-zinc-100 text-zinc-100  uppercase  border-[2px] px-3 py-1">
            rating 5.0 on clutch
          </button>
        </div>
        <div className="card relative flex items-center justify-center rounded-lg  w-1/2 h-[55vh] bg-[#212121]">
          <img
            className="w-24 h-2w-24"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute left-8 bottom-8 rounded-full text-[0.95vw] border-zinc-100 text-zinc-100  uppercase  border-[2px] px-3 py-1">
            business bootcamp alumni
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
