"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function AdminRegForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    userType: "admin",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name || formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters long";
    }
    if (!formData.username || formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.phoneNumber || !/^[6-9]\d{9}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Invalid phone number";
    }
    if (!formData.password || formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords must match";
    }
    if (formData.userType.toLowerCase() !== "admin") {
      newErrors.userType = "User type must be 'admin'";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      const response = await axios.post(
        "http://localhost:5000/api/admin/register",
        formData
      );
      if (response.status === 200) {
        alert("Admin Registered Successfully!");
        router.push("/adminlogin");
      }
    } catch (error) {
      console.error(error);
      alert("something went wrong. please try again");
    }
  };

  return (
    <div className="flex flex-col relative bg-gradient-to-t from-pink-950 to-red-950 min-h-screen">
      <p className="absolute top-0 left-1/2 transform -translate-x-1/2 text-4xl text-white font-bold mt-2">
        Register as an Admin
      </p>

      <div className="flex justify-center items-center w-full h-full">
        <form
          onSubmit={handleSubmit}
          className="w-1/3 bg-transparent border-2 border-white rounded-lg absolute top-14 left-1/2 -translate-x-1/2 p-5 flex flex-col gap-1 shadow-lg"
        >
          <label className="font-semibold text-gray-500">name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            className="bg-slate-200 p-2 rounded"
          />
          <p className="text-red-500 text-sm">{errors.name}</p>

          <label className="font-semibold text-gray-500">Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter Your Username"
            className="bg-slate-200 p-2 rounded"
          />
          <p className="text-red-500 text-sm">{errors.username}</p>

          <label className="font-semibold text-gray-500">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            className="bg-slate-200 p-2 rounded"
          />
          <p className="text-red-500 text-sm">{errors.email}</p>

          <label className="font-semibold text-gray-500">Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter Your Phone Number"
            className="bg-slate-200 p-2 rounded"
          />
          <p className="text-red-500 text-sm">{errors.phoneNumber}</p>

          <label className="font-semibold text-gray-500">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter Password"
            className="bg-slate-200 p-2 rounded"
          />
          <p className="text-red-500 text-sm">{errors.password}</p>

          <label className="font-semibold text-gray-500">
            Confirm Password:
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="bg-slate-200 p-2 rounded"
          />
          <p className="text-red-500 text-sm">{errors.confirmPassword}</p>

          <label className="font-semibold text-gray-500">User Type:</label>
          <input
            type="text"
            name="userType"
            value={formData.userType}
            onChange={handleChange}
            className="bg-slate-200 p-2 rounded"
            disabled // make it read-only to avoid tampering
          />
          <p className="text-red-500 text-sm">{errors.userType}</p>

          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition mt-3"
          >
            Register
          </button>
          <p className="text-sm text-white text-center mt-4">
            Already registered?{" "}
            <span
              className="text-blue-400 underline cursor-pointer"
              onClick={() => router.push("/adminlogin")}
            >
              Login here
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
