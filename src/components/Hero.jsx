import React, { useState } from "react";
import axios from "axios";

function Hero() {
  const [input, setInput] = useState({
    from: "",
    to: "",
    travelDate: "",
  });
  const [error, setError] = useState({
    from: "",
    to: "",
    travelDate: "",
  });

  // Validate from input
  // let valid = true;
  function validateFrom(from) {
    if (!from.trim()) {
      setError({ ...error, from: "Please enter a valid location" });
      return false;
    }
    setError({ ...error, from: "" });
    return true;
  }

  // validate to input
  function validateTo(to) {
    if (!to.trim()) {
      setError({ ...error, to: "Please enter a valid location" });
      valid = false;
    }
    setError({ ...error, to: "" });
    return true;
  }

  // validate date format
  function validateDate(travelDate) {
    const dateFormat = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateFormat.test(travelDate)) {
      setError({ ...error, travelDate: "Date is Invalid" });
      return false;
    }
    // check if its a valid date
    const date = new Date(travelDate);
    if (isNaN(date.getTime())) {
      return false;
    }
    setError({ ...error, travelDate: "" });
    return true;
  }

  function handleTicketSubmission(e) {
    e.preventDefault();
    if (
      validateFrom(input.from) &&
      validateTo(input.to) &&
      validateDate(input.travelDate)
    ) {
      axios
        .post("http://localhost:1337/api/users", input)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          setError("Ticket not Submitted, Try Again!");
          console.log(error);
        });
    }
  }
  return (
    <div>
      <section id="home" className=" hero-section mt-20 md:pt-10">
        <div className="hero-over-lay"></div>
        <div className="hero-content justify-center gap-10 w-4/5 max-w-7xl mx-auto flex flex-col lg:flex-row justify-center">
          <div className="hero-text w-2/4 font-bold leading-tight text-3xl lg:text-5xl lg:text-left text-center">
            <h1>Get Your Ticket Online Easy and Safely</h1>
          </div>
          <div className="hero-form w-full lg:w-2/4">
            <h2 className="lg:text-left text-center  pb-2.5 font-bold">
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

              <input
                type="text"
                placeholder="Date (YYYY-MM-DD)"
                className="mb-[24px] text-blue-900 rounded w-[100%] p-[0.425em] border border-gray-300 text-[#061f77] focus:outline-none"
                onChange={(e) => {
                  setInput({ ...input, travelDate: e.target.value });
                }}
                value={input.travelDate}
              />
              {error.travelDate && (
                <p className="text-center text-red-500">{error.travelDate}</p>
              )}
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
