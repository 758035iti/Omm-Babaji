"use client";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import RoomIcon from "@mui/icons-material/Room";
import Link from "next/link";
const Card2 = () => {
  return (
    <div>
      <div className=" w-full h-full grid grid-cols-1 lg:grid-cols-3 gap-5 px-4  my-12 ">
        <div className="w-full h-full   flex flex-col items-center justify-center  rounded-lg py-8  shadow-lg bg-black gap-2">
          <span className="flex gap-3">
            <Link href="/contactus" className="flex gap-3">
            <p className="text-red-500 text-sm ">Send Email</p>
            <ArrowForwardIcon className="text-white"/>
            </Link>
          </span>
          <h1 className=" text-3xl font-bold text-white">email address</h1>
          <p className="text-slate-300 text-sm">
            <Link href="mailto:itishrees977@gmail.com">
            itishrees977@gmail.com
            </Link>
          </p>
          <Link href="mailto:itishrees977@gmail.com">
          <EmailIcon className="!text-3xl bg-slate-200 rounded-2xl" />
            </Link>
        </div>
        <div className="w-full h-full  flex flex-col items-center justify-center  rounded-lg py-8 shadow-lg bg-black gap-2">
          <span className="flex gap-3">
            <Link href="/contactus" className="flex gap-3">
            <p className="text-red-500 text-sm ">
              Call us now
            </p>
            <ArrowForwardIcon className="text-white"/>
            </Link>
          </span>
          <h1 className=" text-3xl font-bold text-white">Phone Number</h1>
          <p className="text-slate-300 text-sm">
            <Link href="tel:+91 7848923525">
            +91 7848923525
            </Link>
          </p>
          <Link href="tel:+91 7848923525">
          <LocalPhoneIcon className="!text-3xl bg-slate-200 rounded-2xl" />
          </Link>
        </div>
        <div className="w-full h-full   flex flex-col items-center justify-center  rounded-lg py-8  shadow-2xl bg-black gap-2">
          <span className="flex gap-3">
          <Link href="/contactus" className="flex gap-3">
            <p className="text-red-500 text-sm ">
              Find us Here
            </p>
            <ArrowForwardIcon className="text-white"/>
            </Link>
          </span>
          <h1 className=" text-3xl font-bold text-white">Location</h1>
          <p className="text-slate-300 text-sm">
            <Link href="https://en.wikipedia.org/wiki/Bhubaneswar">
            Bhubneswar jaydev bihar
            </Link>
          </p>
          <Link href="https://en.wikipedia.org/wiki/Bhubaneswar">
          <RoomIcon className="!text-3xl bg-slate-200 rounded-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card2;
