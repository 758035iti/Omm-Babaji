"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function UserRegForm() {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [formData, setFormData] = useState<any>({
    firstName: "",
    middleName: "",
    lastName: "",
    username: "",
    email: "",
    phoneNumber: "",
    address: "",
    aadharNumber: "",
    aadharDocument: "",
    area: "",
    city: "",
    state: "",
    language: "",
    password: "",
    registrationType: "Yajamana",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    // if (formData.password !== formData.confirmPassword)
    //   newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    console.log(formData, "hhhhs");
    try {
      const response = await axios.post(
        "http://localhost:4002/api/User/register",
        formData
      );
      if (response.status === 201) {
        alert("Registration successful!");
        router.push("/user_login");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
            // {
            //   name: "confirmPassword",
            //   label: "Confirm Password",
            //   type: "password",
            // },
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
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                value={(formData as any)[field.name]}
                onChange={handleChange}
                className="bg-slate-100 p-2 rounded"
              />
              <p className="text-red-500 text-sm">{errors[field.name]}</p>
            </div>
          ))}

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
