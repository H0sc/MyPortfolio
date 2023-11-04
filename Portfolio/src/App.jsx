import { Nav, Navbar, Container } from "react-bootstrap";
import "./index.scss";

function App() {
  return (
    <>
      <nav>
        <Navbar bg="light" data-bs-theme="light" expand="sm">
          <Container>
            <Navbar.Brand href="#home" className="me-auto">
              Home
            </Navbar.Brand>
            <Nav className="me-0">
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </nav>

      <main>
        <header>
          <div
            className="border bg-secondary"
            style={{ height: "500px" }}
          ></div>
          <div className="container-fluid p-0">
            <div className="row">
              <div
                className="box border col"
                style={{ height: "250px" }}
              ></div>
              <div
                className="box border col"
                style={{ height: "250px" }}
              ></div>
            </div>
          </div>
        </header>
      </main>
      <footer className="bg-secondary" style={{height: "50px"}}>
      </footer>
    </>
  );
}

export default App;
