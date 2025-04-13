import {
  ganesh,
  girl1,
  girl2,
  holi,
  mahadev,
  mandir,
  raksyabadhan,
} from "@/assets/about";
import { imagearrType1 } from "@/types";
import { contentarrType } from "@/types";
import CheckIcon from "@mui/icons-material/Check";
import { cardarrType } from "@/types";
import { diya } from "@/assets/about";
export const imagearr: imagearrType1[] = [
  {
    id: 1,
    img: ganesh,
    height: " h-[8rem] lg:h-[12rem] md:h-[10rem] ",
    width: " w-[8rem] lg:w-[12rem] md:w-[10rem]",
    position: "lg:z-10 lg:top-0 lg:left-0 z-10 top-5 left-5 md:z-10",
  },
  {
    id: 2,
    img: mahadev,
    height: " h-[12rem] lg:h-[20rem] md:h-[20rem]",
    width: " w-[12rem] lg:w-[20rem] md:w-[20rem]",
    position:
      "lg:top-40  lg:left-30 lg:z-30 top-15 left-20 z-20 md:z-30 md:left-25",
  },
  {
    id: 3,
    img: mandir,
    height: " h-[8rem] lg:h-[12rem] md:h-[10rem]",
    width: "  w-[8rem] lg:w-[12rem] md:w-[10rem]",
    position:
      " lg:bottom-25 lg:right-40 lg:z-0 bottom-15 right-15 z-10 md:right-35 md:z-10  ",
  },
];
export const contentarr: contentarrType[] = [
  {
    id: 1,
    icon: <CheckIcon />,
    title: "Verified and Experienced Pandits",
  },
  {
    id: 2,
    icon: <CheckIcon />,
    title: " Customized Puja Packages",
  },
  {
    id: 3,
    icon: <CheckIcon />,
    title: "Easy Online Booking and Secure Payments",
  },
  {
    id: 4,
    icon: <CheckIcon />,
    title: "Rituals Performed as per Vedic Traditions",
  },
  {
    id: 5,
    icon: <CheckIcon />,
    title: "All-Inclusive Puja Samagri Options",
  },
];
export const cardarr: cardarrType[] = [
  {
    id: 1,
    img: diya,
    title: "Education for all rural children are necessary.",
    name: "Yesh Chopra",
    img1: girl1,
  },
  {
    id: 2,
    img: holi,
    title: "Reconstruct or new construct Temple",
    name: "Yesh Chopra",
    img1: girl2,
  },
  {
    id: 3,
    img: raksyabadhan,
    title: "Ensure child safety & health in World",
    name: "Yesh Chopra",
    img1: girl1,
  },
];
