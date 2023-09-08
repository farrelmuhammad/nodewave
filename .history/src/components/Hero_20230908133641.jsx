import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <main className="flex h-full items-center justify-between p-24">
      <div
        className="absolute inset-0 bg-cover bg-center max-w-screen h-auto top-[-89px] left-[212px] bg-opacity-50 bg-black"
        style={{
          backgroundImage: 'url("/assets/background.png")', // Ganti dengan path gambar latar belakang Anda
        }}
      ></div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-start px-14">
        <div className="text-white">
          <h1 className="text-4xl font-bold mb-4">
            Make Your Own Website and Mobile Application With Nodewave
          </h1>
          <p className="text-lg">
            Create Mobile Applications and Websites for Companies or Your
            Business Have a transparent pricing, easy and straightforward
            development process
          </p>
        </div>
      </div>
    </main>
  );
};

export default Hero;
