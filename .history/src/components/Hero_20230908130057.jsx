import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <main className="flex h-full items-center justify-between p-24 hero">
      <div className="w-1/2">aaa</div>
      <div className="w-1/2">
        <div class="relative hero-image">
          <div class="overlay inset-0 bg-black opacity-35 z-10"></div>
          <div class="overlay right-0 bottom-0 md:inset-0">
            <button
              class="video hero-cta focus:outline-none z-30 modal-trigger"
              data-content='<div class="w-screen pb-56 md:w-88 md:pb-56 relative z-50">
              <div class="absolute w-full h-full">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/3h0_v1cdUIA"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>'
            ></button>
          </div>
          <img
            src="/assets/Logo.png"
            alt="hero 1"
            class="absolute inset-0 md:relative w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
