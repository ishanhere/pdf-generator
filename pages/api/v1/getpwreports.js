import puppeteer from "puppeteer";
import ReactDOMServer from "react-dom/server";
import { cwd } from "node:process";
import HeaderPWReport from "../../../components/Reports/PWReports/reportsHeaderPW";
import FooterPWReport from "../../../components/Reports/PWReports/reportsFooterPW";
import moment from "moment";
import GeneratePWReportPage from "../../templates/getPWReports";
import generateGraphHandler from "../utilsApi/generateGraph";
// import { dummyDataPW } from "../../../components/Reports/dummyData";
import getDonutGraphDataHandler from "../utilsApi/getDonutGraphData";
import getLineGraphDataHandler from "../utilsApi/getLineGraphData";
import { disclaimerTextNew } from "../../../components/Reports/utils";
const { Console } = require("console");
const fs = require("fs");

export default async function handler(req, res) {
  let browser = null;
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-dev-shm-usage"],
    });

    const page = await browser.newPage();

    let partnerImageUrl = req?.body?.partnerImageUrl
      ? await fetch(req?.body.partnerImageUrl)
          .then((r) => r.buffer())
          .then((buf) => `data:image/png;base64,` + buf.toString("base64"))
      : undefined;

    let donutGraphData = await getDonutGraphDataHandler(req.body);

    let lineGraphData = await getLineGraphDataHandler(req.body);

    let base64fromSVGDonut = await generateGraphHandler(donutGraphData.data);
    let base64fromSVGLine = await generateGraphHandler(lineGraphData.data);

    let html1 = ReactDOMServer.renderToString(
      <GeneratePWReportPage
        data={req?.body}
        base64fromSVG={base64fromSVGDonut.data}
        base64fromSVGLine={base64fromSVGLine.data}
      />
    );
    let header = ReactDOMServer.renderToString(
      <HeaderPWReport partnerImageUrl={partnerImageUrl} data={req.body} />
    );

    let footer = ReactDOMServer.renderToString(
      <FooterPWReport
        partnerImageUrl={partnerImageUrl}
        data={req.body}
        disclaimerText={disclaimerTextNew}
      />
    );

    await page.evaluateHandle("document.fonts.ready");

    await page.setContent(html1, {
      waitUntil: ["load", "domcontentloaded", "networkidle0", "networkidle2"],
    });
    await page.addStyleTag({
      path: `${cwd()}/node_modules/antd/dist/antd.css`,
    });
    await page.addStyleTag({
      path: `${cwd()}/styles/globals.css`,
    });
    await page.addStyleTag({
      path: `${cwd()}/styles/reports.css`,
    });

    await page.emulateMediaType("screen");
    const buffer = await page.pdf({
      preferCSSPageSize: true,
      printBackground: true,
      landscape: true,
      format: "A4",
      displayHeaderFooter: true,
      headerTemplate: header,
      footerTemplate: footer,
      margin: {
        bottom: 100,
        left: 20,
        right: 20,
        top: 120,
      },
    });
    await browser?.close();
    var encryptedBytes = Buffer.from(buffer).toString("base64");
    encryptedBytes.toString("base64");
    let base64Data = encryptedBytes;
    res.status(200).json({ data: base64Data });
  } catch (error) {
    await browser?.close();
    console.log(
      "/v1/pwreports-error",
      error,
      moment().format("YYYY-MM-DD HH:mm:ss")
    );
    res.status(500).json({ data: error });
  }
}
