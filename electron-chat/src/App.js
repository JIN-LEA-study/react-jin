import React from "react";

import WelcomePage from "./pages/Welcome/Container";
import HomePage from "./pages/Home/Container";
import ChatPage from "./pages/Chat/Container";
import SettingsPage from "./pages/Settings/Container";

import { Navbar } from "./common/components";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div className='content-wrapper'>
        <Routes>
          <Route path='/' element={<WelcomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/chat/:id' element={<ChatPage />} />
          <Route path='/settings' element={<SettingsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
