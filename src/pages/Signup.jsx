import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import validator from "validator";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [input, setInput] = useState({
    email: "",
    mobileNumber: "",
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    role: "Public",
    confirmed: true,
    blocked: false,
    confirmPassword: "",
  });
  const [error, setError] = useState({
    email: "",
    mobileNumber: "",
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  // validate Email
  function validateEmail(email) {
    if (!validator.isEmail(email)) {
      setError({ ...error, email: "Invalid email" });
      return false;
    }
    setError({ ...error, email: "" });
    return true;
  }
  // validate mobileNumber
  function validateMobileNumber(mobileNumber) {
    if (mobileNumber.length !== 10) {
      setError({ ...error, mobileNumber: "Invalid Entry" });
      return false;
    }
    setError({ ...error, mobileNumber: "" });
    return true;
  }
  // validate firstName
  function validateFirstName(firstName) {
    let firstNameRegexp = /^[a-zA-Z]+$/;
    if (!firstNameRegexp.test(firstName)) {
      setError({ ...error, firstName: "Invalid First Name" });
      return false;
    }
    setError({ ...error, firstName: "" });
    return true;
  }

  // validate lastName
  function validateLastName(lastName) {
    let lastNameRegexp = /^[a-zA-Z]+$/;
    if (!lastNameRegexp.test(lastName)) {
      setError({ ...error, lastName: "Invalid Last Name" });
      return false;
    }
    setError({ ...error, lastName: "" });
    return true;
  }

  // Validate userName
  function validateUserName(username) {
    let userNameRegexp = /^[a-zA-Z]+$/;
    if (!userNameRegexp.test(username)) {
      setError({ ...error, username: "Invalid UserName" });
      return false;
    }
    setError({ ...error, username: "" });
    return true;
  }

  // Validate Password
  function validatePassword(password) {
    if (password.length < 8) {
      setError({ ...error, password: "Invalid Password" });
      return false;
    }
    setError({ ...error, password: "" });
    return true;
  }

  // Validate Confirm Password
  function validateConfirmPassword(confirmPassword) {
    if (confirmPassword.length < 8) {
      setError({ ...error, confirmPassword: "Invalid Password" });
      return false;
    }
    setError({ ...error, confirmPassword: "" });
    return true;
  }

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://big-chicken-57890d4fdf.strapiapp.com/api/auth/local/register",
        input
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        setError("Not Signed Up, Try again!");
        console.log(error);
      });
  };

  /* const submitHandler = async (e) => {
    e.preventDefault();
    if (
      validateEmail(input.email) &&
      validateMobileNumber(input.mobileNumber) &&
      validateFirstName(input.firstName) &&
      validateLastName(input.lastName) &&
      validateUserName(input.userName) &&
      validatePassword(input.password) &&
      validateConfirmPassword(input.confirmPassword)
    ) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          

"data": {
            "userName": input.userName,
            "email": input.email,
            "password": input.password,
            "confirmed": true,
            "blocked": false,
            "FirstName": input.firstName,
            "LastName": input.lastName,
            "role": "Public",
            "MobileNumber": input.mobileNumber,
               }
        }),
      };
      fetch(
        "https://big-chicken-57890d4fdf.strapiapp.com/api/auth/local/register",
        requestOptions
      ).then((response) => response.json());
      console.log(response.json())
      //navigate("/login");
    }
  }; */
  return (
    <section className="bg-[#061f77]">
      <div className="bg-white rounded-2xl border-[#061f77] w-full md:w-[50%] m-auto pt-[2em] pb-[2em] border-8">
        <h1 className="font-bold text-4xl text-[#061f77] text-center mb-[1em]">
          Kwata<span className="text-[#e3bf00]">Bus</span>
        </h1>
        <h2 className="text-center text-3xl font-bold text-[#061f77]">
          Sign Up
        </h2>
        <form onSubmit={submitHandler} className="mt-4 ">
          <div className="flex w-[80%] m-auto justify-center">
            <label for="email" className="text-lg m-[0]" />
            <input
              id="email"
              type="email"
              className="w-4/5 rounded p-2 mt-4 placeholder-[#061f77] border border-gray-300 text-[#061f77] focus:outline-none"
              placeholder="Email"
              onChange={(e) => {
                setInput({ ...input, email: e.target.value });
                validateEmail(e.target.value);
              }}
              value={input.email}
            />
          </div>
          {error.email && (
            <p className="text-center text-red-500">{error.email}</p>
          )}

          <div className="flex w-[80%] m-auto justify-center ">
            <label for="mobileNumber" className="text-lg m-[0] font-normal" />
            <input
              id="mobileNumber"
              type="text"
              className="w-4/5 rounded p-2 mt-4 placeholder-[#061f77] border border-gray-300 text-[#061f77] focus:outline-none"
              placeholder="Mobile Number"
              onChange={(e) => {
                setInput({ ...input, mobileNumber: e.target.value });
                validateMobileNumber(e.target.value);
              }}
              value={input.mobileNumber}
            />
          </div>
          {error.mobileNumber && (
            <p className="text-center text-red-500">{error.mobileNumber}</p>
          )}
          <div className="flex w-[80%] m-auto justify-center">
            <label for="firstName" className="text-lg m-[0]" />
            <input
              id="firstName"
              type="text"
              className="w-4/5 rounded p-2 mt-4 placeholder-[#061f77] border border-gray-300 text-[#061f77] focus:outline-none"
              placeholder="First Name"
              onChange={(e) => {
                setInput({ ...input, firstName: e.target.value });
                validateFirstName(e.target.value);
              }}
              value={input.firstName}
            />
          </div>
          {error.firstName && (
            <p className="text-center text-red-500">{error.firstName}</p>
          )}
          <div className="flex w-[80%] m-auto justify-center">
            <label for="lastName" className="text-lg m-[0]" />
            <input
              id="lastName"
              type="text"
              className="w-4/5 rounded p-2 mt-4 placeholder-[#061f77] border border-gray-300 text-[#061f77] focus:outline-none"
              placeholder="Last Name"
              onChange={(e) => {
                setInput({ ...input, lastName: e.target.value });
                validateLastName(e.target.value);
              }}
              value={input.lastName}
            />
          </div>
          {error.lastName && (
            <p className="text-center text-red-500">{error.lastName}</p>
          )}
          <div className="flex w-[80%] m-auto justify-center">
            <label for="userName" className="text-lg m-[0]" />
            <input
              id="userName"
              type="text"
              className="w-4/5 rounded p-2 mt-4 placeholder-[#061f77] border border-gray-300 text-[#061f77] focus:outline-none"
              placeholder="Username"
              onChange={(e) => {
                setInput({ ...input, username: e.target.value });
                validateUserName(e.target.value);
              }}
              value={input.username}
            />
          </div>
          {error.username && (
            <p className="text-center text-red-500">{error.username}</p>
          )}
          <div className="relative flex w-[80%] m-auto justify-center">
            <label for="password" className="text-lg m-[0] font-normal" />
            <input
              id="password"
              type="password"
              className="w-4/5 rounded p-2 mt-4 placeholder-[#061f77] border border-gray-300 text-[#061f77] focus:outline-none"
              placeholder="Create password"
              onChange={(e) => {
                setInput({ ...input, password: e.target.value });
                validatePassword(e.target.value);
              }}
              value={input.password}
            />
            <span className="absolute top-[55%] transform -translate-y-1/4 right-[15%] text-[#061f77] text-[20px]">
              <i className="bx bx-low-vision"></i>
            </span>
          </div>
          {error.password && (
            <p className="text-center text-red-500">{error.password}</p>
          )}
          <div className="relative flex w-[80%] m-auto justify-center">
            <label
              for="confirmPassword"
              className="text-lg m-[0] font medium"
            />
            <input
              id="confirmPassword"
              type="password"
              className="w-4/5 rounded p-2 mt-4 placeholder-[#061f77] border border-gray-300 text-[#061f77] focus:outline-none"
              placeholder="Confirm password"
              onChange={(e) => {
                setInput({ ...input, confirmPassword: e.target.value });
                validateConfirmPassword(e.target.value);
              }}
              value={input.confirmPassword}
            />
            <span className="absolute top-[55%] transform -translate-y-1/4 right-[15%] text-[#061f77] text-[20px]">
              <i className="bx bx-low-vision"></i>
            </span>
          </div>
          {error.confirmPassword && (
            <p className="text-center text-red-500">{error.confirmPassword}</p>
          )}
          <div className="mt-8 flex justify-center"></div>
          <div className="flex justify-center m-auto w-[80%]">
            <button
              type="submit"
              className="mt-4 font-medium text-base w-4/5 rounded py-2 font-bold"
            >
              Sign up
            </button>
          </div>
          <div>
            <p className="text-center mt-4 text-[#061f77]">
              Already have an account?{" "}
              <Link to="/login" className="text-[#e3bf00] font-bold">
                Sign in
              </Link>
            </p>
          </div>
          <div className="mt-8 flex-col gap-y-4">
            <p className="text-center text-[#061f77]">Or</p>
            <div className="flex justify-center m-auto w-[80%]">
              <button className="flex w-4/5 py-2 mt-4 items-center justify-center gap-2 active:scale-[.98] hover:scale-[1.01] transition-all rounded bg-[#061f77] text-white text-lg font-bold border border-gray-300 text-[#061f77] focus:outline-none">
                <i className="bx bxl-google "></i> Sign up with Google
              </button>
            </div>
            <div className="flex justify-center m-auto w-[80%]">
              <button className="flex w-4/5 py-2 mt-4 items-center justify-center gap-2 active:scale-[.98] hover:scale-[1.01] transition-all rounded bg-[#061f77] text-white text-lg font-bold border border-gray-300 text-[#061f77] focus:outline-none">
                <i className="bx bxl-facebook-circle"></i>Sign up with Facebook
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Signup;