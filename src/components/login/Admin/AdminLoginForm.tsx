/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";
// import React, { useState } from "react";
// import axios from "axios";
// import { useRouter } from "next/navigation"; // <-- Import useRouter
// import Link from "next/link";

// export default function AdminLoginForm() {
//   const router = useRouter(); // <-- Initialize router
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//     registrationType: "admin",
//   });

//   const [errors, setErrors] = useState<{ [key: string]: string }>({});

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setErrors((prev) => ({ ...prev, [name]: "" }));
//   };

//   const validate = () => {
//     const newErrors: { [key: string]: string } = {};
//     if (!formData.username || formData.username.length < 3) {
//       newErrors.username = "Username must be at least 3 characters";
//     }
//     if (!formData.password || formData.password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters";
//     }
//     if (formData.registrationType.toLowerCase() !== "admin") {
//       newErrors.userType = "User type must be 'admin'";
//     }
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!validate()) return;

//     try {
//       const response = await axios.post(
//         "http://localhost:4002/api/admin/login",
//         formData,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (response.status === 200) {
//         console.log("Login Response:", response.data);
//         const { token } = response.data;
//         console.log(token);
//         if (token) {
//           localStorage.setItem("token", token); // ✅ Save token for future requests
//           alert("Admin Login Successful!");

//           // Redirect to admin panel
//           router.push("login/Admin/admin_panel");
//         } else {
//           alert("Login failed: No token received.");
//         }
//       }
//     } catch (error: any) {
//       console.error(error.message);
//       alert("Something went wrong, please try again.");
//     }
//   };

//   return (
//     <div className="relative bg-gradient-to-t from-pink-950 to-red-950 min-h-screen">
//       <div className="w-full h-[40rem]">
//         <p className="absolute top-0 left-1/2 transform -translate-x-1/2 text-4xl text-white font-bold mt-8">
//           Admin Login
//         </p>
//       </div>

//       <div className="flex justify-center items-center">
//         <form
//           onSubmit={handleSubmit}
//           className="w-1/3 h-auto bg-transparent border-2 border-white rounded-lg absolute top-48 left-1/2 -translate-x-1/2 p-5 flex flex-col gap-3 shadow-lg"
//         >
//           <label className="font-semibold text-gray-500">Username:</label>
//           <input
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             placeholder="Enter Your Username"
//             className="bg-slate-200 p-2 rounded"
//           />
//           <p className="text-red-500 text-sm">{errors.username}</p>

//           <label className="font-semibold text-gray-500">Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             placeholder="Enter Your Password"
//             className="bg-slate-200 p-2 rounded"
//           />
//           <p className="text-red-500 text-sm">{errors.password}</p>

//           <label className="font-semibold text-gray-500">
//             Registration Type:
//           </label>
//           <input
//             type="text"
//             name="userType"
//             value={formData.registrationType}
//             readOnly
//             className="bg-slate-200 p-2 rounded text-gray-500 cursor-not-allowed"
//           />
//           <p className="text-red-500 text-sm">{errors.registrationType}</p>

//           <Link
//             href={"/admin_panel"}
//             type="submit"
//             className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition"
//           >
//             Login
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// }
"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function AdminLoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    registrationType: "admin",
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
    if (formData.registrationType.toLowerCase() !== "admin") {
      newErrors.registrationType = "Registration type must be 'admin'";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const response = await axios.post(
        "http://localhost:4002/api/admin/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        const { token } = response.data;
        if (token) {
          localStorage.setItem("token", token);
          // console.log(localStorage.getItem("token"));
          alert("Admin Login Successful!");
          router.push("/admin_panel");
        } else {
          alert("Login failed: No token received.");
        }
      }
    } catch (error: any) {
      console.error("Login error:", error.response?.data || error.message);
      alert(
        error.response?.data?.message ||
          "Something went wrong, please try again."
      );
    }
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

          <label className="font-semibold text-gray-500">
            Registration Type:
          </label>
          <input
            type="text"
            name="registrationType"
            value={formData.registrationType}
            readOnly
            className="bg-slate-200 p-2 rounded text-gray-500 cursor-not-allowed"
          />
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
