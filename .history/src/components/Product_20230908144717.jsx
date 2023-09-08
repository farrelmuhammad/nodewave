import React from "react";

const Product = () => {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-8 md:py-16">
      <h2 className="text-2xl mb-4 md:mb-8 font-medium text-white font-app text-center lg:text-4xl">
        Our Product
      </h2>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-5">
          <div className="space-y-2 md:space-y-4 flex flex-col items-center">
            <button
              aria-label="Produk Kami"
              className="rounded-xl hover:px-4 hover:md:px-8 hover:py-6 hover:md:py-12 hover:w-full hover:bg-[#E8F4FF] hover:border hover:border-[#298EF6] px-4 md:px-8 py-6 md:py-12 w-full bg-[#E8F4FF] border border-[#298EF6]"
            >
              <div className="flex justify-center item-center">
                <div className="mr-4">
                  <img
                    alt=""
                    src="/images/home/product/website-icon.svg"
                    className="w-10 h-auto md:w-12"
                    decoding="async"
                    width="480"
                    height="480"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="mr-2">
                  <h4 className="text-sm font-app text-left font-medium text-[#042D6F] lg:text-base">
                    Website
                  </h4>
                  <p className="text-xs text-left font-normal text-[#333333] lg:text-sm">
                    Buat website sesuai kebutuhan anda dengan fitur modern yang
                    mumpuni.
                  </p>
                </div>
                <div className="flex items-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="w-6 h-6 text-[#FFB347] iconify iconify--ph"
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="m224.49 136.49l-72 72a12 12 0 0 1-17-17L187 140H40a12 12 0 0 1 0-24h147l-51.49-51.52a12 12 0 0 1 17-17l72 72a12 12 0 0 1-.02 17.01Z"
                    ></path>
                  </svg>
                </div>
              </div>
            </button>
            <button
              aria-label="Produk Kami"
              className="rounded-xl hover:px-4 hover:md:px-8 hover:py-6 hover:md:py-12 hover:w-full hover:bg-[#E8F4FF] hover:border hover:border-[#298EF6] px-4 py-4 md:py-8 w-[90%] bg-[#F2F9FF]"
            >
              <div className="flex justify-center item-center">
                <div className="mr-4">
                  <img
                    alt=""
                    src="/images/home/product/mobile-icon.svg"
                    className="w-10 h-auto md:w-12"
                    decoding="async"
                    width="480"
                    height="480"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="mr-2">
                  <h4 className="text-sm font-app text-left font-medium text-[#042D6F] lg:text-base">
                    Mobile Apps
                  </h4>
                  <p className="text-xs text-left font-normal text-[#333333] lg:text-sm">
                    Buat aplikasi mobile sesuai dengan fitur yang anda pilih
                  </p>
                </div>
                <div className="flex items-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="w-6 h-6 text-[#FFB347] iconify iconify--ph"
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="m224.49 136.49l-72 72a12 12 0 0 1-17-17L187 140H40a12 12 0 0 1 0-24h147l-51.49-51.52a12 12 0 0 1 17-17l72 72a12 12 0 0 1-.02 17.01Z"
                    ></path>
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="col-span-12 md:col-span-7">
          <div style={{ opacity: 1 }}>
            <div
              className="px-8 rounded-xl py-12 w-full bg-[#E8F4FF] border border-[#298EF6] min-h-full aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="flex mb-4 justify-center items-center space-x-4">
                <div>
                  <img
                    alt=""
                    src="/assets/iphone14.png"
                    className="w-8 h-auto md:w-12"
                    decoding="async"
                    width="480"
                    height="480"
                  />
                </div>
                <div>
                  <img
                    alt=""
                    src="/assets/iphone14.png"
                    className="w-8 h-auto md:w-12"
                    decoding="async"
                    width="480"
                    height="480"
                  />
                </div>
                <div>
                  <img
                    alt=""
                    src="/assets/iphone14.png"
                    className="w-8 h-auto md:w-12"
                    decoding="async"
                    width="480"
                    height="480"
                  />
                </div>
              </div>
              <h2 className="text-lg text-center font-app font-medium text-[#042D6F] lg:text-2xl">
                Website
              </h2>
              <p className="text-xs mb-4 text-center font-normal text-[#333333] lg:text-sm">
                Buat company profile, website transaksi jual beli, terima
                pembayaran, portal member, lowongan kerja, atau chatbot dengan
                klien. Desain disesuaikan dengan kebutuhan proses bisnis anda
                sekarang.
              </p>
              <div className="flex justify-center">
                <a
                  aria-label="Pelajari Selengkapnya"
                  id="pelajari-selengkapnya-product"
                  className="mx-4 my-2 min-w-[140px] rounded bg-[#298EF6] px-4 py-2 text-center text-base font-medium text-[#FFFFFF] hover:translate-y-2 hover:opacity-75 md:my-0 shadow"
                  href="/en/website"
                >
                  Pelajari Selengkapnya
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
