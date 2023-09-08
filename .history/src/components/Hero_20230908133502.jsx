import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <main className="flex h-full items-center justify-between p-24">
      <div
        className="absolute inset-0 bg-cover bg-center max-w-screen h-[881px] top-[-89px] left-[312px] bg-opacity-50 bg-black"
        style={{
          backgroundImage: 'url("/assets/background.png")', // Ganti dengan path gambar latar belakang Anda
        }}
      ></div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-start px-14">
        <div className="text-white">
          <h1 className="text-4xl font-bold mb-4">Posisi Teks di Kiri</h1>
          <p className="text-lg">Deskripsi Anda di sini.</p>
        </div>
      </div>
    </main>
  );
};

export default Hero;
