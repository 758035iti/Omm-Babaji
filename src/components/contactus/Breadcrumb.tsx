"use client";
import React from "react";
import { ghat3 } from "@/assets/contactus";
const Breadcrumb = () => {
  return (
    <div>
      <div className="relative bg-red-900/40 lg:h-96 h-80">
        
        {/* //   backgroundImage: `url(${ghat3.src})`,
        //   height: "60vh",
        //   width: "100vw",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   backgroundBlendMode: "overlay", 
        // */}
      
        <img
          src={ghat3.src}
          alt="ghat"
          className="w-full lg:h-96 h-80 object-cover"/>
        <p className="text-white text-5xl font-bold absolute flex  justify-center items-center inset-0 top-0">
          Contact us
        </p>
        <button className="bg-white rounded-lg absolute  flex justify-center items-center px-6 py-3 lg:top-[23rem] top-72 left-1/2 -translate-x-1/2">
          Home <span className="text-amber-300">Contact us </span>
        </button>
      </div>
    </div>
  );
};
export default Breadcrumb;
