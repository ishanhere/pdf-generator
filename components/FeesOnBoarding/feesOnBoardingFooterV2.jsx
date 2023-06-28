const FeesFooterV2 = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        gap: "1rem",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{ display: "flex", paddingLeft: "15px", paddingRight: "15px" }}
      >
        {/* <div
          style={{
            width: "80%",
            display: "flex",
            gap: "4rem",
            justifyContent: "flex-start",
            fontSize: "10px",
            color: "rgba(0, 0, 0, 0.45)",
          }}
        ></div> */}
        <div
          style={{
            display: "flex",
            gap: "4rem",
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          <span
            style={{
              fontSize: "10px",
              color: "rgba(0, 0, 0, 0.45)",
            }}
          >
            Page{" "}
          </span>
          <span
            className="pageNumber"
            id="pageNumber"
            style={{
              fontSize: "10px",
              color: "rgba(0, 0, 0, 0.45)",
            }}
          ></span>
          <span
            style={{
              fontSize: "10px",
              color: "rgba(0, 0, 0, 0.45)",
            }}
          >
            /
          </span>
          <span
            id="totalPages"
            className="totalPages"
            style={{
              fontSize: "10px",
              color: "rgba(0, 0, 0, 0.45)",
            }}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default FeesFooterV2;
