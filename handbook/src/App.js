import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/list' element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
