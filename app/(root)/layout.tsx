import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen w-auto relative overflow-hidden bg-[#d1d1d1] text-[#171717] dark:bg-[#171717] dark:text-white">
      <Header/>
      {children}
      <Footer/>
    </main>
  );
};

export default Layout;
