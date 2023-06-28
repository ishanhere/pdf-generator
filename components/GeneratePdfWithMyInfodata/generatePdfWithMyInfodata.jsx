import { Col, Row } from "antd";
import Image from "next/image";
import { signImage } from "../../public/images/signImage";
import moment from "moment";
import { b64DataTypes } from "../Reports/utils";
const GeneratePdfWithMyInfodata = ({ data = {} }) => {
  const imageSignEncoded = `${b64DataTypes.png}${data?.imageSignEncoded}`;
  const makeJsonData = () => {
    const temp = [];
    if (data && data?.myInfoJsonData) {
      Object.keys(data?.myInfoJsonData).map((key) => {
        temp.push(
          data?.highlightedKeys.includes(key) == true
            ? `{<span style='background: yellow'>"${key}":${JSON.stringify(
                data?.myInfoJsonData[key]
              )}</span>}`
            : `{<span style='background: transparent'>"${key}":${JSON.stringify(
                data?.myInfoJsonData[key]
              )}</span>}`
        );
      });
    }
    return temp;
  };
  return (
    <div className="generatePdfWithMyInfodata_container">
      <Row className="info_box">
        <Col span={12}>
          <div className="font16 font700">
            <span className="bg_yellow">User_id - {data?.userId}</span>
          </div>
          <div className="font14 font700">
            <span className="bg_yellow">
              API Status Code 200 OK (request successful)
            </span>
          </div>
        </Col>
        <Col
          span={12}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <div className="font16 font700">
            Create_time -{" "}
            {moment(data?.myInfoFetchTime).format("DD/MM/YYYY hh:mm:ss A")}
          </div>
        </Col>
      </Row>
      <Row className="">
        <Col span={12}></Col>
      </Row>
      <Row className="mt50">
        <Col span={24} className="word_break_break_all">
          {makeJsonData().map((item, index) => {
            return (
              <span
                className="font14 font500"
                dangerouslySetInnerHTML={{ __html: item }}
                key={index}
              />
            );
          })}
        </Col>
        <Col span={24} className="mt30">
          <div className="font14 font500">
            This document was prepared by Kristal Advisors (SG) Pte Ltd (MAS
            License No.: CMS100614). I hereby certify, to the best of my
            knowledge, that the information provided above is complete and
            correct.
          </div>
        </Col>
      </Row>
      <Row className="">
        <Col span={24}>
          <div>
            <Image
              alt="Image"
              // {`${partnerImageUrl ? partnerImageUrl : kristalTertiaryLogo}`}
              src={`${imageSignEncoded ? imageSignEncoded : signImage}`}
              width="150px"
              height="100px"
              style={{ display: "inline-block" }}
            />
          </div>
          <div className="font14">Asheesh Chanda</div>
          <div className="font14">
            CEO & Director, Kristal Advisors (SG) Pte Ltd
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default GeneratePdfWithMyInfodata;
