"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


interface ContactFormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}


const schema: yup.ObjectSchema<ContactFormData> = yup.object({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("Message is required"),
});

const Form2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form Submitted", data);
  };

  return (
    <div className="lg:mx-12 lg:my-10 mx-8 my-6">
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div>
          <input
            type="text"
            placeholder="Full Name"
            className="bg-slate-300 px-9 py-3 rounded-md w-full"
            {...register("fullName")}
          />
          <p className="text-red-500 text-sm">{errors.fullName?.message}</p>
        </div>

        <div>
          <input
            type="email"
            placeholder="Email Address"
            className="bg-slate-300 px-9 py-3 rounded-md w-full"
            {...register("email")}
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        </div>

        <div>
          <input
            type="text"
            placeholder="Subject"
            className="bg-slate-300 px-9 py-3 rounded-md w-full"
            {...register("subject")}
          />
          <p className="text-red-500 text-sm">{errors.subject?.message}</p>
        </div>

        <div className="col-span-3 mt-4">
          <textarea
            placeholder="Enter a Message"
            className="w-full h-[5rem] bg-slate-300 rounded-md px-4 py-2"
            {...register("message")}
          ></textarea>
          <p className="text-red-500 text-sm">{errors.message?.message}</p>
        </div>

        <div className="col-span-3 flex justify-center items-center mt-3">
          <button type="submit" className="bg-black text-white px-14 py-3 rounded-md">
            Submit Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form2;
