import { Fragment } from "react";

export const consolidatedDefinationTable = [
  {
    key: "Consolidated Report",
    value:
      "An overview of all the activities pertaining the portfolio in the defined period.",
  },
  {
    key: "Kristal ID",
    value: `Kristal ID means a unique ID provided by <a style='color:#337ab7;text-decoration:none' href='https://kristal.ai/' target='_blank'>Kristal.AI</a> to the Client once the Client sign up is completed on the Platform by filing in the details requested by <a style='color:#337ab7;text-decoration:none' href='https://kristal.ai/'>Kristal.AI</a>.<br/>
        This report covers all the activities where the user with this Kristal ID has online access and is authorised to manage and provide instructions with regards to the portfolio.`,
  },
  {
    key: "Portfolio Currency",
    value:
      "Reporting currency of the portfolio as set in the profile section of the user.",
  },
  {
    key: "Portfolio value",
    extraInfo: "(period end)",
    value:
      "Value of the holdings including cash as of end of the period based on the last available prices of every holding.",
  },
  {
    key: "Portfolio value ",
    extraInfo: "(period start)",

    value:
      "Value of the holdings including cash as of start date of the period based on the last available prices of every holding at that time.",
  },
  {
    key: `Portfolio returns <span style='font-weight:400;'> (period)</span>/ Returns <span style='font-weight:400;'>(period)</span>`,
    // extraInfo: "",
    value:
      "Returns are measured using XIRR. XIRR - Extended Internal Rate of Returns, is the actual return on investment. It is a method used to calculate returns on investments when there are multiple cash flows occurring simultaneously or across different time periods.",
  },
  {
    key: "Cash transferred",
    extraInfo: "(lifetime)",
    value:
      "Net cash and asset transferred with respect to this portfolio. This does not include the realised returns.",
  },
  {
    key: "Earnings",
    extraInfo: "(lifetime)",
    value: "Unrealized profit or loss since inception",
  },
  {
    key: "Portfolio summary",
    value:
      "Single view of the different asset types and corresponding sub-accounts that constitute the portfolio",
  },
  {
    key: "Asset type",
    value: "Category of the Kristal held in the sub-account",
  },
  {
    key: "Sub-account number",
    value: "Unique identifier for every sub-account.",
  },
  {
    key: "Holders name",
    value: "Name of the clients associated with the sub-account",
  },
  {
    key: "Currency ",
    extraInfo: "(in Portfolio Summary table)",
    value: "Operating currency of the sub-account",
  },
  {
    key: "Currency",
    extraInfo: "(in Kristals and Orders tables)",
    value: "Transaction currency of the Kristal",
  },
  // {
  //   key: "Returns",
  //   extraInfo: "(Period)",
  //   value:
  //     "Returns are measured using XIRR. XIRR - Extended Internal Rate of Returns, is your actual return on investment. It is a method used to calculate returns on investments when there are multiple cash flows occurring simultaneously or across different time periods.",
  // },
  {
    key: "Advisory Mode",
    value:
      "Denotes whether the activities in the sub-account is based on the advise provided by a trusted associate or not",
  },
  {
    key: "Execution Mode",
    value:
      "Whether the activities in the sub-account can be effected by the users independently using their online access",
  },
  {
    key: "Kristals as of period end",
    value: "Duly settled Kristals as of period end",
  },
  {
    key: "Kristal Name",
    value: "Name of the Kristal as it appears on the platform",
  },
  {
    key: "Quantity",
    value: "Number of units of the Kristal",
  },
  {
    key: "Unit NAV",
    value: "The last available traded price of one unit of the Kristal",
  },
  {
    key: "NAV as of Date",
    value: "Date of the Unit NAV used",
  },
  {
    key: "Current Value",
    value:
      "The total value of the Kristal (Quantity * Unit NAV) as of period end date",
  },
  {
    key: "Invested Amount",
    value:
      "Value of the acquisition price of the number of units of the Kristals held",
  },
  {
    key: "Unrealized returns",
    value: "Absolute return on the Kristal held of the invested amount.",
  },
  {
    key: "Unrealized returns",
    extraInfo: "(%)",
    value:
      "Absolute return on the Kristal held as a percentage of the invested amount",
  },
  {
    key: "Orders",
    extraInfo: "(Period)",
    value:
      "The completed transactions during the report period. This does not include the orders which are not yet completed.",
  },
  {
    key: "Date",
    value:
      "Effective transaction date on which the Kristal was subscribed to or redeemed",
  },
  {
    key: "Trade Type",
    value: "Denotes whether the Kristal was Invested into or Redeemed",
  },
  {
    key: "Unit Price",
    value: "Unit NAV at which the Kristal was transacted at",
  },
  {
    key: "Amount",
    value: "Settlement value of the Kristal net of fees and cost",
  },
];
export const monthlyDefinationTable = [
  {
    key: "Account",
    extraInfo: "(Type)",
    value:
      "It showcases the relevant Product Type that is held/transacted in that particular Sub-Account.",
  },
  {
    key: "Sub-Account Number",
    value: "Unique identifier for that Sub-Account.",
  },
  {
    key: "Account Currency",
    value: "Transaction/Base Currency of the particular Sub-Account.",
  },
  {
    key: "Account Alias",
    value: "Customised Name for that Sub-Account.",
  },
  {
    key: "Kristal ID",
    value:
      "Kristal ID means a unique ID provided by <a style='color:#337ab7;text-decoration:none' href='https://kristal.ai/'>Kristal.AI</a> to the Client once the Client sign up is completed on the Platform by filing in the details requested by <a style='color:#337ab7;text-decoration:none' href='https://kristal.ai/'>Kristal.AI</a>.<br/>This report covers all the activities where the user with this Kristal ID has online access and is authorised to manage and provide instructions with regards to the portfolio.",
  },
  {
    key: "Name",
    value:
      "Name of the controller (client who can transact in that account) of the account.",
  },
  {
    key: "Value",
    extraInfo: "(period end)",
    value:
      "Value of the holdings including cash as of end of the period based on the last available prices of every holding.",
  },
  {
    key: "Returns",
    extraInfo: "(period)",
    value: "Returns are measured using XIRR.",
  },
  {
    key: "XIRR",
    value:
      "Extended Internal Rate of Returns, is the actual return on investment. It is a method used to calculate returns on investments when there are multiple cash flows occurring simultaneously or across different time periods.",
  },
  {
    key: "Cash transferred",
    extraInfo: "(lifetime)",
    value:
      "Net cash and asset transferred with respect to this portfolio. This does not include the realised returns.",
  },
  {
    key: "Earnings",
    extraInfo: "(lifetime)",
    value: "Unrealized profit or loss since inception.",
  },
  {
    key: "Asset Class/Type",
    value: "Category of the Kristal held in the sub-account.",
  },
  {
    key: "Kristal Name",
    value: "Instrument/Asset as represented on the platform.",
  },
  {
    key: "Asset Name",
    value: "Instrument/Asset as transacted in the market.",
  },
  {
    key: "Asset Symbol",
    value: "Unique code attributed to an asset for transactional purposes.",
  },
  {
    key: "Quantity",
    value: "Number of units of the Kristal held/transacted.",
  },
  {
    key: "Currency",
    value: "Transaction currency of the Asset/Kristal.",
  },
  {
    key: "Current Value",
    value:
      "The total value of the Kristal (Quantity * Unit NAV) as of period end date",
  },

  {
    key: "Investment Amount",
    value:
      "Value of the acquisition price of the number of units of the Kristals held.",
  },
  {
    key: "Unrealized returns",
    extraInfo: "(%)",
    value:
      "Absolute return on the Kristal held as a percentage of the invested amount",
  },
  {
    key: "Amount",
    value: "Settlement value of the Kristal net of fees and cost.",
  },
  {
    key: "Dividends Per Unit",
    value: "Dividend received per unit of the asset held.",
  },
  {
    key: "Total Dividends",
    value:
      "Gross dividend paid out on the asset held for the corresponding quantity held.",
  },
  {
    key: "Amount",
    extraInfo: "[in Dividends (Period)]",
    value: "Total Dividend net of withholding taxes deducted.",
  },
  {
    key: "Fees",
    value: "Dividend processing fees charged by the broker.",
  },
  {
    key: "Taxes",
    value: "Amount of Withholding tax deducted by broker",
  },
];

export const consolidatedDefinationTableV2 = [
  {
    key: "Portfolio Value",
    extraInfo: "(Period Start)",
    value:
      "Value of all holdings, including Cash Balance as of the Period Start Date based on the last available unit value. Portfolio Value would take into any accrued interest/dividends",
  },
  {
    key: "Portfolio Value",
    extraInfo: "(Period End)",
    value:
      "Value of all holdings, including Cash Balance as of the Period End Date based on the last available unit value. Portfolio Value would take into any accrued interest/dividends",
  },
  {
    key: "Net Cash Transferred",
    extraInfo: "[Timeline]",
    value:
      "Net value of Funds and/or Assets transferred in/out of the Portfolio during the [Timeline].",
  },
  {
    key: "Cash Balance",
    extraInfo: "(Period End)",
    value:
      "Cash held in the account as of Period End Date. Cash Balance does not take into account any pending or unsettled transactions or accrued interest/dividends",
  },
  {
    key: "Earnings",
    extraInfo: "[Timeline]",
    value: "Unrealised Returns during the [Timeline].",
  },
  {
    key: "Returns ",
    extraInfo: "[Timeline]",
    value: `Returns are calculated in USD terms using XIRR & presented on an absolute basis.<br>XIRR calculates returns on investment when there are multiple cash flows occurring across different time periods.`,
  },

  {
    key: "Account Holders",
    value: "Name of the clients associated with the sub-account",
  },
  {
    key: "Asset Type",
    value: "Category of the Kristal held in the sub-account",
  },
  {
    key: "Sub - Account Number",
    value: "Unique identifier for every sub-account",
  },
  {
    key: "Currency",
    value:
      "Reporting currency of the account as set in the profile section of the user.",
  },
  {
    key: "Invested Amount",
    value: "Total amount invested in that Kristal as per Period End.",
  },
  {
    key: "Advisory Mode",
    value:
      "Denotes whether the activities in the sub-account is based on the advise provided by a trusted associate or not",
  },
  {
    key: "Execution Mode",
    value:
      "Whether the activities in the sub-account can be effected by the users independently using their online access",
  },
  {
    key: "Kristals as of period end",
    value: "Duly settled Kristals as of period end",
  },
  {
    key: "Kristal Name",
    value:
      "Whether the activities in the sub-account can be effected by the users independently using their online access",
  },

  {
    key: "Quantity",
    value: "Number of units of the Kristal",
  },
  {
    key: "Unit NAV",
    value: "Unit NAV at which the Kristal was transacted at",
  },
  {
    key: "Applicable NAV Date",
    value: "Date at which the latest NAV is available in the system",
  },
  {
    key: "Current Value",
    value: "Value of invested amount as of latest NAV available date",
  },
  {
    key: "Unrealized returns",
    value: "Absolute return on the Kristal held of the invested amount.",
  },
  {
    key: "Unrealized Returns (%)",
    value:
      "Absolute return on the Kristal held as a percentage of the invested amount.",
  },
  {
    key: "Transaction Date",
    value:
      "Effective transaction date on which the Kristal was subscribed to or redeemed",
  },
  {
    key: "Trade Type",
    value: "Denotes whether the Kristal was Invested into or Redeemed",
  },
  {
    key: "Type",
    value: "Type of transaction",
  },
  {
    key: "Request Date",
    value: "Date at which the fund transfer request is created",
  },
  {
    key: "Processed Date",
    value: "Date at which fund is transferred.",
  },
  {
    key: "Asset Name",
    value: "Name of the Asset as it appears on the platform",
  },
  {
    key: "Dividend/Unit",
    value: "Total number of dividends given per unit to user",
  },
  {
    key: "Number of Units",
    value: "Total number of units held by the user of the asset",
  },
  {
    key: "Total Dividend",
    value: "Total Dividends as per user's holding units",
  },
  {
    key: "(c)",
    value: "This denotes the controller of the portfolio",
  },
];

export const disclaimerText = (
  <div>
    Disclaimer: The materials and data contained herein are for information only
    and are subject to risks. Some of such materials and data (including
    valuation and price data) are based on materials and data received from
    third party sources and are provided on an &apos;as is&apos;/ &apos;where
    is&apos; basis. The information should not be construed as any form of
    advice relating to tax, legal, financials, business or any matter.
    <a
      href="https://kristal.ai"
      target="_blank"
      rel="noreferrer noopener"
      style={{ color: "#3761C8", textDecoration: "none" }}
    >
      Kristal.AI{" "}
    </a>
    , or its affiliates, does not make any representation, undertaking,
    warranty, guarantee, or other assurance as to the completeness, correctness,
    reliability or accuracy of the materials and data herein.
    <a
      href="https://kristal.ai/"
      style={{ color: "#3761C8", textDecoration: "none" }}
    >
      Kristal.AI{" "}
    </a>
    and/or its affiliates accept no liability or responsibility whatsoever for
    any direct or consequential loss and/or damage arising out of or in relation
    to any use of opinions, forecasts, materials and data contained herein or
    otherwise arising in connection therewith. Email ID for Investor Complaints:
    <a
      href="mailto:support@kristal.ai"
      style={{ color: "#3761C8", textDecoration: "none" }}
    >
      support@kristal.ai
    </a>
    .
  </div>
);

export const camalize = function camalize(str) {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
};

export const modifiedText = (text) => {
  return camalize(text).replace(/[^a-zA-Z(%) ]/g, "");
};

export const isNumeric = (str) => {
  if (typeof str != "string") return false; // we only process strings!
  return (
    !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(str))
  ); // ...and ensure strings of whitespace fail
};
export const b64DataTypes = {
  png: "data:image/png;base64,",
  xls: "data:application/vnd.ms-excel;charset=utf-8;base64,",
  pdf: "data:application/pdf;base64,",
  jpeg: "data:application/jpeg;base64,",
  jpg: "data:application/jpg;base64,",
  txt: "data:text/plain;charset=utf-8,",
  webm: "data:video/webm;base64,",
  mp4: "data:video/mp4;base64,",
  csv: "data:text/csv;base64,",
  xlsx: "data:application/xlsx;charset=utf-8;base64,",
  ppt: "data:text/ppt;base64,",
  pptx: "data:text/pptx;base64,",
  doc: "data:text/doc;base64,",
  docx: "data:text/docx;base64,",
  zip: "data:application/zip;base64,",
};

export const graphColors = [
  "#5786FF",
  "#CD82FB",
  "#FFD78A",
  "#FFABCE",
  "#FE8A7D",
  "#229C74",
  "#FFC2B2",
  "#5C59DC",
  "#FFBF70",
  "#82C4C0",
  "#FF8A00",
  "#0F4D76",
  "#D64E24",
  "#F1F2FF",
];

export const disclaimerTextNew = (
  <div>
    Disclaimer: The materials and data herein are received from third party
    sources and have been published on an &apos;as is&apos;/&apos;where is&apos;
    basis for information only and do not contain professional advice.
    <a
      href="https://kristal.ai"
      target="_blank"
      rel="noreferrer noopener"
      style={{ color: "#3761C8", textDecoration: "none" }}
    >
      https://Kristal.AI
    </a>{" "}
    and its affiliates accept no liability whatsoever for any loss and/or damage
    arising out of or in relation to any use of the materials and data contained
    herein.
  </div>
);

export const disclaimerTextTax = (
  <div>
    Disclaimer: The materials and data contained herein are for information only
    and some of such materials and data (including valuation and price data) are
    based on materials and data received from third-party sources and are
    provided on an &apos;as is&apos;/ &apos;where is&apos; basis.{" "}
    <a
      href="https://kristal.ai"
      target="_blank"
      rel="noreferrer noopener"
      style={{ color: "#3761C8", textDecoration: "none" }}
    >
      Kristal.AI{" "}
    </a>{" "}
    and its affiliates accept no liability or responsibility whatsoever for any
    direct or consequential loss and/or damage arising out of or in relation to
    any use of opinions, forecasts, materials, and data contained herein or
    otherwise arising in connection there with.
    <br /> The information contained in this document is confidential,
    privileged, and only for the information of the intended recipient and may
    not be used, published, or redistributed without prior written consent.
    Email ID for Investor Complaints:
    <a
      href="mailto:support@kristal.ai"
      style={{ color: "#3761C8", textDecoration: "none" }}
    >
      support@kristal.ai
    </a>
    .
  </div>
);

export const disclaimerTextPorfolio = (
  <div>
    <span>
      Disclaimer: The materials and data contained herein are for information
      only and some of such materials and data (including valuation and price
      data) are based on materials and data received from third party sources.
      Please promptly report any inaccuracy or discrepancy in this report, or in
      your account by sending a mail to the Kristal Technical Support at{" "}
      <a
        href="mailto:support@kristal.ai"
        style={{ color: "#040404", textDecoration: "none" }}
      >
        support@kristal.ai
      </a>
      .
    </span>
  </div>
);

export const disclaimerTextFees = (
  <div>
    Email ID for Investor Complaints:
    <a
      href="mailto:support@kristal.ai"
      style={{ color: "#3761C8", textDecoration: "none" }}
    >
      support@kristal.ai
    </a>
    .
  </div>
);

export const getColumns = (section) => {
  let modifiedColumns = [];
  section.tableHeaders?.map((header, index) => {
    if (header.length > 1) {
      let header1 = header[0]?.key;
      let header2 = header[1]?.key;
      // let header3 =
      //   section?.data[0] && section?.data[0]?.length
      //     ? section?.data[0][index]
      //     : {
      //         imageUrl: null,
      //         valueList: [
      //           {
      //             key: "-",
      //             value: "No Data Found !",
      //             color: "black",
      //           },
      //         ],
      //       };
      //

      modifiedColumns.push({
        title: (
          <Fragment>
            <p
              className="font10 all_caps text_999 font700"
              style={{
                textAlign: header[0]?.type == "STRING" ? "left" : "right",
              }}
            >
              {header[0]?.key}
            </p>
            <p
              className="mb5 font8 text_999 font700"
              style={{
                verticalAlign: "top",
                textAlign: header[0]?.type == "STRING" ? "left" : "right",
              }}
            >
              {header[1]?.key}
            </p>
          </Fragment>
        ),
        dataIndex: header1,
        key: header1,
        childColumn: header2,
        width: index == 0 || index == 1 ? 160 : "",
        render: (_, record) => {
          return (
            <Fragment>
              <div
                style={{
                  display: record[header1]?.imageUrl ? "flex" : "",
                  textAlign: header[0]?.type == "STRING" ? "left" : "right",
                  gap: "1rem",
                  verticalAlign: "top",
                }}
              >
                {record[header1]?.imageUrl && (
                  <div
                    style={{
                      filter: "drop-shadow(0px 1px 10px rgba(0, 0, 0, 0.25))",
                      borderRadius: "10px",
                    }}
                  >
                    <img
                      src={record[header1]?.imageUrl}
                      alt="Image"
                      width="25px"
                      height="25px"
                      style={{ borderRadius: "10px" }}
                    />
                  </div>
                )}
                <div>
                  <>
                    <div
                      style={{
                        color: record[header1]?.color,
                        fontSize: "12px",
                        fontWeight: "700",
                      }}
                    >
                      {record[header1]?.value}
                    </div>

                    <div
                      style={{
                        color: record[header2]?.color,
                        fontSize: "12px",
                        marginTop: "4px",
                        fontWeight: "100",
                      }}
                      className="second-text-color"
                    >
                      {record[header2]?.value}
                    </div>
                  </>
                </div>
              </div>
            </Fragment>
          );
        },
      });
    } else {
      let header1 = header[0]?.key;
      // let header3 =
      //   section?.data[0] && section?.data[0]?.length > 0
      //     ? section?.data[0][index]
      //     : {
      //         imageUrl: null,
      //         valueList: [
      //           {
      //             key: "-",
      //             value: "No Data Found !",
      //             color: "black",
      //           },
      //         ],
      //       };

      modifiedColumns.push({
        title: (
          <p
            className="font10 all_caps text_999 font700"
            style={{
              textAlign: header[0]?.type == "STRING" ? "left" : "right",
            }}
          >
            {header[0]?.key}
          </p>
        ),
        dataIndex: header1,
        key: header1,
        width: index == 0 || index == 1 ? 160 : "",
        render: (_, record) => {
          return (
            <>
              {/* {record.map((itemRecord) => {
                  
                })}{" "} */}
              <div
                style={{
                  display: record[header1]?.imageUrl ? "flex" : "",
                  textAlign: header[0]?.type == "STRING" ? "left" : "right",
                  gap: "1rem",
                  verticalAlign: "top",
                }}
              >
                {record[header1]?.imageUrl && (
                  <div
                    style={{
                      filter: "drop-shadow(0px 1px 10px rgba(0, 0, 0, 0.25))",
                      borderRadius: "10px",
                    }}
                  >
                    <img
                      src={record[header1]?.imageUrl}
                      alt="Image"
                      width="25px"
                      height="25px"
                      style={{ borderRadius: "10px" }}
                    />
                  </div>
                )}
                <div
                  style={{
                    color: record[header1]?.color,
                    fontSize: "12px",
                    fontWeight: 700,
                  }}
                  className="second-text-color"
                  dangerouslySetInnerHTML={{
                    __html: record[header1]?.value,
                  }}
                ></div>
              </div>
            </>
          );
        },
      });
    }
  });

  return modifiedColumns;
};

export const getTableData = (section, index) => {
  const modifiedData = [];
  section?.data?.map((item, parentIndex) => {
    modifiedData[parentIndex] = {};
    modifiedData[parentIndex]["key"] = parentIndex;

    item?.map((itemValue) => {
      itemValue?.valueList?.map((valueItem, index2) => {
        let key = valueItem.key;
        modifiedData[parentIndex] = {
          ...modifiedData[parentIndex],
          [key]: {
            value: valueItem.value,
            color: valueItem.color,
            superScriptText: valueItem.superScriptText,
            imageUrl: itemValue.imageUrl,
          },
        };
      });
    });
  });
  return modifiedData;
};
