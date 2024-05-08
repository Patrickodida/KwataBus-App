import React, {useState} from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";



function Help() {
    const [selectedValue, setselectedValue] = useState("");

    const handleChange = (e) => {
        setselectedValue(e.target.value)
    }
    return (
        <div>
            <div className="flex justify-between p-8 m-auto items-center  font-bold bg-[#061f77]">
                <Link href="/" className="site-title font-bold text-2xl">
                    Kwata<span style={{ color: "#e3bf00" }}>Bus</span>
                </Link>

                <Link
                    className="nav-links"
                    to="/login"
                    style={{ whiteSpace: "nowrap" }}
                >
                    Log In
                </Link>
            </div>

            <div className="header p-8  w-full bg-[#e3bf00]">
                <Link className="text-white text-2xl" to="/help">
                    Help
                </Link>
            </div>
            
            <form action="" className="h-[100vh] text-center">
                <h1 className="text-center p-8 m-auto text-[#061f77] font-bold text-3xl">FREQUENTLY ASKED QUESTIONS (FAQS)</h1>
                <select value={selectedValue} onChange={handleChange} className="p-6 m-auto w-4/5 max-w-screen-xl text-center border-4 rounded-lg">
                    <option value="question1">HOW DO I BUY TICKETS?</option>
                    <option value="question2">Lorem ipsum dolor, sit amet consectetur adipisicing elit?</option>
                    <option value="question3">Lorem ipsum dolor, sit amet consectetur adipisicing elit?</option>
                    <option value="question4">Lorem ipsum dolor, sit amet consectetur adipisicing elit?</option>
                </select>

                <br />
                <br />

                <select value={selectedValue} onChange={handleChange} className="p-6 m-auto w-4/5 max-w-screen-xl text-center border-4 rounded-lg">
                    <option value="question1">CAN THE TICKET BE SENT TO ME VIA SMS?</option>
                    <option value="question2">Lorem ipsum dolor, sit amet consectetur adipisicing elit?</option>
                    <option value="question3">Lorem ipsum dolor, sit amet consectetur adipisicing elit?</option>
                    <option value="question4">Lorem ipsum dolor, sit amet consectetur adipisicing elit?</option>
                </select>

                <br />
                <br />

                <select value={selectedValue} onChange={handleChange} className="p-6 m-auto w-4/5 max-w-screen-xl  text-center border-4 rounded-lg">
                    <option value="question1">I HAVE PURCHASED A TICKET BUT HAVE NOT RECEIVED A MESSAGE?</option>
                    <option value="question2">Lorem ipsum dolor, sit amet consectetur adipisicing elit?</option>
                    <option value="question3">Lorem ipsum dolor, sit amet consectetur adipisicing elit?</option>
                    <option value="question4">Lorem ipsum dolor, sit amet consectetur adipisicing elit?</option>
                </select>
 
            </form>

            <Footer />
        </div>
    )
}

export default Help;



<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis dolorum error iusto illum distinctio earum officiis? Excepturi aliquam ad saepe quidem, in sed. Officiis ab ad veritatis tempora, quisquam eius?</p>
