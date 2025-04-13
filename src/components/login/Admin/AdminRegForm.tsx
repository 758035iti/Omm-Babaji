// "use client";
// import { useState } from "react";

// const AdminRegister = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     username: "",
//     password: "",
//     confirmPassword: "",
//     role: "Admin",
//     terms: false,
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const target = e.target as HTMLInputElement | HTMLSelectElement;
//     const { name, value, type } = target;
//     const checked = (target as HTMLInputElement).checked; // Ensure checked is only accessed for checkboxes

//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form Data:", formData);
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
//       <h2 className="text-2xl font-semibold text-center mb-4">Admin Registration</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">

//         {/* Full Name */}
//         <input
//           type="text"
//           name="fullName"
//           placeholder="Full Name"
//           value={formData.fullName}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         />

//         {/* Email */}
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         />

//         {/* Phone */}
//         <input
//           type="tel"
//           name="phone"
//           placeholder="Phone Number"
//           value={formData.phone}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//         />

//         {/* Username */}
//         <input
//           type="text"
//           name="username"
//           placeholder="Username"
//           value={formData.username}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         />

//         {/* Password */}
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         />

//         {/* Confirm Password */}
//         <input
//           type="password"
//           name="confirmPassword"
//           placeholder="Confirm Password"
//           value={formData.confirmPassword}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         />

//         {/* Role */}
//         <select
//           name="role"
//           value={formData.role}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//         >
//           <option value="Admin">Admin</option>
//           <option value="Super Admin">Super Admin</option>
//           <option value="Moderator">Moderator</option>
//         </select>

//         {/* Terms & Conditions */}
//         <label className="flex items-center space-x-2">
//           <input
//             type="checkbox"
//             name="terms"
//             checked={formData.terms}
//             onChange={handleChange}
//             required
//           />
//           <span>Agree to Terms & Conditions</span>
//         </label>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 "
//         >
//           Register
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AdminRegister;

// import { bg3 } from '@/assets/login'
// import React from 'react'

// export default function AdminRegForm() {
//   return (
//     <div className='flex flex-col gap-2 relative'>
//         <div className='h-auto w-full bg-amber-500'>
//             <img src={bg3.src} className='w-full lg:h-[40rem] h-80 '/>
//              <p className='absolute top-0 left-[38rem] text-4xl text-white font-bold mt-8 '>Register as a Admin</p>
//         </div>
//       <div className='flex justify-center items-center'>
//       <form className='w-1/3 h-auto bg-white rounded-lg absolute top-28 left-1/2 -translate-x-1/2  p-3 gap-3 flex flex-col px-8'>
//             Full Name: <input type='text' placeholder='Enter Your name'  required className='bg-slate-200 '/>
//             Email: <input type='email' placeholder='Enter Your Email' required  className='bg-slate-200'/>
//             Phone: <input type='tel' placeholder='Enter Your Phone' required  className='bg-slate-200'/>
//             DOB: <input type='date' placeholder='Enter Your Phone' required  className='bg-slate-200'/>
//             Password: <input type='password' placeholder='Enter Your Password' required  className='bg-slate-200'/>
//             confirmPassword: <input type='password' placeholder='Confirm Your Password' required  className='bg-slate-200'/>
//             <button className='bg-blue-500 text-white rounded-lg p-2'>Register</button>
//       </form>
//       </div>
//     </div>
//   )
// }

"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { bg3 } from "@/assets/login";
import { useRouter } from "next/navigation";
// Validation Schema using Yup
const schema = yup.object().shape({
  fullName: yup
    .string()
    .required("Full Name is required")
    .min(3, "Name must be at least 3 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^[6-9]\d{9}$/, "Invalid phone number"),
  dob: yup.string().required("Date of Birth is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Passwords must match")
    .required("Confirm Password is required"),
});

export default function AdminRegForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    alert("Admin Registered Successfully!");
    console.log("Admin Data:", data);
    router.push("/adminlogin");
  };

  return (
    <div className="flex flex-col  relative bg-gradient-to-t from-pink-950 to-red-950 min-h-screen">
      <div className="h-auto w-full">
        {/* <img src={bg3.src} className="w-full lg:h-[40rem] h-80 object-cover" alt="Background" /> */}
        <p className="absolute top-0 left-1/2 transform -translate-x-1/2 text-4xl text-white font-bold mt-2">
          Register as an Admin
        </p>
      </div>

      <div className="flex justify-center items-center w-full h-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-1/3 h-auto bg-transparent border-2  border-white rounded-lg absolute top-14 left-1/2 -translate-x-1/2 p-5 flex flex-col gap-1 shadow-lg"
        >
          <label className="font-semibold text-gray-500">Full Name:</label>
          <input
            type="text"
            {...register("fullName")}
            placeholder="Enter Your Name"
            className="bg-slate-200 p-2 rounded"
          />
          <p className="text-red-500 text-sm">{errors.fullName?.message}</p>

          <label className="font-semibold text-gray-500">Email:</label>
          <input
            type="email"
            {...register("email")}
            placeholder="Enter Your Email"
            className="bg-slate-300 p-2 rounded"
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>

          <label className="font-semibold text-gray-500">Phone:</label>
          <input
            type="tel"
            {...register("phone")}
            placeholder="Enter Your Phone"
            className="bg-slate-300 p-2 rounded"
          />
          <p className="text-red-500 text-sm">{errors.phone?.message}</p>

          <label className="font-semibold text-gray-500">Date of Birth:</label>
          <input
            type="date"
            {...register("dob")}
            className="bg-slate-300 p-2 rounded"
          />
          <p className="text-red-500 text-sm">{errors.dob?.message}</p>

          <label className="font-semibold text-gray-500">Password:</label>
          <input
            type="password"
            {...register("password")}
            placeholder="Enter Your Password"
            className="bg-slate-300 p-2 rounded"
          />
          <p className="text-red-500 text-sm">{errors.password?.message}</p>

          <label className="font-semibold text-gray-500">
            Confirm Password:
          </label>
          <input
            type="password"
            {...register("confirmPassword")}
            placeholder="Confirm Your Password"
            className="bg-slate-300 p-2 rounded"
          />
          <p className="text-red-500 text-sm">
            {errors.confirmPassword?.message}
          </p>

          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
