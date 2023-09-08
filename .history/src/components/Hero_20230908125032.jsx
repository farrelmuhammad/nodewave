import React from "react";

const Hero = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex md:flex-none xl:justify-center lg:justify-center justify-center items-center flex-wrap h-full">
        <div className="hidden lg:block lg:w-1/2 items-center">
          {/* <img className="w-full h-screen m-0" src={pic} alt="SECONDHAND" /> */}
        </div>
        <div className="lg:w-1/2 w-full px-4 md:px-0 items-center my-8">
          <div className="lg:px-12 md:mx-12">
            <p className="text-2xl font-bold mb-6 mt-10">Login</p>
            {/* <form onSubmit={handleSubmit} className="flex flex-col gap-4"> */}
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-xs">Email</p>
                <input
                  //   onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  id="emailInput"
                  className="form control w-full bg-white px-4 py-2 text-sm text-neutral-3 rounded-2xl border border-neutral-2 focus:text-neutral-4 focus:outline-purple-2"
                  placeholder="Contoh: johndee@gmail.com"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs">Password</p>
                <div className="relative">
                  <input
                    // onChange={(e) => setPassword(e.target.value)}
                    // type={showPassword ? "text" : "password"}
                    id="passwordInput"
                    className="form control w-full bg-white pl-4 pr-10 py-2 text-sm text-neutral-3 rounded-2xl border border-neutral-2 focus:text-neutral-4 focus:outline-purple-2 active:bg-white"
                    placeholder="Masukkan password"
                  />
                  {/* <FiEye
                    onClick={() => setShowPassword(true)}
                    className={`${
                      showPassword ? "hidden" : ""
                    } absolute right-3 top-2.5 text-neutral-3`}
                  />
                  <FiEyeOff
                    onClick={() => setShowPassword(false)}
                    className={`${
                      showPassword ? "" : "hidden"
                    } absolute right-3 top-2.5 text-neutral-3`}
                  /> */}
                  <button
                    type="button"
                    className="float-right text-purple-4 hover:text-purple-5 font-base py-2 mb-4 focus:outline-none"
                  >
                    Lupa Password?
                  </button>
                </div>
              </div>

              <div className="text-center pt-2 mb-6">
                <button
                  className="flex justify-center items-center bg-purple-4 px-6 py-3 text-white font-normal text-sm leading-tight rounded-[16px] 
                focus:shadow-lg focus:outline-none active:shadow-lg w-full mb-4 disabled:opacity-70 focus:ring-2 focus:ring-offset-2 focus:ring-purple-4"
                  type="submit"
                >
                  Login
                </button>
              </div>
              <div className="text-center text-sm">
                <p>
                  Belum punya akun?
                  <button className="text-purple-4 hover:text-purple-3 font-semibold pl-1">
                    Daftar disini
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
