import React from "react";
import { Routes, Route } from "react-router-dom";
import Template from "./components/Template";
import Navbar from "./components/Navbar";
import Cards from "./pages/Cards";
import New from "./pages/New";
import Practice from "./pages/Practice";

function App() {
  return (
    <div className='App'>
      <div>
        <Navbar />
        <Template>
          <Routes>
            <Route path='/card' element={<Cards />} />
            <Route path='/new' element={<New />} />
            <Route path='/practice' element={<Practice />} />
          </Routes>
        </Template>
      </div>
    </div>
  );
}

export default App;
