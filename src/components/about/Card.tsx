"use client";
import React from "react";
import { ghat2 } from "@/assets/about";
import { cardarr } from "@/utils/about";
const Card = () => {
  return (
    <div>
      <div
        className=" relative my-12 bg-fuchsia-900/100 "
        style={{
          backgroundImage: `url(${ghat2.src}) `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
          width: "100vw",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute inset-0  flex justify-center text-center py-4">
          <h1 className="uppercase text-white font-extrabold  text-4xl mt-10  ">
            news feed
          </h1>
        </div>
        <div className="absolute w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 justify-center items-center px-8 md:px-12 lg:px-16">
          {cardarr.map((item) => (
            <div
              key={item.id.toString()}
              className="bg-white h-[15rem] md:h-[22rem] lg:w-[25rem] rounded-md p-2 group overflow-hidden justify-center items-center flex flex-col gap-3"
            >
              <img
                src={item.img.src}
                className=" lg:h-[13rem] lg:w-[25rem] md:w-[23rem] md:h-[15rem]  w-[24rem] h-[12rem] !transition-all group-hover:scale-105 !ease-in-out "
              />
              <p className="md:text-xl text-red-700 text-sm ">{item.title}</p>
              <span className="justify-center items-center flex gap-3">
                <img src={item.img1.src} className="h-3 w-6 md:h-6 md:w-6 " />{" "}
                By <p className="text-sm md:text-xl">{item.name}</p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
