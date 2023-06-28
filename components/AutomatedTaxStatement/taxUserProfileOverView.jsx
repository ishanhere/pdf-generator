import { Row, Col } from "antd";
const TaxUserProfileOverView = ({ data }) => {
  return (
    <Row>
      <Col span={24}>
        <div className="container">
          <div className="font700 font20">{data?.name}</div>
          <Row className="mt20 full-width">
            <Col span={24} className="">
              <Row style={{ height: "30px" }}>
                <Col span={3} className="text_777 font14">
                  Application ID
                </Col>
                <Col span={21} className="font700 font16">
                  {data?.appId}{" "}
                </Col>
              </Row>
              <Row>
                <Col span={3} className="text_777 font14">
                  Account Holders
                </Col>
                <Col span={21} className="font700 font16">
                  {data?.holdingName}
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default TaxUserProfileOverView;
