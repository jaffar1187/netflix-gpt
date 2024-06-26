import React from "react";
import Header from "./Header";
import SignInSignUpForm from "./SignInSignUpForm";

const Login = () => {
  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg" />
      </div>
      <SignInSignUpForm />
    </div>
  );
};

export default Login;
