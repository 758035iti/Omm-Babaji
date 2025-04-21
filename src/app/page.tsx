
import Breadcrumb from "@/components/Home/Breadcrum";
import HeroSection from "@/components/Home/HeroSection";
import Section3 from "@/components/Home/Section3";
import Section4 from "@/components/Home/Section4";

export default function Home() {
  // const add=(num:number)=>{
  //   return num+2;
  // }



  // const numArry=[1,2,3,4,5];
  // const newnumArry=numArry.map(function(item){
  //   return item+2;
  // })
  // console.log(numArry);
  // console.log(newnumArry);



  // const newnumArry = numArry.map((item:any)=>(
  //   item+2
  // ))


  
  return (
    <div className="lg:gap-15 flex flex-col">
      <Breadcrumb/>
      <HeroSection/>
      <Section3/>
      <Section4/>

    </div>
  );
}
