// 부트스트랩 컴포넌트들 import
import { useState } from 'react';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import './App.css';
import data from './data.js';
import { Routes, Route, Link } from 'react-router-dom';

function App() {

  // state 생성
  let [shoes, setShoes] = useState(data);

  return (    
    <div className="App">  

      {/* navbar */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link to="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>

      <Routes>
        <Route path="/" element={
          <>
          <div className="main-bg"></div>
          <Container>
            <Row>
              {  shoes.map((a,i) => {
                  return <Card shoes={shoes[i]} i={i}></Card> 
              })}
            </Row>
          </Container>
          </>
        } />
        <Route path="/detail" element={<div>상세페이지임</div>} />
        <Route path="/about" element={<div>어바웃페이지</div>}/>
      </Routes>
      </div>
  );
}

// component 생성
function Card(props) {
    return(
      <Col>
        <img src={'https://codingapple1.github.io/shop/shoes' + (props.i+1) +'.jpg'} width="80%"/>
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.price}</p>
      </Col>
    )
}



 export default App;
