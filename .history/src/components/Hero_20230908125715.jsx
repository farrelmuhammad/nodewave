import React from "react";

const Hero = () => {
  return (
    <main className="flex h-full items-center justify-between p-24">
      <div className="w-1/2">aaa</div>
      <div className="w-1/2 relative">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url("/assets/background.png")', // Ganti dengan path gambar Anda
          }}
        ></div>
        <div className="relative z-10 p-6 bg-white bg-opacity-80">
          asdasdas
        </div>
      </div>
    </main>
  );
};

export default Hero;
