"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// ✅ Validation Schema
const schema = yup.object().shape({
  name: yup.string().required("Name is required").min(3, "Name must be at least 3 characters"),
  email: yup.string().required("Email is required").email("Invalid email"),
  city: yup.string().required("Please select a city"),
  specialization: yup.string().required("Please select a specialization"),
  phone: yup
    .string()
    .required("Phone is required")
    .matches(/^[6-9]\d{9}$/, "Invalid phone number"),
  password: yup.string().required("Password is required").min(6, "Minimum 6 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

const BrahminRegistration = () => {
  const router = useRouter();
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [experience, setExperience] = useState<number>(0);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log("Form Submitted:", { ...data, experience });
    alert("Brahmin registered successfully!");
    router.push("/brahmin_login");
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <section className="relative bg-gradient-to-t from-pink-950 to-red-950 w-full h-[60rem] min-h-screen px-2 md:px-6 flex flex-col">
      <h2 className="text-3xl font-bold text-white my-2 text-center">
        Brahmin Registration Form
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="absolute bg-opacity-40 shadow-lg bg-transparent h-auto w-[23rem] md:w-[40rem] border-2 border-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg p-6"
      >
        {/* Profile Image */}
        <div className="flex flex-col items-center mb-4 text-center">
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className="w-24 h-24 rounded-full border-2 border-white object-cover mb-2"
            />
          ) : (
            <div className="w-24 h-24 rounded-full border-2 border-dashed border-white flex items-center justify-center text-white text-sm">
              No Image
            </div>
          )}
          <label className="mt-2 text-white cursor-pointer bg-blue-600 px-3 py-1 rounded-md hover:bg-blue-700">
            Upload Picture
            <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
          </label>
        </div>

        {/* Name */}
        <label className="text-gray-500 font-semibold">Name:</label>
        <input
          {...register("name")}
          type="text"
          placeholder="Enter Your Name"
          className="w-full p-2 border-2 bg-slate-300 rounded"
        />
        <p className="text-red-500 text-sm">{errors.name?.message}</p>

        {/* Email */}
        <label className="text-gray-500 font-semibold">Email:</label>
        <input
          {...register("email")}
          type="email"
          placeholder="Enter Your Email"
          className="w-full p-2 border-2 bg-slate-300 rounded"
        />
        <p className="text-red-500 text-sm">{errors.email?.message}</p>

        {/* City & Specialization */}
        <div className="flex gap-2 mt-2">
          <select
            {...register("city")}
            className="w-full p-2 border-2 bg-slate-300 rounded text-gray-700"
          >
            <option value="">Select City</option>
            <option value="Bhubneswar">Bhubneswar</option>
            <option value="Cuttack">Cuttack</option>
            <option value="Rasulgad">Rasulgad</option>
            <option value="Puri">Puri</option>
          </select>
          <select
            {...register("specialization")}
            className="w-full p-2 border-2 bg-slate-300 rounded text-gray-700"
          >
            <option value="">Select Specialization</option>
            <option value="Vedic Rituals">Vedic Rituals</option>
            <option value="Astrology">Astrology</option>
            <option value="Spiritual Healing">Spiritual Healing</option>
          </select>
        </div>
        <p className="text-red-500 text-sm">{errors.city?.message}</p>
        <p className="text-red-500 text-sm">{errors.specialization?.message}</p>

        {/* Phone */}
        <label className="text-gray-500 font-semibold mt-2">Phone Number:</label>
        <input
          {...register("phone")}
          type="tel"
          placeholder="Phone Number"
          className="w-full p-2 border-2 bg-slate-300 rounded"
        />
        <p className="text-red-500 text-sm">{errors.phone?.message}</p>

        {/* Password */}
        <label className="text-gray-500 font-semibold mt-2">Password:</label>
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="w-full p-2 border-2 bg-slate-300 rounded"
        />
        <p className="text-red-500 text-sm">{errors.password?.message}</p>

        {/* Confirm Password */}
        <label className="text-gray-500 font-semibold mt-2">Confirm Password:</label>
        <input
          {...register("confirmPassword")}
          type="password"
          placeholder="Confirm Password"
          className="w-full p-2 border-2 bg-slate-300 rounded"
        />
        <p className="text-red-500 text-sm">{errors.confirmPassword?.message}</p>

        {/* Experience */}
        <div className="flex items-center mt-4">
          <p className="text-gray-500 font-semibold mr-4">Experience:</p>
          <input
            type="range"
            min="0"
            max="50"
            value={experience}
            onChange={(e) => setExperience(Number(e.target.value))}
            className="w-full"
          />
          <span className="text-white ml-2">{experience} yrs</span>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white mt-6 w-full p-2 rounded hover:bg-blue-700"
        >
          Register
        </button>

        {/* Link to Login */}
        <p className="text-white text-sm text-center mt-4">
          Already registered?{" "}
          <span
            onClick={() => router.push("/brahmin_login")}
            className="text-blue-400 underline cursor-pointer"
          >
            Login here
          </span>
        </p>
      </form>
    </section>
  );
};

export default BrahminRegistration;
