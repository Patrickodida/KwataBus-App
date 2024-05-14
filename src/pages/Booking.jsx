import React from "react";
import { Link } from "react-router-dom";
import BusService from "../components/BusService";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

function Booking() {
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="mt-2 mb-2 w-[80%] m-auto">
        <section className="BookingArea-section">
        <div className="">
          <form className=" form-center bg-white rounded-lg">
            <div className="form-row flex flex-col md:flex-row gap-5 items-center justify-center w-full ">
              <div className="from flex">
                <label className="text-[#061f77] font-bold"id="firstLabel">From</label>
              <input
                type="text"
                placeholder="Kampala"
                className="mb-[24px] text-[#061f77] rounded w-[100%] p-[0.325em] border border-gray-300 text-[#061f77] focus:outline-none "
              />
              </div>
              <div className="to flex">
                <label className="text-[#061f77] font-bold">To</label>
              <input
                type="text"
                placeholder="Arua"
                className="mb-[24px] text-[#061f77] rounded w-[100%] p-[0.325em] border border-gray-300 text-[#061f77] focus:outline-none"
              />
              </div>
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