import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function App() {
  return (
    <div className='App'>
      <Navbar>
        <Container>
          <div className='row'>
            <div className='col-md-4'>
              <img
                src='https://codingapple1.github.io/shop/shoes1.jpg'
                width='80%'
                alt='shoes1'
              />
              <h4>상품명</h4>
              <p>상품정보</p>
            </div>

            <div className='col-md-4'>
              <img
                src='https://codingapple1.github.io/shop/shoes2.jpg'
                width='80%'
                alt='shoes2'
              />
              <h4>상품명</h4>
              <p>상품정보</p>
            </div>

            <div className='col-md-4'>
              <img
                src='https://codingapple1.github.io/shop/shoes3.jpg'
                width='80%'
                alt='shoes3'
              />
              <h4>상품명</h4>
              <p>상품정보</p>
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
