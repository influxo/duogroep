import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SingleService from "./pages/SingleService";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/singleService" element={<SingleService />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
