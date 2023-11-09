import "./go-to-top.scss";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons'

export default function GoToTop({refScrollUp}) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showGoTop, setShowGoTop] = useState("goTopHidden");

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
    <>
      <div className={showGoTop} onClick={handleScrollUp}>
        <FontAwesomeIcon icon={faCircleArrowUp} size="2xl" />
      </div>
    </>
  );
}
