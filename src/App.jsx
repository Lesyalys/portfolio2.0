import { Header } from "./components/menu/Header";
import { Menu } from "./components/menu/Menu";
import { Outlet, useLocation } from "react-router";
import { Footer } from "./components/menu/Footer";
import { Block } from "./components/ui/blobk";
import { motion } from "motion/react";
import { Image } from "./components/ui/Image";
import { ContentText } from "./components/Text/ContentText";
import React from "react";

function App() {
  const routeColors = {
    "/": {
      link: "hover:text-purple-500 ",
      bg: "bg-[#03060C]",
      gradient: "from-purple-500 to-pink-500",
      button1:
        "text-gray-600 border-gray-600 hover:text-purple-500 hover:border-purple-500",
      button2:
        "text-gray-600 border-gray-600 hover:text-pink-200 hover:border-pink-200",
    },
    "/about": {
      link: "hover:text-purple-500 ",
      bg: "bg-[#03060C]",
      gradient: "from-purple-500 to-pink-500",
      button1:
        "text-gray-600 border-gray-600 hover:text-purple-500 hover:border-purple-500",
      button2:
        "text-gray-600 border-gray-600 hover:text-pink-200 hover:border-pink-200",
    },
    "/contact": {
      link: "hover:text-pink-400",
      bg: "bg-[#03060C]",
      gradient: "from-[#6f2d66] to-pink-400",
      button1:
        "text-gray-600 border-gray-600 hover:text-[#9D174D] hover:border-pink-500",
      button2:
        "text-gray-600 border-gray-600 hover:text-[#E11D48] hover:border-[#E11D48]",
    },
    "/myWork": {
      link: "hover:text-blue-400",
      bg: "bg-[#03060C]",
      gradient: "from-blue-500 to-purple-500",
      button1:
        "text-gray-600 border-gray-600 hover:text-blue-500 hover:border-blue-500",
      button2:
        "text-gray-600 border-gray-600 hover:text-[#F59E0B] hover:border-[#F59E0B]",
    },
    "/conferences": {
      link: "hover:text-blue-400",
      bg: "bg-[#03060C]",
      gradient: "from-blue-500 to-purple-500",
      button1:
        "text-gray-600 border-gray-600 hover:text-blue-500 hover:border-blue-500",
      button2:
        "text-gray-600 border-gray-600 hover:text-[#F59E0B] hover:border-[#F59E0B]",
    },
  };

  const location = useLocation();
  const path = location?.pathname || "/";
  const colors = routeColors[path];

  return (
    <div
      className={`flex flex-col min-h-screen ${colors.bg} transition-colors text-white px-3 pt-3 md:text-[18px] text-[12px]`}
    >
      <Header />
      <main className="mt-10 flex flex-col md:flex-row m-2">
        <Image local={location} colors={colors} />
        <Block local={location} colors={colors} />
      </main>

      {/* ТОЛЬКО Outlet - убираем ContentText */}
      <Outlet key={location.pathname} />

      <Footer />
    </div>
  );
}
export default App;
