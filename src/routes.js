import { BrowserRouter, Route, Routes } from "react-router-dom";
import Competencias from "./pages/Competencias";
import HomePage from "./pages/HomePage";
import PaginaBase from "./pages/PaginaBase";
import Portifolio from "./pages/Portifolio";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<HomePage />}></Route>
          <Route path="portifolio" element={<Portifolio />}></Route>
          <Route path="competencias" element={<Competencias />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
