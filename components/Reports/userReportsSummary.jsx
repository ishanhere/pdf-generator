import { Row, Col, Typography, Table } from "antd";

const UserReportsSummary = ({
  index,
  title,
  columns,
  tableData,
  subTitle,
  data,
}) => {
  const { Title } = Typography;
  return (
    <div className={`page-break ${data?.overview ? "page-break-before" : ""}`}>
      <Row>
        <Col span={24}>
          <Row>
            <Col span={24} className="display-flex-col mb20">
              {data?.overview && (
                <div style={{ display: "flex" }}>
                  <Title level={2}>
                    {title}&nbsp;
                    {subTitle && (
                      <span
                        style={{
                          color: "#999999",
                          fontSize: "30px",
                          fontWeight: "500",
                          lineHeight: "1.35",
                          marginBottom: "0.5em",
                        }}
                      >
                        {subTitle}
                      </span>
                    )}
                  </Title>
                </div>
              )}
              <div className="full-width">
                {columns.length && tableData.length ? (
                  <Table
                    columns={columns}
                    dataSource={tableData}
                    pagination={false}
                    className="page-break-inside-avoid tablev2"
                  />
                ) : (
                  <div
                    style={{
                      borderTop: "1px solid #CCCCCC",
                      borderBottom: "1px solid #CCCCCC",
                    }}
                  >
                    <p>
                      <p className="font700 full-width align-center p5">
                        No Data to show{" "}
                      </p>
                    </p>
                  </div>
                )}
              </div>
            </Col>
          </Row>
          <Row className="mt50">
            <Col span={24}>
              {data?.sections[index]?.notes?.map((note, index) => {
                return (
                  <div key={index} className="notes_reports">
                    <span>{`${note.index} - ${note.text}`}</span>
                  </div>
                );
              })}
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default UserReportsSummary;
