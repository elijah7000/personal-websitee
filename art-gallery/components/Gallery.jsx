"use client";

import React, { useEffect, useState } from "react";
import HoverVideoPlayer from "react-hover-video-player";
import { galleryList, galleryVideo } from "../utility";
import Image from "next/image";

// 스코롤 애니매이션 추가

const Gallery = () => {
  let today = new Date();
  let month = ("0" + today.getMonth() + 1).slice(1, 4);
  const [clickId, setClickId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const onShow = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-black w-full flex flex-col mt-20 relative ">
      <div className="flex w-full h-full mb-5 relative">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 overflow-y-auto place-items-center items-center w-full h-full gap-6 ">
          {galleryVideo.map((item) => (
            <div
              className="w-[80%] h-[100%] flex flex-col justify-center items-center cursor-pointer"
              key={item.id}
              onClick={() => {
                onShow(item.imgList);
                setClickId(item.id);
              }}
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
            </div>
          ))}
        </div>
      </div>
      <div>
        {isOpen && (
          <div className="absolute w-full h-full flex justify-center items-center bg-black bg-opacity-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
            <div
              className="md:w-[60vw] md:h-[75vh] w-[100vw] h-[120vh] m-0 bg-black overflow-hidden overflow-y-scroll "
              onClick={onShow}
            >
              {galleryVideo.map((item) => {
                if (item.id === clickId) {
                  return (
                    <div
                      key={item.id}
                      className="grid md:grid-cols-2 place-items-center gap-1  grid-cols-1"
                    >
                      {item.imgList.map((image, index) => {
                        const keys = Object.keys(image);
                        return keys
                          .slice(0, 8)
                          .map((key) => (
                            <img
                              src={image[key]}
                              alt={`Image ${key}`}
                              key={`image-${key}`}
                              fill
                              objectFit="cover"
                            />
                          ));
                      })}
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        )}
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
