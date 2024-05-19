import React from "react";
import { Link } from "react-router-dom"
import SvgSmartphone from "../images/smartphone.svg";
import SvgPeople from "../images/bookSeat.svg";

function PageNotFound() {
  return (
    <div>
      <section className="my-[3em]">
        <div className="w-[80%] m-auto flex flex-col justify-center">
          <h1 className="text-[3rem] text-center">404 Page Not Found</h1>
        <p>The page you are looking for might have been removed, had it's name changed or its temporarily unavailable</p>
        </div>
        <Link to="/">Go To Home Page</Link>
      </section>
    </div>
  );
}

export default PageNotFound;
