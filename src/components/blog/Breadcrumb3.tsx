import React from "react";
import { mandir2 } from "@/assets/about";
import { bg } from "@/assets/blog";
const Breadcrumb3 = () => {
  return (
    <div>
      <div
        className="relative bg-black/50 lg:h-96 h-80"
        // style={{
        //   backgroundImage: `url(${mandir2.src})`,
        //   height: "60vh",
        //   width: "100vw",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   backgroundBlendMode: "overlay", // Allows color + image to blend
        // }}
      >
        <img src={bg.src} alt="mandir" className="w-full lg:h-96 h-80" />
        <p className="text-white text-5xl font-bold absolute flex  justify-center items-center inset-0 ">
          Blog
        </p>
        <button className="bg-white rounded-lg absolute  flex justify-center items-center px-6 py-3 top-[18rem] md:top-[18rem] lg:top-[23rem] left-1/2 -translate-x-1/2">
          Home <span className="text-amber-300">Blog </span>
        </button>
      </div>
    </div>
  );
};
export default Breadcrumb3;
