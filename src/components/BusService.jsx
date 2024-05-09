import React from "react";
import { Link } from "react-router-dom";

function BusService(){
    return (
        <div className="m-auto w-[80%] text-[#061f77] ">
            <section className="flex justify-center bg-slate-100 p-2 rounded-lg">
                <div>
                    <h1 className="mb-4 font-bold">Bus Service 1</h1>
                    <h2 className="mb-4">Ordinary</h2>
                    <p>From Kampala to Arua</p>
                </div>
                
                <div className="flex items-end">
                    <p className="ml-8">Departure time: 8:00 AM</p>
                    <p className="ml-8"> Cost: 40,000</p>
                    <Link className="ml-8 bg-[#061f77] rounded-lg text-white py-2 px-16 text-center">Select Seat</Link>
                </div>
            </section>
        </div>

    )
}

export default BusService;