import React, { useState } from "react";
import axios from 'axios'

function Login() {
  const [input, setInput] = useState({
    email:"",
    password:""
  });
  const [error, setError] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    axios.post("http://localhost:1337/api/users", input)
    .then(response => {
      console.log(response)
    })
    .catch((error) => {
      setError("Not logged in, Try again")
      console.log(error)
    });

  }
  return (
    <div className="bg-white px-10 py-20 rounded 3xl border-x-8 border-y-8 border-[#061f77] w-[80%] m-auto">
      <h1 className="text-5xl font-semibold text-center text-[#061f77]">
        Sign In
      </h1>
      <div className="mt-8">
        <form onSubmit={handleSubmit}>
          <div className="w-full m-auto flex justify-center">
          <label for="email" className="text-lg font medium" />
          <input
            id="email"
            type="email"
            className="w-4/5  border-2 rounded-none p-4 mt-4 placeholder-[#061f77]"
            placeholder="Email"
            onChange={(e) => {setInput({...input, email: e.target.value})}}
            value={input.email}
          />
        </div>
        <div className="w-full m-auto flex justify-center">
          <label for="password" className="text-lg font medium" />
          <input
            id="password"
            type="password"
            className="w-4/5 border-2 rounded-none p-4 mt-4 placeholder-[#061f77]"
            placeholder="Password"
            onChange={(e) => {setInput({...input, password: e.target.value})}}
            value={input.password}
          />
        </div>
        
        <div className="mt-8 flex justify-center">
          <div>
            <p className="text-center text-[#e3bf00]">Forgot password?</p>
          </div>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="mt-4 w-4/5 font-medium text-base">Sign in</button>
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
          <div className="flex justify-center">
            <button className="flex w-4/5 rounded-none py-3 mt-4 border-2 items-center justify-center gap-2 active:scale-[.98] hover:scale-[1.01] transition-all py-3 rounded-none bg-white text-[#061f77] text-lg font-bold">
              <i class="bx bxl-google"></i>Sign in with Google
            </button>
          </div>
          <div className="flex justify-center">
            <button className="flex w-4/5 rounded-none py-3 mt-4 border-2 items-center justify-center gap-2 active:scale-[.98] hover:scale-[1.01] transition-all py-3 rounded-none bg-white text-[#061f77] text-lg font-bold">
              <i class="bx bxl-facebook-circle"></i>Sign in with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
