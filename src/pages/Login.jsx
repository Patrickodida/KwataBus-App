import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:1337/api/users", input)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        setError("Not logged in, Try again");
        console.log(error);
      });
  }
  return (
    <section className="bg-[#061f77]">
      <div className="bg-white rounded-2xl border-[#061f77] w-[50%] m-auto pt-[2em] pb-[2em] border-8">
      <h1 className="font-bold text-4xl text-[#061f77] text-center mb-[1em]">
          Kwata<span className="text-[#e3bf00]">Bus</span>
        </h1>
      <h2 className="text-center text-3xl font-bold text-[#061f77]">
        Sign In
      </h2>
      <div className="mt-4">
        <form onSubmit={handleSubmit}>
          <div className="flex w-[80%] m-auto justify-center">
            <label for="email" className="text-lg m-[0] font-normal" />
            <input
              id="email"
              type="email"
              className="w-4/5 rounded p-2 mt-4 placeholder-[#061f77] border border-gray-300 text-[#061f77] focus:outline-none"
              placeholder="Email"
              onChange={(e) => {
                setInput({ ...input, email: e.target.value });
              }}
              value={input.email}
            />
          </div>
          <div className="relative flex w-[80%] m-auto justify-center">
            <label for="password" className="text-lg m-[0] font-normal" />
            <input
              id="password"
              type="password"
              className="w-4/5 rounded p-2 mt-4 placeholder-[#061f77] border border-gray-300 text-[#061f77] focus:outline-none"
              placeholder="Password"
              onChange={(e) => {
                setInput({ ...input, password: e.target.value });
              }}
              value={input.password}
            />
            <span className="absolute top-[55%] transform -translate-y-1/4 right-[15%] text-[#061f77] text-[20px]">
            <i class="bx bx-low-vision"></i>
          </span>
          </div>

          <div className="mt-8 flex justify-center">
            <div>
              <p className="text-center text-[#e3bf00]">Forgot password?</p>
            </div>
          </div>
          <div className="flex justify-center m-auto w-[80%]">
            <button type="submit" className="mt-4 w-4/5 font-medium text-base rounded py-2 font-bold">
              Sign in
            </button>
          </div>
        </form>
        <div>
          <p className="mt-4 text-[#061f77] text-center">
            Don't have an account?{" "}
            <span className="text-[#e3bf00]">Sign up</span>
          </p>
        </div>
        <div className="mt-8 flex-col gap-y-4">
          <p className="text-[#061f77] text-center">Or</p>
          <div className="flex justify-center m-auto w-[80%]">
            <button className="flex w-4/5 py-2 mt-4 items-center justify-center gap-2 active:scale-[.98] hover:scale-[1.01] transition-all rounded bg-[#061f77] text-white text-lg font-bold border border-gray-300 text-[#061f77] focus:outline-none">
              <i class="bx bxl-google"></i>Sign in with Google
            </button>
          </div>
          <div className="flex justify-center m-auto w-[80%]">
            <button className="flex w-4/5 py-2 mt-4 items-center justify-center gap-2 active:scale-[.98] hover:scale-[1.01] transition-all rounded bg-[#061f77] text-white text-lg font-bold border border-gray-300 text-[#061f77] focus:outline-none">
              <i class="bx bxl-facebook-circle"></i>Sign in with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
    </section>
    
  );
}

export default Login;
