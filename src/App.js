import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CatagoriesPage from "./Pages/CatagoriesPage";
import SingleItem from "./Pages/SingleItem";

function App() {
  return (
    <BrowserRouter>
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
