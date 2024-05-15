import React, {useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import BusService from "../components/BusService";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

function Booking() {

  const [input, setInput] = useState({
    from: "",
    to:""
  });
  const [error, setError] = useState({
    from: "",
    to:""
  })

  function validateFrom(from) {
    if (from.length < 4) {
      setError({ ...error, from: "Invalid input" });
      return false;
    }
    setError({ ...error, from: "" });
    return true;
  }
  
  function validateTo(to) {
    if (to.length < 4) {
      setError({ ...error, to: "Invalid input" });
      return false;
    }
    setError({ ...error, to: "" });
    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFrom(input.from) && validateTo(input.to)) {
      axios
        .post("http://localhost:1337/api/users", input)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          setError({ ...error, general: "Login failed. Please try again." });
          console.error(error);
        });
    }
  };
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="mt-2 mb-2 w-[80%] m-auto">
        <section className="BookingArea-section">
        <div className="">
          <form onSubmit={handleSubmit} className=" form-center bg-white rounded-lg">
            <div className="form-row flex flex-col md:flex-row gap-5 items-center justify-center w-full ">
              <div className="from flex">
                <label className="text-[#061f77] font-bold"id="firstLabel">From</label>
              <input
                    type="text"
                    id="from"
                    value={input.from}
                    placeholder="Kampala"
                    className="mb-[24px] text-[#061f77] rounded w-[100%] p-[0.325em] border border-gray-300 text-[#061f77] focus:outline-none "
                    onChange={(e) => {
                      setInput({ ...input, from: e.target.value });
                      validateFrom(e.target.value);
                    }}
              />
              </div>
                {error.from && (
                  <p className="text-center text-red-500">{error.from}</p>
                )}
              <div className="to flex">
                <label className="text-[#061f77] font-bold">To</label>
              <input
                    type="text"
                    id="to"
                    value={input.to}
                    placeholder="Arua"
                    className="mb-[24px] text-[#061f77] rounded w-[100%] p-[0.325em] border border-gray-300 text-[#061f77] focus:outline-none"
                    onChange={(e) => {
                      setInput({ ...input, to: e.target.value });
                      validateTo(e.target.value);
                    }}
              />
              </div>
                {error.to && (
                  <p className="text-center text-red-500">{error.to}</p>
                )}
              <div className="date flex">
                <label className="text-[#061f77] font-bold">Date</label>
              <input type="date" className="mb-[24px] text-[#061f77] rounded w-[100%] p-[0.325em] border border-gray-300 text-[#061f77] focus:outline-none" />
              </div>
              <div className="ticket flex">
                <Link className="ml-4 mb-[24px] bg-[#061f77] rounded-lg text-white py-2 px-10 text-center" style={{ whiteSpace: "nowrap" }}>Find Ticket</Link>
              </div>
                
            </div>
          </form>
        </div>

      </section>
      <div className="md:flex md:justify-center items-start flex-col md:flex-row md:items-end" >
      <section className="bg-slate-100 text-[#061f77] rounded-lg p-4 md:mr-8 md:mb-20 mt-60 mb-10 text-center w-20% md:mt-5">
        <div className="flex mb-8 justify-center">
          <div className="font-bold"><h1>FILTER</h1></div>
          <div className="pl-8 font-bold"><h2>Reset All</h2></div>
        </div>
        <div>
          <h2 className="mb-4 font-bold">Bus Category</h2>
          <div>
            <div>
            <input className="mb-4" type={"checkbox"} /><label>Executive</label>
              </div>
            <input className="mb-4" type={"checkbox"} /><label>Ordinary</label>
          </div>
          
        </div>
        <div>
          <h2 className="mb-4 mt-8 font-bold">Departure time</h2>
          <div>
            <div className="mb-2"><input type={"checkbox"} /><label>8:00 AM</label></div>
            <input type={"checkbox"} /><label>9:00 AM</label>
            
          </div>
          
        </div>

      </section>
      
    <BusService className="flex justify-center " />
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default Booking;