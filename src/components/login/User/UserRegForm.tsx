// import { bg1 } from '@/assets/login'

// import React from 'react'

// export default function UserRegForm() {
//   return (
//     <div>
//       <div className='w-full h-[40rem] relative'>
//         <img src={bg1.src} className='w-full lg:h-[40rem] h-80 '/>
//          <p className='absolute top-0 left-[38rem] text-4xl text-white font-bold mt-8 '>Register as a User</p>
//       </div>
//       <div className='flex justify-center items-center'>
//         <form className='w-1/3 h-[29rem] bg-white mt-10 rounded-lg absolute top-48 left-1/2 -translate-x-1/2  p-3 gap-3 flex flex-col px-8'>
//             Name: <input type='text' placeholder='Enter Your name'  required  className='bg-slate-200 '/>
//             Email: <input type='email' placeholder='Enter Your Email' required  className='bg-slate-200'/>
//             Phone: <input type='tel' placeholder='Enter Your Phone' required  className='bg-slate-200'/>
//             Password: <input type='password' placeholder='Enter Your Password' required  className='bg-slate-200'/>
//             confirmPassword: <input type='password' placeholder='Confirm Your Password' required  className='bg-slate-200'/>
//             <button className='bg-blue-500 text-white rounded-lg p-2'>Register</button>
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
import { bg1 } from "@/assets/login";
import Link from "next/link";

const schema = yup.object().shape({
  name: yup.string().required("Name is required").min(3, "Name must be at least 3 characters"),
  email: yup.string().required("Email is required").email("Invalid email format"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^[6-9]\d{9}$/, "Invalid phone number"),
  password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Passwords must match")
    .required("Confirm Password is required"),
});

export default function UserRegForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data:any) => {
    console.log("User Data:", data);
    alert("Registration Successful!");
  };

  return (
    <div className="bg-gradient-to-t from-pink-950 to-red-950 min-h-screen">
      <div className="w-full h-[50rem] relative">
        {/* <img src={bg1.src} className="w-full lg:h-[40rem] h-80 object-cover" alt="Background" /> */}
        <p className="absolute top-0 left-1/2 transform -translate-x-1/2 text-4xl text-white font-bold mt-8">
          Register as a User
        </p>
      </div>

      <div className="flex justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-1/3 h-auto bg-transparent border-2 border-white mt-10 rounded-lg absolute top-48 left-1/2 -translate-x-1/2 p-5 flex flex-col gap-1 shadow-lg"
        >
          <label className="font-semibold text-gray-500">Name:</label>
          <input {...register("name")} type="text" placeholder="Enter Your Name" className="bg-slate-300 p-2 rounded" />
          <p className="text-red-500 text-sm">{errors.name?.message}</p>

          <label className="font-semibold text-gray-500">Email:</label>
          <input {...register("email")} type="email" placeholder="Enter Your Email" className="bg-slate-300 p-2 rounded" />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>

          <label className="font-semibold text-gray-500">Phone:</label>
          <input {...register("phone")} type="tel" placeholder="Enter Your Phone" className="bg-slate-300 p-2 rounded" />
          <p className="text-red-500 text-sm">{errors.phone?.message}</p>

          <label className="font-semibold text-gray-500">Password:</label>
          <input {...register("password")} type="password" placeholder="Enter Your Password" className="bg-slate-300 p-2 rounded" />
          <p className="text-red-500 text-sm">{errors.password?.message}</p>

          <label className="font-semibold text-gray-500">Confirm Password:</label>
          <input {...register("confirmPassword")} type="password" placeholder="Confirm Your Password" className="bg-slate-300 p-2 rounded" />
          <p className="text-red-500 text-sm">{errors.confirmPassword?.message}</p>

          <Link href={'/UserLoginForm'} className="w-full px-4 py-0  bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-center">
          <button type="submit" className=" text-white rounded-lg p-2 transition ">
            Register
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
