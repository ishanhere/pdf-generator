// const { Console } = require("console");
// const fs = require("fs");
// import { cwd } from "node:process";
import moment from "moment";

export default async function getLineGraphDataHandler(requestBody, res) {
  return new Promise((resolve, reject) => {
    try {
      const chartDetails = {
        b64: true,
        options: {
          chart: {
            type: "areaspline",
            style: {
              fontFamily: "arial",
            },
          },
          title: {
            text: "",
          },
          xAxis: {
            categories: requestBody.overview[2].tableHeaders?.map((item) => {
              return moment.unix(item / 1000).format("MMM-YYYY");
            }),
            title: {
              text: "",
            },
          },
          yAxis: {
            title: {
              text: "",
            },
            labels: {
              format: "{value:.2f}%",
            },
          },
          credits: {
            enabled: false,
          },
          plotOptions: {
            series: {
              showInLegend: false,
              color: "#3761C8",
              fillColor: {
                linearGradient: [0, 0, 0, 300],
                stops: [
                  [0, "#3761C8"],
                  [2, `rgb(221,228,226)`],
                  [3, `rgb(243,245,253)`],
                  [4, `rgb(255,255,255)`],
                ],
              },
            },
            areaspline: {
              fillOpacity: 0.2,
            },
          },
          series: [
            {
              data:
                requestBody.overview &&
                requestBody.overview[2].data[0].map((item) => {
                  return item?.valueList && item?.valueList[0]?.value
                    ? (parseFloat(item?.valueList[0]?.value) * 100).toFixed(1) *
                        1
                    : 0;
                }),
            },
          ],
        },
      };
      // const myLogger = new Console({
      //   stdout: fs.createWriteStream(`${cwd()}/chartDetailsline.json`),
      // });
      // myLogger.log(JSON.stringify(chartDetails));
      resolve({ data: JSON.stringify(chartDetails) });
    } catch (err) {
      reject(err);
    }
  });
}
