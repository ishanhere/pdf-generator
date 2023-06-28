import { Row, Col, Typography, Table, Divider } from "antd";

const TaxUserReportsSummary = ({
  index,
  title,
  columns,
  tableData,
  subTitle,
  data,
  noDataText,
}) => {
  const { Title } = Typography;
  let tempTableData = Object.keys(tableData[0]).map((key) => [
    tableData[0][key],
  ]);
  return (
    <div>
      <Row
        className={`${
          columns.length && tableData.length && tempTableData.length > 1
            ? index != 0
              ? "page-break-before page-break-after"
              : "page-break-after"
            : "page-break-inside-avoid"
        } mt20`}
      >
        <Col span={24} className="display-flex-col ">
          <div className="flex">
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
          <div className="full-width">
            {columns.length && tableData.length && tempTableData.length > 1 ? (
              <Table
                columns={columns}
                dataSource={tableData}
                pagination={false}
                className="tablev2"
              />
            ) : (
              <div className="full-width page-break-inside-avoid">
                <Table columns={columns} className="page-break-inside-avoid" />
                <div className="mt15 mb15 font700 full-width align-center p5 flex row-center page-break-inside-avoid">
                  <div className="align-right">
                    <hr
                      style={{
                        border: "1px solid #f0ede4",
                        width: "250px",
                        marginTop: "10px",
                        marginRight: "20px",
                      }}
                    />
                  </div>
                  <div className="font700 text_999 font12 all_caps">
                    {noDataText}
                  </div>
                  <div className="align-left">
                    <hr
                      style={{
                        border: "1px solid #f0ede4",
                        width: "250px",
                        marginTop: "10px",
                        marginLeft: "20px",
                      }}
                    />
                  </div>{" "}
                </div>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TaxUserReportsSummary;
