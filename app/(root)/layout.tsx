import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen w-auto relative overflow-hidden">
      {children}
    </main>
  );
};

export default Layout;
