/* eslint-disable @next/next/no-img-element */
import UserProfileOverView from "./userProfileOverView";
import UserReportsSummary from "./userReportsSummary";
import ReportsDefinitions from "./reportsDefinitions";
import {
  consolidatedDefinationTableV2,
  getColumns,
  getTableData,
} from "./utils";

const GenerateReportV2 = ({ data }) => {
  const { sections } = data || {};
  const renderSection = (section, index) => {
    let columns = getColumns(section);
    let tableData = getTableData(section, index);

    return (
      <>
        <UserReportsSummary
          index={index}
          columns={columns}
          tableData={tableData}
          title={section.title}
          subTitle={section.subTitle}
          data={data}
        />
      </>
    );
  };
  return (
    <div className="reports_container">
      <UserProfileOverView data={data} />
      {sections?.map((section, index) => renderSection(section, index))}
      {data?.overview && (
        <ReportsDefinitions
          data={consolidatedDefinationTableV2}
          title={"Definitions of the Terms used in the Report."}
        />
      )}
    </div>
  );
};

export default GenerateReportV2;
