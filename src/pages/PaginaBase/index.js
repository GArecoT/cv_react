import { Outlet } from "react-router-dom";
import BottomNavbar from "../../components/BottomNavbar";
import Navbar from "../../components/navbar";

const PaginaBase = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
      <BottomNavbar />
    </main>
  );
};

export default PaginaBase;
