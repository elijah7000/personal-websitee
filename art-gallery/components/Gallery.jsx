"use client";

import React, { useEffect, useState } from "react";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";

const Gallery = () => {
  let today = new Date();
  let month = today.getMonth();
  let day = today.getDay();

  const [currentTime, setCurrentTime] = useState("");
  useEffect(() => {
    const date =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const timer = setInterval(() => {
      setCurrentTime(date);
    }, 1000);
  }, [currentTime]);

  return (
    <div className="bg-black h-screen flex flex-col">
      <div className="flex flex-col h-full mt-20">
        <div></div>
        <div className="flex  w-full h-full justify-end items-end lg:gap-8 p-14 text-5xl">
          <FaCircleArrowLeft />
          <FaCircleArrowRight />
        </div>
      </div>
      <div className=" flex justify-between w-full p-6 border-t border-solid border-gray-50 text-5xl lg:text-9xl ">
        <div className="flex">
          <h1>{month}</h1>
        </div>
        <h1>Gallery</h1>
      </div>
    </div>
  );
};

export default Gallery;
