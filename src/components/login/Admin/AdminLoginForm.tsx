"use client";
import React, { useState } from "react";

export default function AdminLoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
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
    if (!formData.username || formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }
    if (!formData.password || formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (formData.userType.toLowerCase() !== "admin") {
      newErrors.userType = "User type must be 'admin'";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    alert("Admin Login Successful!");
    console.log("Admin Login Data:", formData);
    // Redirect if needed
  };

  return (
    <div className="relative bg-gradient-to-t from-pink-950 to-red-950 min-h-screen">
      <div className="w-full h-[40rem]">
        <p className="absolute top-0 left-1/2 transform -translate-x-1/2 text-4xl text-white font-bold mt-8">
          Admin Login
        </p>
      </div>

      <div className="flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="w-1/3 h-auto bg-transparent border-2 border-white rounded-lg absolute top-48 left-1/2 -translate-x-1/2 p-5 flex flex-col gap-3 shadow-lg"
        >
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

          <label className="font-semibold text-gray-500">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter Your Password"
            className="bg-slate-200 p-2 rounded"
          />
          <p className="text-red-500 text-sm">{errors.password}</p>

          <label className="font-semibold text-gray-500">User Type:</label>
          <input
            type="text"
            name="userType"
            value={formData.userType}
            readOnly
            className="bg-slate-200 p-2 rounded text-gray-500 cursor-not-allowed"
          />
          <p className="text-red-500 text-sm">{errors.userType}</p>

          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
