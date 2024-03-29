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
                  <svg
                    width="60"
                    height="61"
                    viewBox="0 0 60 61"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="20"
                      cy="20.5"
                      r="20"
                      fill="#00AD98"
                      fill-opacity="0.2"
                    />
                    <path
                      d="M38.75 19.5H34.25C33.836 19.5 33.5 19.164 33.5 18.75C33.5 18.336 33.836 18 34.25 18H38.75C39.164 18 39.5 18.336 39.5 18.75C39.5 19.164 39.164 19.5 38.75 19.5Z"
                      fill="#00AD98"
                    />
                    <path
                      d="M47.75 21C47.336 21 47 20.664 47 20.25V18.75C47 17.5095 45.9905 16.5 44.75 16.5H28.25C27.0095 16.5 26 17.5095 26 18.75V20.25C26 20.664 25.664 21 25.25 21C24.836 21 24.5 20.664 24.5 20.25V18.75C24.5 16.683 26.1815 15 28.25 15H44.75C46.8185 15 48.5 16.683 48.5 18.75V20.25C48.5 20.664 48.164 21 47.75 21Z"
                      fill="#00AD98"
                    />
                    <path
                      d="M35.75 51H29.75C29.336 51 29 50.664 29 50.25C29 49.836 29.336 49.5 29.75 49.5H35.75C36.164 49.5 36.5 49.836 36.5 50.25C36.5 50.664 36.164 51 35.75 51Z"
                      fill="#00AD98"
                    />
                    <path
                      d="M40.25 54H29.75C29.336 54 29 53.664 29 53.25C29 52.836 29.336 52.5 29.75 52.5H40.25C40.664 52.5 41 52.836 41 53.25C41 53.664 40.664 54 40.25 54Z"
                      fill="#00AD98"
                    />
                    <path
                      d="M43.25 48H29.75C29.336 48 29 47.664 29 47.25C29 46.836 29.336 46.5 29.75 46.5H43.25C43.664 46.5 44 46.836 44 47.25C44 47.664 43.664 48 43.25 48Z"
                      fill="#00AD98"
                    />
                    <path
                      d="M27.5 34.5C25.4315 34.5 23.75 32.817 23.75 30.75C23.75 28.683 25.4315 27 27.5 27C29.5685 27 31.25 28.683 31.25 30.75C31.25 32.817 29.5685 34.5 27.5 34.5ZM27.5 28.5C26.2595 28.5 25.25 29.5095 25.25 30.75C25.25 31.9905 26.2595 33 27.5 33C28.7405 33 29.75 31.9905 29.75 30.75C29.75 29.5095 28.7405 28.5 27.5 28.5Z"
                      fill="#00AD98"
                    />
                    <path
                      d="M27.5 43.5C24.869 43.5 22.3445 42.507 20.3915 40.707C20.1905 40.521 20.1065 40.2405 20.1725 39.9765C20.7485 37.635 22.8365 36 25.25 36H29.75C32.1635 36 34.2515 37.635 34.829 39.975C34.895 40.2405 34.8095 40.521 34.61 40.7055C32.6555 42.507 30.131 43.5 27.5 43.5ZM21.7595 39.9105C25.0025 42.612 29.9975 42.612 33.2405 39.9105C32.7005 38.472 31.322 37.5 29.75 37.5H25.25C23.678 37.5 22.2995 38.472 21.7595 39.9105Z"
                      fill="#00AD98"
                    />
                    <path
                      d="M27.5 43.5C21.7115 43.5 17 38.79 17 33C17 27.21 21.7115 22.5 27.5 22.5C33.2885 22.5 38 27.21 38 33C38 38.79 33.2885 43.5 27.5 43.5ZM27.5 24C22.5365 24 18.5 28.0365 18.5 33C18.5 37.9635 22.5365 42 27.5 42C32.4635 42 36.5 37.9635 36.5 33C36.5 28.0365 32.4635 24 27.5 24Z"
                      fill="#00AD98"
                    />
                    <path
                      d="M20.75 47.925C20.336 47.925 20 47.664 20 47.25V47.1C20 46.686 20.336 46.35 20.75 46.35C21.164 46.35 21.5 46.686 21.5 47.1C21.5 47.514 21.164 47.925 20.75 47.925Z"
                      fill="#53A5FE"
                    />
                    <path
                      d="M20.75 50.925C20.336 50.925 20 50.664 20 50.25V50.1C20 49.686 20.336 49.35 20.75 49.35C21.164 49.35 21.5 49.686 21.5 50.1C21.5 50.514 21.164 50.925 20.75 50.925Z"
                      fill="#53A5FE"
                    />
                    <path
                      d="M20.75 53.925C20.336 53.925 20 53.664 20 53.25V53.1C20 52.686 20.336 52.35 20.75 52.35C21.164 52.35 21.5 52.686 21.5 53.1C21.5 53.514 21.164 53.925 20.75 53.925Z"
                      fill="#53A5FE"
                    />
                    <path
                      d="M50.51 54H49.25C48.836 54 48.5 53.664 48.5 53.25C48.5 52.836 48.836 52.5 49.25 52.5H49.9055L50.273 50.7975C50.333 50.5155 50.5505 50.295 50.8295 50.2275C51.5375 50.0565 52.2275 49.7685 52.88 49.371C53.1215 49.221 53.432 49.2255 53.6735 49.3785L55.1585 50.328L56.078 49.401L55.1285 47.928C54.9725 47.6865 54.9695 47.376 55.118 47.1315C55.5155 46.479 55.8035 45.789 55.973 45.081C56.0405 44.802 56.2595 44.586 56.54 44.523L58.2485 44.1435V42.858L56.54 42.4785C56.2595 42.4155 56.0405 42.1995 55.973 41.9205C55.8035 41.2125 55.514 40.5225 55.118 39.87C54.968 39.6255 54.971 39.3165 55.127 39.075L56.078 37.5885L55.16 36.6705L53.6735 37.6215C53.4335 37.776 53.123 37.779 52.88 37.629C52.226 37.2315 51.536 36.9435 50.8295 36.7725C50.549 36.705 50.333 36.483 50.273 36.2025L49.9055 34.5H49.25C48.836 34.5 48.5 34.164 48.5 33.75C48.5 33.336 48.836 33 49.25 33H50.51C50.8625 33 51.1685 33.2475 51.242 33.5925L51.6425 35.442C52.1915 35.6085 52.73 35.8335 53.249 36.114L54.86 35.0835C55.157 34.896 55.5455 34.935 55.7945 35.1855L57.566 36.9555C57.815 37.2045 57.857 37.593 57.6665 37.89L56.636 39.501C56.9165 40.0215 57.1415 40.56 57.308 41.1105L59.1605 41.5215C59.504 41.598 59.7485 41.9025 59.7485 42.2535V44.7435C59.7485 45.0945 59.504 45.4005 59.1605 45.4755L57.308 45.8865C57.1415 46.437 56.9165 46.9755 56.636 47.4945L57.665 49.0905C57.857 49.386 57.8165 49.776 57.5675 50.025L55.796 51.81C55.547 52.0605 55.1585 52.104 54.86 51.9135L53.249 50.883C52.7285 51.1635 52.1915 51.3885 51.6425 51.555L51.242 53.4045C51.1685 53.7525 50.8625 54 50.51 54Z"
                      fill="#00AD98"
                    />
                    <path
                      d="M50.8295 47.652C50.5475 47.652 50.2775 47.4915 50.15 47.2185C49.976 46.8435 50.138 46.3965 50.513 46.2225C51.5675 45.7305 52.25 44.6625 52.25 43.5C52.25 41.8455 50.9045 40.5 49.25 40.5C48.8435 40.5 48.452 40.5795 48.0845 40.7355C47.705 40.899 47.264 40.7205 47.102 40.338C46.94 39.957 47.1185 39.5175 47.4995 39.3555C48.0515 39.12 48.6425 39 49.25 39C51.731 39 53.75 41.019 53.75 43.5C53.75 45.2445 52.727 46.8465 51.146 47.5815C51.0425 47.6295 50.936 47.652 50.8295 47.652Z"
                      fill="#00AD98"
                    />
                    <path
                      d="M53 28.5H44C42.3455 28.5 41 27.1545 41 25.5C41 23.8455 42.3455 22.5 44 22.5H53C54.6545 22.5 56 23.8455 56 25.5C56 27.1545 54.6545 28.5 53 28.5ZM44 24C43.172 24 42.5 24.6735 42.5 25.5C42.5 26.3265 43.172 27 44 27H53C53.828 27 54.5 26.3265 54.5 25.5C54.5 24.6735 53.828 24 53 24H44Z"
                      fill="#00AD98"
                    />
                    <path
                      d="M44.75 60H28.25C26.1815 60 24.5 58.317 24.5 56.25V45.75C24.5 45.336 24.836 45 25.25 45C25.664 45 26 45.336 26 45.75V56.25C26 57.4905 27.0095 58.5 28.25 58.5H44.75C45.9905 58.5 47 57.4905 47 56.25V30.75C47 30.336 47.336 30 47.75 30C48.164 30 48.5 30.336 48.5 30.75V56.25C48.5 58.317 46.8185 60 44.75 60Z"
                      fill="#00AD98"
                    />
                  </svg>
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
