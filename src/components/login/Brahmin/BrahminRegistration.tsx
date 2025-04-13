"use client";
import React, { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
const BrahminRegistration = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    city: "",
    specialization: "",
    experience: 0,
    profileImage: "",
  });

  const [errors, setErrors] = useState<any>({});

  // Handle input change
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev: any) => ({ ...prev, [name]: "" }));
  };

  // Handle image upload
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl: string = URL.createObjectURL(file);
      setFormData((prev) => ({ ...prev, profileImage: imageUrl }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors: any = {};

    if (!formData.name || formData.name.length < 3)
      newErrors.name = "Name must be at least 3 characters";

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";

    if (!formData.phone || !/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone number must be 10 digits";

    if (!formData.city) newErrors.city = "Please select a city";

    if (!formData.specialization)
      newErrors.specialization = "Please select a specialization";

    if (!formData.password || formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit form
  const handleRegister = async () => {
    if (!validateForm()) return;

    // TODO: You can send formData to the backend here using Axios
    try {
      const response = await axios.post(
        "http://localhost:5000/api/register",
        formData
      );
      if (response.status === 200) {
        alert("you are registered successfully");
        router.push("/brahmin_login");
      }
    } catch (error: any) {
      console.error(error);
      alert("something went wrong. please try again");
    }
  };

  return (
    <section className="relative bg-gradient-to-t from-pink-950 to-red-950 w-full h-full min-h-screen px-2 md:px-6 ">
      <form className="absolute bg-opacity-40 shadow-lg bg-transparent h-auto w-[23rem] md:w-[40rem] border-2 border-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg p-6 ">
        <div className="flex flex-col items-center mb-4 text-center">
          <h2 className="text-3xl font-bold text-white my-2">
            Brahmin Registration Form
          </h2>
          {formData.profileImage ? (
            <img
              src={formData.profileImage}
              alt="Profile Preview"
              className="w-24 h-24 rounded-full border-2 border-white mb-2 object-cover"
            />
          ) : (
            <div className="w-24 h-24 rounded-full border-2 border-dashed border-white flex items-center justify-center text-white text-sm">
              No Image
            </div>
          )}
          <label className="mt-2 text-white cursor-pointer bg-blue-600 px-3 py-1 rounded-md hover:bg-blue-700">
            Upload Picture
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
        </div>

        {/* Name */}
        <p className="text-gray-500 text-sm">Name:</p>
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Enter Your Name"
          className="w-full p-2 border-2 bg-slate-300 mt-2 rounded"
        />
        <p className="text-red-500 text-sm">{errors.name}</p>

        {/* Email */}
        <p className="text-gray-500 text-sm">Email:</p>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter Your Email"
          className="w-full p-2 border-2 text-gray-500 bg-slate-300 mt-2 rounded"
        />
        <p className="text-red-500 text-sm">{errors.email}</p>

        {/* City & Specialization */}
        <span className="flex gap-2">
          <select
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="w-full p-2 border-2 border-white text-gray-500 bg-slate-300 mt-2 rounded"
          >
            <option value="">Select a city</option>
            <option value="Bhubneswar">Bhubneswar</option>
            <option value="Cuttack">Cuttack</option>
            <option value="Rasulgad">Rasulgad</option>
            <option value="Puri">Puri</option>
          </select>
          <select
            name="specialization"
            value={formData.specialization}
            onChange={handleInputChange}
            className="w-full p-2 border-2 border-white text-gray-500 bg-slate-300 mt-2 rounded"
          >
            <option value="">Select specialization</option>
            <option value="Vedic Rituals">Vedic Rituals</option>
            <option value="Astrology">Astrology</option>
            <option value="Spiritual Healing">Spiritual Healing</option>
          </select>
        </span>
        <p className="text-red-500 text-sm">
          {errors.city || errors.specialization}
        </p>

        {/* Phone */}
        <p className="text-gray-500 text-sm">Phone Number:</p>
        <input
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Phone Number"
          className="w-full p-2 border-2 mt-2 text-gray-500 bg-slate-300 rounded"
        />
        <p className="text-red-500 text-sm">{errors.phone}</p>

        {/* Password */}
        <p className="text-gray-500 text-sm">Password:</p>
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Password"
          className="w-full p-2 border-2 mt-2 text-gray-500 bg-slate-300 rounded"
        />
        <p className="text-red-500 text-sm">{errors.password}</p>

        {/* Confirm Password */}
        <p className="text-gray-500 text-sm">Confirm Password:</p>
        <input
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          placeholder="Confirm Password"
          className="w-full p-2 border-2 mt-2 text-gray-500 bg-slate-300 rounded"
        />
        <p className="text-red-500 text-sm">{errors.confirmPassword}</p>

        {/* Experience */}
        <span className="flex items-center mt-2">
          <p className="text-gray-500 text-sm mr-4">Experience:</p>
          <input
            name="experience"
            type="range"
            min="0"
            max="50"
            value={formData.experience}
            onChange={(e) =>
              setFormData({ ...formData, experience: Number(e.target.value) })
            }
            className="w-full"
          />
          <span className="text-white ml-2">{formData.experience} yrs</span>
        </span>

        {/* Submit Button */}
        <button
          type="button"
          onClick={handleRegister}
          className="bg-green-600 text-white mt-6 w-full p-2 rounded hover:bg-green-700"
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
