import React from "react";

import { Link, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();

  const message = useSelector(state => state.message);

  return (
    <div className='chat-navbar'>
      <nav className='chat-navbar-inner'>
        <div className='chat-navbar-inner-left'>
          <button
            className='btn btn-outline-primary'
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <Link to='/settings' className='btn btn-outline-success ml-2'>
            Settings
          </Link>
          {message}
        </div>
        <div className='chat-navbar-inner-right'>
          <span className='logged-in-user'>Hi User</span>
          <button
            onClick={() => navigate("/register")}
            className='btn btn-outline-danger ml-2'
          >
            Register
          </button>
          <button
            onClick={() => navigate("/login")}
            className='btn btn-outline-success ml-2'
          >
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
