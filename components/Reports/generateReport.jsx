import { Col, Row } from "antd";
import { consolidatedDefinationTable, monthlyDefinationTable } from "./utils";
import { Fragment } from "react";

const GenerateReport = ({ data }) => {
  const definationTable =
    data?.reportType == "Monthly Report"
      ? monthlyDefinationTable
      : consolidatedDefinationTable;
  return data ? (
    <Fragment>
      <Row>
        <Col span={24}>
          <div>
            <span className="float_left font20">
              Report Name: {data?.reportType}
            </span>
            <span className="float_right font20">Period: {data.period}</span>
          </div>
        </Col>
      </Row>
      <Row className="mt30">
        <Col span={12}>
          {data?.overview?.tableHeaders &&
            data?.overview?.tableHeaders.map((header, index) => {
              return (
                <h4 className="font14" key={index}>
                  {header}
                </h4>
              );
            })}
        </Col>
        <Col span={12}>
          {data?.overview?.data[0] &&
            data?.overview?.data[0].map((value, index) => {
              return (
                <h4 className="font400 font14" key={index}>
                  {value}
                </h4>
              );
            })}
        </Col>
      </Row>
      {data.sections &&
        data.sections.length > 0 &&
        data.sections.map((section, index) => {
          return index == data.sections.length - 1 ? (
            <Row className="mt30">
              <Col span={24}>
                <h3 className="section_title">{section.title}</h3>
                <table className="table custom-table">
                  <thead>
                    <tr>
                      {section.tableHeaders.map((header, index) => {
                        return (
                          <th key={index} className="align-center font700">
                            {header}
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {section.data.map((row, rowIndex) => {
                      return (
                        <tr key={rowIndex}>
                          {row.map((value, index) => {
                            return (
                              <td
                                key={index}
                                dangerouslySetInnerHTML={{ __html: value }}
                              />
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </Col>
              <div className="mt10">
                {section.notes &&
                  section.notes.length > 0 &&
                  section.notes.map((note, index) => {
                    return <p key={index}>{note}</p>;
                  })}
              </div>
            </Row>
          ) : (
            <div className="page-break">
              <Row className="mt30">
                <Col span={24}>
                  <h3 className="section_title">{section.title}</h3>
                  <table className="table custom-table">
                    <thead>
                      <tr>
                        {section.tableHeaders.map((header, index) => {
                          return (
                            <th key={index} className="align-center font700">
                              {header}
                            </th>
                          );
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {section.data.map((row, rowIndex) => {
                        return (
                          <tr key={rowIndex}>
                            {row.map((value, index) => {
                              return (
                                <td
                                  key={index}
                                  dangerouslySetInnerHTML={{ __html: value }}
                                />
                              );
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </Col>
                <div className="mt10">
                  {section.notes &&
                    section.notes.length > 0 &&
                    section.notes.map((note, index) => {
                      return <p key={index}>{note}</p>;
                    })}
                </div>
              </Row>
            </div>
          );
        })}
      {data.notes && data.notes.length > 0 && (
        <Row>
          <Col span={24}>
            <p className="mb10">Note:</p>
            {data.notes.map((note, index) => {
              return (
                <p key={index}>
                  <span className="mb0">{note}</span>
                  <br />
                  <br />
                </p>
              );
            })}
          </Col>
        </Row>
      )}
      <div className="page-break page-break-inside-avoid">
        <h3 className="section_title">
          Terms used in the report and their definition
        </h3>
        <table className="table table-defination">
          <thead>
            {definationTable.map((item, index) => {
              return (
                <tr key={index}>
                  <td
                    style={{ width: "20%", textAlign: "left" }}
                    className="align-center"
                  >
                    {" "}
                    <span
                      dangerouslySetInnerHTML={{ __html: item.key }}
                      className="font700"
                    >
                      {/* {item.key} */}
                    </span>
                    <span>{item.extraInfo}</span>
                  </td>
                  <td style={{ width: "80%" }} className="align-center">
                    <span dangerouslySetInnerHTML={{ __html: item.value }}>
                      {/* {item.value} */}
                    </span>
                  </td>
                </tr>
              );
            })}
          </thead>
        </table>
        <Row>
          <Col span={24}>
            <h6
              className="font400"
              style={{ color: "#808080", lineHeight: 1.3 }}
            >
              Disclaimer: The materials and data contained herein are for
              information only and some of such materials and data (including
              valuation and price data) are based on materials and data received
              from third party sources and are provided on an &apos;as is&apos;/
              &apos;where is&apos; basis. Kristal.AI and its affiliates accept
              no liability or responsibility whatsoever for any direct or
              consequential loss and/or damage arising out of or in relation to
              any use of opinions,forecasts,materials and data contained herein
              or otherwise arising in connection therewith.
            </h6>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <h5 style={{ color: "#808080" }} className="font400 align-center">
              <span>Email ID for Investor Complaints: </span>
              <span>
                <a
                  style={{ color: "#337ab7", textDecoration: "none" }}
                  href="mailto:support@kristal.ai"
                  target="_blank"
                  rel="noreferrer"
                >
                  support@kristal.ai
                </a>
              </span>
            </h5>
          </Col>
        </Row>
      </div>
    </Fragment>
  ) : (
    <></>
  );
};
export default GenerateReport;
