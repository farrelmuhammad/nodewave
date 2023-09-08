import React from "react";

const Testimonial = () => {
  const cardStyle = {
    height: "180px",
  };

  const overlayStyle = {
    left: "0",
    top: "0",
    bottom: "0",
    flex: "justify-center flex-col",
    paddingLeft: "48px",
    mdPaddingLeft: "72px", // Ganti "md:pl-72" menjadi "mdPaddingLeft"
  };

  const overlayStyle2 = {
    right: "0",
    left: "0",
    top: "0",
    bottom: "0",
    mdBottom: "auto", // Ganti "md:bottom-auto" menjadi "mdBottom"
    flex: "justify-center md:items-center",
    flexCol: "pl-48 md:pl-0",
    pt: "0",
    mdPt: "12", // Ganti "md:pt-12" menjadi "mdPt"
  };

  return (
    <section className="flex flex-col py-16">
      <div className="container mx-auto mb-4">
        <div className="flex flex-start mb-4">
          <h3 className="text-2xl capitalize font-semibold">
           Testimony
          </h3>
        </div>
        <div className="grid grid-rows-2 grid-cols-9 gap-4">
          <div
            className="relative col-span-9 row-span-1 md:col-span-4 card"
            style={cardStyle}
          >
            <div className="card-shadow rounded-xl">
              <img
                src="./images/content/image-catalog-1.png"
                alt=""
                className="w-full h-full object-cover object-center overlay overflow-hidden rounded-xl"
              />
            </div>
            <div style={overlayStyle}>
              <h5 className="text-lg font-semibold">Living Room</h5>
              <span className="">18.309 items</span>
            </div>
            <a href="details.html" className="stretched-link"></a>
          </div>
          <div className="relative col-span-9 row-span-1 md:col-span-2 md:row-span-2 card">
            <div className="card-shadow rounded-xl">
              <img
                src="./images/content/image-catalog-3.png"
                alt=""
                className="w-full h-full object-cover object-center overlay overflow-hidden rounded-xl"
              />
            </div>
            <div style={overlayStyle2}>
              <h5 className="text-lg font-semibold">Decoration</h5>
              <span className="">77.392 items</span>
            </div>
            <a href="details.html" className="stretched-link"></a>
          </div>
          <div className="relative col-span-9 row-span-1 md:col-span-3 md:row-span-2 card">
            <div className="card-shadow rounded-xl">
              <img
                src="./images/content/image-catalog-4.png"
                alt=""
                className="w-full h-full object-cover object-center overlay overflow-hidden rounded-xl"
              />
            </div>
            <div style={overlayStyle2}>
              <h5 className="text-lg font-semibold">Living Room</h5>
              <span className="">22.094 items</span>
            </div>
            <a href="details.html" className="stretched-link"></a>
          </div>
          <div className="relative col-span-9 row-span-1 md:col-span-4 card">
            <div className="card-shadow rounded-xl">
              <img
                src="./images/content/image-catalog-2.png"
                alt=""
                className="w-full h-full object-cover object-center overlay overflow-hidden rounded-xl"
              />
            </div>
            <div style={overlayStyle}>
              <h5 className="text-lg font-semibold">Children Room</h5>
              <span className="">837 items</span>
            </div>
            <a href="details.html" className="stretched-link"></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
