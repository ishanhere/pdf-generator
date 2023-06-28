import { Row, Col, Divider, Typography } from "antd";
const UserProfileOverViewPW = ({ data }) => {
  const { Title, Text } = Typography;
  const getField = (item, index) => {
    return {
      value: item.data[0][index]["valueList"][0]["value"],
      color: item.data[0][index]["valueList"][0]["color"],
    };
  };
  const getField2 = (item, index) => {
    return {
      value: item.data[0][index]["valueList"][1]?.value,
      color: item.data[0][index]["valueList"][1]?.color,
    };
  };
  return (
    <Row>
      <Col span={24}>
        <div className="container_pw_overview">
          {data?.overview &&
            data?.overview.map(
              (item, index) =>
                index < 1 && (
                  <Row key={index} className="ml80">
                    <Col span={24} className="row_dir_pw_overview">
                      {item.tableHeaders.map((header, indexValue) => (
                        <div key={indexValue} className="display-flex-row">
                          <Divider type="vertical" />
                          <div className="display-flex-col-center">
                            <div>
                              <Text type="secondary">
                                {header.map((headerInst, keyValue) => (
                                  <span key={keyValue} className="font14">
                                    {headerInst}
                                  </span>
                                ))}
                              </Text>
                            </div>
                            <div className="">
                              <div
                                className="font16 align-left font700"
                                style={{
                                  color: getField(item, indexValue).color,
                                }}
                              >
                                {getField(item, indexValue).value}
                              </div>
                              {getField2(item, indexValue).value != "-" && (
                                <div
                                  className="font12"
                                  style={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    color: getField2(item, indexValue).color,
                                  }}
                                >
                                  {getField2(item, indexValue).value}
                                </div>
                              )}
                            </div>
                          </div>
                          {indexValue == item.tableHeaders.length - 1 && (
                            <Divider type="vertical" />
                          )}
                        </div>
                      ))}
                    </Col>
                  </Row>
                )
            )}
        </div>
      </Col>
      <Divider className="custom_divider" />
    </Row>
  );
};

export default UserProfileOverViewPW;
