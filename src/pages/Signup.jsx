import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [input, setInput] = useState({
    email: "",
    mobileNumber: "",
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const url = import.meta.env.VITE_API_URL;
  console.log(url);

  function submitHandler(e) {
    e.preventDefault();
    axios
      .post("http://localhost:1337/api/users", input)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        setError("Not Signed Up, Try again!");
        console.log(error);
      });
  }
  return (
    <section className="bg-[#061f77] ">
      <div className="bg-white rounded 3xl border-[#061f77] w-[50%] m-auto pt-[4em] pb-[4em]">
      <h1 className="text-center text-4xl font-semibold text-[#061f77]">
        Sign Up
      </h1>
      <form onSubmit={submitHandler} className="mt-8 ">
      
          <div className="flex w-[80%] m-auto justify-center">
            <label for="email" className="text-lg m-[0] font-normal" />
          <input
            id="email"
            type="email"
            className="w-4/5  border-2 rounded-none p-2 mt-4 placeholder-[#061f77]"
            placeholder="Email"
            onChange={(e) => {
              setInput({ ...input, email: e.target.value });
            }}
            value={input.email}
          />
          </div>
          
    
        <div className="flex w-[80%] m-auto justify-center ">
          <label for="mobileNumber" className="text-lg m-[0] font-normal" />
          <input
            id="mobileNumber"
            type="text"
            className="w-4/5  border-2 rounded-none p-2 mt-4 placeholder-[#061f77] font-normal"
            placeholder="Mobile Number"
            onChange={(e) => {
              setInput({ ...input, mobileNumber: e.target.value });
            }}
            value={input.mobileNumber}
          />
        </div>
        <div className="flex w-[80%] m-auto justify-center">
          <label for="firstName" className="text-lg m-[0] font-normal" />
          <input
            id="firstName"
            type="text"
            className="w-4/5  border-2 rounded-none p-2 mt-4 placeholder-[#061f77]"
            placeholder="First Name"
            onChange={(e) => {
              setInput({ ...input, firstName: e.target.value });
            }}
            value={input.firstName}
          />
        </div>
        <div className="flex w-[80%] m-auto justify-center">
          <label for="lastName" className="text-lg m-[0] font-normal" />
          <input
            id="lastName"
            type="text"
            className="w-4/5  border-2  rounded-none p-2 mt-4 placeholder-[#061f77]"
            placeholder="Last Name"
            onChange={(e) => {
              setInput({ ...input, lastName: e.target.value });
            }}
            value={input.lastName}
          />
        </div>
        <div className="flex w-[80%] m-auto justify-center">
          <label for="userName" className="text-lg m-[0] font-normal" />
          <input
            id="userName"
            type="text"
            className="w-4/5  border-2 rounded-none p-2 mt-4 placeholder-[#061f77]"
            placeholder="Username"
            onChange={(e) => {
              setInput({ ...input, userName: e.target.value });
            }}
            value={input.userName}
          />
        </div>
        <div className="relative flex w-[80%] m-auto justify-center">
          <label for="password" className="text-lg m-[0] font-normal" />
          <input
            id="password"
            type="password"
            className="w-4/5 border-2 rounded-none p-2 mt-4 placeholder-[#061f77]"
            placeholder="Create password"
            onChange={(e) => {
              setInput({ ...input, password: e.target.value });
            }}
            value={input.password}
          />
          <span className="absolute top-[55%] transform -translate-y-1/4 right-[15%]">
            <i class="bx bx-low-vision"></i>
          </span>
        </div>
        <div className="relative flex w-[80%] m-auto justify-center">
          <label for="confirmPassword" className="text-lg m-[0] font medium" />
          <input
            id="confirmPassword"
            type="password"
            className="w-4/5 border-2 rounded-none p-2 mt-4 placeholder-[#061f77]"
            placeholder="Confirm password"
            onChange={(e) => {
              setInput({ ...input, confirmPassword: e.target.value });
            }}
            value={input.confirmPassword}
          />
          <span className="absolute top-[55%] transform -translate-y-1/4 right-[15%]">
            <i class="bx bx-low-vision"></i>
          </span>
        </div>
        <div className="mt-8 flex justify-center"></div>
        <div className="flex justify-center m-auto w-[80%]">
          <button type="submit" className="mt-4 font-medium text-base w-4/5">
            Sign up
          </button>
        </div>
        <div>
          <p className="text-center mt-4 text-[#061f77]">
            Already have an account?{" "}
            <span className="text-[#e3bf00]">Sign in</span>
          </p>
        </div>
        <div className="mt-8 flex-col gap-y-4">
          <p className="text-center text-[#061f77]">Or</p>
          <div className="flex justify-center m-auto w-[80%]">
            <button className="flex w-4/5 rounded-none py-2 mt-4 border-2 items-center justify-center gap-2 active:scale-[.98] hover:scale-[1.01] transition-all py-2 rounded-none bg-white text-[#061f77] text-lg font-bold">
              <i className="bx bxl-google "></i> Sign up with Google
            </button>
          </div>
          <div className="flex justify-center m-auto w-[80%]">
            <button className="flex w-4/5 rounded-none py-2 mt-4 border-2 items-center justify-center gap-2 active:scale-[.98] hover:scale-[1.01] transition-all py-2 rounded-none bg-white text-[#061f77] text-lg font-bold">
              <i class="bx bxl-facebook-circle"></i>Sign up with Facebook
            </button>
          </div>
        </div>
      </form>
    </div>
    </section>
    
  );
}

export default Signup;
