/* eslint-disable @next/next/no-img-element */

import React from "react";
import { logo } from "../public/images/logo";
const Header = (props) => {
  return (
    <div style={{ marginLeft: "30px" }}>
      <img
        alt="Kristal-logo"
        src={logo}
        width="150px"
        height="30px"
        style={{ marginLeft: "10px", display: "inline-block" }}
      />
    </div>
  );
};

export default Header;
