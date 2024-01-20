import React from "react";
import Home from "./pages/Home";
import Header from "./components/Navbar";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Technology from "./pages/technology";

const App = () => {
  return (
    <div className="">
      <Router>
        <Header />
        {/* <div className="bg-red-900"> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="*" element={<Home />} />
        </Routes>
        {/* </div> */}
      </Router>
    </div>
  );
};

export default App;
