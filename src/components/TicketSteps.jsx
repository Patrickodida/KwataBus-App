import React from "react";
import SvgDest from '../images/destination.svg'
import SvgChoose from '../images/chooseSeat.svg'
import PayTicket from '../images/payticket.svg'

function TicketSteps() {
  return (
    <div>
      <section className="ticket-section w-4/5 max-w-screen-xl m-auto text-[#061f77]">
        <h2 className="text-4xl text-center my-6 font-bold">
          Get Your Tickets with Just 3 Steps
        </h2>
        <div className="card md:flex md:justify-center md:items-center md:gap-[10%] mb-12 border md:border-none shadow-md md:shadow-none ">
          <div className="icons-container w-1/2 h-auto flex justify-center text-[#061f77]  rounded-lg p-4 w-full m-auto md:border md:shadow-md">
            <span className="md:flex md:justify-center font-bold text-[#061f77] pb-[30px] hidden">1</span>
            <img src={SvgDest} className="w-1/4 h-auto"/>
          </div>
          <div className="text-container w-2/4  rounded p-4 w-full m-auto md:border md:shadow-md">
            
            <p>
              Choose your destination, origin, date, and then search for buses
            </p>
          </div>
        </div>

        <div className="card md:flex md:justify-center md:items-center md:gap-[10%] mb-12 border md:border-none shadow-md md:shadow-none">
          <div className="text-container w-2/4  rounded p-4 w-full m-auto md:border md:shadow-md">
            
            <p>Select a seat and make a booking</p>
          </div>
          <div className="icons-container w-1/2 h-auto flex justify-center text-[#061f77]  rounded-lg p-4 w-full m-auto md:border md:shadow-md">
            <span className="md:flex md:justify-center font-bold text-[#061f77] pb-[30px] hidden">2</span>
            <img src={SvgChoose} className="w-1/2 h-auto"/>
          </div>
        </div>

        <div className="card md:flex md:justify-center md:items-center md:gap-[10%] mb-12 border md:border-none shadow-md md:shadow-none">
          <div className="icons-container w-1/2 h-auto flex justify-center text-[#061f77]  rounded-lg p-4 w-full m-auto md:border md:shadow-md">
            <span className="md:flex md:justify-center font-bold text-[#061f77] pb-[30px] hidden">3</span>
            <img src={PayTicket} className="w-1/2 h-auto"/>
          </div>
          <div className="text-container w-2/4  rounded p-4 w-full m-auto md:border md:shadow-md">
            
            <p>Pay for seat using payment options provided</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TicketSteps;
