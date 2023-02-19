import "./App.css";
import Home from "./pages/home/Home";
import Destination from "./pages/destination/Destination";
import Technology from "./pages/technology/Technology";
import Crew from "./pages/crew/Crew";
import Navbar from "./components/navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dest" element={<Destination />} />
        <Route exact path="/crew" element={<Crew />} />
        <Route exact path="/tech" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
