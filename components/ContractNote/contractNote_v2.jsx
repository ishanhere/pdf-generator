import { Col, Row } from "antd";
import { Fragment } from "react";

const ContractNoteV2 = ({ data }) => {
  return data ? (
    <div className="contractNote_container">
      <hr style={{ marginTop: 0 }} />
      {data?.sections &&
        data.sections.map((section, index) => {
          return (
            <Fragment key={index}>
              <Row>
                <Col span={24} className="mt10">
                  <h3
                    style={{
                      background: "#f0f8ff",
                      padding: 12,
                      fontSize: 16,
                    }}
                  >
                    {section.title}
                  </h3>
                </Col>
              </Row>
              {section?.tableHeaders.map((header, index) => {
                return (
                  <Row key={index}>
                    <Col span={8} style={{ marginLeft: 5, marginTop: 1 }}>
                      <h4 style={{ fontSize: 12 }} className="font700">
                        {header}
                      </h4>
                    </Col>
                    <Col span={14} style={{ overflow: "auto", marginTop: 1 }}>
                      <h4 style={{ fontSize: 12 }} className="font400">
                        {section.data[index]}
                      </h4>
                    </Col>
                  </Row>
                );
              })}
              {section?.notes && section?.notes.length && (
                <Row>
                  <Col span={22} className="mt10 mb15 page-break-inside-avoid">
                    {section?.notes?.map((note, index) => {
                      return (
                        <div
                          key={index}
                          className="font10 text_777 full-width mb3"
                        >
                          <span className="mr5 ">{note?.key}</span>
                          <span>{note?.value}</span>
                        </div>
                      );
                    })}
                  </Col>
                </Row>
              )}
            </Fragment>
          );
        })}
      <hr />
      {data.disclaimer && (
        <Fragment>
          <Row className="mt10">
            <Col span={12}>
              <h6
                style={{ lineHeight: "1.3", fontSize: 16 }}
                className="font500"
              >
                Disclaimer
              </h6>
            </Col>
          </Row>
          {data.disclaimer &&
            data.disclaimer.map((item, index) => {
              return (
                <h6
                  key={index}
                  style={{ color: "#808080", lineHeight: "1.3", fontSize: 12 }}
                  className="font400"
                >
                  {item}
                </h6>
              );
            })}
        </Fragment>
      )}
      {data.riskDisclosure && (
        <Fragment>
          <Row className="mt10">
            <Col span={12}>
              <h6
                style={{ lineHeight: "1.3", fontSize: 16 }}
                className="font500"
              >
                Risk Disclosure
              </h6>
            </Col>
          </Row>
          {data.riskDisclosure.map((item, index) => {
            return (
              <h6
                key={index}
                style={{ color: "#808080", lineHeight: "1.3", fontSize: 12 }}
                className="font400"
              >
                {item}
              </h6>
            );
          })}
        </Fragment>
      )}
      {data.generatedOn && (
        <Row>
          <Col span={12}>
            <h6
              style={{ color: "#808080", lineHeight: "1.3", fontSize: 14 }}
              className="font400"
            >
              Generated on: {data.generatedOn}
            </h6>
          </Col>
        </Row>
      )}
    </div>
  ) : (
    <></>
  );
};

export default ContractNoteV2;
