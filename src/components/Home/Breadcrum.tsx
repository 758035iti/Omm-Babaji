'use client';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/navigation";
import { breadcrumbArr } from "@/utils/home";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  waitForAnimate: true,
  autoplay: true,
  autoplaySpeed: 2000,
};

export default function Breadcrumb() {
  const router=useRouter()
  return (

<section className="w-full h-[80vh] overflow-hidden">
  <Slider {...settings}>
    {breadcrumbArr.map((item, index) => (
      <div key={index} className="relative w-full h-screen flex flex-col">
        <img
          src={item.img.src}
          alt=""
          className="lg:w-full lg:h-full w-full h-[20rem] object-fill z-50"
        />

        <div className="absolute lg:top-48 lg:left-20 top-10 left-5  w-full h-[20rem] flex flex-col justify-center items-cente bg-opacity-50 text-white p-4">
          <h2 className="text-xl lg:text-6xl w-1/2 font-bold">{item.title}</h2>
          <p className="text-md w-40 lg:w-full lg:text-xl mt-2">{item.content}</p>

          <div className="mt-6">
            <button
              className="bg-red-800 hover:bg-gray-700 text-white font-extrabold  px-1 lg:py-4 lg:px-7 rounded"
              onClick={() => router.push("/contact")}>
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    ))}
  </Slider>
</section>

  );
}