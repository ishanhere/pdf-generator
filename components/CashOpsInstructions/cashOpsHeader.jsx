/* eslint-disable @next/next/no-img-element */
import React from "react";
import { newLogo } from "../../public/images/newLogo";
const Header = (props) => {
  return (
    <div
      style={{
        marginTop: "-15px",
        width: "100%",
        backgroundColor: "#F2EFE9",
        padding: "20px",
        WebkitPrintColorAdjust: "exact",
      }}
    >
      <img
        alt="Kristal-logo"
        src={newLogo}
        width="120px"
        height="15px"
        style={{
          display: "inline-block",
          float: "right",
        }}
      />
    </div>
  );
};
export default Header;
