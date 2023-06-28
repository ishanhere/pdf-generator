import { Col, Row } from "antd";
import { Fragment } from "react";
import moment from "moment";

const CommitmentLetter = ({ data }) => {
  return data ? (
    <div className="commitmentletter_container">
      <Row>
        <Col span={12}>
          <div className="float_left">To,</div>
        </Col>
        <Col span={12}>
          <div className="float_right">
            {data.replacementParams.dateEntered}
          </div>
        </Col>
      </Row>
      <Row className="mt30">
        <Col>
          <div className="float_left">
            <div>Kristal Advisors (SG) Pte. Ltd.</div>
            <div>6 Raffles Quay, #16-01, </div>
            <div>Singapore 048580</div>
          </div>
        </Col>
      </Row>
      <Row className="mt10">
        <Col span={24} className={`align-center`}>
          <div>
            <span className="font700 underline">
              Sub: Letter of Commitment (the “Letter”)
            </span>
          </div>
        </Col>
      </Row>
      <Row className="mt10">
        <Col>
          {data.isKristalPartnerShip && (
            <Fragment>
              <p className="mt10">
                <span>
                  I, {data.replacementParams.fullName} -
                  {data.replacementParams.clientId}
                </span>
                <span>
                  , have executed the client agreement (the “Client Agreement”)
                  with Kristal Advisors (SG) Pte. Ltd. (the “Kristal.AI”) in
                  order to avail the services of Kristal.AI in accordance with
                  the Client Agreement and related{" "}
                </span>
                <u>Confidentiality Clauses</u>
                <span>.</span>
              </p>
              <p className="mt20">
                <span>I am interested in investing in the </span>
                <u> {data.replacementParams.kristalName} </u>
                <span>
                  (the “Kristal”). I acknowledge and agree that Kristal.AI will
                  use the proceeds in this Kristal to purchase a limited
                  partnership interests (“Interests”) in
                </span>
                <u> {data.replacementParams.partnershipName} </u>
                <span>
                  (the “Partnership”) and invest surplus proceeds in a Money
                  Market Fund as per Kristal.AI&apos;s discretion.
                </span>
              </p>
              <p className="mt20">
                I understand that I can request for a copy of Amended and
                Restated Exempted Limited Partnership Agreement of the
                Partnership. I also understand that the Kristal.AI’s purchase of
                Interests will be net of all fees and expenses and may be less
                than my Commitment.
              </p>
              <p className="mt20 page-break-inside-avoid">
                {data.replacementParams.paragraph}
              </p>
            </Fragment>
          )}
          {data.replacementParams.fundName &&
            data.replacementParams.termsheetName && (
              <Fragment>
                <p className="mt10">
                  <span>
                    I, {data.replacementParams.fullName} -
                    {data.replacementParams.clientId}, have executed the client
                    agreement (the “
                  </span>
                  <span className="font700">Client Agreement</span>
                  <span>”) with Kristal Advisors (SG) Pte. Ltd. (the “</span>
                  <span className="font700">Kristal.AI</span>
                  <span>
                    ”) in order to avail the services of Kristal.AI in
                    accordance with the Client Agreement and related{" "}
                  </span>
                  <u>Confidentiality Clauses</u>
                  <span>.</span>
                </p>
                <p className="mt30">
                  <span>I am interested in investing in </span>
                  <u> {data.replacementParams.fundName}</u>
                  <span> (the &quot;</span>
                  <span className="font700">Fund</span>
                  <span>
                    ”) as per the details set out in the term sheet of
                  </span>
                  <u> {data.replacementParams.termsheetName}</u>
                  <span> attached (the “</span>
                  <span className="font700">Term Sheet</span>
                  <span>”). </span>
                </p>
                <p className="mt30">
                  I understand that I can request for a copy of Private
                  Placement Memorandum and associate documentation.
                </p>
                <p className="mt30">{data.replacementParams.paragraph}</p>
              </Fragment>
            )}
        </Col>
      </Row>
      <Row>
        <p>
          In light of the above, I undertake to abide by obligations, which are
          set out below:
        </p>
        <ol>
          <li className="mt10">
            <p>
              <span className="font700 underline italic">Commitment:</span>{" "}
              <span>I hereby agree to:</span>
            </p>
            <ol className="mt15" type="a">
              <li className="mt20 page-break-inside-avoid">
                <p>
                  <span>
                    contribute, in installments, the commitment required towards
                    the investment into the Fund as per the details mentioned in
                    Annexure A (the “Total Capital Commitment or{" "}
                  </span>
                  <b>Commitment</b>
                  <span>”);</span>
                </p>
              </li>
              <li className="mt20 page-break-inside-avoid">
                <p className="page-break-inside-avoid">
                  {" "}
                  <span>
                    maintain sufficient balance as investment with Kristal.AI in
                    my account (the “
                  </span>
                  <b>Investment</b>
                  <span>
                    ”) in order to meet my Commitment in whole. I understand
                    that Kristal.AI may, at its sole discretion:
                  </span>
                </p>
                <ol type="i">
                  <li>
                    <p>
                      restrict the nature of Investment (in terms of risk and
                      liquidity) keeping in mind the necessity to meet the terms
                      of the Commitment;
                    </p>
                  </li>
                  <li>
                    <p>
                      liquidate some or all my Investment to meet the terms of
                      the Commitment.
                    </p>
                  </li>
                </ol>
              </li>
              <li className="mt20 page-break-inside-avoid">
                <p>
                  comply with the terms and restrictions as set out in the Term
                  Sheet and this Letter
                </p>
              </li>
            </ol>
          </li>
          <li className="mt20">
            <p className="page-break-inside-avoid">
              <span className="font700 underline italic page-break-inside-avoid">
                Withdrawal of the Commitment:
              </span>{" "}
              <span>
                I hereby undertake with respect to my investment in the Fund
                that I cannot withdraw from my Commitment. In the event I intend
                to withdraw or upon any default in Commitment by the due date as
                detailed in Annexure A, I understand that:
              </span>
            </p>
            <ol type="a">
              <li className="mt20 page-break-inside-avoid">
                <p>
                  the Commitment already made in part or whole through transfer
                  of cash or through liquidating some or all of my Investment
                  may, among other consequences, be subject to complete
                  forfeiture by Kristal.AI;
                </p>
              </li>
              <li className="mt20 ">
                <p className="page-break-inside-avoid">
                  Kristal.AI may transfer my Commitment in the Fund to another
                  investor, at a price determined by Kristal.AI including at
                  zero value, willing to take on the outstanding Commitment in
                  exchange for all future cash flows from the Fund;
                </p>
              </li>
              <li className="mt20 page-break-inside-avoid">
                <p className="page-break-inside-avoid">
                  No fees paid to Kristal.AI shall be refunded or any other
                  compensation provided by Kristal.AI;
                </p>
              </li>
              <li className="mt20">
                <p className="page-break-inside-avoid">
                  I will continue to be liable to Kristal.AI for any expenses
                  incurred or loss borne on account of my inability to meet my
                  Commitment and not satisfied through liquidating some or all
                  of my Investment (through the right of set-off). Kristal.AI’s
                  computation shall be final.
                </p>
              </li>
            </ol>
          </li>
        </ol>
        <p className="mt10 page-break-inside-avoid">
          In connection with my investments into the Fund, I hereby make the
          following representations and warranties
        </p>
        <ol className="mt10">
          <li className="mt10">
            <p className="page-break-inside-avoid">
              I have the financial ability to bear the economic risk of my
              investment into the Fund, have adequate means for providing for
              its current need, possible contingencies, and have no need for
              liquidity with respect to its Commitment;
            </p>
          </li>
          <li className="mt20">
            <p className="page-break-inside-avoid">
              I have sufficient knowledge and experience in financial and
              business matters so as to be capable of evaluating the merits and
              risks of subscribing for the investment into the Fund to bear the
              economic risk of the investment into the Fund for on indefinite
              period of time including a complete loss of capital and
              Commitment;
            </p>
          </li>
          <li className="mt20">
            <p className="page-break-inside-avoid">
              I have been given the opportunity to ask questions of, and receive
              answers from, Kristal.AI with respect the investment into the
              Fund, the Commitment, the terms and conditions of the offering and
              other matters pertaining to the investment in order for me to
              evaluate the merits and risks of the investment into the Fund;
            </p>
          </li>
          <li className="mt20">
            <p className="page-break-inside-avoid">
              I have read carefully, and I am making the Commitment into the
              Fund solely on the information contained in the Term Sheet and the
              investment documents of the Fund and not on any other oral or
              written statement, representation, or warranty with respect to the
              offering of investment and Commitments;
            </p>
          </li>
          <li className="mt20">
            <p className="page-break-inside-avoid">
              {" "}
              I am aware that the investment into the Fund involves substantial
              risks and have determined that the Commitment is a suitable
              investment for me and that, at this time, I can bear a complete
              loss of its investment therein;
            </p>
          </li>
          <li className="mt20">
            <p className="page-break-inside-avoid">
              I am aware and understand that the value of the investment may
              fall as well as rise and consequently may not be able to return to
              the investors all or any of the Commitments;
            </p>
          </li>
          <li className="mt20">
            <p className="page-break-inside-avoid">
              With regard to the tax, legal, currency, and other economic
              considerations related to this investment, I acknowledge that I
              have been advised to consult with and have only relied on the
              advice of, or have only consulted with, my own professional
              advisors;
            </p>
          </li>
          <li className="mt20">
            <p className="page-break-inside-avoid">
              I agree not to offer, sell, transfer, pledge, hypothecate, or
              otherwise dispose of, directly or indirectly, all or any part of
              the investment or any interest therein, except in accordance with
              the Term Sheet or at Kristal.AI’s sole discretion;
            </p>
          </li>
          <li className="mt20">
            <p className="page-break-inside-avoid">
              I am duly authorized and qualified to become an investor and
              authorized to make the Commitment towards investment into the
              Fund.
            </p>
          </li>
        </ol>
      </Row>
      <p className="mt10 page-break-inside-avoid">
        <span className="font700 underline italic">
          Governing Law, Dispute Resolution and Jurisdiction:
        </span>{" "}
        <span>
          Kristal.AI and me endeavour to settle by mutual conciliation any
          claim, dispute, or controversy (each a “
        </span>
        <span className="font700">Dispute</span>
        <span>
          ”) arising out of, or in relation to, this Letter within fifteen (15)
          days or such extended period as agreed between me and Kristal.AI.
          Further, this Letter shall be governed by, and be construed in
          accordance with the laws of Singapore and shall be subject to
          exclusive jurisdiction of Singapore.
        </span>
      </p>
      <p className="mt10 page-break-inside-avoid">
        <span className="font700 underline italic"> Indemnification:</span>{" "}
        <span>
          I shall indemnify, defend, and hold harmless Kristal.AI and its
          respective officers, directors, employees, agents, successors and
          assigns, from and against all claims, damages, liabilities, losses and
          costs including reasonable attorney’s fees (the “
        </span>
        <span className="font700">Losses</span>
        <span>
          ”) in connection with or relating to, any claims or proceedings to the
          extent arising from breach of the terms and conditions of this Letter.
        </span>
      </p>
      <p className="mt10 page-break-inside-avoid">
        <span className="font700 underline italic">Entire Understanding:</span>{" "}
        <span>
          This Letter along with the Client Agreement constitutes the entire
          understanding between me and Kristal.AI whatsoever.
        </span>
      </p>
      <p />
      <div className="mt10">
        <span className="font700 underline italic">Signature:</span>{" "}
        <span>
          By signing this Letter, I acknowledge that I have had the opportunity
          to read the contents of the Letter.
        </span>
      </div>
      <div className={`mt10 full-width`}>Yours truly,</div>
      <div className={`mt30 full-width`}>{data.replacementParams.fullName}</div>
      {/* <div className="mb30" /> */}
      <div style={{ width: "40%" }}>
        <hr className="hr_custon font700" />
      </div>
      {data.replacementParams.sign && data.replacementParams.name && (
        <div className={`mt25 full-width`}>
          <div className="mt5 font700">Confirmed by</div>
          <div className="mt5">Signature: {data.replacementParams.sign}</div>
          <div className="mt5">Name: {data.replacementParams.name}</div>
          <div className="mt5">
            Kristal ID: {data.replacementParams.clientId}
          </div>
          <div className="mt5">
            Date:{" "}
            {moment
              .unix(data.replacementParams.date / 1000)
              .format("MMM D, YYYY")}
          </div>
        </div>
      )}
      {/* <div className={`mt25 full-width`}>
        <span className="font700">Accepted by:</span>
      </div>
      <div className={`mt10 full-width`}>
        <span className="italic"> For and on behalf of </span>
        <span className="font700">Kristal Advisors (SG) Pte. Ltd.</span>
      </div>
      <div style={{ width: "40%" }} className={`mt10 `}>
        <hr className="hr_custon font700" />
      </div>
      <div className={`full-width`}>Name: Vivek Mohindra</div>
      <div className={`full-width`}>Title: Authorised Signatory</div> */}
      <div className="page-break" />
      <Row className="mt10">
        <Col span={24} className="align-center">
          <div className={`align-center font700`}>
            <span className="underline">Annexure A</span>
          </div>
        </Col>
        <Col>
          <div className="align-center mt10">
            <table className="table_commitment">
              <tbody>
                <tr>
                  <td>Total Capital Commitment:</td>
                  <td>{data.replacementParams.commitmentAmount}</td>
                </tr>
                <tr>
                  <td>Initial Date of Commitment:</td>
                  <td>{data.replacementParams.commitmentDate}</td>
                </tr>
                <tr>
                  <td>Initial Investment (Call + Fees):</td>
                  <td>{data.replacementParams.initialAmount}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt10">
            Tentative dates and amounts of balance instalments
          </p>
          <table className="table_commitment_instalments">
            <tbody>
              <tr>
                <th>Sl.No.</th>
                <th>Date</th>
                <th>Amount</th>
              </tr>
              {data.tableList.map((item, index) => {
                return (
                  <tr key={index}>
                    <td> {index + 1}</td>
                    <td> {item.date}</td>
                    <td>{item.amount} </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <p className="mt10">
            **Capital Call Outstanding will be called by Kristal in line with
            requirements to meet calls plus fees as required by the Fund Manager
            which will be in instalments and with up to 10 days’ notice.
          </p>

          {data.isTransactionFund && (
            <p className="mt10">
              Note - This Transactional Fund is being made available to you
              based on a Reverse Enquiry originated by you. Kristal.AI is
              providing you an efficient means to execute the investment and/ or
              meet the minimum investment threshold. The information available
              to us is based on the Information Memorandum, Supplement, Term
              Sheets and other similar documents (any or together, the
              “Underlying Fund Documents”) provided to us by the Fund Manager
              and we have assumed without further enquiry the accuracy and
              completeness of the copy of the Underlying Fund Documents
              received, and the accuracy of all representations of fact
              expressed in or implied thereby. Kristal.AI has not made any
              enquiries as to matters of fact in relation to the Fund Manager.
            </p>
          )}
          <p />
        </Col>
      </Row>
      <Row className="mt10">
        <Col span={24} className="align-center">
          <div className={`align-center font700`}>
            <span className="underline">Annexure B - Term Sheet</span>
          </div>
        </Col>
      </Row>
    </div>
  ) : (
    <></>
  );
};
export default CommitmentLetter;
