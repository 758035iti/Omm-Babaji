// "use client";
// import React from "react";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import { listarr, listarr1, imagearr } from "@/utils/footer";
// import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
// import MailOutlineIcon from "@mui/icons-material/MailOutline";
// import DnsIcon from "@mui/icons-material/Dns";
// import Link from "next/link";
// const Footer = () => {
//   return (
//     <>
//       <footer className="h-full w-full bg-black px-3 py-4 mt-14">
//         <div className="max-w-screen-lg mx-auto ">
//           <p className="text-white  text-xl lg:text-sm text-center">
//             Online temple is not the official website/ representative of the
//             temple. Online temple has a system of representatives who visit the
//             temple to conduct the puja in your name. Our puja cost includes-
//             temple's official charges, puja samagri items cost, priests’
//             dakshina, prasad shipping cost across India & abroad and online
//             temple service fees.
//           </p>
//         </div>
//         <div className="border-t-1 border-white mt-2 "></div>
//         <div className="w-full  gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4">
//           <div className="items-center justify-center mt-4">
//             <p className="text-white text-xl lg:text-sm w-80">
//               Online Temple is the world’s most trusted portal offering online
//               puja, online havans, Vedic rituals & other special online puja
//               services.
//             </p>
//             <span className="flex gap-3 mt-4 ">
//               <Link href="https://www.facebook.com/">
//                 <FacebookIcon className="bg-green-600 rounded-md text-white !text-xl  " />
//               </Link>
//               <Link href="https://www.twitter.com/">
//                 <TwitterIcon className="bg-green-600 rounded-md text-white !text-xl " />
//               </Link>
//               <Link href="https://www.youtube.com/">
//                 <YouTubeIcon className="bg-green-600 rounded-md text-white !text-xl  " />
//               </Link>
//               <Link href="https://www.instagram.com/utkalgroupltd/">
//                 <InstagramIcon className="bg-green-600 rounded-md text-white !text-xl" />
//               </Link>
//             </span>
//           </div>
//           <div className=" flex flex-col gap-5">
//             <p className="text-white font-bold text-xl">
//               Customer Resources
//               <div className="w-52 h-1  bg-orange-400 mt-2"></div>
//             </p>

//             <div className="list-disc list-inside text-white ">
//               {listarr.map((item, index) => (
//                 <Link href={"/"} className="" key={item.id.toString()}>
//                   <li className="text-white text-sm capitalize hover:text-gray-400 ">
//                     {item.title}
//                   </li>
//                 </Link>
//               ))}
//             </div>
//           </div>
//           <div className="">
//             <ul className="list-disc list-inside text-white gap-3 mt-5 ">
//               {listarr1.map((item, index) => (
//                 <Link href={"/"}>
//                   <li
//                     key={item.toString()}
//                     className="text-white text-sm uppercase gap-5"
//                   >
//                     {item.title}
//                   </li>
//                 </Link>
//               ))}
//             </ul>
//           </div>
//           <div className="flex flex-col gap-3">
//             <p className="text-white font-bold text-xl">
//               Contact
//               <div className="w-32 h-1  bg-orange-400 mt-2"></div>
//             </p>
//             <span className="gap-1 flex flex-col">
//               <span className="flex gap-1">
//                 <LocalPhoneIcon className="text-white" />
//                 <Link href={`tel:9776666555`}>
//                   <p className="text-white">+91 9938795482</p>
//                 </Link>
//               </span>
//               <span className="flex gap-1">
//                 <MailOutlineIcon className="text-white" />
//                 <Link href={`mailto:info@utkalhomes.in`}>
//                   <p className="text-white">support@online.com</p>
//                 </Link>
//               </span>
//               <span className="flex gap-1">
//                 <DnsIcon className="text-white" />
//                 <Link
//                   href={`https://www.google.com/maps/place/Plot+No+-+HIG+-+42+%2C+Jayadev+Vihar%2C+Bhubaneswar/@15.3527901,75.5659991,17z/data=!3m1!4b1!4m5!3m4!1s0x3b1a5b7b7b7b7b7b:0x3b1a5b7b7b7b7b7b!8m2!3d15.3527901!4d75.5681878`}
//                 >
//                   <p className="text-white">Villa No. 29, The Trails,</p>
//                 </Link>
//               </span>
//             </span>
//             <Link
//               href={`https://www.google.com/maps/place/Plot+No+-+HIG+-+42+%2C+Jayadev+Vihar%2C+Bhubaneswar/@15.3527901,75.5659991,17z/data=!3m1!4b1!4m5!3m4!1s0x3b1a5b7b7b7b7b7b:0x3b1a5b7b7b7b7b7b!8m2!3d15.3527901!4d75.5681878`}
//             >
//               <p className="text-white text-sm">
//                 Pokalwada, Manikonda, Hyderabad, Telangana, India, 500089
//               </p>
//             </Link>
//             <p className="text-white font-bold text-xl">
//               Secure Online Payment
//               <div className="w-58 h-1  bg-orange-400 mt-2"></div>
//             </p>
//             <div className="flex gap-2 mt-2">
//               {imagearr.map((item, index) => (
//                 <Link href={`${item.url}`}>
//                   <img
//                     key={item.id.toString()}
//                     src={item.img.src}
//                     alt={`image-${index}`}
//                     className="h-6 w-11"
//                   />
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;
"use client";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import { listarr, listarr1, imagearr } from "@/utils/footer";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DnsIcon from "@mui/icons-material/Dns";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="h-full w-full bg-black px-3 py-4 mt-14">
        <div className="max-w-screen-lg mx-auto ">
          <p className="text-white text-xl lg:text-sm text-center">
            Online temple is not the official website/ representative of the
            temple. Online temple has a system of representatives who visit the
            temple to conduct the puja in your name. Our puja cost includes-
            temple's official charges, puja samagri items cost, priests’
            dakshina, prasad shipping cost across India & abroad and online
            temple service fees.
          </p>
        </div>
        <div className="border-t-1 border-white mt-2 "></div>
        <div className="w-full gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4">
          <div className="items-center justify-center mt-4">
            <p className="text-white text-xl lg:text-sm w-80">
              Online Temple is the world’s most trusted portal offering online
              puja, online havans, Vedic rituals & other special online puja
              services.
            </p>
            <span className="flex gap-3 mt-4 ">
              <Link href="https://www.facebook.com/">
                <FacebookIcon className="bg-green-600 rounded-md text-white !text-xl  " />
              </Link>
              <Link href="https://www.twitter.com/">
                <TwitterIcon className="bg-green-600 rounded-md text-white !text-xl " />
              </Link>
              <Link href="https://www.youtube.com/">
                <YouTubeIcon className="bg-green-600 rounded-md text-white !text-xl  " />
              </Link>
              <Link href="https://www.instagram.com/utkalgroupltd/">
                <InstagramIcon className="bg-green-600 rounded-md text-white !text-xl" />
              </Link>
            </span>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-white font-bold text-xl"> Customer Resources</p>
            <div className="w-52 h-1  bg-orange-400 mt-1"></div>

            <ul className="list-disc list-inside text-white ">
              {listarr.map((item) => (
                <li
                  key={item.id}
                  className="text-white text-sm capitalize hover:text-gray-400"
                >
                  <Link href={"/"}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <ul className="list-disc list-inside text-white gap-3 mt-5">
              {listarr1.map((item, index) => (
                <li key={index} className="text-white text-sm uppercase gap-5">
                  <Link href={"/"}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-white font-bold text-xl"> Contact </p>
            <div className="w-32 h-1 bg-orange-400 mt-2"></div>
            <span className="gap-1 flex flex-col">
              <span className="flex gap-1">
                <LocalPhoneIcon className="text-white" />
                <Link href="tel:9776666555">
                  <p className="text-white">+91 9938795482</p>
                </Link>
              </span>
              <span className="flex gap-1">
                <MailOutlineIcon className="text-white" />
                <Link href="mailto:info@utkalhomes.in">
                  <p className="text-white">support@online.com</p>
                </Link>
              </span>
              <span className="flex gap-1">
                <DnsIcon className="text-white" />
                <Link href="https://www.google.com/maps">
                  <p className="text-white">Villa No. 29, The Trails,</p>
                </Link>
              </span>
            </span>
            <Link href="https://www.google.com/maps">
              <p className="text-white text-sm">
                Pokalwada, Manikonda, Hyderabad, Telangana, India, 500089
              </p>
            </Link>
            <p className="text-white font-bold text-xl">
              Secure Online Payment
            </p>
            <div className="w-58 h-1 bg-orange-400 mt-2"></div>
            <div className="flex gap-2 mt-2">
              {imagearr.map((item) => (
                <Link key={item.id} href={item.url as string}>
                  <img
                    src={item.img.src}
                    alt="payment-method"
                    className="h-6 w-11"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
