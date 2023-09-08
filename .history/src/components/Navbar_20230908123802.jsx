import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <header class="absolute w-full z-50 px-4">
      <div class="container mx-auto py-5">
        <div class="flex flex-stretch items-center">
          <div class="w-56 items-center flex">
            <Image src="/assets/Logo.png" width={226} height={100} alt="Logo" />
          </div>
          <div class="w-full"></div>
          <div class="w-auto py-4">
            <ul
              class="fixed bg-white inset-0 flex flex-col invisible items-center justify-center opacity-0 md:visible md:flex-row md:bg-transparent md:relative md:opacity-100 md:flex md:items-center"
              id="menu"
            >
              <li class="mx-3 py-6 md:py-0">
                <a href="#" class="text-black md:text-white hover:underline">
                  Website
                </a>
              </li>
              <li class="mx-3 py-6 md:py-0">
                <a href="#" class="text-black md:text-white hover:underline whitespace-nowrap overflow-ellipsis">
                  Mobile Apss
                </a>
              </li>
              <li class="mx-3 py-6 md:py-0">
                <a href="#" class="text-black md:text-white hover:underline">
                  Portfolio
                </a>
              </li>
              <li class="mx-3 py-6 md:py-0 bg-blue-500 rounded-full">
                <a href="#" class="text-black md:text-white hover:underline whitespace-nowrap overflow-ellipsis">
                  Make On App
                </a>
              </li>
            </ul>
          </div>
          <div class="w-auto">
            <ul class="items-center flex">
              <li class="ml-6 block md:hidden">
                <button
                  id="menu-toggler"
                  class="relative flex z-50 items-center justify-center w-8 h-8 text-black md:text-white focus:outline-none"
                >
                  <svg
                    class="fill-current"
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                  >
                    <path d="M15.9773 0.461304H1.04219C0.466585 0.461304 0 0.790267 0 1.19609C0 1.60192 0.466668 1.93088 1.04219 1.93088H15.9773C16.5529 1.93088 17.0195 1.60192 17.0195 1.19609C17.0195 0.790208 16.5529 0.461304 15.9773 0.461304Z" />
                    <path d="M15.9773 7.68802H1.04219C0.466585 7.68802 0 8.01698 0 8.42281C0 8.82864 0.466668 9.1576 1.04219 9.1576H15.9773C16.5529 9.1576 17.0195 8.82864 17.0195 8.42281C17.0195 8.01692 16.5529 7.68802 15.9773 7.68802Z" />
                    <path d="M15.9773 14.9147H1.04219C0.466585 14.9147 0 15.2437 0 15.6495C0 16.0553 0.466668 16.3843 1.04219 16.3843H15.9773C16.5529 16.3843 17.0195 16.0553 17.0195 15.6495C17.0195 15.2436 16.5529 14.9147 15.9773 14.9147Z" />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
