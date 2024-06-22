import Login from "@/components/Login";
import SignUp from "@/components/SignUp";
import { ThemeToggler } from "@/components/ThemeToggler";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-screen" >
      <div className='bg-[#5a686d] py-3 flex items-center justify-center  '>
        {/* title */}
        <div className='w-[30%]'>
          {/* title */}
          <div className=' text-5xl pl-6 text-white'>Easy <span className=' text-orange-600'>Bidder</span></div>
        </div>
        {/* login */}
        <div className=" w-[60%] pt"><Login /></div>
        {/* dark mode */}
        <div className=" w-[10%] flex justify-end pr-6"> <ThemeToggler /> </div>
      </div>
    </main>
  );
}
