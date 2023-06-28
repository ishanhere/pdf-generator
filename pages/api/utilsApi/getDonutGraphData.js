import { graphColors } from "../../../components/Reports/utils";
// const { Console } = require("console");
// const fs = require("fs");
// import { cwd } from "node:process";

export default async function getDonutGraphDataHandler(requestBody, res) {
  return new Promise((resolve, reject) => {
    try {
      const chartDetails = {
        b64: true,
        options: {
          chart: {
            type: "pie",
            style: {
              fontFamily: "Arial",
            },
          },
          title: {
            text: "",
          },
          credits: { enabled: false },
          plotOptions: {
            pie: {
              shadow: false,
              center: ["50%", "50%"],
            },
          },
          series: [
            {
              data:
                requestBody.overview &&
                requestBody.overview[1].tableHeaders?.map((sector, index) => {
                  let temp = requestBody.overview[1].data[0]?.find(
                    (item) =>
                      item?.valueList && item?.valueList[0]?.key == sector
                  );
                  let temp1 =
                    (parseFloat(temp?.valueList[0]?.value) * 100).toFixed(1) *
                    1;
                  return {
                    name: `<div style="font-size:14px;color:#1F1F1F;font-family:Arial;font-weight:700;">${sector}</div><br /><div style="margin-top:5px;font-weight:700;font-size:16px;color:#1F1F1F;font-family:Arial;">${temp1}%</div>`,
                    y: temp1,
                    color: graphColors[index % graphColors.length],
                  };
                }),
              size: "80%",
              innerSize: "60%",
            },
          ],
        },
      };
      // const myLogger = new Console({
      //   stdout: fs.createWriteStream(`${cwd()}/chartDetailsdd.json`),
      // });
      // myLogger.log(JSON.stringify(chartDetails));
      resolve({ data: JSON.stringify(chartDetails) });
    } catch (err) {
      reject(err);
    }
  });
}
