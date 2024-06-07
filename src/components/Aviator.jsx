import React from "react";

const Aviator = () => {
  return (
    <>
      <div className="text-white w-full flex justify-between items-center mt-4 ">
        <input
          type="text"
          className="w-[300px] rounded-full h-8 mx-auto  pl-2 text-sm text-center outline-none text-[#141414]"
          placeholder="Starting amount"
        />
        <button className="py-2 bg-[#00df9a] w-[100px] rounded  mx-auto font-medium text-black">
          Result
        </button>
        <input
          type="range"
          min={0}
          max={50}
          onChange={(e) => {
            console.log("e", e);
          }}
        ></input>
      </div>
    </>
  );
};

export default Aviator;
