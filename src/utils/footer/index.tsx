import { listArrType } from "@/types";
import { listArrType1 } from "@/types";
import { imagearrType } from "@/types";
import { gpay, mastercard, paytm, UPI, visa } from "@/assets/footer";
export const listarr: listArrType[] = [
  {
    id: 1,
    title: "privacy policy",
  },
  {
    id: 2,
    title: "privacy policy",
  },
  {
    id: 3,
    title: "privacy policy",
  },
  {
    id: 4,
    title: "privacy policy",
  },
  {
    id: 5,
    title: "privacy policy",
  },
  {
    id: 6,
    title: "privacy policy",
  },
];
export const listarr1: listArrType1[] = [
  {
    id: 1,
    title: "blog",
  },
  {
    id: 2,
    title: "FAQ",
  },
  {
    id: 3,
    title: "login Register",
  },
  {
    id: 4,
    title: "payment option",
  },
];
export const imagearr: imagearrType[] = [
  {
    id: 1,
    img: gpay,
    url:"https://play.google.com/store/apps/details?id=com.google.android.apps.nbu.paisa.user&hl=en-US"
  },
  {
    id: 2,
    img: mastercard,
    url:"https://www.mastercard.co.in/en-in.html"
  },
  {
    id: 3,
    img: paytm,
    url:"https://paytm.com/"
  },
  {
    id: 4,
    img: UPI,
    url:"https://www.npci.org.in/what-we-do/upi/product-overview"
  },
  {
    id: 5,
    img: visa,
    url:"https://www.visa.co.in/"
  },
];
