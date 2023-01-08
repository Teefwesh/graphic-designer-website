import React, { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Route, Routes } from "react-router-dom";
// import Gallery from "./pages/Gallery/Gallery";
import Home from "./pages/Home/Home";
import Posts from "./pages/posts/Posts";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Auth/Login";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="/gallery" element={<Gallery />} /> */}
          <Route path="/gallery" exact element={<Posts />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/login" exact element={<Login />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
};

export default App;
