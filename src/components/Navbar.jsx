import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userData, storeUser } from "../UserHelper";

function Navbar() {
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
  const handleNavigation = (id) => {
    ScrollToElement(id);
  };

  return (
    <div>
      <section className="bg-white text-blue-900 fixed top-0 left-0 right-0 z-50 w-full">
        <div className="flex items-center justify-between m-auto w-[80%] max-w-screen-xl py-4">
          <Link to="/" className="site-title font-bold text-2xl">
            Kwata<span className="text-[#e3bf00]">Bus</span>
          </Link>
          <nav className="flex items-center w-full">
            <ul className="flex m-auto font-bold ">
              <li>
                <Link to="/" className="nav-links">
                  HOME
                </Link>
              </li>
              <li className="mx-8">
                <Link to="/about">ABOUT</Link>
              </li>
              <li>
                <Link to="/contact">CONTACT</Link>
              </li>
              <li>
                <Link className="nav-links ml-8" to="/help">
                  HELP
                </Link>
              </li>
            </ul>
            <ul className="flex items-center justify-center">
              {isLoggedIn ? (
                <>
                  <li>
                    <Link className="nav-links mr-8 font-bold" to="/booking">
                      Booking
                    </Link>
                  </li>
                  <li className="">
                    <span>
                      <i className="bx bx-user pr-2 font-bold text-[1.5rem]"></i>
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
                </>
              ) : (
                <>
                  <li className="active ml-8">
                    <Link
                      className="nav-links"
                      to="/login"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      Log In
                    </Link>
                  </li>
                  <Link
                    to="/signup"
                    className="button-link rounded-2xl ml-8 font-normal"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </ul>
          </nav>
        </div>
      </section>
    </div>
  );
}

export default Navbar;
