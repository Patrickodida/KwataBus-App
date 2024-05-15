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

  // Validate name
  function validateName(name){
    if(!name.trim()){
      setError({...error, name: "Please enter your name"})
      return false;
    }
    // Regexp to allow only letters and spaces
    const nameFormat = /^[a-zA-Z\s]*$/;
    if(!nameFormat.test(name)){
      setError({...error, name: "Please enter your name"})
      return false;
    }
    setError({...error, name: ""})
    return true;
  }
  //validate Email
  function validateEmail(email){
    if(!validator.isEmail(email)){
      setError({...error, email: "Invalid email"})
      return false;
    }
    setError({...error, email: ""})
    return true;
  }
  // validate Message
  function validateMessage(message){
    if(!message.trim()){
      setError({...error, message: "Please enter the message"})
      return false;
    }
    const messageFormat = /^[a-zA-Z\s]*$/;
    if(messageFormat.test(message)){
       setError({...error, message: "Please enter the message"})
       return false;
    }
    setError({...error, message: ""})
    return true;
  }

  function handleSendMessage(e){
    e.preventDefault();
    const isNameValid = validateName(input.name);
    if(isNameValid){
      axios.post("http://localhost:1337/api/users", input)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      setError({...error, message: "Message not sent, Try Again"});
      console.log(error)
    })
    }
    
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
                onChange={(e) => {setInput({...input, email: e.target.value})
                validateEmail(e.target.value)
              }}
                
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
