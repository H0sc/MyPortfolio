import { Nav, Navbar, Container } from "react-bootstrap";
import "./index.scss";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="app">
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
        <div className="header-container">
          <h1 className="timon-hosch-webdev">Timon Hosch <br /> Web-Development</h1>
          <header
            className="home-header mb-5 border bg-secondary"
          >
          </header>
        </div>

        <section className="projects-section">
          <h2 className="projects">Projects</h2>
          <div className="container-fluid">
            <div className="row">
              <div
                className="box border m-0 p-0 col-4 bg-secondary"
                style={{ height: "250px" }}
              >
                box 1 section 1
              </div>
              <div
                className="box border m-0 p-0 col-4 bg-secondary"
                style={{ height: "250px" }}
              >
                box 2 section 1
              </div>
              <div
                className="box border m-0 p-0 col-4 bg-secondary"
                style={{ height: "250px" }}
              >
                box 3 section 1
              </div>
              <div
                className="box border m-0 p-0 col-4 bg-secondary"
                style={{ height: "250px" }}
              >
                box 4 section 1
              </div>
              <div
                className="box border m-0 p-0 col-4 bg-secondary"
                style={{ height: "250px" }}
              >
                box 5 section 1
              </div>
              <div
                className="box border m-0 p-0 col-4 bg-secondary"
                style={{ height: "250px" }}
              >
                box 6 section 1
              </div>
            </div>
          </div>
        </section>
      </main>
      <FontAwesomeIcon id="back-to-top-icon" icon={faCircleArrowUp} size="2xl"/>
      <footer className="border bg-secondary" style={{ height: "70px" }}>
        footer
      </footer>
    </div>
  );
}

export default App;
