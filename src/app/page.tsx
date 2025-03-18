
import Breadcrumb from "@/components/Home/Breadcrum";
import HeroSection from "@/components/Home/HeroSection";
import Section3 from "@/components/Home/Section3";
import Section4 from "@/components/Home/Section4";

import Image from "next/image";

export default function Home() {
  return (
    <div className="lg:gap-15 flex flex-col">
      <Breadcrumb/>
      <HeroSection/>
      <Section3/>
      <Section4/>
    </div>
  );
}
