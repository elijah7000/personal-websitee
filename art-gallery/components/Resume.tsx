import React from "react";

const Resume = () => {
  return (
    <div className="bg-black h-full text-white ">
      <div className="w-full flex justify-between mt-20 text-5xl lg:text-9xl p-5 border-t border-t-white border-solid ">
        <h1 className="max-sm:hidden">LK</h1>
        <h1>Experience</h1>
      </div>
      <div>
        <ul className="text-lg lg:text-3xl md:text-2xl">
          <li className="experience">
            <h1 className="w-[60%]">
              01 yU+co Freelance Desinger / illustrator
            </h1>
            <h1>Jan 2024 - Present </h1>
          </li>
          <li className="experience">
            <h1 className="w-[60%]">
              02 yU+co Freelance Desinger / illustrator
            </h1>
            <h1>Feb 2023 - Nov 2023 </h1>
          </li>
          <li className="experience">
            <h1>03 yU+co Desinger / illustrator</h1>
            <h1>Jan 2022 - Dec 2022</h1>
          </li>
          <li className="experience">
            <h1>04 yU+co Desinger / illustrator</h1>
            <h1>Aug 2019 - Nov 2021</h1>
          </li>
          <li className="experience">
            <h1 className="w-[60%]">
              05 Scholar Freelance Designer / Illustrator
            </h1>
            <h1>July 2020 - Sep 2020 </h1>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;
