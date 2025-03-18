"use client";
import React from "react";
import { mandir2 } from "@/assets/about";
const Breadcrumb1 = () => {
  return (
    <div>
      <div
        // className="relative bg-black/50"
        // style={{
        //   backgroundImage: `url(${mandir2.src})`,
        //   height: "60vh",
        //   width: "100vw",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   backgroundBlendMode: "overlay", // Allows color + image to blend
        // }}
        className="relative bg-black/50 w-full h-auto"
      >
        <img
          src={mandir2.src}
          alt="mandir"
          className="w-full lg:h-96 h-80 object-cover"/>
        <p className="text-white text-5xl font-bold absolute flex  justify-center items-center inset-0 ">
          About us
        </p>
        <button className="bg-white rounded-lg absolute  flex justify-center items-center px-6 py-3 lg:top-[23rem] top-72 left-1/2 -translate-x-1/2">
          Home <span className="text-amber-300">About us </span>
        </button>
      </div>
    </div>
  );
};
export default Breadcrumb1;
