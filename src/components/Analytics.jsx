import React from "react";
import Laptop from "../assets/laptop.jpg";
const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00d9fa] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Carefully
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            accusantium sit corrupti unde praesentium ratione optio aspernatur
            itaque labore saepe, quidem similique, animi quis vel, fugit numquam
            voluptate laborum assumenda!
          </p>
          <button className="bg-black py-3 text-[#00df9a] w-[200px] rounded-md my-6 mx-auto md:mx-0 font-medium ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
