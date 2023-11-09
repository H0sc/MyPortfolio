import "./index.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons'
import { useRef } from "react";
import NavBar from "./NavBar/NavBar";
import ProjectsPreview from "./ProjectsPreview/ProjectsPreview";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import GoToTop from "./GoToTop/GoToTop";

function App() {

  // const [scrollPosition, setScrollPosition] = useState(0)
  // const [showGoTop, setShowGoTop] = useState("goTopHidden")

  const refScrollUp = useRef()

  // muss optimiert werden, da unperformant
  // useEffect(() => {
  //   window.addEventListener("scroll", handleGoTopVisibility)
  // })
  
  // function handleGoTopVisibility () {
  //   let position = window.scrollY
  //   setScrollPosition(position)

  //   if (position < 100) {
  //     setShowGoTop("goTopHidden")
  //   } else if (position > 100) {
  //     setShowGoTop("goTop")
  //   }
  // } 

  // const handleScrollUp = () => {
  //   refScrollUp.current.scrollIntoView({ behavior: "auto" });
  // };

  return (
    <div className="app">
      <div ref={refScrollUp}></div>
      <NavBar />
      <main>
        <Header />
        <ProjectsPreview />
      </main>
      <GoToTop refScrollUp={refScrollUp}/>
      <Footer />
    </div>
  );
}

export default App;
