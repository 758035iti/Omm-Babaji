"use client";
import Link from "next/link";
import React from "react";

const Form2 = () => {
  return (
    <div>
      <div className=" lg:mx-12 lg:my-10 mx-8 my-6">
        <form className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <input
            type="text"
            placeholder="Full Name"
            className="bg-slate-300 px-9 py-3 rounded-md"
          ></input>
          <input
            type="email"
            placeholder="Email Address"
            className="bg-slate-300 px-9 py-3 rounded-md "
          ></input>
          <input
            type="text"
            placeholder="subject"
            className="bg-slate-300 px-9 py-3 rounded-md "
          ></input>
        </form>
        <textarea
          placeholder="Enter a Message"
          className="w-full h-[5rem] bg-slate-300 mt-4 rounded-md"
        ></textarea>
        <div className="justify-center items-center flex mt-3 ">
          <Link href={'/'} className=" bg-black text-white px-14 py-3 rounded-md ">
            submit now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Form2;
