import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CatagoriesPage from "./Pages/CatagoriesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route
          path="/catagories/:catagoriesName"
          element={<CatagoriesPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
