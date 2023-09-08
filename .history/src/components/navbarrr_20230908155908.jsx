import React, { useLayoutEffect, useState } from "react";
import { useRef } from "react";
import { a } from "react-router-dom";
import Logo from "../assets/images/content/logo.png";
import { useGlobalContext } from "../helpers/hooks/useGlobalContext";

import { ReactComponent as IconCart } from "../assets/images/content/icon-cart.svg";

const Header = ({ theme, position }) => {
  const [toggleMainMenu, setToggleMainMenu] = useState(false);
  const [isCartChanged, setCartChanged] = useState(false);
  const { state } = useGlobalContext();

  const prevCart = useRef(state?.cart || {});

  useLayoutEffect(() => {
    if (prevCart.current !== state.cart) {
      prevCart.current = state?.cart || {};
      setCartChanged(true);
      setTimeout(() => {
        setCartChanged(false);
      }, 550);
    }
  }, [state.cart]);

  return (
    <header class="absolute w-full z-50 px-4">
      <div class="container mx-auto py-5">
        <div class="flex flex-stretch items-center">
    <header className={[position, "w-full z-40 px-4"].join(" ")}>
      <div className="container mx-auto py-5">
        <div className="flex flex-stretch items-center">
          <div className="w-56 items-center flex">
            <a to="/">
              <Image
                src="/assets/Logo.png"
                width={226}
                height={100}
                alt="Nodewave"
              />
            </a>
          </div>
          <div className="w-full"></div>
          <div className="w-auto py-4">
            <ul
              className={[
                "fixed bg-white inset-0 flex flex-col invisible items-center justify-center opacity-0 md:visible md:flex-row md:bg-transparent md:relative md:opacity-100 md:flex md:items-center",
                toggleMainMenu
                  ? "opacity-100 z-30 visible"
                  : "invisible opacity-0",
              ].join(" ")}
              id="menu"
            >
              <li className="mx-3 py-6 md:py-0">
                <a
                  to="/website"
                  className={[
                    "hover:underline",
                    theme === "white"
                      ? "text-black md:text-white"
                      : "text-black md:text-black ",
                  ].join(" ")}
                >
                  Website
                </a>
              </li>
              <li className="mx-2 py-2 md:py-0">
                <a
                  to="/mobile-apps"
                  className={[
                    "hover:underline",
                    theme === "white"
                      ? "text-black md:text-white"
                      : "text-black md:text-black ",
                  ].join(" ")}
                >
                  Mobile Apps
                </a>
              </li>
              <li className="mx-3 py-6 md:py-0">
                <a
                  to="/portfolio"
                  className={[
                    "hover:underline",
                    theme === "white"
                      ? "text-black md:text-white"
                      : "text-black md:text-black ",
                  ].join(" ")}
                >
                  Portfolio
                </a>
              </li>
              <li className="mx-3 py-6 md:py-0">
              <button class="px-4 py-2 bg-[#00AD98] rounded-full">
                <a
                  to="/rewards"
                  className={[
                    "hover:underline",
                    theme === "white"
                      ? "text-black md:text-white"
                      : "text-black md:text-black ",
                  ].join(" ")}
                >
                                      Make an App

                </a>
                </button>

              </li>
            </ul>
          </div>
          <div className="w-auto">
            <ul className="items-center flex">
              <li className="ml-6 block md:hidden">
                <button
                  className={[
                    "flex z-50 items-center justify-center w-8 h-8 text-white md:text-white focus:outline-none",
                    toggleMainMenu ? "fixed top-0 right-0" : "relative",
                    theme === "white"
                      ? "text-black md:text-white"
                      : "text-black md:text-black ",
                  ].join(" ")}
                  onClick={() => setToggleMainMenu((prev) => !prev)}
                >
                  <svg
                    className="fill-current"
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

export default Header;
