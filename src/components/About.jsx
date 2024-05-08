import React from "react";
import SvgSmartphone from '../images/smartphone.svg'
import SvgPeople from '../images/bookSeat.svg'

function About() {
  return (
    <div>
      <section className="about about-section w-4/5 max-w-screen-xl m-auto text-center my-20">
        <h2 className="text-4xl text-center mb-6 font-bold">About</h2>
        <div className="section-1 flex justify-center items-center gap-[10%] ">
          <div className="image w-1/2 h-auto flex justify-center">
            <img src={SvgSmartphone} className="w-1/2 h-auto" />
          </div>
          <div className="text w-1/2 text-left">
            <p>
              Welcome to KwataBus – your go-to platform for hassle-free bus
              booking experiences! We're thrilled to have you aboard.
            </p>
            <p>
              At KwataBus, we understand the importance of seamless travel.
              Whether you're commuting for work, embarking on an adventure, or
              simply exploring new destinations, we believe that every journey
              should be comfortable, convenient, and memorable. That's why we've
              crafted a user-friendly platform that puts your travel needs
              first.
            </p>
            <p>
              Founded on the principles of reliability, efficiency, and customer
              satisfaction, KwataBus aims to revolutionize the way you book bus
              tickets. With just a few clicks, you can easily compare schedules,
              select your preferred routes, and secure your seats – all from the
              comfort of your home or on-the-go via our mobile app.
            </p>
          </div>
        </div>
        <div className="section-2 flex justify-center items-center gap-[10%]">
          <div className="text w-1/2 text-left">
            <p>
              But KwataBus is more than just a booking platform – we're your
              trusted travel companion. Our dedicated team works tirelessly to
              ensure that every aspect of your journey is taken care of, from
              reservation to arrival. Whether you have questions about your
              booking, need assistance during your trip, or simply want travel
              tips and recommendations, our customer support team is always here
              to help.
            </p>
            <p>
              Safety is our top priority at KwataBus. We partner with reputable
              bus operators who adhere to strict safety standards, so you can
              rest assured knowing that you're in good hands every step of the
              way. From well-maintained vehicles to experienced drivers, we go
              above and beyond to prioritize your well-being.
            </p>
            <p>
              As passionate advocates for sustainable travel, we're committed to
              minimizing our environmental footprint. By promoting bus travel as
              an eco-friendly alternative to other modes of transportation,
              we're doing our part to create a greener, more sustainable future
              for generations to come.
            </p>
          </div>
          <div className="image w-1/2 h-auto flex justify-center">
            <img src={SvgPeople} className="w-1/2 h-auto" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
