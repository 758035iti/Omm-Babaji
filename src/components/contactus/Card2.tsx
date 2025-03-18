"use client";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import RoomIcon from "@mui/icons-material/Room";
const Card2 = () => {
  return (
    <div>
      <div className=" w-full h-full grid grid-cols-1 lg:grid-cols-3 gap-5 px-4  my-12 ">
        <div className="w-full h-full   flex flex-col items-center justify-center  rounded-lg py-8  shadow-lg bg-black gap-2">
          <span className="flex gap-3">
            <p className="text-red-500 text-sm ">Send Email</p>
            <ArrowForwardIcon className="text-white"/>
          </span>
          <h1 className=" text-3xl font-bold text-white">email address</h1>
          <p className="text-slate-300 text-sm">adyasha123@gmail.com</p>
          <EmailIcon className="!text-3xl bg-slate-200 rounded-2xl" />
        </div>
        <div className="w-full h-full  flex flex-col items-center justify-center  rounded-lg py-8 shadow-lg bg-black gap-2">
          <span className="flex gap-3">
            <p className="text-red-500 text-sm ">Call us now</p>
            <ArrowForwardIcon className="text-white"/>
          </span>
          <h1 className=" text-3xl font-bold text-white">Phone Number</h1>
          <p className="text-slate-300 text-sm">+91 9938795482</p>
          <LocalPhoneIcon className="!text-3xl bg-slate-200 rounded-2xl" />
        </div>
        <div className="w-full h-full   flex flex-col items-center justify-center  rounded-lg py-8  shadow-2xl bg-black gap-2">
          <span className="flex gap-3">
            <p className="text-red-500 text-sm ">Find us Here</p>
            <ArrowForwardIcon className="text-white"/>
          </span>
          <h1 className=" text-3xl font-bold text-white">Location</h1>
          <p className="text-slate-300 text-sm">Bhubneswar jaydev bihar</p>
          <RoomIcon className="!text-3xl bg-slate-200 rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Card2;
