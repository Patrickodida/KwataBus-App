import React from "react";

function Hero() {
  return (
    <div>
      <section className=" hero-section">
        <div className="hero-over-lay"></div>
        <div className="hero-content">
          <div>
            <h1>Get Your Ticket Online Easy and Safely</h1>
          </div>
          <div>
            <h2>Choose Your Ticket</h2>
            <form>
              <div className="form-row">
                <input type="text" placeholder="From" />

                <input type="text" placeholder="To" />
              </div>

              <input type="date" />

              <button type="submit">Find Ticket</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;