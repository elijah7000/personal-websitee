"use client";

import Image from "next/image";
import React from "react";

const Welcome = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex h-full mt-20 justify-center items-center relative">
        <div className="flex justify-center absolute -z-50 px-8 md:w-[600px] md:h-[550px] lg:w-[700px] lg:h-[700px] animate-revealPic">
          <Image
            src="/profilepic.jpg"
            alt="profile pic"
            width={700}
            height={700}
            className="object-contain"
          ></Image>
          <div className="backgroundP1"></div>
          <div className="backgroundP2"></div>
        </div>
        <div className="w-full flex flex-col  absolute text-7xl mt-[250px] text-center uppercase  md:text-8xl lg:text-[130px] animate-reveal">
          <h1 className="md:mr-[250px] lg:mr-[300px] animate-reveal">
            Hello, I'm
          </h1>
          <h1 className="md:ml-[150px] lg:ml-[200px] animate-reveal">
            Lydia J
          </h1>
          <h1 className="md:ml-[500px] lg:ml-[650px] animate-reveal">Kim</h1>
        </div>
      </div>
      <div className="w-full flex flex-row items-end justify-between text-center py-3 px-5 bg-black z-10 animate-revealTopBot">
        <h3>Lydia J Kim</h3>
        <h3 className="max-sm:mb-44">
          Freelance Designer / Illustrator <br /> Based In LosAngeles
        </h3>
        <h3>&copy; 2023</h3>
      </div>
    </div>
  );
};

export default Welcome;
