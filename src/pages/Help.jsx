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
            <div className="nav-section bg-[#fefefe]">
                <div className="flex justify-between p-4 m-auto items-center  font-bold  text-[#061f77] w-[90%] m-auto">
                <Link href="/" className="site-title font-bold text-2xl ">
                    Kwata<span style={{ color: "#e3bf00" }}>Bus</span>
                </Link>

                <Link
                    className="nav-links "
                    to="/login"
                    style={{ whiteSpace: "nowrap" }}
                >
                    Log In
                </Link>
            </div>
            <div className="header p-4  w-full bg-[#061f77] ">
                <div className="w-[90%] m-auto">
                    <Link className="text-white text-2xl font-bold w-[90%] m-auto" to="/help">
                    Help
                </Link>
                <span className="text-[#fefefe] text-[1.5rem] ml-[2em]">|</span>
                </div>
                
            </div>
            </div>
            

            
            <div className="faq-section w-[70%] m-auto">
                <form action="" className="mt-[3em] text-center ">
                <h1 className="text-center p-2 text-[#061f77] font-bold text-2xl w-full">FREQUENTLY ASKED QUESTIONS (FAQS)</h1>
                <select value={selectedValue} onChange={handleChange} className="p-4 text-center border-4 rounded-lg w-full">
                    <option value="question1">HOW DO I BUY TICKETS?</option>
                    <option value="question2">Lorem ipsum dolor, sit amet consectetur adipisicing elit?</option>
                    <option value="question3">Lorem ipsum dolor, sit amet consectetur adipisicing elit?</option>
                    <option value="question4">Lorem ipsum dolor, sit amet consectetur adipisicing elit?</option>
                </select>

                <br />
                <br />

                <select value={selectedValue} onChange={handleChange} className="p-4 text-center border-4 rounded-lg w-full">
                    <option value="question1">CAN THE TICKET BE SENT TO ME VIA SMS?</option>
                    <option value="question2">Lorem ipsum dolor, sit amet consectetur adipisicing elit?</option>
                    <option value="question3">Lorem ipsum dolor, sit amet consectetur adipisicing elit?</option>
                    <option value="question4">Lorem ipsum dolor, sit amet consectetur adipisicing elit?</option>
                </select>

                <br />
                <br />

                <select value={selectedValue} onChange={handleChange} className="p-4  text-center border-4 rounded-lg w-full">
                    <option value="question1">I HAVE PURCHASED A TICKET BUT HAVE NOT RECEIVED A MESSAGE?</option>
                    <option value="question2">Lorem ipsum dolor, sit amet consectetur adipisicing elit?</option>
                    <option value="question3">Lorem ipsum dolor, sit amet consectetur adipisicing elit?</option>
                    <option value="question4">Lorem ipsum dolor, sit amet consectetur adipisicing elit?</option>
                </select>
 
            </form>
            </div>
            

            <Footer />
        </div>
    )
}

export default Help;