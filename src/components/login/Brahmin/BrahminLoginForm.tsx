"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { bg3 } from "@/assets/login";

// Define the form data structure
interface AdminLoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

// Validation Schema
const schema = yup.object().shape({
  email: yup.string().required("Email is required").email("Invalid email format"),
  password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
});

export default function AdminLoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdminLoginFormData>({
    resolver: yupResolver(schema),
    defaultValues: { rememberMe: false }, // ✅ Fix: Now TypeScript knows the structure
  });

  const onSubmit = (data: AdminLoginFormData) => {
    alert("Admin Login Successful!");
    console.log("Admin Login Data:", data);
  };

  return (
    <div className="relative bg-gradient-to-t from-pink-950 to-red-950 min-h-auto">
      <div className="w-full h-[40rem]">
        {/* <img src={bg3.src} className="w-full lg:h-[40rem] h-80 object-cover" alt="Background" /> */}
        <p className="absolute top-0 left-1/2 transform -translate-x-1/2 text-4xl text-white font-bold mt-8">
          Brahmin Login
        </p>
      </div>

      <div className="flex justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-1/3 h-auto bg-transparent border-2 border-white rounded-lg absolute top-48 left-1/2 -translate-x-1/2 p-5 flex flex-col gap-3 shadow-lg"
        >
          <label className="font-semibold text-gray-500">Username:</label>
          <input
            type="email"
            {...register("email")}
            placeholder="Enter Your Email"
            className="bg-slate-200 p-2 rounded"
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>

          <label className="font-semibold text-gray-500">Password:</label>
          <input
            type="password"
            {...register("password")}
            placeholder="Enter Your Password"
            className="bg-slate-200 p-2 rounded"
          />
          <p className="text-red-500 text-sm">{errors.password?.message}</p>

          <div className="flex justify-between items-center">
            <label className="flex items-center gap-2">
              <input type="checkbox" {...register("rememberMe")} className="w-4 h-4 " />
              <label className="font-semibold text-gray-300">Remember Me</label>
            </label>
            <a href="#" className="text-blue-500 hover:underline text-sm">Forgot Password?</a>
          </div>

          <button type="submit" className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}