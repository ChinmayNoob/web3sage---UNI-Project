"use client"
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import { useRouter } from "next/navigation";
import { FaAngleRight } from "react-icons/fa6";


export default function Home() {
  const router = useRouter();
  const onClick = () => {
    router.push('/dashboard');
  }
  return (
    <div className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#40A4FF"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-3xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          <span className="text-9xl font-Canopee">Web3Sage</span><br /> is the new trend.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto font-EditorialNew p-2">
          Building a better Web3 future by learning, growing, and sharing together
        </p>
        <div className="flex items-center justify-center mt-4">
          <Button onClick={onClick} className="px-4 py-2 text-lg font-medium bg-black hover:bg-white hover:text-black transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]" size="lg">
            Let&apos;s Get Started
            <FaAngleRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
