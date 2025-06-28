"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function UserRegForm() {
  const router = useRouter();

  // Form data state
  const [formData, setFormData] = useState<any>({
    firstName: "",
    middleName: "",
    lastName: "",
    username: "",
    email: "",
    phoneNumber: "",
    address: "",
    aadharNumber: "",
    area: "",
    city: "",
    state: "",
    language: "",
    password: "",
    registrationType: "Yajamana",
  });

  // File state
  const [userPhoto, setUserPhoto] = useState<File | null>(null);
  const [aadharDocument, setAadharDocument] = useState<File | null>(null);

  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      if (name === "userPhoto") {
        setUserPhoto(files[0]);
      } else if (name === "aadharDocument") {
        setAadharDocument(files[0]);
      }
    }
  };

  const validate = () => {
    const newErrors: any = {};
    if (!formData.firstName || formData.firstName.length < 2)
      newErrors.firstName = "First Name must be at least 2 characters";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.username || formData.username.length < 4)
      newErrors.username = "Username must be at least 4 characters";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.phoneNumber || !/^[6-9]\d{9}$/.test(formData.phoneNumber))
      newErrors.phoneNumber = "Enter a valid 10-digit phone number";
    if (!formData.aadharNumber || !/^\d{12}$/.test(formData.aadharNumber))
      newErrors.aadharNumber = "Aadhar must be 12 digits";
    if (!formData.password || formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!userPhoto) newErrors.userPhoto = "User photo is required";
    if (!aadharDocument) newErrors.aadharDocument = "Aadhar document is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const data = new FormData();

      // Append all form fields
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      // Append files
      if (userPhoto) data.append("userPhoto", userPhoto);
      if (aadharDocument) data.append("aadharDocument", aadharDocument);

      const response = await axios.post(
        "http://localhost:4002/api/User/register",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        alert("Registration successful!");
        router.push("/user_login");
      }
    } catch (error: any) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-gradient-to-t from-pink-950 to-red-950 min-h-screen py-10">
      <h1 className="text-center text-white text-4xl font-bold mb-10">
        User Registration
      </h1>
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-4"
          encType="multipart/form-data"
        >
          {[
            { name: "firstName", label: "First Name" },
            { name: "middleName", label: "Middle Name" },
            { name: "lastName", label: "Last Name" },
            { name: "username", label: "Username" },
            { name: "email", label: "Email", type: "email" },
            { name: "phoneNumber", label: "Phone Number", type: "tel" },
            { name: "aadharNumber", label: "Aadhar Number" },
            { name: "address", label: "Address" },
            { name: "area", label: "Area" },
            { name: "city", label: "City" },
            { name: "state", label: "State" },
            { name: "language", label: "Language" },
            { name: "password", label: "Password", type: "password" },
            { name: "registrationType", label: "Registration Type" },
          ].map((field, index) => (
            <div key={index} className="flex flex-col">
              <label className="font-semibold text-gray-700">
                {field.label}:
              </label>
              <input
                name={field.name}
                type={field.type || "text"}
                placeholder={`Enter ${field.label}`}
                value={(formData as any)[field.name]}
                onChange={handleChange}
                className="bg-slate-100 p-2 rounded"
              />
              <p className="text-red-500 text-sm">{errors[field.name]}</p>
            </div>
          ))}

          {/* User Photo */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700">User Photo:</label>
            <input
              type="file"
              name="userPhoto"
              accept="image/*"
              onChange={handleFileChange}
              className="bg-slate-100 p-2 rounded"
            />
            <p className="text-red-500 text-sm">{errors.userPhoto}</p>
          </div>

          {/* Aadhar Document */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700">Aadhar Document:</label>
            <input
              type="file"
              name="aadharDocument"
              accept=".pdf,image/*"
              onChange={handleFileChange}
              className="bg-slate-100 p-2 rounded"
            />
            <p className="text-red-500 text-sm">{errors.aadharDocument}</p>
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
            >
              Register
            </button>
            <p className="text-sm text-center mt-4">
              Already registered?{" "}
              <span
                className="text-blue-400 underline cursor-pointer"
                onClick={() => router.push("/user_login")}
              >
                Login here
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
