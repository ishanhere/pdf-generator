import GeneratePWReport from "../../components/Reports/PWReports/generatePWReport.jsx";
// import { dummyDataPW } from "../../components/Reports/dummyData.js";
const GeneratePWReportPage = ({ data, base64fromSVG, base64fromSVGLine }) => {
  //pass dummydata to test on browser else pass from pros for API usage
  return (
    <GeneratePWReport
      data={data}
      base64fromSVG={base64fromSVG}
      base64fromSVGLine={base64fromSVGLine}
    />
  );
};

export default GeneratePWReportPage;
