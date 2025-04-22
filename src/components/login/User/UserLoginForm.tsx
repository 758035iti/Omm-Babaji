"use client";
import React, { useState } from "react";
// import { useRouter } from "next/navigation";
import axios from "axios";

export default function UserLoginForm() {
  // const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    registrationType: "Yajamana", // default type
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [errors, setErrors] = useState<any>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const newErrors: any = {};
    if (!formData.username || formData.username.length < 3)
      newErrors.username = "Username must be at least 3 characters";
    if (!formData.password || formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!formData.registrationType)
      newErrors.registrationType = "Registration type is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await axios.post(
        "http://localhost:4002/api/User/login",
        formData
      );
      if (response.status === 200) {
        alert("Login successful!");
        // router.push("/dashboard");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error(error);
      alert("Invalid credentials or something went wrong.");
    }
  };

  return (
    <div className="relative bg-gradient-to-t from-pink-950 to-red-950 min-h-screen">
      <div className="w-full h-[40rem]">
        <p className="absolute top-0 left-1/2 transform -translate-x-1/2 text-4xl text-white font-bold mt-8">
          Login as a User
        </p>
      </div>

      <div className="flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="w-1/3 h-auto border-2 border-white bg-transparent rounded-lg absolute top-32 left-1/2 -translate-x-1/2 p-5 flex flex-col gap-3 shadow-lg"
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
            className="bg-slate-300 p-2 rounded"
          />
          <p className="text-red-500 text-sm">{errors.password}</p>

          <label className="font-semibold text-gray-500">
            Registration Type:
          </label>
          <select
            name="registrationType"
            value={formData.registrationType}
            onChange={handleChange}
            className="bg-slate-300 p-2 rounded"
          >
            <option value="">Select Type</option>
            <option value="Yajamana">Yajamana</option>
            <option value="Brahmin">Brahmin</option>
            <option value="Admin">Admin</option>
          </select>
          <p className="text-red-500 text-sm">{errors.registrationType}</p>

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
