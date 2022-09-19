// 부트스트랩 컴포넌트들 import
import { Navbar, Container, Nav,Row, Col } from 'react-bootstrap';
import './App.css';
import bg from './img/bg.png';

function App() {
  return (    
    <div className="App">
      {/* 부트스트랩에서 가져온 건 import가 필요함 */}

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

      <div className="main-bg" style={{backgroundImage : 'url('+bg+')'}}></div>

      <Container>
        <Row>
          <Col>
            <img src="/logo192.pngs" width="80%"/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col>
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%"/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col>
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%"/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
        </Row>
      </Container>
   
    </div>
  );
}

export default App;
