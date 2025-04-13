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
          <p className="text-2xl font-semibold">Why Choose US?</p>
          <div className=" grid grid-cols-1  gap-3 my-6 ">
            {contentarr.map((item) => (
              <span key={item.id.toString()} className="flex gap-2  ">
                <span className=" text-slate-500 text-xl "> {item.icon}</span>
                <span className="text-xl text-slate-500 font-semibold">
                  {item.title}
                </span>
              </span>
            ))}
          </div>
          <p className="text-sm lg:text-sm font-semibold max-w-3xl my-7  text-slate-500">
            Welcome to [omm babaji website], your one-stop destination for
            hassle-free Puja services. We understand the significance of Vedic
            rituals in your life and strive to make traditional Puja ceremonies
            easily accessible with just a few clicks. With a network of verified
            and experienced Pandits across various traditions, we offer
            customized Puja services for every occasion—be it Griha Pravesh,
            Satyanarayan Puja, Rudrabhishek, or Wedding ceremonies. Our platform
            ensures seamless booking, transparent pricing, and doorstep Puja
            services with high-quality Samagri (ritual materials). At [Your
            Website Name], we bridge the gap between devotees and expert Pandits
            by integrating technology with spirituality. Our mission is to
            uphold the purity and sanctity of rituals while making it convenient
            for you to seek divine blessings without any hassle.
          </p>
          <button className="bg-black rounded-lg text-white px-8 py-3">
            Lear More
          </button>
        </div>
      </div>
    </>
  );
};

export default Herosection;
