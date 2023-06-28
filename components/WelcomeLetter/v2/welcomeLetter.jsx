import { Col, Row } from "antd";
import { bankDetails, notes } from "../utils";
import moment from "moment";

const WelcomeLetter = ({ data }) => {
  const holdersList = [];
  let tempObj = {
    name: "NA",
    kristalId: "NA",
    holderType: "NA",
    primary: false,
  };
  let primaryDecisionMaker = {};
  if (data?.userDetailsList && data?.userDetailsList.length) {
    for (let i = 0; i < 3; i++) {
      if (
        data.userDetailsList[i]?.name &&
        data.userDetailsList[i]?.holderType == "PRIMARY"
      ) {
        holdersList[0] = data.userDetailsList[i];
      } else if (
        data.userDetailsList[i]?.name &&
        data.userDetailsList[i]?.holderType == "SECONDARY"
      ) {
        holdersList[1] = data.userDetailsList[i];
      } else if (
        data.userDetailsList[i]?.name &&
        data.userDetailsList[i]?.holderType == "TERTIARY"
      ) {
        holdersList[2] = data.userDetailsList[i];
      }
      if (
        data.userDetailsList[i]?.name &&
        data.userDetailsList[i]?.primary == true
      )
        primaryDecisionMaker = data.userDetailsList[i];
    }
    if (holdersList[0]?.holderType != "PRIMARY") holdersList[0] = tempObj;
    if (holdersList[1]?.holderType != "SECONDARY") holdersList[1] = tempObj;
    if (holdersList[2]?.holderType != "TERTIARY") holdersList[2] = tempObj;
    if (Object.keys(primaryDecisionMaker).length == 0)
      primaryDecisionMaker = tempObj;
  }
  return data ? (
    <div className="welcomeletter_container">
      <Row>
        <Col span={24} className="font12-pt font400">
          <div>{moment().format("Do MMMM, YYYY")}</div>
          <div className="mt15 mb15">Dear {data.name},</div>
          <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
          <div className="mt15">Regards,</div>
          <div className="font18">Team Kristal.</div>
          <div className="page-break"></div>
          <div className="align-center">
            <table className="table_client">
              <tbody>
                <tr className="font700">
                  <td>CLIENT DETAILS</td>
                </tr>
                <tr>
                  <td className="font700" colSpan={2}>
                    Application ID
                  </td>
                  <td colSpan={3}>{data?.applicationUniqueId}</td>
                </tr>
                {holdersList && holdersList.length > 0 && (
                  <>
                    <tr className="font700">
                      <td></td>
                      <td>1st Holder</td>
                      <td>2nd Holder</td>
                      <td>3rd Holder </td>
                      <td>Primary Decision Maker</td>
                    </tr>
                    <tr>
                      <td className="font700">Name</td>
                      {holdersList.map((item, index) => {
                        return (
                          <td key={index}>
                            <span>{item?.name}</span>
                          </td>
                        );
                      })}
                      <td>{primaryDecisionMaker?.name}</td>
                    </tr>
                    <tr>
                      <td className="font700">Kristal ID</td>
                      {holdersList.map((item, index) => {
                        return (
                          <td key={index}>
                            <span>{item?.kristalId}</span>
                          </td>
                        );
                      })}
                      <td>{primaryDecisionMaker?.kristalId}</td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>
          <div className="align-center mt15">
            <table className="table_accounts">
              <tbody>
                <tr className="font700">
                  <td>ACCOUNT DETAILS</td>
                </tr>
                {(!data.userAccountDetailList ||
                  data.userAccountDetailList.length == 0) && (
                  <tr>
                    <td>NA</td>
                  </tr>
                )}
                {data.userAccountDetailList &&
                  data.userAccountDetailList.length > 0 && (
                    <tr>
                      <td>Advisory Mode</td>
                      <td>Account Number</td>
                      <td>Account Currency</td>
                      <td>Account Type</td>
                    </tr>
                  )}
                {data.userAccountDetailList &&
                  data.userAccountDetailList.length > 0 &&
                  data.userAccountDetailList.map((account, index) => {
                    return (
                      <tr key={index}>
                        <td>{account.advisoryMode} </td>
                        <td> {account.accountNumber} </td>
                        <td>{account.currency} </td>
                        <td>{account.type}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          {data?.billingType == "PRIVATE_WEALTH" && data?.ibAccount != "NA" ? (
            <>
              <div className="mt15 font700">*Note:</div>
              <div>
                <ol type="1">
                  {notes.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                  {data?.country == "IND" ? (
                    <li>IB account should be disclosed in ITR filings.</li>
                  ) : null}
                </ol>
              </div>
            </>
          ) : (
            <></>
          )}

          <div className="page-break-before align-center mt15">
            <table className="table_funding">
              <tbody>
                <tr className="font700">
                  <td>FUNDING DETAILS</td>
                </tr>
                {bankDetails.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td> {item.key}</td>
                      <td>{item.value}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {(data?.partnerCode == "KOTAKME" || data?.partnerCode == "KOTAKAD") &&
            data?.ibAccount != "NA" && (
              <>
                <div className="mt30">
                  <div className="font700">US (DTC/SSI)</div>
                  <div>DTC#: 0534</div>
                  <div>Name: Interactive Brokers LLC</div>
                  <div>BIC: IBKRUS33</div>
                  <div>IB IBroker: {data?.ibAccount}</div>
                  <div className="font700">UK</div>
                  <div>CREST</div>
                  <div>To/From Crest Account number: 6DKAV</div>
                  <div>Account Holder: Interactive Brokers LLC</div>
                </div>
                <div className="italic mt50">
                  <span className="font700">Note: </span>
                  <span>Please write to </span>
                  <a
                    href="mailto:cp@kristal.ai"
                    style={{ color: "black" }}
                    className="underline"
                  >
                    cp@kristal.ai
                  </a>
                  <span>
                    {" "}
                    should you wish settlement details for non US and UK assets.
                  </span>
                </div>
              </>
            )}
        </Col>
      </Row>
    </div>
  ) : (
    <></>
  );
};
export default WelcomeLetter;
