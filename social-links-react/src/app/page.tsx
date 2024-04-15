import Links from "@/components/Links";
import UserInfo from "@/components/UserInfo";
import Footer from "@/components/Footer";
import Toggle from "@/components/Toggle";
import "../styles/globals.css";

// "use client";
let avatar = require("../../public/images/av.jpg");

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen text-white">
      <main className="flex flex-col items-center justify-center m-4 py-8 px-6 min-w-[370px] bg-[#00000094] rounded-lg backdrop-blur-lg border border-[#5459458f] shadow-[0_3px_6px_rgba(0,0,0,0.16)], shadow-[0_3px_6px_rgba(0,0,0,0.23)] overflow-hidden">
        <UserInfo />
        <Links />
        <Toggle />
        <Footer />
      </main>
    </div>
  );
}
