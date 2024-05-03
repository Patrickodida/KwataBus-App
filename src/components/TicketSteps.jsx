import React from "react";

function TicketSteps(){
    return (
        <div>
            <section className="ticket-section w-4/5 max-w-screen-xl m-auto">
        <h2 className="text-4xl text-center my-6 font-bold">Get Your Tickets with Just 3 Steps</h2>
        <div className="card flex justify-between items-center gap-10  ">
          <div className="icons-container border rounded-lg">
            <h4>1</h4>
            <i class='bx bx-search-alt-2 icon'></i>
          </div>
          <div className="text-container w-2/4">
            <p>
              Choose your destination, origin, date, and then search for buses
            </p>
          </div>
        </div>

        <div className="card flex justify-between items-center gap-10  ">
          <div className="text-container w-2/4">
            <p>
              Select a seat and make a booking
            </p>
          </div>
          <div className="icons-container border rounded-lg">
            <h4>2</h4>
            <i class='bx bx-search-alt-2 icon'></i>
          </div>
        </div>

        <div className="card flex justify-between items-center gap-10  ">
          <div className="icons-container border rounded-lg">
            <h4>3</h4>
            <i class='bx bx-search-alt-2 icon'></i>
          </div>
          <div className="text-container w-2/4">
            <p>
              Pay for seat using payment options provided
            </p>
          </div>
        </div>
        
      </section>

        </div>
    )
}

export default TicketSteps;