import React from "react";

function Hero() {
  return (
    <div>
      <section className=" hero-section my-10">
        <div className="hero-over-lay"></div>
        <div className="hero-content justify-center gap-10 w-4/5 max-w-7xl mx-auto flex flex-col lg:flex-row justify-center">
          <div className="hero-text w-2/4 font-bold leading-tight text-3xl lg:text-5xl lg:text-left text-center">
            <h1>Get Your Ticket Online Easy and Safely</h1>
          </div>
          <div className="hero-form w-full lg:w-2/4">
            <h2 className="lg:text-left text-center  pb-2.5 font-bold">
              Choose Your Ticket
            </h2>
            <form className="p-5 form-center bg-white rounded-lg">
              <div className="form-row sm:w-full">
                <input
                  type="text"
                  placeholder="From"
                  className="mb-[24px] text-blue-900 rounded w-[50%] p-[0.425em] border border-gray-300 text-[#061f77] focus:outline-none"
                />

                <input
                  type="text"
                  placeholder="To"
                  className="mb-[24px] text-blue-900 rounded w-[50%] p-[0.425em] border border-gray-300 text-[#061f77] focus:outline-none"
                />
              </div>

              <input type="date" className="mb-[24px] text-blue-900 rounded w-[100%] p-[0.425em] border border-gray-300 text-[#061f77] focus:outline-none" />

              <button type="submit" className="bg-blue-900 rounded-lg">
                Find Ticket
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
