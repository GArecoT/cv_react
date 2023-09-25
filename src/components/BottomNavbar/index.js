import { useEffect } from "react";
import { useRef } from "react";
import { BiHomeCircle } from "react-icons/bi";
import { CgRowLast } from "react-icons/cg";
import { Link } from "react-router-dom";

export default function BottomNavbar() {
  const homeBtn = useRef(null);
  const portifolioBtn = useRef(null);

  useEffect(() => {
    if (
      window.location.pathname == "/" && homeBtn.current != null &&
      portifolioBtn.current != null
    ) {
      homeBtn.current.className = "active text-secondary";
      portifolioBtn.current.className = " ";
    } else if (
      window.location.pathname == "/portifolio" && homeBtn.current != null &&
      portifolioBtn.current != null
    ) {
      homeBtn.current.className = "";
      portifolioBtn.current.className = "active text-secondary";
    }
  });

  return (
    <div className="btm-nav lg:hidden">
      <Link to="/" ref={homeBtn}>
        <button
          onClick={() => {
            console.log("portifolio");
            homeBtn.current.className = "active text-secondary";
            portifolioBtn.current.className = "";
          }}
        >
          <BiHomeCircle className="text-2xl" />
        </button>
      </Link>
      <Link to="/portifolio" ref={portifolioBtn}>
        <button
          onClick={() => {
            console.log("portifolio");
            homeBtn.current.className = "";
            portifolioBtn.current.className = "active text-secondary";
          }}
        >
          <CgRowLast className="text-2xl" />
        </button>
      </Link>
    </div>
  );
}
