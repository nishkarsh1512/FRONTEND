import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Header from "../containers/Header/Header";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <Navbar />
      <Header />
    </div>
  );
}

export default Layout;
