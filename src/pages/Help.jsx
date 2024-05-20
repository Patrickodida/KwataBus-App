import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { userData, storeUser } from "../UserHelper";

function Help() {
  const [selectedValue, setselectedValue] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = userData();
    if (user && user.username) {
      setIsLoggedIn(true);
      setUsername(user.username);
    }
    window.scrollTo(0, 0);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    storeUser({});
    setIsLoggedIn(false);
    setUsername("");
    navigate("/login");
  };

  const handleChange = (e) => {
    setselectedValue(e.target.value);
  };
  return (
    <div>
      <div className="nav-section bg-[#fefefe]">
        <div className="flex justify-between p-4 m-auto items-center  font-bold  text-[#061f77] w-[90%] m-auto">
          <Link to="/" className="site-title font-bold text-2xl ">
            Kwata<span style={{ color: "#e3bf00" }}>Bus</span>
          </Link>
          {isLoggedIn ? (
            <ul className="flex">
              <li className="">
                <span>
                  <i className="bx bx-user pr-2 font-bold"></i>
                </span>
                <span className="nav-links">{username}</span>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={handleLogout}
                  className="button-link rounded-2xl ml-8 font-normal"
                >
                  Logout
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="flex">
              <li>
                <Link
                  className="nav-links "
                  to="/login"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Log In
                </Link>
              </li>
              <li>
                <Link
                  className="nav-links button-link rounded-2xl ml-8 font-normal "
                  to="/login"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          )}
        </div>
        <div className="header p-4  w-full bg-[#061f77] ">
          <div className="w-[90%] m-auto">
            <Link
              className="text-white text-2xl font-bold w-[90%] m-auto"
              to="/help"
            >
              Help
            </Link>
            <span className="text-[#fefefe] text-[1.5rem] ml-[2em]">|</span>
          </div>
        </div>
      </div>

      <div className="faq-section w-[70%] m-auto">
        <form action="" className="mt-[4em] text-center mb-[4em] ">
          <h1 className="text-center p-2 text-[#061f77] font-bold text-2xl w-full">
            FREQUENTLY ASKED QUESTIONS (FAQS)
          </h1>
          <select
            value={selectedValue}
            onChange={handleChange}
            className="p-4 text-center border-2 rounded-lg w-full"
          >
            <option value="question1">HOW DO I BUY TICKETS?</option>
            <option value="question2">
              Visit the official website of the tickecting platform, search for the journey and number of tickets to purchase.
            </option>
            <option value="question3">
              Add the tickets and your payment information and any required details.
            </option>
            <option value="question4">
              Review your order to ensure everything is correct. Complete the purchase and wait for a confirmation with your tickets
            </option>
          </select>

          <br />
          <br />

          <select
            value={selectedValue}
            onChange={handleChange}
            className="p-4 text-center border-2 rounded-lg w-full"
          >
            <option value="question1">
              CAN THE TICKET BE SENT TO ME VIA SMS?
            </option>
            <option value="question2">
              Yes, you could recieved your ticket or various tickets via SMS. 
            </option>
            <option value="question3">
              Follow the given payment instructions and fulfill all the required extra details asked for.
            </option>
            <option value="question4">
              Your tickects or ticket will be received on your mobile device as an SMS with confirmation of the payment. 
            </option>
          </select>

          <br />
          <br />

          <select
            value={selectedValue}
            onChange={handleChange}
            className="p-4  text-center border-2 rounded-lg w-full"
          >
            <option value="question1">
              I HAVE PURCHASED A TICKET BUT HAVE NOT RECEIVED A MESSAGE?
            </option>
            <option value="question2">
              I'm sorry to hear that you haven't received a message after purchasing the ticket. Have you checked your spam or junk folder?
            </option>
            <option value="question3">
              If you still haven't received it. Our recommendation is that you try reaching out or contacting the ticket providers directly.
            </option>
            <option value="question4">
              Inquire about the status of your ticket and ensure you receive it promptly.
            </option>
          </select>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Help;
