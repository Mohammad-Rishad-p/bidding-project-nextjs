import HeaderInMain from "@/components/HeaderInMain";
import ProductCard from "@/components/ProductCard";
import SignUp from "@/components/SignUp";


export default function Home() {
  return (
    <main className="w-full h-screen" >
      {/* header */}
      <HeaderInMain />
        {/* sign up form */}
        {/* <SignUp /> */}
        <ProductCard />
    </main>
  );
}
