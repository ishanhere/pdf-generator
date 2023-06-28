import { kristalTertiaryLogo } from "../../public/images/kristalTertiaryLogo";
import Image from "next/image";

const GeneratePdfWithMyInfodataHeader = ({
  showData,
  partnerImageUrl,
  generatedOn,
}) => {
  return (
    <div style={{ width: "100%" }}>
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
          <div
            style={{
              marginBottom: "7px",
              marginLeft: generatedOn ? "0px" : "-13px",
            }}
          >
            <Image
              alt="Kristal logo"
              src={`${partnerImageUrl ? partnerImageUrl : kristalTertiaryLogo}`}
              width={generatedOn ? 120 : 80}
              height={generatedOn ? 30 : 10}
            />
          </div>
          {showData ? (
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
          ) : (
            <></>
          )}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "end",
            width: "35%",
          }}
        >
          {generatedOn && (
            <span
              style={{
                fontSize: "10px",
                fontWeight: "500",
              }}
            >
              Generated On: {generatedOn}
            </span>
          )}
        </div>
      </div>
      <div
        style={{
          width: "95%",
          paddingLeft: "15px",
          paddingRight: "15px",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <hr
          style={{
            width: "100%",
            color: "#CCCCCC",
            textAlign: "center",
          }}
        />
      </div>
    </div>
  );
};

export default GeneratePdfWithMyInfodataHeader;
