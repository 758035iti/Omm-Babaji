"use client";
import React from "react";
import { imagearr } from "@/utils/about/index";
import { contentarr } from "@/utils/about/index";
const Herosection = () => {
  return (
    <>
      <div className="w-full   flex flex-col lg:flex-row  h-full  my-[5rem] items-center justify-between px-4 md:px-14 lg:px-16 ">
        <div className=" relative  lg:w-1/2  w-full  min-h-[400px] md:min-h-[500px] lg:h-screen  ">
          {imagearr.map((item) => (
            <img
              key={item.id.toString()}
              src={item.img.src}
              alt={"image"}
              className={`absolute z-10  ${item.position} ${item.height} ${item.width} object-cover`}
            />
          ))}
        </div>
        <div className="lg:w-1/2  w-full h-full mt-6   ">
          <p className="text-xl font-semibold font-serif">
            EDUCATION FOR ALL RURAL CHILDREN
          </p>
          <p className=" text-4xl font-extrabold uppercase max-w-sm md:max-w-lg my-3 text-red-900">
            We are a Hindu that believe in Ram
          </p>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-3 my-6 ">
            {contentarr.map((item) => (
              <span key={item.id.toString()} className="flex gap-2  ">
                <span className=" text-slate-500 text-xl "> {item.icon}</span>
                <span className="text-2xl text-slate-500 font-semibold">
                  {item.title}
                </span>
              </span>
            ))}
          </div>
          <p className="text-sm lg:text-2xl font-semibold max-w-lg my-7 ">
            We are a Hindu that belives in Lord Rama and Vishnu Deva the
            followers and We are a Hindu that belives in Lord Rama and Vishnu
            Deva.
          </p>
          <button className="bg-black rounded-lg text-white px-8 py-5">
            Lear More
          </button>
        </div>
      </div>
    </>
  );
};

export default Herosection;
