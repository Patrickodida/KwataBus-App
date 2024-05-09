import React from "react";
import { Link } from "react-router-dom";
import BusService from "../components/BusService";

function Booking() {
  return (
    <div>
      
      <section className="BookingArea-section my-4">
        <div className="w-[80%] m-auto">
          <form className=" form-center bg-white rounded-lg">
            <div className="form-row sm:w-full">
              <label className="text-[#061f77] font-bold"id="firstLabel">From</label>
              <input
                type="text"
                placeholder="Kampala"
                className="mb-[24px] text-[#061f77] rounded w-[18%] p-[0.425em] border border-gray-300 text-[#061f77] focus:outline-none"
              />
              <label className="text-[#061f77] font-bold">To</label>
              <input
                type="text"
                placeholder="Arua"
                className="mb-[24px] text-[#061f77] rounded w-[18%] p-[0.425em] border border-gray-300 text-[#061f77] focus:outline-none"
              />

              <label className="text-[#061f77] font-bold">Departure Date</label>
              <input type="date" className="mb-[24px] text-[#061f77] rounded w-[15%] p-[0.425em] border border-gray-300 text-[#061f77] focus:outline-none" />

              <Link className="ml-4 mb-[24px] bg-[#061f77] rounded-lg text-white py-2 px-16 text-center">Find Ticket</Link>

            </div>
          </form>
        </div>

      </section>
      <div className="flex m-auto w-[80%] justify-center" >
      <section className="bg-slate-100 text-[#061f77] rounded-lg p-4">
        <div className="flex mb-8">
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
      
<BusService className="flex items-end" />
</div>
    </div>
  )
}

export default Booking;