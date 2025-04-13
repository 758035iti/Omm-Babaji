// import React from "react";
// import { navArr } from "@/utils/navbar";
// import Link from "next/link";

// export default function SubHeader() {
//   return (
//     <div>
//       <section className="hidden lg:block">
//         <div className="flex justify-end items-center gap-5 text-red-900 p-3 shadow-2xl shadow-black">
//           {navArr.map((item, key) => (
//             <Link key={item.id.toString()} href={`${item.url}`}>
//               <p
//                 key={item.id.toString()}
//                 className="p-2 hover:text-black hover:underline text-lg font-bold"
//               >
//                 {item.title}
//               </p>
//             </Link>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }
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
          {navArr.map((item) => (
            <div
              key={item.id.toString()}
              className="relative"
              onMouseEnter={() =>
                item.title === "Login" && setIsDropdownOpen(true)
              }
              onMouseLeave={() =>
                item.title === "Login" && setIsDropdownOpen(false)
              }
            >
              <Link
                href={String(item.url)}
                className="p-2 hover:text-black hover:underline text-lg font-bold cursor-pointer"
              >
                {/* <p className="p-2 hover:text-black hover:underline text-lg font-bold cursor-pointer">
                  {item.title}
                </p> */}
                {item.title}
              </Link>

              {/* Submenu for Login */}
              {item.title === "Login" && isDropdownOpen && (
                <div className="absolute right-0 mt-2 bg-white text-black shadow-md rounded-md w-40">
                  <Link
                    href="login/Brahmin"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Brahmin
                  </Link>
                  <Link
                    href="login/User"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    User
                  </Link>
                  <Link
                    href="login/Admin"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Admin
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
