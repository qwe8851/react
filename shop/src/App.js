// 부트스트랩 컴포넌트들 import
import { useState } from 'react';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import './App.css';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail';

function App() {

  // state 생성
  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (    
    <div className="App">  

      {/* navbar */}
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail')}}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link> */}

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
        <Route path="/detail" element={ <Detail/> } />
        <Route path="/about" element={ <About/> }> 
        {/* nested routes */}
          <Route path="member" element={ <div>멤버</div> } />
          <Route path="location" element={<About/> } />
        </Route>
        {/* 404페이지 */}
        <Route path="*" element={ <div>없는 페이지 입니다. </div> } />
      </Routes>
      </div>
  );
}

// component 생성
function About(){
  return(
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </div>
  )
}



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
