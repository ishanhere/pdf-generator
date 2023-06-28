import Image from "next/image";
import { kristalTertiaryLogo } from "../../public/images/kristalTertiaryLogo";
const ReportsHeader = ({ partnerImageUrl, data, periodText }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        paddingLeft: "15px",
        paddingRight: "15px",
        fontFamily: "Arial",
      }}
    >
      <div style={{ display: "flex", width: "100%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            width: "100%",
            paddingTop: "10px",
            paddingBottom: "20px",
          }}
        >
          <Image
            src={`${partnerImageUrl ? partnerImageUrl : kristalTertiaryLogo}`}
            alt="logo"
            width={160}
            height={30}
            style={{
              position: "relative",
              top: "-4px",
            }}
          />
        </div>
        {data?.overview && (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
              paddingLeft: "30px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                paddingLeft: "30px",
              }}
            >
              <div>
                {" "}
                <span
                  style={{
                    fontSize: "10px",
                    color: "rgba(0, 0, 0, 0.45)",
                  }}
                >
                  {data?.reportType}
                </span>{" "}
                <br />
              </div>

              <div>
                {" "}
                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: "bold",
                  }}
                  dangerouslySetInnerHTML={{ __html: periodText }}
                ></span>{" "}
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        style={{
          display: "flex",
          clear: "both",
          width: "100%",
          minWidth: "100%",
          margin: "0px",
          boxSizing: "border-box",
          padding: "0px",
          color: "rgba(0, 0, 0, 0.85)",
          fontSize: "14px",
          fontVariant: "tabular-nums",
          lineHeight: "1.5715",
          listStyle: "none",
          borderTop: "1px solid rgba(0, 0, 0, 0.06)",
        }}
      ></div>
    </div>
  );
};

export default ReportsHeader;
