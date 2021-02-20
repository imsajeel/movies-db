import React, { ReactElement } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

type LayoutProps = {
  children: string | ReactElement | ReactElement[];
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-black min-h-screen overflow-x-hidden w-screen flex flex-col ">
      <Header />

      <main className="flex-grow text-white min-h-full">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
