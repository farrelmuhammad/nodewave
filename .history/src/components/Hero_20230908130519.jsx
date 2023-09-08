import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <main className="flex items-center w-full p-8 hero">
      <div className="w-1/2">aaa</div>
      <div className="w-1/2">
        <div class="relative hero-image">
          <div class="overlay inset-0 bg-black opacity-35 z-10"></div>
          <img
            src="/assets/background.png"
            alt="hero 1"
            class="absolute inset-0 md:relative w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
