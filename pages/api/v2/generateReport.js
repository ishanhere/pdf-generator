import puppeteer from "puppeteer";
import ReactDOMServer from "react-dom/server";
import { cwd } from "node:process";
import Header from "../../../components/Reports/reportsHeaderV2";
import Footer from "../../../components/Reports/reportsFooterV2";
import moment from "moment";
import GenerateReportPageV2 from "../../templates/generateReportV2";
import { disclaimerTextNew } from "../../../components/Reports/utils";

export default async function handler(req, res) {
  let browser = null;
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-dev-shm-usage"],
    });

    const page = await browser.newPage();

    let partnerImageUrl = req?.body?.partnerImageUrl
      ? await fetch(req?.body?.partnerImageUrl)
          .then((r) => r.buffer())
          .then((buf) => `data:image/png;base64,` + buf.toString("base64"))
      : undefined;
    let html1 = ReactDOMServer.renderToString(
      <GenerateReportPageV2 data={req.body} />
    );
    let header = ReactDOMServer.renderToString(
      <Header
        partnerImageUrl={partnerImageUrl}
        data={req.body}
        periodText={`Period : ${req?.body?.period}`}
      />
    );
    let footer = ReactDOMServer.renderToString(
      <Footer
        displayText={`${req?.body?.name} | ${req?.body?.kristalId}`}
        disclaimerText={disclaimerTextNew}
        periodText={`Generated on: ${moment().format("ddd, DD MMM YYYY")}`}
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
        bottom: 120,
        left: 20,
        right: 20,
        top: 140,
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
      "/v2/reports-error",
      error,
      moment().format("YYYY-MM-DD HH:mm:ss")
    );
    res.status(500).json({ data: error });
  }
}
