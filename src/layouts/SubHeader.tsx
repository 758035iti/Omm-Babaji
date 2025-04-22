"use client";
import React, { useState } from "react";
import { navArr } from "@/utils/navbar";
import Link from "next/link";

export default function SubHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div>
      <section className="hidden lg:block">
        <div className="flex justify-end items-center gap-5 text-red-900 p-5 shadow-2xl shadow-black relative">
          {navArr.map((item) => {
            const isLogin = item.title === "Login";

            return (
              <div
                key={item.id.toString()}
                className="relative"
                onMouseEnter={() => isLogin && setIsDropdownOpen(true)}
                onMouseLeave={() => isLogin && setIsDropdownOpen(false)}
              >
                {!isLogin ? (
                  <Link
                    href={item.url.toString()}
                    className="p-2 hover:text-black hover:underline text-lg font-bold cursor-pointer"
                  >
                    {item.title}
                  </Link>
                ) : (
                  <p className="p-2 hover:text-black hover:underline text-lg font-bold cursor-pointer">
                    {item.title}
                  </p>
                )}

                {/* Dropdown menu */}
                {isLogin && isDropdownOpen && (
                  <div className="absolute right-0 mt-0 bg-white text-black shadow-md rounded-md w-40 z-50">
                    <Link
                      href="/login/Brahmin"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Brahmin
                    </Link>
                    <Link
                      href="/login/User"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      User
                    </Link>
                    <Link
                      href="/login/Admin"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Admin
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
