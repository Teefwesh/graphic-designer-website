import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";

import store from "./store";
import App from "./App";
import Spinner from "./components/Spinner/Spinner";

const Loader = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Provider store={store}>
            <App />
          </Provider>
        </>
      )}
    </div>
  );
};

export default Loader;
