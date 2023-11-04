import { Nav, Navbar, Container } from "react-bootstrap";
import "./index.scss"


function App() {
  return (
    <>
      <nav>
              <Navbar bg="light" data-bs-theme="light" expand="sm">
        <Container>
          <Navbar.Brand href="#home" className="me-auto">Home</Navbar.Brand>
          <Nav className="me-0">
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </nav>

      <main>
        <div className="box border mb-2"></div>
        <div className="box border mb-2"></div>
        <div className="box border"></div>
      </main>
    </>
  );
}

export default App;
