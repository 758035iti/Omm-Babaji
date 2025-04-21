// "use client";
// import React from 'react'
// import {  navArr } from '@/utils/navbar'
// import Link from 'next/link'
// import { useRouter } from "next/navigation";
// import { useState } from 'react';
// import { useEffect } from 'react';
// import { navArrType } from '@/types';
// import { SubmenuItem } from '@/types';



// // const [submenu, setSubmenu] = useState<SubmenuItem[]>([]);

// //   const router = useRouter();

// //   useEffect(() => {
// //     // Find the "Login" menu item
// //     const loginItem = navArr.find((item) => item.title === "Login");
// //     if (loginItem && loginItem.submenu) {
// //       setSubmenu(loginItem.submenu);
// //     }
// //   }, []);

// export default function SubHeader() {
//   return (
//     <div>
//       <section className='hidden lg:block'>
//         <div className='flex justify-end items-center gap-5 text-red-900 p-3 shadow-2xl shadow-black'>
//             {
//           navArr.map((item,key) => (
//             <Link  key={item.id.toString()} href={`${item.url}`}>
//               <p  key={item.id.toString()}  className='p-2 hover:text-black hover:underline text-lg font-bold'>{item.title}</p>
//               {/* <div className="absolute right-0 mt-2 bg-white text-black shadow-md rounded-md w-40">
//                 {menuItems.map((item) => (
//                   <Link key={item.path} href={`${item.path}`} className="block px-4 py-2 hover:bg-gray-200">
//                     {item.name}
//                   </Link>
//                 ))}
//               </div> */}


// {/* {submenu && submenu.length > 0 && (
//   <ul className="mt-4 space-y-2">
//     {submenu.map((sub, index) => (
//       <li key={index}>
//         <button
//           onClick={() => router.push(sub.path)}
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           {sub.name}
//         </button>
//       </li>
//     ))}
//   </ul>
// )} */}



//             </Link>
//           ))
//            }
//         </div>
//       </section>
//     </div>
//   )
// }






"use client";
import React, { useState } from "react";
import { navArr } from "@/utils/navbar";
import Link from "next/link";
import { logo } from "@/assets/Home";

export default function SubHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div>
      <section className="hidden lg:block relative w-full h-20">
            <div className="absolute top-0 left-0 w-full h-20 bg-white">
              <Link href={'/'}>
                <img src={logo.src} className="justify-start w-24 h-20"/>
              </Link>
            </div>
        <div className="flex justify-end items-center gap-5 text-red-900 p-5 shadow-2xl shadow-black ">
          {navArr.map((item) => (
            <div
              key={item.id.toString()}
              className="relative"
              onMouseEnter={() => item.title === "Login" && setIsDropdownOpen(true)}
              onMouseLeave={() => item.title === "Login" && setIsDropdownOpen(false)}
            >
              
              <Link href={`${item.url}`} className="p-2 hover:text-black hover:underline text-lg font-bold cursor-pointer">
                {item.title}
                {item.icon}
              </Link>

              {item.title === "Login" && isDropdownOpen && (
                <div className="absolute right-0 mt-2 bg-white text-black shadow-md rounded-md w-40">
                  <Link href={'login/Brahmin'} className="block px-4 py-2 hover:bg-gray-200">
                    Brahmin
                  </Link>
                  <Link href={"login/User"} className="block px-4 py-2 hover:bg-gray-200">
                    User
                  </Link>
                  <Link href={"login/Admin"} className="block px-4 py-2 hover:bg-gray-200">
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

