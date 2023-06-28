import { Fragment } from "react";
import { Col, Row } from "antd";
const CashOpsInstructions = ({ data }) => {
  return data ? (
    <div className="cashopsinstructions_container">
      <h1 className="header">Funding Instructions</h1>
      <div className="space-top">
        <p>
          Dear {data.name}, by creating a fund transfer request, you are
          notifying us your intent to send money to your Kristal Account. Please
          follow the instructions provided below to transfer the funds.
        </p>
      </div>
      <div className="customBorder" />
      <Row className="mt50">
        <Col span={2} className="align-center">
          <div className="well customWellStep">
            <p className="stepTitle">STEP</p>
            <p className="stepNo">01</p>
          </div>
        </Col>
        <Col span={22}>
          <div className="well customWell">
            <p className="mb0">
              Login to your bank account (e-banking app or webpage)
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={2} className="align-center">
          <div className="well customWellStep">
            <p className="stepTitle">STEP</p>
            <p className="stepNo">02</p>
          </div>
        </Col>
        <Col span={22}>
          <div className="well customWell">
            <p className="mb0">
              Transfer funds to our Trustee account. Details are mentioned
              below:
            </p>
          </div>
          <div className="mt20 mb20">
            <table className="cashops-table">
              <tbody>
                {data?.accountDetails &&
                  data.accountDetails.map((item, index) => {
                    return (
                      <tr key={index} className="p20">
                        <td className="tab-4">{item.key}</td>
                        <td className="tab-6">{item.value}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={2} className="align-center">
          <div className="well customWellStep">
            <p className="stepTitle">STEP </p>
            <p className="stepNo">03</p>
          </div>
        </Col>
        <Col span={22}>
          <div className="well customWell">
            <p className="mb0">Fill in more details:</p>
          </div>
          <div className="space-top">
            <ol type="1" className="ml40">
              <li>Enter the transfer amount</li>
              <li>
                Fill in your Payment Reference {data.comment} in the comments to
                the Beneficiary field
              </li>
              <li>Complete the fund transfer</li>
            </ol>
          </div>
        </Col>
      </Row>
      <Row className="space-top">
        <div className="well customWell notes">
          <p className="mb0 lineHeight-1-3">
            <span>
              <b>Important: </b>
            </span>
            <span>
              This payment has to be made from a bank account in which the
              account holder&apos;s name matches exactly with Kristal.AI account
              holder&apos;s name. We do not process third-party payments.
            </span>
          </p>
        </div>
      </Row>
    </div>
  ) : (
    <Fragment></Fragment>
  );
};
export default CashOpsInstructions;
