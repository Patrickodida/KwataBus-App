import React from "react";
import { Link } from "react-router-dom";

function BusService(props) {
  return (
    <div className="m-auto w-full text-[#061f77] mb-10 ">
      <section className="md:flex md:justify-center flex-col md:flex-row bg-slate-100 p-4 rounded-lg text-center">
        <div className="text-left">
          <h1 className="mb-4 font-bold">{props.busCompany}</h1>
          <h2 className="mb-4">Ordinary</h2>
          <p className="mb-4">
            <span className="font-bold">From</span> {props.departureTown} <span className="font-bold">To</span> {props.arrivalTown}
          </p>
        </div>

        <div className="md:flex md:justify-center flex-col md:flex-row md:items-end">
          <p className="md:ml-8 mb-4"><span className="font-bold">Departure time:</span> {props.departureTime}</p>
          <p className="md:ml-8 mb-4"><span className="font-bold">Cost:</span> {props.fare}</p>
          <Link
            className="ml-8 mb-2 bg-[#061f77] rounded-lg text-white py-2 px-10 text-center flex justify-center"
            style={{ whiteSpace: "nowrap" }}
          >
            Select Seat
          </Link>
        </div>
      </section>
    </div>
  );
}

export default BusService;
