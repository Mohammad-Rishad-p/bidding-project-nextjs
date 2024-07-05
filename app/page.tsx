"use client"
import AddProductDescription from "@/components/AddProductDescription";
import HeaderInMain from "@/components/HeaderInMain";
import MyForm from "@/components/MyForm";
import ProductCard from "@/components/ProductCard";
import SignUp from "@/components/SignUp";
import SignUpMongo from "@/components/SignUpMongo";


export default function Home() {
  return (
    <main className="w-full h-screen" >
      {/* header */}
      <HeaderInMain />
      <SignUpMongo />
    </main>
  );
}
