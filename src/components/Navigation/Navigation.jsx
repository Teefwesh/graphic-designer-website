import React from "react";

import Navbar from "./Navbar/Navbar";
import { routes } from "../../constant/constantNav";

const Navigation = () => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar routes={routes} />
    </>
  );
};

export default Navigation;
