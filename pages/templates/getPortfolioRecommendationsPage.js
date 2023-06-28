import GetPortfolioRecommendations from "../../components/GetPortfolioRecommendations/getPortfolioRecommendations.jsx";
// import { portfolio_recommended } from "../../components/Reports/dummyData.js";
const GetPortfolioRecommendationsPage = ({ data }) => {
  //pass dummydata to test on browser else pass from pros for API usage
  return <GetPortfolioRecommendations data={data} />;
};

export default GetPortfolioRecommendationsPage;
