// 부트스트랩 컴포넌트들 import
import { useState } from 'react';
import { Navbar, Container, Nav,Row, Col } from 'react-bootstrap';
import './App.css';
import data from './data.js';



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
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    {/* 백그라운드 이미지 삽입 */}
      <div className="main-bg"></div>

      
      
      <Container>
        <Row>
          {/* shoes를 기준으로 도는 map */}
          {
            shoes.map((a,i) => {
              return(
                <Card shoes={shoes[i]} i={i}></Card>
              )
            })
          }
        </Row>
      </Container>
   
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
