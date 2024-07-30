import React from "react";
import homePic from "/src/assets/imgs/avataaars.svg";
export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-green-400 flex items-center justify-center flex-col  ">
        <div className="w-1/6">
          <img src={homePic} alt="home logo" />
        </div>
        <h1 className="font-bold uppercase text-white lg:text-5xl sm:text-2xl mt-8">
          START FRAMEWORK
        </h1>
        <p className="text-white lines relative  my-4">
          <i className="fa-solid fa-star"></i>
          <span className="lineBefore bg-white"></span>
          <span className="lineAfter bg-white"></span>
        </p>
        <p className="text-white">
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </>
  );
}
