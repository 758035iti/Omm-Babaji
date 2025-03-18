"use client";
import React from "react";
import { blog1, author } from "@/assets/blog";
import { img } from "framer-motion/client";
import CheckIcon from "@mui/icons-material/Check";
import { blogarr, categoryarr, imagearr5, twiterarr } from "@/utils/blog";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
const Section1 = () => {
  return (
    <div>
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 p-7 lg:p-16 justify-between lg:gap-[35rem]">
        <div className="w-full h-full p-7 border-2 lg:w-[60rem] lg:h-full border-gray-200 rounded-2xl">
          <p className="font-extrabold text-2xl text-red-800 font-sans lg:text-3xl">
            I Will Not Reject My Faith in Rama, Shiva, Vishnu, Krishna etc.
          </p>
          <p className="text-slate-400 text-lg ">
            Temple is a place where Hindu worship our Bhagwan Ram, Shiva,
            Vishnu, Krishna etc. Proin eget tortor industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type, People ask questions related to Hinduism. specimen book. It
            has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum
          </p>
          <p className="font-extrabold text-2xl text-red-800 font-sans my-3 lg:text-3xl">
            Our mission is to share the Good of Hinduism
          </p>
          <p className="text-slate-400 text-xl ">
            I find this argument as sad as the argument that without a belief in
            God people would likewise be unethical. Our mission is to share the
            Good of Hinduism, Loving, Faith and Serving. People ask questions
            related to Hinduism. to make a type specimen book.
          </p>
          <div className="overflow-hidden my-3 rounded-md">
            <img
              src={blog1.src}
              className="!transitionall  hover:scale-105 ease-in-out h-full w-full lg:w-[60rem] lg:h-[25rem] "
            />
          </div>
          <p className="font-extrabold text-2xl text-red-800 font-sans my-3 lg:text-3xl">
            People ask questions related to Hinduism
          </p>
          <p className="text-slate-400 text-xl">
            Our mission is to share the Good of Hinduism, Loving, Faith and
            Serving. People ask questions related to Hinduism. Temple is a place
            where Hindu worship our Bhagwan Ram, Shiva, Vishnu, Krishna etc.
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting
          </p>
          <hr className="border-t border-gray-500 my-5" />
          <p className="font-extrabold text-2xl text-red-800 font-sans my-3 lg:text-3xl">
            Should I Believe in Rebirth?
          </p>
          <p className="text-slate-400 text-xl">
            We never believe in reborn the Good of Hinduism, Loving, Faith and
            Serving. People ask questions related to Hinduism. Temple is a place
            where Hindu worship our Bhagwan Ram, Shiva, Vishnu, Krishna etc.
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <p className="font-extrabold text-2xl text-red-800 font-sans my-3 lg:text-3xl">
            Should I Believe in Rebirth?
          </p>
          <span className="flex flex-col gap-2">
            <span className="flex">
              <CheckIcon className=" !text-2xl" />
              <p className="text-sm text-red-700 ">
                People ask questions related to Hinduism
              </p>
            </span>
            <span className="flex">
              <CheckIcon className=" !text-2xl" />
              <p className="text-sm text-red-700 ">
                We never believe in reborn
              </p>
            </span>
            <span className="flex">
              <CheckIcon className=" !text-2xl" />
              <p className="text-sm text-red-700 ">
                People ask questions related to Hinduism
              </p>
            </span>
            <span className="flex">
              <CheckIcon className=" !text-2xl" />
              <p className="text-sm text-red-700 ">
                People ask questions related to Hinduism
              </p>
            </span>
          </span>
          <div className="md:flex md:gap-6 my-4 ">
            {blogarr.map((item) => (
              <div
                className="flex flex-col gap-3 shadow-2xl group overflow-hidden rounded-lg p-3"
                key={item.id.toString()}
              >
                <img
                  src={item.img.src}
                  className=" md:h-[18rem] md:w-[20rem] lg:h-[18rem] lg:w-[26rem] group-hover:scale-105 ease-in-out  "
                />
                <p className="text-sm text-gray-400">{item.date}</p>
                <p className="text-red-700 text-xl font-bold">{item.title}</p>
                <p className="text-sm text-gray-400 ">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-auto p-4 lg:w-[28rem] lg:h-auto   ">
          <div className="border-2 border-gray-200 rounded-2xl h-auto w-full   p-2 flex flex-col items-center justify-center">
            <p className="text-xl text-red-800">About me</p>
            <img src={author.src} className="" />
            <p className="text-red-800 text-xl font-bold">
              Rosalina D. Willaimson
            </p>
            <p className="text-sm text-slate-400 max-w-2xl">
              "Praesent sapien massa, convallis a pellentesque nec, egestas non
              nisi. Donec sollicitudin molestie malesuada. Mauris blandit
              aliquet elit"
            </p>
            <span className="flex gap-2">
              <FacebookIcon className="!text-xl text-gray-400" />
              <LinkedInIcon className="!text-xl text-gray-400" />
              <TwitterIcon className="!text-xl text-gray-400" />
              <YouTubeIcon className="!text-xl text-gray-400" />
            </span>
          </div>
          <div className="border-2 border-gray-200 rounded-2xl h-auto w-full  p-2 flex flex-col my-4 ">
            <p className="text-red-700 text-xl font-bold">our Categories</p>
            <div className="">
              {categoryarr.map((item) => (
                <button
                  key={item.id.toString()}
                  className="hover:bg-purple-200 flex flex-col rounded-lg p-2 md:p-3 lg:p-4 w-full max-w-sm md:max-w-md lg:max-w-lg"
                >
                  <span className="flex justify-between items-center">
                    <p className="text-slate-500 hover:text-white text-lg md:text-xl font-semibold">
                      {item.title}
                    </p>
                    <p className="rounded-full hover:bg-white p-2 text-slate-500 text-sm md:text-base">
                      {item.Number}
                    </p>
                  </span>
                </button>
              ))}
            </div>
          </div>
          <div className="h-auto w-full border-2 border-gray-200 rounded-2xl p-3">
            <p className="text-2xl text-red-800 py-2 font-bold">Instagram</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2 lg:gap-3">
              {imagearr5.map((item) => (
                <div
                  key={item.id.toString()}
                  className="group relative rounded-lg overflow-hidden"
                >
                  <img src={item.img.src} className="w-full h-auto " />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white bg-opacity-50 p-3 rounded-full">
                      <InstagramIcon className="text-gray-500 text-2xl" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="h-auto w-full border-2 my-4 border-gray-200 rounded-2xl p-3">
            <p className="text-2xl text-red-800 py-2 font-bold">Twitter Feed</p>

            {twiterarr.map((item) => (
              <div className=" flex flex-col">
                <span key={item.id.toString()} className="flex gap-7">
                  <TwitterIcon className="text-slate-400" />
                  <p className="text-slate-400">{item.description}</p>
                </span>
                <p className="text-red-700 text-sm font-bold left-3 pl-9">
                  {item.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
