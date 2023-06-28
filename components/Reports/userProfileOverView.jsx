import { Row, Col, Divider, Typography } from "antd";
import { Fragment } from "react";
const UserProfileOverView = ({ data }) => {
  const { Title, Text } = Typography;
  const getField = (item, index) => {
    return {
      value: item.data[0][index]["valueList"][0]["value"],
      color: item.data[0][index]["valueList"][0]["color"],
    };
  };
  return (
    <Row>
      <Col span={24}>
        <div className="container">
          <Row className="mt10">
            <Col span={24} className="display-flex-col container__wrapper">
              <div style={{ display: "flex", width: "100%" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    width: "100%",
                  }}
                >
                  <Title level={3}>
                    {data?.name} | {data?.kristalId}{" "}
                  </Title>
                </div>

                {!data?.overview && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      width: "60%",
                    }}
                  >
                    <Title level={3}>{data?.reportType} </Title>
                  </div>
                )}
              </div>

              {!data?.overview && (
                <div style={{ display: "flex", width: "100%" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      width: "50%",
                    }}
                  >
                    <Title level={5}>{data?.holdingName} </Title>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      width: "50%",
                    }}
                  >
                    <Title level={5}>{data?.externalAccountId}</Title>
                  </div>
                </div>
              )}
            </Col>
          </Row>
          {data?.overview && data?.appId && data?.holdingName && (
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
          )}
          {data?.overview && (
            <>
              <br />
              <br />
            </>
          )}
          <Row>
            <Col span={24}>
              {data?.overview &&
                data?.overview.map((item, index) => (
                  <Row key={index} className="">
                    {item.tableHeaders.map((header, indexValue) => (
                      <Col
                        key={indexValue}
                        span={8}
                        style={{ display: "flex" }}
                      >
                        <Divider type="vertical" />
                        <div className="align-left display-flex-col-center">
                          {header.map((headerInst, keyValue) => (
                            <div key={keyValue} className="font14 text_777 ">
                              {headerInst}
                            </div>
                          ))}
                          <div
                            className="font16 align-left font700"
                            style={{
                              color: getField(item, indexValue).color,
                            }}
                          >
                            {getField(item, indexValue).value}
                          </div>
                        </div>
                        {item.tableHeaders.length == 3 &&
                          indexValue == item.tableHeaders.length - 1 && (
                            <Divider type="vertical" />
                          )}
                      </Col>
                    ))}
                  </Row>
                ))}
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default UserProfileOverView;
