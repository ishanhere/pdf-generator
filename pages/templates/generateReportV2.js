import GenerateReportV2 from "../../components/Reports/generateReportV2.jsx";
// import {
//   dummyData,
//   exportKristalInAccountPdf,
//   exportDepositsPdf,
//   exportGetKristalOrdersInAccountPdf,
// } from "../../components/Reports/dummyData.js";
const GenerateReportPageV2 = ({ data }) => {
  //pass dummydata to test on browser else pass from pros for API usage
  return <GenerateReportV2 data={data} />;
};

export default GenerateReportPageV2;
