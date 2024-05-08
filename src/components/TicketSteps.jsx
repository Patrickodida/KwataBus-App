import React from "react";
import SvgDest from '../images/destination.svg'
import SvgChoose from '../images/chooseSeat.svg'
import PayTicket from '../images/payticket.svg'

function TicketSteps() {
  return (
    <div>
      <section className="ticket-section w-4/5 max-w-screen-xl m-auto">
        <h2 className="text-4xl text-center my-6 font-bold">
          Get Your Tickets with Just 3 Steps
        </h2>
        <div className="card flex justify-center items-center gap-[10%]">
          <div className="icons-container w-1/2 h-auto flex justify-center text-[#061f77]">
            <img src={SvgDest} className="w-1/2 h-auto"/>
          </div>
          <div className="text-container w-2/4">
            <p>
              Choose your destination, origin, date, and then search for buses
            </p>
          </div>
        </div>

        <div className="card flex justify-center items-center gap-[10%]">
          <div className="text-container w-2/4">
            <p>Select a seat and make a booking</p>
          </div>
          <div className="icons-container w-1/2 h-auto flex justify-center">
            <img src={SvgChoose} className="w-1/2 h-auto"/>
          </div>
        </div>

        <div className="card flex justify-center items-center gap-[10%]">
          <div className="icons-container w-1/2 h-auto flex justify-center">
            <img src={PayTicket} className="w-1/2 h-auto"/>
          </div>
          <div className="text-container w-2/4">
            <p>Pay for seat using payment options provided</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TicketSteps;
