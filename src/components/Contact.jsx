import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import validator from "validator";

function Contact() {
  const [input, setInput] = useState({
    name:"",
    email:"",
    message:""
  })
  const [error, setError] = useState({
    name:"",
    email:"",
    message:""
  })

  function handleSendMessage(e){
    e.preventDefault();
    // reset the error messages
    setError({
      name: "",
      email: "",
      message: ""
    })
    // validate input fields
    let valid = true;
    if(!input.name.trim()){
      setError({...error, name: "Enter a valid name"});
      valid = false;
    }
    if(!input.email.trim() || !validator.isEmail(input.email)){
      setError({...error, email: "Please enter a valid input"})
      valid = false;
    }
    if(!valid){
      return;
    }

    axios.post("http://localhost:1337/api/users", input)
    .then((response) => {
      console.log(response)
      // Reset the input field after submission
      setInput({
        name: "",
        email: "",
        message: ""
      })
    })
    .catch((error) => {
      setError({...error, message: "Message not sent, Try Again"});
      console.log(error)
    })
  }
  return (
    <div>
      <section id="contact" className="contact-section w-[80%] m-auto pt-20">
        <h2 className="text-4xl text-center mb-6 font-bold">Contact Us</h2>
        <div className="contact-container text-center md:flex md:justify-around md:items-center md:gap-10">
          <div className="form-section w-full mb-[3em] md:w-[50%]">
            <h3 className="mb-[24px] font-bold">Get In Touch</h3>
            <form onSubmit={handleSendMessage} className="contact-form">
              <input
                className="w-full text-blue-900 rounded p-[0.425em] mb-[24px] border border-gray-300 text- [#061f77] focus:outline-none"
                type="text"
                id="name"
                placeholder="Your Name"
                onChange={(e) => {setInput({...input, name: e.target.value})}}
                value={input.name}
              />
              {error.name && <p className="text-red-500">{error.name}</p>}
              <input
                className="w-full text-blue-900 rounded p-[0.425em] mb-[24px] border border-gray-300 text-[#061f77] focus:outline-none"
                type="text"
                id="email"
                placeholder="Your Email"
                onChange={(e) => {setInput({...input, email: e.target.value})}}
                value={input.email}
                
              />
              {error.email && <p className="text-red-500">{error.email}</p>}
              <textarea
                id="message"
                type="message"
                rows="6"
                cols="50"
                className="w-full text-blue-900 rounded p-[0.425em] mb-[24px] border border-gray-300 text-[#061f77] focus:outline-none"
                placeholder="Your Message"
                onChange={(e) => {setInput({...input, message: e.target.value})}}
                value={input.message}
              ></textarea>
              <button className="w-full rounded">Send</button>
              {error.message && <p className="text-red-500">{error.message}</p>}
            </form>
          </div>

          <div className="address md:text-left text-center">
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
              <p>
                <strong>Email:</strong> business@kwatabus.com
              </p>
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
