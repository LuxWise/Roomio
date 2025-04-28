"use client";

import React from "react";
import "@/styles/background.css";
import { useRouter } from "next/navigation";
import Logo from "@/components/atoms/Logo";
import optimize from "@/public/jpeg/optimaze.jpeg";
import increases from "@/public/png/Increases.png";
import management from "@/public/png/management.png";


const images = [
  {
    src: optimize,
    alt: "Optimize",
    text: "Optimizer our system to improve your business and increase your real estate.",
  },
  {
    src: increases,
    alt: "Increases",
    text: "Optimize our system to improve your business and increase your real estate assets.",
  },
  {
    src: management,
    alt: "Management",
    text: "Optimize your management system to enhance your business and maximize your real estate potential.",
  },
];

const Home = () => {
  const router = useRouter();

  return (
    <div className="grid_frame background_home">
      <header className="col-span-full row-start-1 row-end-3 flex items-center bg-white shadow-md z-10 mb-5">
        <Logo width={200} />
      </header>

      <section className="col-start-2 col-end-13 row-start-1 row-end-18 background_home_wake" />



     
    </div>
  );
};

export default Home;
