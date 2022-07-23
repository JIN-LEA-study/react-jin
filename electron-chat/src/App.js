import React from "react";

import { Provider } from "react-redux";
import configureStore from "./common/redux/store";

import HomePage from "./pages/Home/Container";
import ChatPage from "./pages/Chat/Container";
import SettingsPage from "./pages/Settings/Container";
import Login from "./pages/Welcome/Login";
import Register from "./pages/Welcome/Register";

import { Navbar } from "./common/components";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className='content-wrapper'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/chat/:id' element={<ChatPage />} />
            <Route path='/settings' element={<SettingsPage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
