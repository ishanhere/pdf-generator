import moment from "moment";

const ReportsFooterPWReport = ({ data, disclaimerText }) => {
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
      <br />
      <div
        style={{ display: "flex", paddingLeft: "15px", paddingRight: "15px" }}
      >
        <div
          style={{
            width: "60%",
            display: "flex",
            gap: "4rem",
            justifyContent: "flex-start",
          }}
        >
          <span
            style={{
              fontSize: "12px",
              fontWeight: 700,
            }}
          >
            {data?.name} | {data?.kristalId}{" "}
          </span>
          <span
            style={{
              fontSize: "12px",
              color: "rgba(0, 0, 0, 0.45)",
              fontWeight: 500,
            }}
          >
            Generated on: {moment().format("ddd, DD MMM YYYY")}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            gap: "4rem",
            justifyContent: "flex-end",
            width: "40%",
          }}
        >
          <span
            style={{
              fontSize: "12px",
              fontWeight: 700,
              color: "rgba(0, 0, 0, 0.45)",
            }}
          >
            Page{" "}
          </span>
          <span
            className="pageNumber"
            id="pageNumber"
            style={{
              fontSize: "12px",
              fontWeight: 700,
              color: "rgba(0, 0, 0, 0.45)",
            }}
          ></span>
          <span
            style={{
              fontSize: "12px",
              fontWeight: 700,
              color: "rgba(0, 0, 0, 0.45)",
            }}
          >
            /
          </span>
          <span
            id="totalPages"
            className="totalPages"
            style={{
              fontSize: "12px",
              fontWeight: 700,
              color: "rgba(0, 0, 0, 0.45)",
            }}
          ></span>
        </div>
      </div>
      <br />
      <br />
      <div style={{ paddingLeft: "15px", paddingRight: "15px" }}>
        <span
          style={{
            fontSize: "8px",
            color: "rgba(0, 0, 0, 0.45)",
            fontWeight: 500,
          }}
        >
          {disclaimerText}
        </span>
      </div>
    </div>
  );
};

export default ReportsFooterPWReport;
