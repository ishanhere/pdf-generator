import AutomatedTaxReports from "../../components/AutomatedTaxStatement/getAutomatedTaxStatement";
// import { tax1, tax2, taxStatements } from "../../components/Reports/dummyData";

function AutomatedTaxReportsPage({ data }) {
  //pass dummydata to test on browser else pass from pros for API usage
  return <AutomatedTaxReports data={data} />;
}

export default AutomatedTaxReportsPage;
