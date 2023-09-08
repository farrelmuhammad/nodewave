import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex h-full items-center justify-between p-24 mb-10">
      <div
        className="absolute inset-0 bg-cover bg-center max-w-screen h-auto top-[-89px] left-[212px] bg-opacity-50 bg-black"
        style={{
          backgroundImage: 'url("/assets/background.png")',
        }}
      ></div>

      <div className="absolute inset-0 flex items-center justify-start px-14">
        <div className="text-white">
          <h1 className="text-4xl font-bold mb-4">
            Make Your Own Website and Mobile Application With Nodewave
          </h1>
          <button class="px-4 py-2 bg-[#00AD98] rounded-full">
            <a
              href="#"
              class="text-black md:text-white hover:underline whitespace-nowrap overflow-ellipsis"
            >
              Get Started Now
            </a>
          </button>
          <p className="text-lg">
            Create Mobile Applications and Websites for Companies or Your
            Business Have a transparent pricing, easy and straightforward
            development process
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
