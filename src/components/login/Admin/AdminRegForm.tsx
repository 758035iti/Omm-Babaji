"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function AdminRegForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    username: "",
    email: "",
    phoneNumber: "",
    address: "",
    password: "",
    registrationType: "admin",
    aadharNumber: "",
    area: "",
    city: "",
    state: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName || formData.firstName.length < 2) {
      newErrors.firstName = "First Name must be at least 2 characters";
    }
    if (!formData.lastName || formData.lastName.length < 2) {
      newErrors.lastName = "Last Name must be at least 2 characters";
    }
    if (!formData.username || formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.phoneNumber || !/^[6-9]\d{9}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Invalid Indian phone number";
    }
    if (!formData.address || formData.address.length < 5) {
      newErrors.address = "Address must be at least 5 characters";
    }
    if (!formData.password || formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (
      !formData.registrationType ||
      formData.registrationType.toLowerCase() !== "admin"
    ) {
      newErrors.registrationType = "Registration Type must be 'admin'";
    }
    if (!formData.aadharNumber || !/^\d{12}$/.test(formData.aadharNumber)) {
      newErrors.aadharNumber = "Aadhar number must be 12 digits";
    }
    if (!formData.area) {
      newErrors.area = "Area is required";
    }
    if (!formData.city) {
      newErrors.city = "City is required";
    }
    if (!formData.state) {
      newErrors.state = "State is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      const response = await axios.post(
        "http://localhost:5000/api/admin/updateProfile",
        formData
      );
      if (response.status === 200) {
        alert("Profile Updated Successfully!");
        router.push("/admin/profile");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex flex-col bg-gradient-to-t from-pink-950 to-red-950  lg:w-[100vw] lg:h-auto py-10">
      <p className="text-4xl text-white font-bold mt-2 text-center">
        Update Admin Profile
      </p>

      <div className="flex justify-center items-center w-auto h-auto ">
        <form
          onSubmit={handleSubmit}
          className="w-[40%] h-auto bg-transparent border-2 border-white rounded-lg  p-6 flex flex-col gap-2 shadow-lg my-6"
        >
          {[
            { name: "firstName", label: "First Name" },
            { name: "middleName", label: "Middle Name (optional)" },
            { name: "lastName", label: "Last Name" },
            { name: "username", label: "Username" },
            { name: "email", label: "Email" },
            { name: "phoneNumber", label: "Phone Number" },
            { name: "address", label: "Address" },
            { name: "aadharNumber", label: "Aadhar Number" },
            { name: "area", label: "Area" },
            { name: "city", label: "City" },
            { name: "state", label: "State" },
          ].map((field) => (
            <div key={field.name}>
              <label className="font-semibold text-gray-500">
                {field.label}:
              </label>
              <input
                type="text"
                name={field.name}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                value={(formData as any)[field.name]}
                onChange={handleChange}
                placeholder={`Enter your ${field.label}`}
                className="bg-slate-200 p-2 rounded w-full"
              />
              <p className="text-red-500 text-sm">{errors[field.name]}</p>
            </div>
          ))}

          {/* Password Fields */}
          <div>
            <label className="font-semibold text-gray-500">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Password"
              className="bg-slate-200 p-2 rounded w-full"
            />
            <p className="text-red-500 text-sm">{errors.password}</p>
          </div>

          <div></div>

          {/* Registration Type (Disabled) */}
          <div>
            <label className="font-semibold text-gray-500">
              Registration Type:
            </label>
            <input
              type="text"
              name="registrationType"
              value={formData.registrationType}
              disabled
              className="bg-slate-200 p-2  lg:w-24 lg:h-5"
            />
            <p className="text-red-500 text-sm">{errors.registrationType}</p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition mt-3"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}
