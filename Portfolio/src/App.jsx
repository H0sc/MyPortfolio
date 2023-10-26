import "./App.scss"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Navbar"


function App() {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        </Container>
      </Navbar>
      <div className="container bg-light shadow">
        <p className="display-2"> I'm the container </p>
      </div>
    </>
  );
}

export default App;
