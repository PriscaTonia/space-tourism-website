import "./App.css";
import Home from "./pages/home/Home";
import Destination from "./pages/destination/Destination";
import Crew from "./pages/crew/Crew";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dest" element={<Destination />} />
        <Route exact path="/crew" element={<Crew />} />
        {/*
        <Route exact path="/tech" element={<Technology />} /> 
        */}
      </Routes>
      {/* <Home /> */}
    </div>
  );
}

export default App;
