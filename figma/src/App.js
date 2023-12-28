import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Categories from "./Components/Pages/Categories";
import SubCategories from "./Components/Pages/SubCategories";
import Assemblies from "./Components/Pages/Assemblies";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="Categories" />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/subcategories" element={<SubCategories />} />
        <Route path="/assemblies" element={<Assemblies />} />
      </Routes>
    </div>
  );
}

export default App;
