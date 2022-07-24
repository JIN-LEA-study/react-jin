import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Container = () => {
  const [isLoginView, setIsLoginView] = useState(true);

  const inText = isLoginView
    ? ["Need an account?", "Register"]
    : ["Already registered?", "Login"];

  return (
    <div className='centered-view'>
      <div className='centered-container'>
        {isLoginView ? <LoginForm /> : <RegisterForm />}
        <small className='form-text text-muted mt-2'>
          {inText[0]}
          <span
            onClick={() => {
              setIsLoginView(!isLoginView);
            }}
            className='btn-link ml-2'
          >
            {inText[1]}
          </span>
        </small>
      </div>
    </div>
  );
};

export default Container;
