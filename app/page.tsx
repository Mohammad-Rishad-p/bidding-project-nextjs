"use client"
import Footer from "@/components/Footer";
import HeaderInMain from "@/components/HeaderInMain";
import LiveAuctionNew from "@/components/LiveAuctionNew";
import LiveAuctions from "@/components/LiveAuctions";
import PastAuctions from "@/components/PastAuctions";
import PastAuctionsAndWinner from "@/components/PastAuctionsAndWinner";
import SignUpMongo from "@/components/SignUpMongo";
import UpcomingAuctions from "@/components/UpcomingAuctions";
import UpcomingAuctionsAdmin from "@/components/UpcomingAuctionsAdmin";


export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col gap-12" >
      {/* header */}
      <HeaderInMain />
      {/* <UpcomingAuctionsAdmin /> */}
      <div className=" w-full">
        <div className=" w-full h-screen ml-[40%] mt-[4%]">
          <SignUpMongo />
        </div>
      </div>
      <div className=' px-[10%]'>
        <LiveAuctionNew />
        <UpcomingAuctions />
        < PastAuctions />
        {/* <PastAuctionsAndWinner /> */}
      </div>
      <Footer />
    </main>
  );
}
