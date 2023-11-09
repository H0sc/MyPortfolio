import { Nav, Navbar, Container } from "react-bootstrap";

export default function NavBar() {


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
    </>
  );
}
