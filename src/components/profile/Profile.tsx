/* eslint-disable @next/next/no-img-element */

import { updateuser } from "@/utils/profile";
import React from "react";
const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-t from-pink-950 to-red-950 flex justify-center items-center px-4 py-10">
      <div className="w-full max-w-3xl">
        {updateuser.map((item) => (
          <div
            key={item.id.toString()}
            className="bg-white/10 backdrop-blur-md text-white rounded-2xl p-6 shadow-xl border border-white/20 "
          >
            <h1 className="text-bold text-3xl text-white text-center ">
              PROFILE
            </h1>
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
              <div className="w-24 h-24 bg-gray-300 rounded-md overflow-hidden">
                <img
                  src={item.img.src}
                  alt="User"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-2xl  lg:text-3xl font-semibold">
                  {`${item.firstName} ${item.middleName} ${item.lastName}`}
                </p>
                <p className="text-sm md:text-2xl italic text-gray-200">
                  {item.username}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
              <p className="md:text-xl ">
                <span className="font-semibold">Email:</span> {item.email}
              </p>
              <p className="md:text-xl">
                <span className="font-semibold">Phone:</span> {item.phoneNumber}
              </p>
              <p className="md:text-xl">
                <span className="font-semibold">Aadhar No:</span>{" "}
                {item.aadharNumber}
              </p>
              <p className="md:text-xl">
                <span className="font-semibold">Password:</span> {item.password}
              </p>
              <p className="md:text-xl">
                <span className="font-semibold">Registration Type:</span>{" "}
                {item.registrationType}
              </p>
              <p className="md:text-xl">
                <span className="font-semibold">Language:</span> {item.language}
              </p>
              <p className="md:text-xl">
                <span className="font-semibold">Address:</span> {item.address}
              </p>
              <p className="md:text-xl">
                <span className="font-semibold">Area:</span> {item.area}
              </p>
              <p className="md:text-xl">
                <span className="font-semibold">City:</span> {item.city}
              </p>
              <p className="md:text-xl">
                <span className="font-semibold">State:</span> {item.state}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
