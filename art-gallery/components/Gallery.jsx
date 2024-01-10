"use client";

import React, { useEffect, useState } from "react";
import HoverVideoPlayer from "react-hover-video-player";
import { galleryList, galleryVideo } from "../utility";
import Image from "next/image";

// 스코롤 애니매이션 추가

const Gallery = () => {
  let today = new Date();
  let month = ("0" + today.getMonth() + 1).slice(1, 4);
  const [isOpen, setIsOpen] = useState(false);
  const onShow = () => {
    setIsOpen(!isOpen);
  };
  console.log(galleryList);

  return (
    <div className="bg-black w-full flex flex-col mt-20 ">
      <div className="flex w-full h-full mb-5 relative">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 overflow-y-auto place-items-center items-center w-full h-full gap-6 ">
          {galleryVideo.map((item) => (
            <div
              className="w-[80%] h-[100%] flex flex-col justify-center items-center cursor-pointer"
              key={item.id}
              onClick={() => onShow(item.imgList)}
            >
              <HoverVideoPlayer
                videoSrc={item.video}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                pausedOverlay={
                  <Image
                    src={item.img}
                    alt="cover image"
                    fill
                    objectFit="cover"
                  />
                }
              />
              <div className="mt-5 text-xl uppercase">{item.title}</div>
              <div className="mt-3 text-base uppercase">{`${item.numImg} Images`}</div>
              <div>
                {isOpen && (
                  <div
                    className="absolute w-[60vw] h-[80vh] bg-red-500 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] m-0 z-10 "
                    onClick={onShow}
                  >
                    {item.}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" flex flex-row justify-between p-5 w-full border-y border-solid border-gray-50 text-5xl lg:text-9xl ">
        <div className="flex">
          <h1>{month}</h1>
        </div>
        <h1>Gallery</h1>
      </div>
    </div>
  );
};

export default Gallery;
