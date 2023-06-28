import { logo } from "../../public/images/logo";
const Header = ({ partnerImageUrl }) => {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <div style={{ marginLeft: "5px" }}>
        <img
          alt="Kristal logo"
          src={partnerImageUrl ? partnerImageUrl : logo}
          width="150px"
          style={{ marginLeft: "5px", display: "inline-block" }}
        />
        <div
          style={{
            float: "right",
            display: "inline-block",
            marginRight: "35px",
          }}
        >
          <h6 style={{ fontSize: "12px", fontWeight: "400", margin: 0 }}>
            <span>email: </span>
            <a
              style={{ color: "#337ab7", textDecoration: "none" }}
              href="mailto:support@kristal.ai"
            >
              support@kristal.ai
            </a>
          </h6>
          <h6 style={{ fontSize: "12px", fontWeight: "400", margin: 0 }}>
            <span>Website:</span>
            <a
              style={{ color: "#337ab7", textDecoration: "none" }}
              href="https://kristal.ai"
              target="_blank"
              rel="noreferrer noopener"
            >
              kristal.ai
            </a>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Header;
