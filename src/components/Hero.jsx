import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const [input, setInput] = useState({
    from: "",
    to: "",
  });
  const [error, setError] = useState({
    from: "",
    to: "",
  });
  const navigate = useNavigate();

  function validateFrom(from) {
    if (!from.trim()) {
      setError((prevError) => ({
        ...prevError,
        from: "Please enter a valid location",
      }));
      return false;
    }
    setError((prevError) => ({ ...prevError, from: "" }));
    return true;
  }

  function validateTo(to) {
    if (!to.trim()) {
      setError((prevError) => ({
        ...prevError,
        to: "Please enter a valid location",
      }));
      return false;
    }
    setError((prevError) => ({ ...prevError, to: "" }));
    return true;
  }

  function handleTicketSubmission(e) {
    e.preventDefault();
    if (validateFrom(input.from) && validateTo(input.to)) {
      localStorage.setItem("ticketData", JSON.stringify(input));
      navigate("/booking");
    }
  }

  return (
    <div>
      <section id="home" className="hero-section mt-20 md:pt-10">
        <div className="hero-over-lay"></div>
        <div className="hero-content justify-center gap-10 w-4/5 max-w-7xl mx-auto flex flex-col lg:flex-row justify-center">
          <div className="hero-text w-full md:w-2/4 font-bold leading-tight text-3xl lg:text-5xl lg:text-left text-center">
            <h1>Get Your Ticket Online Easy and Safely</h1>
          </div>
          <div className="hero-form w-full lg:w-2/4">
            <h2 className="lg:text-left text-center pb-2.5 font-bold">
              Choose Your Ticket
            </h2>
            <form
              onSubmit={handleTicketSubmission}
              className="p-5 form-center bg-white rounded-lg"
            >
              <div className="form-row sm:w-full">
                <input
                  id="from"
                  type="text"
                  placeholder="From"
                  className="mb-[24px] text-blue-900 rounded w-[50%] p-[0.425em] border border-gray-300 text-[#061f77] focus:outline-none"
                  onChange={(e) => {
                    setInput({ ...input, from: e.target.value });
                  }}
                  value={input.from}
                />
                {error.from && (
                  <p className="text-center text-red-500">{error.from}</p>
                )}
                <input
                  id="to"
                  type="text"
                  placeholder="To"
                  className="mb-[24px] text-blue-900 rounded w-[50%] p-[0.425em] border border-gray-300 text-[#061f77] focus:outline-none"
                  onChange={(e) => {
                    setInput({ ...input, to: e.target.value });
                  }}
                  value={input.to}
                />
                {error.to && (
                  <p className="text-center text-red-500 w-full">{error.to}</p>
                )}
              </div>
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
