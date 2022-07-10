import React from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./common/styles/GlobalStyle";

// recoil
import { RecoilRoot } from "recoil";

// components
import { Navbar, Template } from "./common/components";

// pages
import { Cards, New, Practice } from "./pages";

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
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
