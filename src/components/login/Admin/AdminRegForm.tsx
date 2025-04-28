// "use client";
// import React from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import Link from "next/link";

// const schema = yup.object().shape({
//   firstName: yup.string().required(),
//   middleName: yup.string(),
//   lastName: yup.string().required(),
//   username: yup.string().required().min(4),
//   email: yup.string().required().email(),
//   phoneNumber: yup.string().required().matches(/^[6-9]\d{9}$/),
//   address: yup.string().required(),
//   aadharNumber: yup.string().required().matches(/^\d{12}$/),
//   aadharDocument: yup.mixed().required(),
//   area: yup.string().required(),
//   city: yup.string().required(),
//   state: yup.string().required(),
//   password: yup.string().required().min(6),
//   registrationType: yup.string().required(),
// });

// export default function AdminRegForm() {
//   const { register, handleSubmit } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit = async (data: any) => {
//     const formData = new FormData();
//     Object.entries(data).forEach(([key, value]: any) => {
//       formData.append(key, value);
//     });

//     if (data.aadharDocument && data.aadharDocument[0]) {
//       formData.append("aadharDocument", data.aadharDocument[0]);
//     }

//     try {
//       const res = await fetch("/api/admin-register", {
//         method: "POST",
//         body: formData,
//       });

//       const result = await res.json();
//       if (res.ok) {
//         alert("Registration Successful");
//       } else {
//         alert(result.error || "Registration Failed");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Something went wrong!");
//     }
//   };

//   return (
//     <section className="relative bg-gradient-to-t from-pink-950 to-red-950 min-h-screen">
//       <div className="p-6 max-w-3xl mx-auto">
//         <h2 className="text-3xl font-bold mb-4 text-center text-white">Admin Registration</h2>
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 border-2 p-8 rounded-lg shadow-lg bg-white">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
//             <input {...register("firstName")} placeholder="First Name" className="input bg-gray-200" required />
//             <input {...register("middleName")} placeholder="Middle Name" className="input bg-gray-200" />
//             <input {...register("lastName")} placeholder="Last Name" className="input bg-gray-200" required />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
//             <input {...register("username")} placeholder="Username" className="input bg-gray-200" required minLength={4} />
//             <input {...register("email")} type="email" placeholder="Email" className="input bg-gray-200" required />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
//             <input {...register("phoneNumber")} placeholder="Phone Number" className="input bg-gray-200" required pattern="^[6-9]\d{9}$" />
//             <input {...register("address")} placeholder="Address" className="input bg-gray-200" required />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
//             <input {...register("aadharNumber")} placeholder="Aadhar Number" className="input bg-gray-200" required pattern="\d{12}" />
//             <input {...register("aadharDocument")} type="file" className="input bg-gray-200" required />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
//             <input {...register("area")} placeholder="Area" className="input bg-gray-200" required />
//             <input {...register("city")} placeholder="City" className="input bg-gray-200" required />
//             <input {...register("state")} placeholder="State" className="input bg-gray-200" required />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
//             <input {...register("password")} type="password" placeholder="Password" className="input bg-gray-200" required minLength={6} />
//             <select {...register("registrationType")} className="input bg-gray-200" required>
//               <option value="">Select Registration Type</option>
//               <option value="admin">Admin</option>
//               <option value="superadmin">Super Admin</option>
//             </select>
//           </div>

//           <button type="submit" className="bg-blue-500 w-full text-white px-4 py-2 rounded hover:bg-blue-600">
//             Register
//           </button>
//           <p className="text-center text-gray-500">
//             Already have an account?{" "}
//             <Link href={'/AdminLoginForm'} className="text-blue-500 hover:underline">
//               Login
//             </Link>
//           </p>
//         </form>
//       </div>
//     </section>
//   );
// }
"use client";
import React from "react";
import axios from "axios";
import Link from "next/link";

export default function AdminRegForm() {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const phoneNumber = formData.get("phoneNumber") as string;
    const aadharNumber = formData.get("aadharNumber") as string;
    const password = formData.get("password") as string;
    const aadharDocument = formData.get("aadharDocument") as File;

    if (!/^[6-9]\d{9}$/.test(phoneNumber)) {
      alert("Invalid phone number");
      return;
    }

    if (!/^\d{12}$/.test(aadharNumber)) {
      alert("Invalid Aadhar number");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    if (!aadharDocument || aadharDocument.size === 0) {
      alert("Please upload Aadhar document");
      return;
    }

    try {
      const res = await axios.post("/api/admin-register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Registration Successful");
      form.reset();
    } catch (error: any) {
      console.error("Error:", error);
      alert(error?.response?.data?.error || "Registration failed");
    }
  };

  return (
    <section className="relative bg-gradient-to-t from-pink-950 to-red-950 min-h-screen">
      <div className="p-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center text-white">Admin Registration</h2>
        <form onSubmit={onSubmit} className="space-y-8 border-2 p-8 rounded-lg shadow-lg bg-white" encType="multipart/form-data">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <input name="firstName" placeholder="First Name" className="input bg-gray-200" required />
            <input name="middleName" placeholder="Middle Name" className="input bg-gray-200" />
            <input name="lastName" placeholder="Last Name" className="input bg-gray-200" required />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <input name="username" placeholder="Username" className="input bg-gray-200" required minLength={4} />
            <input name="email" type="email" placeholder="Email" className="input bg-gray-200" required />
            <input name="phoneNumber" placeholder="Phone Number" className="input bg-gray-200" required />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <input name="address" placeholder="Address" className="input bg-gray-200" required />
            <input name="aadharNumber" placeholder="Aadhar Number" className="input bg-gray-200" required />
            <input name="aadharDocument" type="file" className="input bg-gray-200" required />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <input name="area" placeholder="Area" className="input bg-gray-200" required />
            <input name="city" placeholder="City" className="input bg-gray-200" required />
            <input name="state" placeholder="State" className="input bg-gray-200" required />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <input name="password" type="password" placeholder="Password" className="input bg-gray-200" required minLength={6} />
            <select name="registrationType" className="input bg-gray-200" required>
              <option value="">Select Registration Type</option>
              <option value="admin">Admin</option>
              <option value="superadmin">Super Admin</option>
            </select>
          </div>

          <button type="submit" className="bg-blue-500 w-full text-white px-4 py-2 rounded hover:bg-blue-600">
            Register
          </button>
          <p className="text-center text-gray-500">
            Already have an account?{" "}
            <Link href="/AdminLoginForm" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}
