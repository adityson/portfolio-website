import React, { useEffect } from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Nav = () => {
  return (
    <>
      <MobileNav />
      <DesktopNav />
    </>
  );
};

export default Nav;
