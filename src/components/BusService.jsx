import React from "react";
import { Link } from "react-router-dom";

function BusService(){
    return (
        <div className="m-auto w-[80%] text-[#061f77] mb-20 ">
            <section className="md:flex md:justify-center flex-col md:flex-row bg-slate-100 p-4 rounded-lg text-center">
                <div>
                    <h1 className="mb-4 font-bold">Bus Service 1</h1>
                    <h2 className="mb-4">Ordinary</h2>
                    <p className="mb-4">From Kampala to Arua</p>
                </div>
                
                <div className="md:flex md:justify-center flex-col md:flex-row md:items-end">
                    <p className="md:ml-8 mb-4">Departure time: 8:00 AM</p>
                    <p className="md:ml-8 mb-8"> Cost: 40,000</p>
                    <Link className="ml-8 bg-[#061f77] rounded-lg text-white py-2 px-10 text-center flex justify-center" style={{ whiteSpace: "nowrap" }}>Select Seat</Link>
                </div>
            </section>
        </div>

    )
}

export default BusService;