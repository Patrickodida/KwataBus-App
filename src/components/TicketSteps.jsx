import React from "react";

function TicketSteps(){
    return (
        <div>
            <section className="w-4/5 max-w-screen-xl m-auto">
        <h2 className="text-4xl text-center my-6">Get Your Tickets with Just 3 Steps</h2>
        <div className="card flex justify-center gap-10  ">
          <div className="w-2/4">
            <h3>Search Your Bus</h3>
          </div>
          <div>
            <h3>Search Your Bus</h3>
            <p>
              Choose your destination, origin, date, and then search for buses
            </p>
          </div>
        </div>

        <div className="card flex justify-content gap-10  ">
          <div>
            <h3>Search Your Bus</h3>
            <p>
              Choose your destination, origin, date, and then search for buses
            </p>
          </div>
          <div className="w-2/4">
            <h3>Search Your Bus</h3>
          </div>
        </div>

        <div className="card flex justify-content gap-10  ">
          <div className="w-2/4">
            <h3>Search Your Bus</h3>
          </div>
          <div>
            <h3>Search Your Bus</h3>
            <p>
              Choose your destination, origin, date, and then search for buses
            </p>
          </div>
        </div>
        
      </section>

        </div>
    )
}

export default TicketSteps;