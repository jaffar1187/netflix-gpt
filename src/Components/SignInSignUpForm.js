import React, { useState } from "react";

const SignInForm = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);

  const toggleSignInSignUp = () => {
    setIsSignedIn(!isSignedIn);
  };

  return (
    <div>
      <form className="p-12 bg-black absolute w-3/12 my-36 mx-auto right-0 left-0 bg-opacity-80 text-white">
        <h1 className="font-bold text-3xl py-4">
          {isSignedIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignedIn && (
          <input
            type="text"
            placeholder="Full name"
            className="p-4 my-4 w-full bg-[#222839] rounded-lg"
          ></input>
        )}
        <input
          type="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-[#222839] rounded-lg"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-[#222839] rounded-lg"
        ></input>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignedIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInSignUp}>
          {isSignedIn
            ? "New to Netflix? Sign Up Now."
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default SignInForm;
