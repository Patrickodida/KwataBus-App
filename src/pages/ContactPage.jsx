import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import validator from "validator";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function ContactPage(){
    return (
        <>
        <Navbar />
        <Banner title={"Contact Us"} />
        <Contact />
        <Footer />
        </>
    )
}
export default ContactPage;