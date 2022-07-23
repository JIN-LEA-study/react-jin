import React from "react";

import HomePage from "./pages/Home/Container";
import ChatPage from "./pages/Chat/Container";
import SettingsPage from "./pages/Settings/Container";
import Login from "./pages/Welcome/Login";
import Register from "./pages/Welcome/Register";

import { Navbar } from "./common/components";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div className='content-wrapper'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/chat/:slug' element={<ChatPage />} />
          <Route path='/settings' element={<SettingsPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
