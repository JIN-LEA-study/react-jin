import React from "react";
import { Routes, Route } from "react-router-dom";

// recoil
import { RecoilRoot } from "recoil";

// components
import Navbar from "./components/Navbar";
import Template from "./components/Template";
import Cards from "./pages/Cards";
import New from "./pages/New";
import Practice from "./pages/Practice";

function App() {
  return (
    <RecoilRoot>
      <Navbar />
      <Template>
        <Routes>
          <Route path='/card' element={<Cards />} />
          <Route path='/new' element={<New />} />
          <Route path='/practice' element={<Practice />} />
        </Routes>
      </Template>
    </RecoilRoot>
  );
}

export default App;
