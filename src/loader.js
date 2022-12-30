import React, { useEffect, useState } from "react";
import App from "./App";
import Navigation from "./components/Navigation/Navigation";
import Spinner from "./components/Spinner/Spinner";
import BottomTab from "./more/BottomTab";
import Footer from "./pages/Footer/Footer";

const Loader = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Navigation />
          <App />
          <Footer />
          <BottomTab />
        </>
      )}
    </div>
  );
};

export default Loader;
