import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  // scroll to element function
  function ScrollToElement(id){
    const element = document.getElementById(id);
    if(element){
      element.scrollIntoView({
        behaviour: 'smooth'
      })
    }
  }

  const handleNavigation = (id) => {
    ScrollToElement(id);
  }
  return (
    <div>
      <section className="bg-white text-blue-900 fixed top-0 left-0 right-0 z-50 w-full">
        <div className="flex items-center justify-between m-auto w-[80%] max-w-screen-xl py-2">
          <Link onClick={() => handleNavigation('home')} className="site-title font-bold text-2xl">
            Kwata<span className="text-[#e3bf00]">Bus</span>
          </Link>
          <nav className="flex items-center w-full">
            <ul className="flex m-auto font-bold ">
              <li>
                <Link onClick={() => handleNavigation('home')} className="nav-links">
                  HOME
                </Link>
              </li>
              <li className="mx-8">
                <Link onClick={() => handleNavigation('about')} >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link onClick={() => handleNavigation('contact')} >
                  CONTACT
                </Link>
              </li>
            </ul>
            <ul className="flex items-center">
              <li>
                <Link className="nav-links" to="/help">
                  Help
                </Link>
              </li>
              <li className="active  ml-8">
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
            </ul>
          </nav>
        </div>
      </section>
    </div>
  );
}
export default Navbar;
