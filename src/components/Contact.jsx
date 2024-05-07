import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <section className="contact-section w-[80%] m-auto">
        <h2 className="text-4xl text-center mb-6 font-bold">Contact Us</h2>
        <div className="contact-container text-center md:flex md:justify-around md:items-center md:gap-10">
          <div className="form-section w-full mb-[3em] md:w-[50%]">
            <h3 className="mb-[24px] font-bold">Get In Touch</h3>
          <div className="form">
            <input className="w-full text-blue-900 rounded p-[0.425em] mb-[24px] border border-gray-300 text- [#061f77] focus:outline-none" type="text" placeholder="Your Name" />
            <input className="w-full text-blue-900 rounded p-[0.425em] mb-[24px] border border-gray-300 text-[#061f77] focus:outline-none" type="text" placeholder="Your Email" />
            <textarea id="" rows="6" cols="50" className="w-full text-blue-900 rounded p-[0.425em] mb-[24px] border border-gray-300 text-[#061f77] focus:outline-none"></textarea>
            <button className="w-full rounded">Send</button>
          </div>
          </div>
          
          <div className="address text-center">
            <div className="location">
              <h3 className="mb-[24px] font-bold">Our Location</h3>
              <address>
                KwataBus Headquarters <br />
                123 Traveler's Avenue <br />
                City Center, Metroville <br />
                Uganda
              </address>
            </div>
            <div>
              <h3 className="font-bold my-4">Contact Numbers</h3>
              <p>
                <strong>Phone:</strong> +256 123 456789
              </p>
            </div>
            <div className="emails">
              <p>business@kwatabus.com</p>
            </div>
            <div className="hours">
              <strong>Hours:</strong> Monday to Friday, 8:00 AM - 5:00 PM (EAT)
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
