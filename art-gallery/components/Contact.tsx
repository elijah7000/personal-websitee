import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row lg:mt-20 border-t border-t-white border-solid ">
      <div className="flex-[1] lg:flex-[2] flex justify-center relative ">
        <Image
          src={"/BusyCity.png"}
          alt="Contact Picture"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
          objectFit="cover"
        ></Image>
      </div>
      <div className="flex-[2.5] flex flex-col w-full ">
        <div className="flex flex-col items-end text-[8vw] md:text-5xl lg:text-5xl p-5 border-b border-solid border-b-white">
          <div className="flex flex-col items-end ">
            <h1>LinkIn</h1>
            <h1>LydiaKim@gmail.com</h1>
          </div>
          <div className="flex flex-col items-end mt-10 ">
            <h1>Instagram</h1>
            <h1>Twitter</h1>
          </div>
        </div>
        <div>
          <div>
            <h1 className="text-xl md:text-2xl lg:text-3xl pl-4 pt-5">
              Drop a Message +
            </h1>
            <div className="p-10 ">
              <input
                type="text"
                className="text-black w-full h-[250px] rounded-md"
              />
            </div>
          </div>
          <div className="flex w-full md:justify-end justify-center mb-10">
            <h1 className="text-[25vw] md:text-[25vw] lg:text-[15vw] ">
              Contact
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
