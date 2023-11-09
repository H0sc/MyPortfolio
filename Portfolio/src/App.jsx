import "./index.scss";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from "react";
import NavBar from "./NavBar/NavBar";
import ProjectsPreview from "./ProjectsPreview/ProjectsPreview";
import Footer from "./Footer/Footer";

function App() {

  const [scrollPosition, setScrollPosition] = useState(0)
  const [showGoTop, setShowGoTop] = useState("goTopHidden")

  const refScrollUp = useRef()

  // muss optimiert werden, da unperformant
  useEffect(() => {
    window.addEventListener("scroll", handleGoTopVisibility)
  })
  
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
    refScrollUp.current.scrollIntoView({ behavior: "auto" });
  };

  return (
    <div className="app">
      <div ref={refScrollUp}></div>
      <NavBar />
      <main>
        <div className="header-container">
          <h1 className="timon-hosch-webdev-h1">Timon Hosch <br /> Web-Development</h1>
          <header
            className="home-header mb-5 border bg-secondary"
          >
          </header>
        </div>
        <ProjectsPreview />
      </main>
      <div className={showGoTop} onClick={handleScrollUp}>
        <FontAwesomeIcon icon={faCircleArrowUp} size="2xl"/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
