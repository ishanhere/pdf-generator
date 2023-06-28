import puppeteer from "puppeteer";
import ReactDOMServer from "react-dom/server";
import { cwd } from "node:process";
import Header from "../../../components/Reports/reportsHeader.jsx";
import Report from "../../templates/generateReport.js";
import moment from "moment";

export default async function handler(req, res) {
  //console.log("/reports", moment().format("YYYY-MM-DD HH:mm:ss"));
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
    let html = ReactDOMServer.renderToString(<Report data={req.body} />);
    let header = ReactDOMServer.renderToString(
      <Header partnerImageUrl={partnerImageUrl} />
    );

    await page.setContent(html);
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
      landscape: false,
      format: "A4",
      displayHeaderFooter: true,
      headerTemplate: header,
      footerTemplate: `<span></span>`,
      margin: {
        bottom: 35, // minimum required for footer msg to display
        left: 15,
        right: 15,
        top: 80,
      },
    });
    await browser.close();

    var encryptedBytes = Buffer.from(buffer).toString("base64");
    encryptedBytes.toString("base64");
    let base64Data = encryptedBytes;
    res.status(200).json({ data: base64Data });
  } catch (error) {
    console.log("reports-error", error, moment().format("YYYY-MM-DD HH:mm:ss"));
    await browser.close();
    res.status(500).json({ data: error });
  }
}