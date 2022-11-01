import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Company from "./pages/Company";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact="true" path="/" element={<Home />}></Route>
        <Route path="/Company" element={<Company />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
