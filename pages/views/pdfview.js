import { Skeleton } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
// import {
//   dummyData,
//   dummyDataPW,
//   exportKristalInAccountPdf,
//   welcomeletterData,
//   feesv2,
//   portfolio_recommended,
//   myinfo,
//   dummyData1,
//   new_tax_data_dummy,
//   portfolio_recommended_2,
// } from "../../components/Reports/dummyData";

// ------follow this for dev------
let body = {};
// body = portfolio_recommended_2 || {};

const getV3Reports = () => {
  return axios.post(
    "http://localhost:3000/api/v1/getPortfolioRecommendations",
    body
  );
};

const Reports = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!data) {
      getV3Reports().then(({ data }) => setData(data.data));
    }
  }, [data]);

  return (
    <div>
      {data ? (
        <object
          data={`data:application/pdf;base64,${data}`}
          width="100%"
          height="1000px"
        />
      ) : (
        <Skeleton />
      )}
    </div>
  );
};

export default Reports;
