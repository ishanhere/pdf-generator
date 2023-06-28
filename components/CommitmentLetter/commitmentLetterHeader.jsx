import { kristalTertiaryLogo } from "../../public/images/kristalTertiaryLogo";
import Image from "next/image";

const CommitmentLetterHeader = ({ partnerImageUrl }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "90%",
        paddingLeft: "40px",
        paddingRight: "40px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          width: "100%",
        }}
      >
        <Image
          alt="Kristal logo"
          src={`${partnerImageUrl ? partnerImageUrl : kristalTertiaryLogo}`}
          width={140}
          height={40}
        />
      </div>
    </div>
  );
};

export default CommitmentLetterHeader;
