import React from "react";
import "../../styles/globals.css";

const WelcomeLetterFooter = () => {
  return (
    <div
      style={{
        color: "red",
        textAlign: "center",
        fontWeight: "700",
        width: "100%",
        fontFamily: "Times New Roman, Times, serif",
      }}
    >
      <div
        style={{
          color: "red",
          textAlign: "center",
          fontSize: "12px",
          fontWeight: "700",
        }}
      >
        PRIVATE & CONFIDENTIAL
      </div>
      <div
        style={{
          color: "red",
          textAlign: "center",
          fontSize: "10px",
          fontWeight: "700",
        }}
      >
        This is a system generated document and does not require a signature.
      </div>
    </div>
  );
};

export default WelcomeLetterFooter;
