/* eslint-disable @next/next/no-img-element */
import UserProfileOverViewPW from "./userProfileOverViewPW";
import Chart from "../chart";
import { Col, Divider, Row } from "antd";
import { b64DataTypes, getColumns, getTableData } from "../utils";
import UserReportsSummaryPW from "./userReportsSummaryPW";
const GeneratePWReport = ({ data, base64fromSVG, base64fromSVGLine }) => {
  const { sections } = data || {};

  const renderSection = (section, index) => {
    let columns = getColumns(section);
    let tableData = getTableData(section, index);
    return (
      <>
        <UserReportsSummaryPW
          index={index}
          title={section.title}
          columns={columns}
          tableData={tableData}
          subTitle={section.subTitle}
          data={data}
          extraInfo={`<span className="font12 font400"> All values are in USD </span>`}
          classNameList={`page-break ${
            data?.overview ? "page-break-before" : ""
          }`}
        />
      </>
    );
  };

  return (
    <div className="reports_container">
      <div className="page-break-inside-avoid">
        <UserProfileOverViewPW data={data} />
        {(base64fromSVG || base64fromSVGLine) && (
          <Row className="full-width">
            <Col span={10}>
              <Row>
                <Col>
                  <div className="font700 font16 mb30">
                    {data?.overview[1]?.title}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col style={{ display: "flex", alignItems: "center" }}>
                  {base64fromSVG && (
                    <Chart
                      filename={`${b64DataTypes.png}${base64fromSVG}`}
                      maxWidth={100}
                      width={100}
                    />
                  )}
                </Col>
              </Row>
            </Col>
            <Divider type="vertical" style={{ height: "500px" }} />
            <Col span={12} className="custom_col ml10">
              <Row>
                <Col
                  span={24}
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div
                    className="font700 font16 mb30"
                    style={{ display: "flex", justifyContent: "flex-start" }}
                  >
                    {data?.overview[2]?.title}
                  </div>
                  <div
                    className="font400 font12"
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    All dates are at Month end
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  {base64fromSVGLine && (
                    <Chart
                      filename={`${b64DataTypes.png}${base64fromSVGLine}`}
                      maxWidth={100}
                      width={100}
                    />
                  )}
                </Col>
              </Row>
            </Col>
          </Row>
        )}
      </div>
      {sections?.map((section, index) => renderSection(section, index))}
    </div>
  );
};

export default GeneratePWReport;
