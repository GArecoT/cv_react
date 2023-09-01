import Favorite from "pages/Favorites"
import Start from "pages/Start"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import BasePage from "pages/BasePage";

function AppRoutes() {
  return (

    <BrowserRouter>

      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<Start />}></Route>
          <Route path="favoritos" element={<Favorite />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
