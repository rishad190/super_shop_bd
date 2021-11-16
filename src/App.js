import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CatagoriesPage from "./Pages/CatagoriesPage";
import SingleItem from "./Pages/SingleItem";
import NavBar from "./Components/Common/NavBar/NavBar";
import HeaderMid from "./Components/Home/HeaderMid/HeaderMid";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <HeaderMid />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route
          path="/catagories/:catagoriesName"
          element={<CatagoriesPage />}
        />
        <Route path="/singleItem/:id" element={<SingleItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
