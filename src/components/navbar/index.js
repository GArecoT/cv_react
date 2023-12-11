import { useEffect } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { BsMoonFill } from "react-icons/bs";
import { themeChange } from "theme-change";
import { BsBrightnessLowFill } from "react-icons/bs";

export default function Navbar() {
  useEffect(() => {
    themeChange(false);
    return () => {
      themeChange(false);
    };
  }, []);

  return (
    <div className="navbar bg-base-100 lg:bg-base-200 z-10 sticky">
      <div className="navbar-start">
      </div>
      <div className="navbar-center hidden lg:flex">
        <li className="btn btn-ghost">
          <Link to="/">Inicio</Link>
        </li>
        <li className="btn btn-ghost">
          <Link to="/portifolio">Portfolio</Link>
        </li>
        <li className="btn btn-ghost">
          <Link to="/competencias">Competências</Link>
        </li>
      </div>
      <div className="navbar-end">
        <button className="btn-ghost btn">EN</button>
        <BsMoonFill className="mx-3 base-content text-sm" />
        <div className="inline-block w-10">
          <span
            data-toggle-theme="cupcake"
            data-act-class="pl-4"
            className="border rounded-full border-base-content flex items-center 
            cursor-pointer w-10 transition-all duration-300 ease-in-out pl-0"
          >
            <span className="rounded-full w-3 h-3 m-1 bg-base-content">
            </span>
          </span>
        </div>
        <BsBrightnessLowFill className="mx-3 base-content text-lg" />
      </div>
    </div>
  );
}
