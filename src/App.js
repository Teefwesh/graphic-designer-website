import React, { useEffect } from "react";

import { Route, Routes } from "react-router-dom";
import Gallery from "./pages/Gallery/Gallery";
import Home from "./pages/Home/Home";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
};

export default App;
