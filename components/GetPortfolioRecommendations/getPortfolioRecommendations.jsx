/* eslint-disable @next/next/no-img-element */
import UserProfileOverView from "./getPortfolioRecommendationsOverView";
import UserReportsSummaryPW from "../Reports/PWReports/userReportsSummaryPW";
import { getColumns, getTableData } from "../Reports/utils";
const GetPortfolioRecommendations = ({ data }) => {
  const { sections } = data || {};

  const renderSection = (section, index) => {
    let columns = getColumns(section);
    let tableData = getTableData(section, index);

    return (
      <>
        <UserReportsSummaryPW
          key={index}
          columns={columns}
          tableData={tableData}
          title={section.title}
          subTitle={section.subTitle}
          data={data}
          extraInfo={`<span style="font-size:22px">${section?.recommendedAmount}</span>`}
        />
      </>
    );
  };
  return (
    <div className="reports_container">
      {/* <Header partnerImageUrl="" data={data} periodText={data?.period} /> */}
      <UserProfileOverView data={data} />
      {sections?.map((section, index) => renderSection(section, index))}
    </div>
  );
};

export default GetPortfolioRecommendations;
