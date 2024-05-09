import React from "react";
import {Link} from "react-router-dom";    

function Booking(){
    return (
      <div>
         <section className="BookingArea-section my-10">
          <div className="hero-form w-full lg:w-4/4 ">
            <form className="p-5 form-center bg-white rounded-lg">
              <div className="form-row sm:w-full">
                <label id="firstLabel">From</label>
                <input
                  type="text"
                  placeholder="Kampala"
                  className="mb-[24px] text-blue-900 rounded w-[20%] p-[0.425em] border border-gray-300 text-[#061f77] focus:outline-none"
                />
                <label>To</label>
                <input
                  type="text"
                  placeholder="Arua"
                  className="mb-[24px] text-blue-900 rounded w-[20%] p-[0.425em] border border-gray-300 text-[#061f77] focus:outline-none"
                />
              
              <label>Departure Date</label>
              <input type="date" className="mb-[24px] text-blue-900 rounded w-[15%] p-[0.425em] border border-gray-300 text-[#061f77] focus:outline-none" />
              
              <Link className="mb-[24px] bg-[#061f77] rounded-lg text-white py-2 px-4 text-center">Find Ticket</Link>
              
              </div>
            </form>
          </div>
        
      </section>
      
    </div>
    )
}

export default Booking;