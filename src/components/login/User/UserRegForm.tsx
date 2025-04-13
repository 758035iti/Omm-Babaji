"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function UserRegForm(props: any) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    type: "defaultType",
  });

  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error on input change
  };

  const validate = () => {
    const newErrors: any = {};
    if (!formData.name || formData.name.length < 3)
      newErrors.name = "Name must be at least 3 characters";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.phone || !/^[6-9]\d{9}$/.test(formData.phone))
      newErrors.phone = "Enter a valid 10-digit phone ";
    if (!formData.password || formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await axios.post(
        "http://localhost:5000/api/register",
        formData
      );
      if (response.status === 201) {
        alert("You are registered successfully");
        router.push("/user_login");
      }
    } catch (error: any) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-gradient-to-t from-pink-950 to-red-950 min-h-screen">
      <div className="w-full h-[50rem] relative">
        <p className="absolute top-0 left-1/2 transform -translate-x-1/2 text-4xl text-white font-bold mt-8">
          Register as a User
        </p>
      </div>

      <div className="flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="w-1/3 h-auto bg-transparent border-2 border-white mt-10 rounded-lg absolute top-48 left-1/2 -translate-x-1/2 p-5 flex flex-col gap-1 shadow-lg"
        >
          <label className="font-semibold text-gray-500">Name:</label>
          <input
            name="name"
            type="text"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
            className="bg-slate-300 p-2 rounded"
          />
          <p className="text-red-500 text-sm">{errors.name}</p>

          <label className="font-semibold text-gray-500">Email:</label>
          <input
            name="email"
            type="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            className="bg-slate-300 p-2 rounded"
          />
          <p className="text-red-500 text-sm">{errors.email}</p>

          <label className="font-semibold text-gray-500">Phone:</label>
          <input
            name="phone"
            type="tel"
            placeholder="Enter Your Phone"
            value={formData.phone}
            onChange={handleChange}
            className="bg-slate-300 p-2 rounded"
          />
          <p className="text-red-500 text-sm">{errors.phone}</p>

          <label className="font-semibold text-gray-500">Password:</label>
          <input
            name="password"
            type="password"
            placeholder="Enter Your Password"
            value={formData.password}
            onChange={handleChange}
            className="bg-slate-300 p-2 rounded"
          />
          <p className="text-red-500 text-sm">{errors.password}</p>

          <label className="font-semibold text-gray-500">
            Confirm Password:
          </label>
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Your Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="bg-slate-300 p-2 rounded"
          />
          <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
          <label className="font-semibold text-gray-500">User Type:</label>
          <input
            name="type"
            type="text"
            placeholder="Enter User Type"
            value={formData.type}
            onChange={handleChange}
            className="bg-slate-300 p-2 rounded"
          />
          <p className="text-red-500 text-sm">{errors.type}</p>

          <button
            type="submit"
            className="text-white rounded-lg p-2 bg-red-700 hover:bg-red-600 transition mt-2"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
