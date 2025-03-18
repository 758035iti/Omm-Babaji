"use client";
import React from "react";
import { ghat } from "@/assets/about";
import { TextField } from "@mui/material";
import { motion } from "framer-motion";
import { omm } from "@/assets/about";
const Form1 = () => {
  return (
    <div>
      <div
        className=" relative bg-black/55 "
        style={{
          backgroundImage: `url(${ghat.src})`,
          backgroundSize: "cover",
          height: "60vh",
          width: "100vw",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className=" absolute "></div>
        <div> </div>
        <div className="absolute w-full h-full bg-transparent px-10 my-12 lg:w-1/2  flex flex-col ">
          <form className="gap-4 grid grid-cols-1 lg:grid-cols-2 ">
            <input
              type="text"
              placeholder="First Name"
              className="rounded-lg bg-white/40 p-5 placeholder:text-white lg:p-3 "
            ></input>
            <input
              type="text"
              placeholder="Last Name"
              className="p-5 rounded-lg bg-white/40 placeholder:text-white lg:p-3"
            ></input>
            <input
              type="text"
              placeholder="Subject"
              className="bg-white/40 p-5 rounded-lg placeholder:text-white lg:p-3"
            ></input>
            <input
              type="email"
              placeholder="Email Address"
              className="bg-white/40  rounded-lg p-5 placeholder:text-white lg:p-3"
            ></input>
          </form>
          <textarea
            placeholder="Enter a Message"
            className="bg-white/40 rounded-lg w-full placeholder:text-white mt-3 p-3 "
          ></textarea>
          <button className="bg-orange-600 text-white w-full rounded-full p-5 lg:p-3 mt-3">
            GET A QUOTE
          </button>
        </div>

        <div className="lg:w-1/2 w-full h-full absolute  right-0  items-center justify-center text-white text-center hidden lg:flex  flex-col  ">
          {/* Animated Image */}
          <motion.img
            src={omm.src}
            alt="Illustration"
            className="w-32 h-32"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />

          {/* Contact Info */}
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p className="text-lg"> Bhubaneswar, India</p>
          <p className="text-lg"> +91 12345 67890</p>
          <p className="text-lg"> contact@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default Form1;
