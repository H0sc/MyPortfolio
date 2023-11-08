import { Nav, Navbar, Container } from "react-bootstrap";
import "./index.scss";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from "react";

function App() {

  const [scrollPosition, setScrollPosition] = useState(0)
  const [showGoTop, setShowGoTop] = useState("goTopHidden")

  const refScrollUp = useRef()

  useEffect(() => {
    window.addEventListener("scroll", handleGoTopVisibility)
  })
  
  // useEffect(() => {
  // const e = window.addEventListener("scroll", handleVisibleButton);
  
  // return ()=> window.removeEventListener('scroll',handleVisibleButton);
  // },[]);
  
  function handleGoTopVisibility () {
    let position = window.scrollY
    setScrollPosition(position)

    if (position < 100) {
      setShowGoTop("goTopHidden")
    } else if (position > 100) {
      setShowGoTop("goTop")
    }
  } 

  const handleScrollUp = () => {
    refScrollUp.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app" >
      <nav ref={refScrollUp}>
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
          <h1 className="timon-hosch-webdev-h1">Timon Hosch <br /> Web-Development</h1>
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
      <div className={showGoTop} onClick={handleScrollUp}>
        <FontAwesomeIcon icon={faCircleArrowUp} size="2xl"/>
      </div>
      <footer className="border bg-secondary" style={{ height: "70px" }}>
        footer
      </footer>
    </div>
  );
}

export default App;
