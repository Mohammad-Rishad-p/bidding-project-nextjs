"use client"
import Footer from "@/components/Footer";
import HeaderInMain from "@/components/HeaderInMain";
import LiveAuctionNew from "@/components/LiveAuctionNew";
import LiveAuctions from "@/components/LiveAuctions";
import PastAuctions from "@/components/PastAuctions";
import SignUpMongo from "@/components/SignUpMongo";
import UpcomingAuctions from "@/components/UpcomingAuctions";


export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col gap-12" >
      {/* header */}
      <HeaderInMain />
      <div className=" w-full">
        <div className=" w-full h-screen ml-[40%] mt-[4%]">
          <SignUpMongo />
        </div>
      </div>
      <div className=' px-[10%]'>
        {/* <LiveAuctions /> */}
        <LiveAuctionNew />
        <UpcomingAuctions />
        <PastAuctions />
      </div>
      <Footer />
    </main>
  );
}
