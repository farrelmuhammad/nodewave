const Hero = () => {
  return (
    <section className="relative flex container mx-auto max-w-screen py-8 md:py-16 h-screen items-center justify-between">
      <div
        className="absolute inset-0 bg-cover bg-center max-w-screen h-auto top-[-89px] left-[212px] bg-opacity-50 bg-black"
        style={{
          backgroundImage: 'url("/assets/background.png")',
        }}
      ></div>

      <div className="flex justify-center h-full items-start flex-col">
        <h1 className="mb-2 text-3xl font-medium text-[#1B69A7] font-app md:mb-4 lg:text-5xl">
          Bikin <span className="text-[#298EF6]">Website E-Commerce</span>
          <span className="typed-cursor typed-cursor--blink">|</span>
          <br /> Mulai Dari Rp 500.000
        </h1>
        <p className="mb-4 md:mb-8 text-sm font-normal text-[#333333] max-w-lg lg:text-base">
          Buat Aplikasi Mobile dan Website untuk Perusahaan dan Perseorangan Di
          Nodewave dengan harga transparan, mudah, dan menyenangkan
        </p>
        <button
          aria-label="Konsultasi Sekarang"
          id="konsultasi-sekarang-hero"
          className="min-w-[140px] rounded bg-[#298EF6] px-4 py-2 text-base font-medium text-[#FFFFFF] transition-all hover:translate-y-2 hover:opacity-75 md:my-0 shadow"
        >
          Konsultasi Sekarang
        </button>
      </div>

      {/* <div className="relative z-10 flex items-center justify-start px-14">
        <div className="text-white">
          <h1 className="text-4xl font-bold mb-4">
            Make Your Own Website and Mobile Application With Nodewave
          </h1>
          <button className="px-4 py-2 bg-[#00AD98] rounded-full">
            <a
              href="#"
              className="text-black md:text-white hover:underline whitespace-nowrap overflow-ellipsis"
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
      </div> */}
    </section>
  );
};

export default Hero;
