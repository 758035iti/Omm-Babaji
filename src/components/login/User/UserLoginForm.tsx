// import { bg1, bg2, bg3 } from '@/assets/login'
// import React from 'react'

// export default function UserLoginForm() {
//   return (
//     <div className='relative'>
//        <div className='w-full h-[40rem] '>
//         <img src={bg2.src} className='w-full lg:h-[40rem] h-80 '/>
//          <p className='absolute top-0 left-[38rem] text-4xl text-white font-bold mt-8 '>Login as a User</p>
//       </div>
//       <div className='flex justify-center items-center'>
//         <form className='w-1/3 h-72 bg-white mt-10 rounded-lg absolute top-48 left-1/2 -translate-x-1/2  p-3 gap-3 flex flex-col px-8'>
//             Name: <input type='text' placeholder='Enter Your name'  required  className='bg-slate-200 '/>
//             Email: <input type='email' placeholder='Enter Your Email' required  className='bg-slate-200'/>
//             Password: <input type='password' placeholder='Enter Your Password' required  className='bg-slate-200'/>
//             <button className='bg-blue-500 text-white rounded-lg p-2'>Login</button>
//         </form>
//       </div>
//     </div>
//   )
// }



"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { bg2 } from "@/assets/login";

// Validation Schema using Yup
const schema = yup.object().shape({
  name: yup.string().required("Name is required").min(3, "Name must be at least 3 characters"),
  email: yup.string().required("Email is required").email("Invalid email format"),
  password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
});

export default function UserLoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data:any) => {
    alert("Login Successful!");
    console.log("User Data:", data);
  };
   
 

  return (
    <div className="relative bg-gradient-to-t from-pink-950 to-red-950 min-h-screen">
      <div className="w-full h-[40rem]">
        {/* <img src={bg2.src} className="w-full lg:h-[40rem] h-80 object-cover" alt="Background" /> */}
        <p className="absolute top-0 left-1/2 transform -translate-x-1/2 text-4xl text-white font-bold mt-8">
          Login as a User
        </p>
      </div>

      <div className="flex justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-1/3 h-aut border-2 border-white bg-transparent  rounded-lg absolute top-32 left-1/2 -translate-x-1/2 p-5 flex flex-col gap-3 shadow-lg"
        >
          <label className="font-semibold text-gray-500">Name:</label>
          <input
            type="text"
            {...register("name")}
            placeholder="Enter Your Name"
            className="bg-slate-200 p-2 rounded"
          />
          <p className="text-red-500 text-sm">{errors.name?.message}</p>

          <label className="font-semibold text-gray-500">Email:</label>
          <input
            type="email"
            {...register("email")}
            placeholder="Enter Your Email"
            className="bg-slate-300 p-2 rounded"
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>

          <label className="font-semibold text-gray-500">Password:</label>
          <input
            type="password"
            {...register("password")}
            placeholder="Enter Your Password"
            className="bg-slate-300 p-2 rounded"
          />
          <p className="text-red-500 text-sm">{errors.password?.message}</p>

          <button type="submit" className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
