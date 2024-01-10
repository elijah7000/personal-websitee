import React from "react";
import Image from "next/image";
import Link from "next/link";

const Instagram = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row uppercase">
      <div className="w-full md:flex-[3] flex flex-col justify-evenly items-center relative border-r border-solid border-r-white border-y ">
        <div className="md:w-full cursor-pointer mb-3">
          <Link href={"https://www.instagram.com/lydiajkimart/"}>
            <h1 className="mt-5 lg:text-4xl  md:float-right md:mb-5 md:mr-5 text-xl">
              Follow+
            </h1>
          </Link>
        </div>
        <div className="cursor-pointer mb-5">
          <Link href={"https://www.instagram.com/lydiajkimart/"}>
            <Image
              src={"/profilepicture.jpeg"}
              alt="profile pic"
              width={250}
              height={250}
              objectFit="contain"
              style={{ borderRadius: "10px" }}
            ></Image>
          </Link>
        </div>
        <div className="text-center">
          <p className="w-full text-xl lg:text-4xl md:text-2xl   opacity-85">
            Check more of my <br></br> recent work on
          </p>
          <p className="w-full lg:text-[180px] md:text-7xl text-[15vw] ">
            Instagram
          </p>
        </div>
      </div>
      <div className="w-full md:flex-[1.5] lg:h-screen flex flex-col justify-center items-center border-y border-y-white border-solid">
        <div className=" h-[20%] flex-1 text-4xl mb-5 md:p-5 lg:text-7xl md:text-5xl mt-5 text-center">
          42 Post
        </div>
        <div className=" w-full h-[200px] md:h-full relative flex md:flex-col flex-row mb-5 ">
          <div className="w-[33%] md:w-full h-full relative">
            <Image
              src={"/meandbro.png"}
              alt="side picture"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="w-[33%] md:w-full h-full  relative">
            <Image
              src={"/oceanvibe.png"}
              alt="side picture"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="w-[33%] md:w-full h-full  relative">
            <Image
              src={"/drive.png"}
              alt="side picture"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
