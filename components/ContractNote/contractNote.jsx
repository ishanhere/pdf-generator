import { Col, Row } from "antd";
import { Fragment } from "react";

const ContractNote = ({ data }) => {
  return data ? (
    <div className="contractNote_container">
      <hr style={{ marginTop: 0 }} />
      {data?.sections &&
        data.sections.map((section, index) => {
          return (
            <Fragment key={index}>
              <Row>
                <Col span={24}>
                  <h3
                    style={{ background: "#f0f8ff", padding: 15, fontSize: 20 }}
                  >
                    {section.title}
                  </h3>
                </Col>
              </Row>
              {section.data &&
                section.data.map((field, index) => {
                  return (
                    <Row key={index}>
                      <Col
                        span={6}
                        style={{
                          marginLeft: 5,
                          marginTop: 1,
                          width: "30%",
                          position: "relative",
                          float: "left",
                        }}
                        // className="col-md-3"
                      >
                        <h4 style={{ fontSize: 14 }}>
                          <span>{field.key}</span>
                          <span style={{ paddingLeft: 5 }}>
                            <sup>{field.superscript}</sup>
                          </span>
                        </h4>
                      </Col>
                      <Col span={16} style={{ overflow: "auto", marginTop: 1 }}>
                        <h4 style={{ fontSize: 14, fontWeight: 400 }}>
                          {field.value}
                        </h4>
                      </Col>
                    </Row>
                  );
                })}
              <Col span={12} style={{ marginTop: 15 }}>
                {section.superScriptDefinitions &&
                  section.superScriptDefinitions.map((item, index) => {
                    return (
                      <p
                        key={index}
                        style={{
                          color: "#575757",
                          lineHeight: 1,
                          fontSize: 14,
                        }}
                        className="font400"
                      >
                        <sup style={{ color: "unset" }}>
                          <b>{item.key}</b>
                        </sup>
                        <span style={{ paddingLeft: 5 }}>{item.value}</span>
                      </p>
                    );
                  })}
              </Col>
            </Fragment>
          );
        })}
      <hr />
      <p />
      {data.disclaimer && (
        <Fragment>
          <Row>
            <Col
              span={12}
              // className="col-md-12"
            >
              <h6
                style={{ lineHeight: "1.3", fontSize: 18 }}
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
                  style={{ color: "#808080", lineHeight: "1.3", fontSize: 14 }}
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
          <Row>
            <Col
              span={12}
              // className="col-md-12"
            >
              <h6
                style={{ lineHeight: "1.3", fontSize: 18 }}
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
                style={{ color: "#808080", lineHeight: "1.3", fontSize: 14 }}
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
          <Col
            span={12}
            //   className="col-md-12"
          >
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

export default ContractNote;
