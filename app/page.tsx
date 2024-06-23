import HeaderInMain from "@/components/HeaderInMain";
import SignUp from "@/components/SignUp";


export default function Home() {
  return (
    <main className="w-full h-screen" >
      {/* header */}
      <HeaderInMain />
      <div>
        {/* sign up form */}
        <SignUp />
      </div>
    </main>
  );
}
