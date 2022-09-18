// 부트스트랩 컴포넌트들 import
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';

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

      <Button variant="primary">Primary</Button>{' '}

    </div>
  );
}

export default App;
