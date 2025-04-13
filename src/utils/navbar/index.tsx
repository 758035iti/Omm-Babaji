import { navArrType } from "@/types";
import { SubmenuItem } from "@/types";
export const navArr: navArrType[] = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About Us",
    url: "/about",
  },
  {
    id: 3,
    title: "Puja",
    url: "/pujaservices",
  },
  {
    id: 4,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 5,
    title: "Contact Us",
    url: "/contactus",
  },
  {
    id: 6,
    title: "Booking_process",
    url: "/booking_process",
  },
  {
    id: 7,
    title: "Login",
    url: "/login",
    Submenu: [
      { id: 1, name: "User", path: "login/User" },
      { id: 2, name: "Brahmin", path: "login/Brahmin" },
      { id: 3, name: "Admin", path: "login/Admin" },
    ],
  },
];
