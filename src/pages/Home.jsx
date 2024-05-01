import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TicketSteps from "../components/TicketSteps";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home(){
    return (
        <div className="w-4/5 max-w-7xl mx-auto">

           <Navbar />
           <Hero />
           <TicketSteps />
           <About />
           <Contact />
           <Footer /> 

        </div>
    )
}

export default Home;
