import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen w-auto relative overflow-hidden dark:bg-[#171717] dark:text-[#d1d1d1]">
      {children}
    </main>
  );
};

export default Layout;
