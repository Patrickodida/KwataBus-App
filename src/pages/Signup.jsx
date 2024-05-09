import React from "react";

function Signup() {
    return (
        <div className="bg-white px-10 py-20 rounded 3xl border-x-8 border-y-8 border-[#061f77] w-[80%] m-auto">
          <h1 className="text-center text-5xl font-semibold text-[#061f77]">Sign Up</h1>
          <div className="mt-8 ">
            <div className="w-full m-auto flex justify-center">
              <label className="text-lg font medium"/>
              <input
                className="w-4/5  border-2 rounded-none p-4 mt-4 placeholder-[#061f77]"
                placeholder="Mobile Number or Email"
              />
            </div>
            <div className="w-full m-auto flex justify-center">
              <label className="text-lg font medium"/>
              <input
                className="w-4/5  border-2 rounded-none p-4 mt-4 placeholder-[#061f77]"
                placeholder="First Name"
              />
            </div>
            <div className="w-full m-auto flex justify-center">
              <label className="text-lg font medium"/>
              <input
                className="w-4/5  border-2  rounded-none p-4 mt-4 placeholder-[#061f77]"
                placeholder="Last Name"
              />
            </div>
            <div className="w-full m-auto flex justify-center">
              <label className="text-lg font medium"/>
              <input
                className="w-4/5  border-2 rounded-none p-4 mt-4 placeholder-[#061f77]"
                placeholder="Username"
              />
            </div>
            <div className="w-full m-auto flex justify-center">
            <label className="text-lg font medium"/>
              <input
                className="w-4/5 border-2 rounded-none p-4 mt-4 placeholder-[#061f77]"
                placeholder="Create password"
              />
            </div>
            <div className="w-full m-auto flex justify-center">
            <label className="text-lg font medium"/>
              <input
                className="w-4/5 border-2 rounded-none p-4 mt-4 placeholder-[#061f77]"
                placeholder="Confirm password"
              />
              <span><i class='bx bx-low-vision'></i></span>
            </div>
            <div className="mt-8 flex justify-between">
            </div>
              <div className="flex justify-center">
              <button className="mt-4 font-medium text-base w-4/5">Sign up</button>
            </div>
            <div>
              <p className="text-center mt-4 text-[#061f77]">Already have an account? <span className="text-[#e3bf00]">Sign in</span></p>
            </div>
            <div className="mt-8 flex-col gap-y-4">
              <p className="text-center text-[#061f77]">Or</p>
              <div className="flex justify-center">
              <button className="flex w-4/5 rounded-none py-3 mt-4 border-2 items-center justify-center gap-2 active:scale-[.98] hover:scale-[1.01] transition-all py-3 rounded-none bg-white text-[#061f77] text-lg font-bold"><i className='bx bxl-google ' ></i> Sign up with Google</button>
              </div>
              <div className="flex justify-center">
              <button className="flex w-4/5 rounded-none py-3 mt-4 border-2 items-center justify-center gap-2 active:scale-[.98] hover:scale-[1.01] transition-all py-3 rounded-none bg-white text-[#061f77] text-lg font-bold"><i class='bx bxl-facebook-circle' ></i>Sign up with Facebook</button>
              </div>
            </div>
          </div>
        </div>
    
    );
}

export default Signup;