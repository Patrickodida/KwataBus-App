import React from "react";

function Navbar() {
  return (
    <div>
      <section className="nav flex items-center m-auto w-4/5 max-w-screen-xl justify-between bg-white text-blue-900 py-6 z-[-1] z-auto ">
        <a href="/" className="site-title font-bold mx-8 text-lg">
          Kwata<span className="text-amber-500">Bus</span>
        </a>
        <nav className="flex items-center w-full h-[50px]">
        <ul className="flex m-auto font-bold ">
          <li>
            <a className="hover:text-yellow-600" href="/home">HOME</a>
          </li>
          <li className="mx-20">
            <a className="hover:text-yellow-600" href="/about">ABOUT</a>
          </li>
          <li>
            <a className="hover:text-yellow-600" href="/contact">CONTACT</a>
          </li>
        </ul>
        <ul className="flex justify-between mx-4">
          <li>
            <a href="/help">Help</a>
          </li>
          <li className="active mx-4 justify-between pr-8">
            <a href="/login">Log in</a>
          </li>
        <button type="submit" className="rounded-2xl mx+10 ">
            Sign up
        </button>
        </ul>
        </nav>
      </section>
    </div>
  
  );
  
}
export default Navbar;
