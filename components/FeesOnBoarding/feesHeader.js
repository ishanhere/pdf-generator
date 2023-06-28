/* eslint-disable @next/next/no-img-element */
import React from "react";
import { logo } from "../../public/images/logo";
const FeesHeader = (props) => {
  return (
    <div
      style={{
        marginTop: "-15px",
        width: "100%",
        fontFamily: "Times New Roman, Times, serif",
      }}
    >
      <div style={{ marginBottom: 20, width: "100%" }}>
        <span
          style={{
            display: "inline",
            width: "39%",
            WebkitPrintColorAdjust: "exact",
            backgroundColor: "#32B480",
            float: "left",
            height: 10,
            marginRight: 4,
          }}
        />
        <span
          style={{
            display: "inline",
            WebkitPrintColorAdjust: "exact",
            backgroundColor: "#4AA1E1",
            float: "right",
            marginTop: 0,
            width: "60%",
            height: 10,
          }}
        />
      </div>
      <div style={{ marginLeft: "20px", marginRight: "10px" }}>
        <img
          alt="Kristal-logo"
          src={logo}
          width="130px"
          height="30px"
          style={{
            display: "inline-block",
            float: "left",
          }}
        />
      </div>
    </div>
  );
};
export default FeesHeader;
