import TaxDefinitions from "./taxDefinitions";
import TaxUserProfileOverView from "./taxUserProfileOverView";
import TaxUserReportsSummary from "./taxUserReportsSummary";
import { getColumns, getTableData } from "../Reports/utils";

const AutomatedTaxReports = ({ data }) => {
  const { sections } = data || {};

  const renderSection = (section, index) => {
    let columns = getColumns(section);
    let tableData = getTableData(section, index);
    return (
      <>
        <TaxUserReportsSummary
          index={index}
          columns={columns}
          tableData={tableData}
          title={section.title}
          subTitle={section.subTitle}
          data={data}
          noDataText={section.noDataText}
          className="mt10 mb10"
        />
      </>
    );
  };
  return (
    <div className="reports_container">
      {/* <TaxHeader partnerImageUrl={""} data={data} /> */}
      <TaxUserProfileOverView data={data} />
      {sections?.map((section, index) => renderSection(section, index))}
      {data?.definations && data?.definations.length && (
        <TaxDefinitions
          data={data?.definations}
          title={"Definitions of the Terms used in the Report."}
        />
      )}
    </div>
  );
};

export default AutomatedTaxReports;
