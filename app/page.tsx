"use client"

import React from "react";
import Banner from "@/components/homePage/banner";
import AboutUs from "@/components/homePage/aboutUs";
import Services from "@/components/homePage/services";
import Partners from "@/components/homePage/partners";
import "@/components/homePage/index.css";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 w-full font-mono text-sm">
        <Banner />

        <AboutUs />
        <Services />
        <Partners />
      </div>
    </main>
  );
}
