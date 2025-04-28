"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const BrahminLoginForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    registrationType: "brahmin", // required by backend
    rememberMe: false,
  });

  const [errors, setErrors] = useState<{
    username?: string;
    password?: string;
  }>({});
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setServerError("");
  };

  const validateForm = () => {
    const newErrors: {
      username?: string;
      password?: string;
      registrationType?: string;
    } = {};

    if (!formData.username || formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }

    if (!formData.password || formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.registrationType.trim().toLowerCase() !== "brahmin") {
      newErrors.registrationType = "User type must be 'brahmin'";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:4002/api/brahmin/login",
        {
          username: formData.username,
          password: formData.password,
          registrationType: formData.registrationType,
        }
      );

      const { token, user_id, registrationType } = response.data;

      localStorage.setItem("brahminToken", token);
      localStorage.setItem("brahminId", user_id);
      localStorage.setItem("userType", registrationType);

      alert("Login Successful!");
      router.push("/brahmin_dashboard");
    } catch (error: unknown) {
      setLoading(false);
      if (axios.isAxiosError(error)) {
        const serverMsg =
          error.response?.data?.error || error.response?.data?.message;
        setServerError(serverMsg || "Something went wrong. Please try again.");
      } else {
        setServerError("Unexpected error occurred. Try again later.");
      }
      console.error("Login error:", error);
    }
  };

  return (
    <div className="relative bg-gradient-to-t from-pink-950 to-red-950 min-h-screen">
      <p className="absolute top-0 left-1/2 transform -translate-x-1/2 text-4xl text-white font-bold mt-8">
        Brahmin Login
      </p>

      <div className="flex justify-center items-center h-screen">
        <form
          onSubmit={handleSubmit}
          className="w-[90%] md:w-1/3 bg-transparent border-2 border-white rounded-lg p-6 shadow-lg"
        >
          {serverError && (
            <p className="text-red-500 text-sm text-center mb-4">
              {serverError}
            </p>
          )}

          {/* Username */}
          <label className="font-semibold text-gray-300">Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter Username"
            className="bg-slate-200 p-2 rounded w-full mt-1"
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username}</p>
          )}

          {/* Password */}
          <label className="font-semibold text-gray-300 mt-4 block">
            Password:
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter Password"
            className="bg-slate-200 p-2 rounded w-full mt-1"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}

          {/* Hidden registrationType input */}
          <label className="font-semibold text-gray-300 mt-4 block">
            registrationType:
          </label>
          <input
            name="registrationType"
            onChange={handleChange}
            placeholder="Enter Password"
            value={formData.registrationType}
            className="bg-slate-200 p-2 rounded w-full mt-1"
          />

          {/* Remember Me */}
          <div className="flex justify-between items-center mt-4">
            <label className="flex items-center gap-2 text-gray-300">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="w-4 h-4"
              />
              Remember Me
            </label>
            <a href="#" className="text-blue-500 hover:underline text-sm">
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`bg-blue-500 text-white rounded-lg p-2 w-full mt-6 hover:bg-blue-600 transition ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BrahminLoginForm;
