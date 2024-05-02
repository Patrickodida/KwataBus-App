import React from "react";

function Hero() {
  return (
    <div>
      <section className=" hero-section">
        <div className="hero-over-lay">
        </div>
        <div className="hero-content justify-center gap-10 w-4/5 max-w-7xl mx-auto">
          <div className="text-5xl w-2/4 font-bold leading-tight">
            <h1>Get Your Ticket Online Easy and Safely</h1>
          </div>
          <div className="w-2/4">
            <h2 className="text-base pb-2.5 font-bold">Choose Your Ticket</h2>
            <form className="p-5 form-center bg-white rounded-lg">
              <div className="form-row">
                <input type="text" placeholder="From" className="mb-1 text-blue-900 rounded" />

                <input type="text" placeholder="To" className="text-blue-900 rounded" />
              </div>

              <input type="date" className="text-blue-900 rounded" />

              <button type="submit" className="bg-blue-900 rounded-lg">Find Ticket</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;