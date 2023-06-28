const GeneratePdfWithMyInfodataFooter = ({ data }) => {
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          width: "95%",
          paddingLeft: "15px",
          paddingRight: "15px",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <hr style={{ width: "100%", color: "#CCCCCC", textAlign: "center" }} />
      </div>{" "}
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          gap: "1rem",
          fontFamily: "Arial",
        }}
      >
        <div style={{ paddingLeft: "15px", paddingRight: "15px" }}>
          <span
            style={{
              fontSize: "8px",
              color: "rgba(0, 0, 0, 0.45)",
              fontWeight: 500,
            }}
          >
            Disclaimer : The information contained in this document is
            confidential, privileged, and only for the information of the
            intended recipient and may not be used, published, or redistributed
            without prior written consent.
          </span>
        </div>
      </div>
    </div>
  );
};

export default GeneratePdfWithMyInfodataFooter;
