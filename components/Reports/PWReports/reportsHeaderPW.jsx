import { kristalTertiaryLogo } from "../../../public/images/kristalTertiaryLogo";
import Image from "next/image";

const HeaderPWReport = ({ partnerImageUrl, data }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        paddingLeft: "15px",
        paddingRight: "15px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "60%",
        }}
      >
        <div style={{ display: "flex", marginBottom: "7px" }}>
          <Image
            alt="Kristal logo"
            src={`${partnerImageUrl ? partnerImageUrl : kristalTertiaryLogo}`}
            width={100}
            height={20}
          />
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "16px",
            fontWeight: "700",
            marginBottom: "7px",
          }}
        >
          PORTFOLIO SNAPSHOT
        </div>
        <div style={{ display: "flex" }}>
          <span
            style={{
              fontSize: "8px",
              fontWeight: "400",
            }}
          >
            Email:{" "}
            <a
              href="mailto:support@kristal.ai"
              style={{ color: "#3761C8", textDecoration: "none" }}
            >
              support@kristal.ai
            </a>
          </span>
          <span
            style={{
              fontSize: "8px",
              fontWeight: "400",
              marginLeft: "18px",
            }}
          >
            WhatsApp: +65 9239 1022
          </span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          width: "40%",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: "18px",
            fontWeight: "400",
            marginBottom: "7px",
          }}
        >
          {data?.kristalId}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "8px",
            fontWeight: "400",
          }}
        >
          {data?.period}
        </div>
      </div>
    </div>
  );
};

export default HeaderPWReport;
