"use client";

import React from "react";
import "@/styles/background.css";
import { useRouter } from "next/navigation";
import Typography from "@/components/atoms/Typography";
import Button from "@/components/atoms/Button";
import Box from "@/components/atoms/Box";
import Logo from "@/components/atoms/Logo";
import optimize from "@/public/jpeg/optimaze.jpeg";
import increases from "@/public/png/Increases.png";
import management from "@/public/png/management.png";
import Image from "next/image";

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

      <main className="flex flex-col items-center gap-10 col-start-2 col-end-6 row-start-4 row-end-9">
        <section className="flex flex-col  gap-10">
          <Typography
            variant="max"
            className="row-start-4 row-end-5 text-start"
          >
            Amplify your growth
          </Typography>
          <Typography
            variant="h4"
            className="row-start-6 row-end-8 text-justify"
          >
            Optimizes the management of locative repairs for real estate with
            Our advanced solution.Control each request, assign tasks and Follow
            up in real time.Pay for free use or test by 30 days, without
            obligation and cancellation at any time.
          </Typography>
        </section>
        <Button
          text="Start immopro"
          onClick={async () => router.push("/login")}
          className="row-start-9 row-end-10 col-start-3 col-end-5 min-w-[16vw]"
        />
      </main>

      <section className="col-span-full row-start-11 row-end-18 flex justify-center gap-10 px-40 py-10 bg-gradient-to-br from-sky-300 to-white shadow-inner z-10">
        {images.map(image => (
          <Box
            key={image["alt"]}
            className="flex flex-col w-1/3 px-6 py-10 gap-5"
            color="white"
            boxShadow="large"
          >
            <Image
              src={image["src"]}
              alt={image["alt"]}
              className="w-full h-[50%] object-cover rounded-xl shadow-img"
            />

            <Typography variant="h2" className="text-center">
              {image["alt"]}
            </Typography>

            <Typography variant="p" className="text-center">
              {image["text"]}
            </Typography>
          </Box>
        ))}
      </section>
    </div>
  );
};

export default Home;
