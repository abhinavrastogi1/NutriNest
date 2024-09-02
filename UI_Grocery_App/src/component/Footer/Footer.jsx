import React from "react";

import Cities_weServe from "./Cities_weServe";
import Moreinfo from "./moreinfo.jsx";
import PopularCatagory from "./PopularCatagory.jsx";
import Copyright from "./copyright.jsx";
function Footer() {
  return (
    <footer className="bg-[#101010] ">
      <Moreinfo />
      <Cities_weServe />
    <PopularCatagory/>
    <Copyright/>
    </footer>
  );
}

export default Footer;
