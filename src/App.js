import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About/About";
import AccommodationSheet from "./pages/AccommodationSheet/AccommodationSheet";
import Home from "./pages/Home/Home";
import Page404 from "./pages/Page404/Page404";

import "./styles/app.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

library.add(faCopyright, faStar);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accommodationSheet" element={<AccommodationSheet />} />
        <Route path="/404" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
