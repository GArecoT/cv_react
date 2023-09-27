import { useEffect } from "react";
import { useRef } from "react";
import { BiHomeCircle } from "react-icons/bi";
import { CgRowLast } from "react-icons/cg";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function BottomNavbar() {
  const homeBtn = useRef(null);
  const portifolioBtn = useRef(null);
  const competenciasBtn = useRef(null);

  useEffect(() => {
    if (
      window.location.pathname == "/" && homeBtn.current != null &&
      competenciasBtn.current != null &&
      portifolioBtn.current != null
    ) {
      homeBtn.current.className = "active text-secondary";
      portifolioBtn.current.className = " ";
      competenciasBtn.current.className = " ";
    } else if (
      window.location.pathname == "/portifolio" && homeBtn.current != null &&
      competenciasBtn.current != null &&
      portifolioBtn.current != null
    ) {
      homeBtn.current.className = "";
      portifolioBtn.current.className = "active text-secondary";
      competenciasBtn.current.className = " ";
    } else if (
      window.location.pathname == "/competencias" && homeBtn.current != null &&
      portifolioBtn.current != null &&
      competenciasBtn.current != null
    ) {
      homeBtn.current.className = "";
      portifolioBtn.current.className = " ";
      competenciasBtn.current.className = "active text-secondary";
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
            competenciasBtn.current.className = "";
          }}
        >
          <BiHomeCircle className="text-2xl" />
        </button>
      </Link>
      <Link to="/portifolio" ref={portifolioBtn}>
        <button
          onClick={() => {
            homeBtn.current.className = "";
            portifolioBtn.current.className = "active text-secondary";
            competenciasBtn.current.className = "";
          }}
        >
          <CgRowLast className="text-2xl" />
        </button>
      </Link>
      <Link to="/competencias" ref={competenciasBtn}>
        <button
          onClick={() => {
            homeBtn.current.className = "";
            portifolioBtn.current.className = "";
            competenciasBtn.current.className = "active text-secondary";
          }}
        >
          <AiOutlineInfoCircle className="text-2xl" />
        </button>
      </Link>
    </div>
  );
}
