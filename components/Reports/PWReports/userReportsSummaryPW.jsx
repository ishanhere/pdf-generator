import { Row, Col, Typography, Table } from "antd";

const UserReportsSummaryPW = ({
  index,
  title,
  columns,
  tableData,
  subTitle,
  data,
  extraInfo,
  classNameList,
}) => {
  const { Title } = Typography;

  const getNotes = () => {
    return (
      <div className="mt10">
        {data?.notes &&
          data?.notes.length &&
          data?.notes.map((note, index) => {
            return (
              <div key={index} className="text_777 font500 font12">
                {note}
              </div>
            );
          })}
      </div>
    );
  };
  const getFXRates = () => {
    return (
      data?.fxRates && (
        <div className="mt20">
          <div className="font700 font16 mb20">{data?.fxRates.title}</div>
          <div className="flex">
            {data?.fxRates?.data.map((rates, index) => {
              return (
                <div key={index}>
                  {rates.map((rate, index2) => {
                    return (
                      <div
                        key={index2}
                        className="font500 font12 mr30 fx_color mb5"
                      >
                        {rate?.valueList[0]?.value}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      )
    );
  };
  return (
    <div className={classNameList}>
      <Row className="mt15">
        <Col span={24} className="display-flex-col-pw">
          {data?.overview && (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
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
              <div
                style={{ display: "flex", alignItems: "center" }}
                dangerouslySetInnerHTML={{ __html: extraInfo }}
              ></div>
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
      {index == data?.sections?.length - 1 && (
        <>
          {getNotes()}
          {getFXRates()}
        </>
      )}
    </div>
  );
};

export default UserReportsSummaryPW;
