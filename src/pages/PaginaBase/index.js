import { Outlet } from "react-router-dom";
import BottomNavbar from "../../components/BottomNavbar";
import Navbar from "../../components/navbar";

const PaginaBase = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <BottomNavbar />
    </>
  );
};

export default PaginaBase;
