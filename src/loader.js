import React, { useEffect, useState } from "react";
import App from "./App";
import Spinner from "./components/Spinner/Spinner";

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
          <App />
        </>
      )}
    </div>
  );
};

export default Loader;
