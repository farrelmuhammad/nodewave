import React from "react";

const Hero = () => {
  return (
    <main className="flex h-full items-center justify-between p-24">
      <div className="w-1/2">aaa</div>
      <div
        className="w-1/2 relative"
        style={{
          backgroundImage: 'url("/assets/background.png")', // Ganti dengan path gambar Anda
        }}
      >
      </div>
    </main>
  );
};

export default Hero;
