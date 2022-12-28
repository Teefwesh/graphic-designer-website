import React, { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Route, Routes } from "react-router-dom";
// import Gallery from "./pages/Gallery/Gallery";
import Home from "./pages/Home/Home";
import Posts from "./pages/posts/Posts";

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
        </Routes>
      </div>
    </QueryClientProvider>
  );
};

export default App;
