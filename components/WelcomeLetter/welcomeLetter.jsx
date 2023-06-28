import { Col, Row } from "antd";
import { bankDetails } from "./utils";
import moment from "moment";

const WelcomeLetter = ({ data }) => {
  const tempArray = [1, 2, 3];
  return data ? (
    <div className="welcomeletter_container">
      <Row>
        <Col span={24} className={`font12-pt font400`}>
          <div>{moment().format("Do MMMM, YYYY")}</div>
          <div className={`mt15`}>Dear, {data.name}</div>
          <p className={`mt15`}>
            We are pleased to confirm that your onboarding process is now
            completed and you may begin investing through activated accounts.
          </p>
          <p className={`mt15`}>
            Our proprietary, AI-powered advisory algorithms and dedicated team
            of advisors are available to help you plan and manage your wealth.
            All recommendations provided by Kristal.AI with respect to your
            Portfolio, are provided after careful consideration of your Profile
            and investment objectives; kindly keep us informed if there is any
            change in these to ensure the recommendations are relevant. We like
            to set the highest standards when delivering on our fiduciary
            duties; perceived and actual Conflicts of Interests may arise and we
            take adequate measures to keep them to a minimum and ensure our
            recommendations are not impacted.
          </p>
          <p className={`mt15`}>
            The Kristal.AI Platform allows you to manage your Portfolio directly
            or Accredited Investors can also do so, by simply directing our
            teams. All transactions in your Portfolio are executed on the basis
            of your instructions including collection of fees by liquidating
            holdings. To have your Portfolio managed on a fully discretionary
            basis, please consult with your relationship manager.
          </p>
          <p className={`mt15`}>
            We use best-in-class technology, operational processes and controls
            and conduct due diligence of service providers to ensure your assets
            and information are secure. The Kristal.AI Platform is developed to
            provide services under the licenses and regulatory standards
            prescribed by our esteemed regulators in Singapore, Hong Kong and
            India and A change in our licensing conditions may result in an
            impact to the services we provide and we endeavour to provide you
            with timely updates of such developments.
          </p>
          <p className={`mt15`}>
            Communications via electronic means and the Platform, may be subject
            to disruptions despite all our best efforts, and, some instructions
            may need to be sought/provided using alternate channels. We always
            aim to act on your instructions in a timely manner, but appreciate
            your understanding of certain practical limitations.
          </p>
          <p className={`mt15`}>
            Our endeavour is to bring all our offerings in a transparent and
            easy-as-possible manner; there are no hidden Fees and costs. We
            strive hard so you can simply login on www.kristal.ai to view all
            details about your Account(s) in various sections of the Platform or
            on the iOS / Android app; however information like some corporate
            actions (e.g stock splits) may be shared by your relationship
            manager instead. You may also reach out to your relationship manager
            for any information and if you wish to offer any feedback.
          </p>
          <p className={`mt15`}>We look forward to working with you.</p>
          <p className={`mt15`}>Regards,</p>
          <p className={`font18`}>Team Kristal.</p>
          <div className="page-break"></div>
          <div className={`align-center`}>
            <table className={`table_client`}>
              <tbody>
                <tr className={`font700`}>
                  <td>CLIENT DETAILS</td>
                </tr>
                {data.userDetailsList && data.userDetailsList.length > 0 && (
                  <>
                    <tr className={`font700`}>
                      <td></td>
                      <td>1st Holder</td>
                      <td>2nd Holder</td>
                      <td>3rd Holder </td>
                      <td>Primary Decision Maker</td>
                    </tr>
                    <tr>
                      <td className={`font700`}>Name</td>
                      {tempArray.map((index) => {
                        return (
                          <td key={index}>
                            <span>
                              {data.userDetailsList[index]?.name
                                ? data.userDetailsList[index]?.name
                                : "NA"}
                            </span>
                          </td>
                        );
                      })}
                      <td>
                        {tempArray.map((index) => {
                          return (
                            data.userDetailsList[index]?.primary &&
                            data.userDetailsList[index]?.name
                          );
                        })}
                      </td>
                    </tr>
                    <tr>
                      <td className={`font700`}>Kristal ID</td>
                      {tempArray.map((index) => {
                        return (
                          <td key={index}>
                            <span>
                              {data.userDetailsList[index]?.kristalId
                                ? data.userDetailsList[index]?.kristalId
                                : "NA"}
                            </span>
                          </td>
                        );
                      })}
                      <td>
                        {tempArray.map((index) => {
                          return (
                            data.userDetailsList[index]?.primary &&
                            data.userDetailsList[index]?.kristalId
                          );
                        })}
                      </td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>
          <div className={`align-center mt15`}>
            <table className={`table_accounts`}>
              <tbody>
                <tr className={`font700`}>
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
          <div className={`mt15`}>
            *Note: Pending activation by underlying broker
          </div>
          <div className={`align-center mt15`}>
            <table className={`table_funding`}>
              <tbody>
                <tr className={`font700`}>
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
        </Col>
      </Row>
    </div>
  ) : (
    <></>
  );
};
export default WelcomeLetter;
